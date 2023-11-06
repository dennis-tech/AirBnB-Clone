import React from 'react'

export  const Card = () => {
  return (
    <div className="card">
            <img src="../images/katie-zaferes.png" className="card__image" />
            <div className="card__stats">
                <img src="../images/star.png" className="card__star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
  )
}
