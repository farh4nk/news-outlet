import React from 'react'

const Article = (imageUrl, headline, previewText, link) => {
  return (
    <article className="border-b border-gray-300 pb-6 mb-6">
      {/* Headline */}
      <h2 className="text-xl font-bold mb-3">{headline}</h2>

      {/* Key Image or Placeholder */}
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center mb-3">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={headline}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-gray-600">Image Placeholder</span>
        )}
      </div>

      {/* Preview */}
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        {previewText}
      </p>

      {/* Read More */}
      <a
        href={link}
        className="text-right block text-sm italic text-gray-800 hover:text-black"
      >
        Read More &gt;
      </a>
    </article>
  )
}

export default Article