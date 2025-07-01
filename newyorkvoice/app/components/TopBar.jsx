'use client'
import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

const TopBar = () => {
  return (
    <header className="bg-green-600 px-6 py-3 border-b-4 border-black">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-6 pl-4">
          <button className="text-black text-2xl">
            <FaBars />
          </button>
          <button className="bg-black text-white px-3 py-1 text-sm font-semibold">
            LOGIN
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            LOGO
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 pr-4">
          <FaSearch className="text-black" />
          <input
            type="text"
            placeholder="SEARCH"
            className="border border-black px-3 py-1 text-black placeholder-black bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </header>
  )
}

export default TopBar