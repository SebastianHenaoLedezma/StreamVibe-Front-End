const MovieHeader = ({img}) => {
  return (

    <div className="h-full">
      <div className="h-full max-h-full">
        <img src={img} alt="Logo" className="h-full max-h-full"/>
      </div>
    </div>
  )
}

export default MovieHeader