import './Card.css'

const Card = ({ title, info, stack, image, setShowcase, github, deployed }) => {
    return (
      <div className='card' onClick={() => setShowcase([image, github, deployed])}>
        <h3>{title}</h3>
        <p>{info}</p>
        <p>{stack}</p>
      </div>
    )
  }

  export default Card;