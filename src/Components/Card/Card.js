const Card = ({ title, info, stack }) => {
    return (
      <div className='card'>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    )
  }