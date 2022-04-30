import React, { useState } from 'react'
import './StarRating.scss'

interface IStarRatingProps {
  isReadOnly?: boolean
  symbol?: RatingControlSymbol
  rating: number
}

export enum RatingControlSymbol {
  Star,
  Circle,
}

const Rating = (props: IStarRatingProps) => {
  const ratingValue = props.isReadOnly ? props.rating : 0

  const [rating, setRating] = useState(ratingValue)
  const [hover, setHover] = useState(0)

  let symbol = <StarRating />
  if (props.symbol == RatingControlSymbol.Circle) symbol = <CircleRating />

  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type="button"
            disabled={props.isReadOnly}
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {symbol}
          </button>
        )
      })}
    </div>
  )
}

const StarRating = () => <span className="rate-icon">&#9733;</span>

const CircleRating = () => <span className="rate-icon">&#9673;</span>

export default Rating
