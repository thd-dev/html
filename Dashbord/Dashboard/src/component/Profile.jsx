import React from 'react'
import UserChart from './User.chart'
import ProjectChart from './Project.chart'
import Table from './Table'

export const Card = ({ children }) => {
  return (
    <div className='p-3 rounded-xl cursor-pointer min-w-48s border-slate-950 border bg-pink-300 bg-opacity-10 backdrop-blur-md max-w-72 shadow-inner-glow'>
      {children}
    </div>
  )
}

const Profile = () => {
  return (
    <div className='px-8 w-full bg-slate-300 overflow-auto'>

      <header className='flex flex-col md:flex-row-reverse items-center md:items-end md:justify-start gap-2 py-6 w-full'>
        <div className="flex justify-center items-center overflow-hidden bg-slate-400 h-28 w-28 rounded-xl">
          <img
            src='/assets/avatar.jpg'
            alt="User's Avatar"
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex flex-col pb-4'>
          <h2 className='text-center md:text-end font-bold text-xl font-mono text-slate-900'>Deepali</h2>
          <h3 className='text-center md:text-end font-medium font-mono text-slate-600'>Frontend Developer</h3>
        </div>
      </header>

      <section className='w-full lg:py-20'>
        <section className='flex flex-col sm:flex-row md:flex-wrap items-center justify-evenly md:justify-start gap-x-2 lg:gap-8 gap-y-4 backdrop-blur-md'>
          <Card>
            <div
              className='flex flex-col gap-4'
            >
              <h3 className='text-slate-900 font-bold font-mono text-5xl border-b border-slate-900  pr-10'>{Math.floor(Math.random() * 100)}K+</h3>
              <h2 className='text-zinc-500 text-lg'>Active User</h2>
            </div>
          </Card>
          <Card>
            <div
              className='flex flex-col gap-4'
            >
              <h3 className='text-slate-900 font-bold font-mono text-5xl border-b border-slate-900  pr-10'>{Math.floor((Math.random() * 10) + 1)}00+</h3>
              <h2 className='text-zinc-500 text-lg'>Projects</h2>
            </div>
          </Card>
          <Card>
            <div
              className='flex flex-col gap-4'
            >
              <h3 className='text-slate-900 font-bold font-mono text-5xl border-b border-slate-900  pr-10'>₹{Math.floor(Math.random() * 100)}M+</h3>
              <h2 className='text-zinc-500 text-lg'>Revenue</h2>
            </div>
          </Card>
        </section>

        <section className='flex w-full gap-y-10 xl:gap-10 py-20 flex-col lg:flex-row lg:gap-x-4 '>
          <div className='w-3/4 lg:w-1/2 flex justify-center items-center'>
            <UserChart />
          </div>
          <div className='w-3/4 lg:w-1/2 flex justify-center items-center'>
            <ProjectChart />
          </div>
        </section>

        <section className='w-full flex justify-center items-center py-10 bg-slate-600'>
          <Table />
        </section>

      </section>

    </div>
  )
}

export default Profile
