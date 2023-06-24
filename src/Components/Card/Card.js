import './Card.css'
const Card = ({ title, info, stack, image, setShowcase }) => {
    return (
      <div className='card' onClick={() => setShowcase(image)}>
        <h3>{title}</h3>
        <p>{info}</p>
        <p>{stack}</p>
      </div>
    )
  }

  export default Card;