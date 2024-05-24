import React from 'react'
import './styles.sass';

const InfoLanguageGenre = ({info}) => {
  return (
    <div className='InfoLanguageGenre'>
        <h3 className='InfoLanguageGenre__title'>{info.name}</h3>
    </div>
  )
}

export default InfoLanguageGenre