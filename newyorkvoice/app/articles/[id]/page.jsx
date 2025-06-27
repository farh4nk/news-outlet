import React from 'react'
import { supabase } from '@/lib/client'
import Link from 'next/link'

const ArticlePage = async ( {params }) => {
    const {id} = params

    const {data: article, error}  = await supabase
    .from("Articles")
    .select()
    .eq('id', id)
    .single()

    if (error) {
        console.error(error)
        return (
            <div className='p-6 text-red-500'>Article not Found</div>
        )
    }
    

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-sm text-blue-500 underline mb-4 block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{article.headline}</h1>

      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.headline}
          className="w-full h-auto mb-6"
        />
      )}

      <div className="text-gray-800 leading-relaxed text-lg whitespace-pre-line">
        {article.body}
      </div>
    </main>
  )
}

export default ArticlePage