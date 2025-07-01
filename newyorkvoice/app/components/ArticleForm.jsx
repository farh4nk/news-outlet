'use client'
import React from 'react'
import { useState } from 'react'
import { supabase } from '@/lib/client'
import { useRouter } from 'next/navigation'

const ArticleForm = () => {
    const [headline, setHeadline] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()

    const addArticle = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { data, error } = await supabase
        .from('Articles').insert([
            {
                headline, image_url: imageUrl, body
            }
        ])

        setLoading(false)

        if (error) {
            console.error(error)
            setError('Failed to publish article.')
        }
        else {
            router.push('/')
        }
    }
  return (
    <form onSubmit={addArticle} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Headline</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Image URL (optional)</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={10}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded font-semibold"
        disabled={loading}
      >
        {loading ? 'Posting...' : 'Post Article'}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}

export default ArticleForm