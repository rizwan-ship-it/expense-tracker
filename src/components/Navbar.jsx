import React from 'react'
import { Moon, Star } from 'lucide-react'
import { Link, Links } from 'react-router-dom'

function Navbar () {
  return (
    <div>
      <div className='bg-violet-700 flex justify-between p-4'>
        <div className='text-white '>
          <h1 className='font-bold text-3xl'>Welcome to Expense Tracker </h1>
          <h2 className='font-medium'>
            Track and manage your expenses effectively
          </h2>
        </div>
        <div className='flex gap-5'>
          <Link
            to={'/add'}
            className='bg-cyan-500 font-bold text-white flex items-center px-3 rounded cursor-pointer active:scale-97 '
          >
            Add Expenses
          </Link>
          <button className='text-white cursor-pointer'>
            <Moon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
