import React from 'react'
import { Edit, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { deleteExpense } from '../redux/features/expense/expenseListSlice'
import { Link } from 'react-router-dom'

function ExpenseCard ({ expanseDetails }) {
  const { id, title, description, date, amount } = expanseDetails

  const dispatch = useDispatch()
  const handleDeleteExpense = expenseId => {
    const isActionConfirmed = confirm('Do you want to delete it')

    if (!isActionConfirmed) return

    dispatch(deleteExpense({ id: expenseId }))
  }

  return (
    <div>
      <div className='bg-blue-950 text-white p-3 w-80 rounded shadow-2xl'>
        <div>
          <h1 className='font-bold text-2xl capitalize'>{title} </h1>
          <h2>
            Amount: <span className='font-bold '>₹:{amount}</span>
          </h2>
          <span>
            Date: <span>{new Date(date).toLocaleDateString('en-IN')}</span>
          </span>
          <p className='capitalize'>
            {description.lenght >= 0 ? 'Description not added' : description}
          </p>
          <div className='flex justify-between px-7 mt-3'>
            <Link
              to={`/edit/${id}`}
              className='flex flex-row items-center bg-green-700 py-2 px-3 font-bold rounded active:scale-97 cursor-pointer'
            >
              <Edit />
              Edit
            </Link>
            <button
              onClick={() => handleDeleteExpense(id)}
              className='flex flex-row items-center bg-red-700 py-2 px-3 font-bold rounded active:scale-97 cursor-pointer'
            >
              <Trash2 />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseCard
