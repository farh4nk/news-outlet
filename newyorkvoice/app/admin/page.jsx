'use client'
import React from 'react'
import ArticleForm from '../components/ArticleForm'

const AdminPage = () => {
    
  return (
    <main className='max-w-2xl mx-auto p-6'>
        <h1 className="text-2xl font-bold mb-4">Publish New Article</h1>
        <ArticleForm />
    </main>
  )
}

export default AdminPage