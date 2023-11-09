import React from 'react'

export  const Card = (props) => {
  return (
    <div className="card">
            <img src={`../images/${props.img}`} className="card__image" />
            <div className="card__stats">
                <img src="../images/star.png" className="card__star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className='card__title'>{props.title}</p>
            <p className='card__price'><span className="bold">From ${props.price}</span> / person</p>
        </div>
  )
}
