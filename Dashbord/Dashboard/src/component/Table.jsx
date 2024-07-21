import React, { useState } from 'react'


const Table = () => {
  const [heading, setHeading] = useState([
    {
      id: 1,
      head: 'Project Name',
      isvisibleInSmall: true,
    },
    {
      id: 2,
      head: 'Status',
      isvisibleInSmall: true,
    },
    {
      id: 3,
      head: 'Start Date',
      isvisibleInSmall: false,
    },
    {
      id: 4,
      head: 'End Date',
      isvisibleInSmall: false,
    },
  ]);

  const projects = [
    {
        name: 'Tech Innovators Inc. Project',
        status: 'not started',
        startDate: '2024-01-15',
        endDate: '2024-03-15',
        description: 'Tech Innovators Inc. needs a new customer portal with enhanced security features.'
    },
    {
        name: 'Green Solutions Ltd. Project',
        status: 'working on',
        startDate: '2024-03-20',
        endDate: '2024-06-20',
        description: 'Green Solutions Ltd. is developing an environmental impact tracking dashboard.'
    },
    {
        name: 'HealthSync Co. Project',
        status: 'completed',
        startDate: '2024-05-01',
        endDate: '2024-08-01',
        description: 'HealthSync Co. required a full stack application for managing patient records.'
    },
    {
        name: 'EduFuture Corp. Project',
        status: 'not started',
        startDate: '2024-07-10',
        endDate: '2024-09-10',
        description: 'EduFuture Corp. is planning to launch an online learning platform with interactive features.'
    },
    {
        name: 'Urban Dev Solutions Project',
        status: 'working on',
        startDate: '2024-10-05',
        endDate: '2024-12-05',
        description: 'Urban Dev Solutions is currently working on a smart city management system.'
    }
];


  console.log(heading)
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 justify-between w-full'>
      {
        heading.map((items, index) => (
          <div
            key={items.id}
            className={`px-3 w-full py-1 border border-r-0 text-center border-slate-50 border-collapse ${index === 0 ? 'border-l-0' : ''} ${items.isvisibleInSmall ? '' : 'hidden sm:block'}`}
          >{items.head}</div>
        ))
      }
    </div>
  )
}

export default Table
