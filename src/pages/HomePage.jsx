import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import ExpenseCard from '../components/ExpenseCard'
import { Link } from 'react-router-dom'

function HomePage () {
  const expenseList = useSelector(state => state.expense.expenseList)
  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 h-screen flex gap-5 p-5 flex-wrap grow'>
        {expenseList.length <= 0 ? (
          <div className='h-screen flex flex-col items-center gap-5 justify-center w-full'>
            <h1 className='text-2xl font-bold '>Expense List is Empty</h1>
            <Link
              to={'add'}
              className='bg-blue-500 px-3 py-2 rounded font-bold text-white active:scale-97'
            >
              Plz Add Expense
            </Link>
          </div>
        ) : (
          <>
            {expenseList.map(expanseDetails => {
              return (
                <ExpenseCard
                  key={expanseDetails.id}
                  expanseDetails={expanseDetails}
                />
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default HomePage
