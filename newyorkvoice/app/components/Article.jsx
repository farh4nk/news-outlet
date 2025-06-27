import React from 'react'
import Link from 'next/link'

const Article = ({imageUrl, headline, body, id}) => {
    const previewText = body.length > 150 ? body.slice(0, 150).trim() + "..." : body
  return (
    <article className="border-b border-gray-300 pb-6 mb-6">
        <Link href={`/articles/${id}`}>
      {/* Headline */}
      <h2 className="text-xl font-bold mb-3">{headline}</h2>
      </Link>

      {/* Key Image or Placeholder */}
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center mb-3">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={headline}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-gray-700">Image Placeholder</span>
        )}
      </div>

      {/* Preview */}
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        {previewText}
      </p>

      {/* Read More */}
      <Link
        href={`/articles/${id}`}
        className="text-right block text-sm italic text-gray-800 hover:text-black"
      >
        Read More &gt;
      </Link>
    </article>
  )
}

export default Article