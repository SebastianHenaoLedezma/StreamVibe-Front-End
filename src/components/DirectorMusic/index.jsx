import React from 'react'
import './styles.sass'

const CardDirecMusic = ({ info }) => {
  return (
    <div className='CardDirecMusic'>
        <img className='CardDirecMusic__image' src={info.photo_url} alt='' />
        <h3 className='CardDirecMusic__name'>{info.name}</h3>
    </div>
  )
}

export default CardDirecMusic