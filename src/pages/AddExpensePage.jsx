import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../redux/features/expense/expenseListSlice'
import { useNavigate } from 'react-router-dom'

function AddExpensePage () {
  const initializeExpenseDetails = {
    title: '',
    amount: '',
    date: '',
    description: ''
  }
  const [expensesDetails, setExpenseDetails] = useState(
    initializeExpenseDetails
  )

  const handleInputChange = e => {
    const name = e.target.name
    const value = e.target.value
    setExpenseDetails(prevState => ({ ...prevState, [name]: value }))
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleExpenseSubmitform = e => {
    e.preventDefault()

    const expensePayload = {
      id: crypto.randomUUID(),
      ...expensesDetails
    }
    dispatch(addExpense({ expensePayload }))

    setExpenseDetails(initializeExpenseDetails)

    setTimeout(() => {
      navigate('/')
    }, 500)
  }

  return (
    <form onSubmit={handleExpenseSubmitform}>
      <div className='flex flex-col  justify-center items-center h-screen bg-gray-200'>
        <div className='border-2 flex flex-col gap-4 w-150 border-slate-400 p-5 rounded-xl bg-gray-100 inset-shadow-sm inset-shadow-indigo-500/50'>
          <h1 className='text-center font-bold text-gray-500 text-2xl mb-10'>
            Expense Details Form
          </h1>
          <div className='flex flex-col  '>
            <label className='font-medium ' htmlFor='Title'>
              Title:
            </label>
            <input
              className='outline-none border-2 border-slate-300 rounded px-3 h-9 text-gray-800 capitalize'
              type='text'
              name='title'
              onChange={handleInputChange}
              value={expensesDetails.title}
              placeholder='Enter todo Title'
              required
            />
          </div>
          <div className='flex flex-col '>
            <label className='font-medium ' htmlFor='amount'>
              Amount:
            </label>
            <input
              className='outline-none border-2 h-9 border-slate-300 rounded px-3 text-gray-800 '
              type='text'
              name='amount'
              onChange={handleInputChange}
              value={expensesDetails.amount}
              placeholder='Enter your amount'
              required
            />
          </div>
          <div className='flex flex-col '>
            <label className='font-medium' htmlFor='date'>
              Date:
            </label>
            <input
              className='outline-none border-2 h-9 border-slate-300 rounded px-3 text-gray-800 '
              type='datetime-local'
              name='date'
              onChange={handleInputChange}
              value={expensesDetails.date}
              required
            />
          </div>
          <div className='flex flex-col gap-2  '>
            <label className='font-medium ' htmlFor='description'>
              Expense Description
            </label>
            <textarea
              className='outline-none border-2 h-25 border-slate-300 rounded px-2 py-1 text-gray-800 '
              id='description'
              name='description'
              value={expensesDetails.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='bg-violet-600 p-2 text-white font-bold rounded cursor-pointer active:scale-95'
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default AddExpensePage
