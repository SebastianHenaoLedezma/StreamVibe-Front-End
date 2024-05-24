import React from 'react'

const DescriptionMovie = (props) => {
  return (
    <div className="">
      <section className='text-center -translate-y-36'>
        <h2 className='text-2xl font-bold'>{props.title}</h2>
        <p className='text-sm lg md:flex hidden'>{props.desc}</p>
      </section>
    </div>
  )
}

export default DescriptionMovie