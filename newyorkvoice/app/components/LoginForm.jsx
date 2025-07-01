'use client'
import React, { useState } from 'react'
import { login, signup } from '../login/actions'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <form onSubmit={login} className="space-y-4">
        <label htmlFor="email">Email:</label>
        <input
        id='email'
        name='email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full border p-2"
        />
        <label htmlFor="password">Password:</label>
        <input
        id='password'
        name='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full border p-2"
        />
        <div className="flex justify-between">
        <button formAction={login} className="bg-black text-white px-4 py-2 rounded">
          Log In
        </button>
        <button formAction={signup} className="bg-black text-white px-4 py-2 rounded">
          Sign Up
        </button>
        </div>
      </form>
  )
}

export default LoginForm