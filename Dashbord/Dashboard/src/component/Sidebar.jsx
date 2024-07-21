import React, { useState } from 'react'

const Sidebar = () => {
  const dashboardItems = [
    {
      id: 'dashboard',
      text: 'Dashboard',
    },
    {
      id: 'projects',
      text: 'Projects',
    },
    {
      id: 'users',
      text: 'Users',
    },
    {
      id: 'setting',
      text: 'Setting',
    },
    {
      id: 'reports',
      text: 'Reports',
    },
  ]
  const [active, setActive] = useState('dashboard');

  const handleActive = (id) => {
    setActive(id)
  }

  return (
    <div className='h-full hidden md:flex min-w-40 justify-center flex-col bg-slate-950 text-slate-100 w-1/5 text-lg'>
      {
        dashboardItems.map((items) => (
          <div
            key={items.id}
            className={`flex cursor-pointer justify-end ${active === items['id'] ? 'bg-slate-300 text-slate-950' : 'bg-transparent hover:bg-slate-300 hover:bg-opacity-10 hover:border-l  border-slate-300'}`}
            id={items.id}
            onClick={() => handleActive(items.id)}
          >
            <p className='px-8 py-4 text-right w-full h-full transition-all hover:translate-x-2'>{items.text}</p>
          </div>
        ))
      }

    </div>
  )
}

export default Sidebar
