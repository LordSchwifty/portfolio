import './Card.css'
const Card = ({ title, info, stack }) => {
    return (
      <div className='card'>
        <h3>{title}</h3>
        <p>{info}</p>
        <p>{stack}</p>
      </div>
    )
  }

  export default Card;