import React from 'react'

const NewReleases = (props) => {
  console.log(props.release)
  return (
    <div className=' border-solid border bg-neutral-800 border-neutral-700 rounded-lg p-4'>
      <div className="grid grid-cols-1 gap-2">
        <img src={props.release.img} alt='img' className="rounded-md" />
      </div>
      <div className='bg-neutral-900 mt-4 rounded-xl px-2 py-1 text-xs'>Released at {props.release.date}</div>
    </div>
  )
}

export default NewReleases