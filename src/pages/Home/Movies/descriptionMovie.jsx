import React from 'react'

const DescriptionMovie = ({desc, title}) => {
  return (
    <div className="">
      <section className='text-center -translate-y-36'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-sm lg md:flex hidden justify-center'>{desc}</p>
      </section>
    </div>
  )
}

export default DescriptionMovie