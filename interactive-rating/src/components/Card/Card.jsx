import { useState } from 'react'
import { Rating } from '../Rating/Rating'
import './Card.css'
import { Thanks } from '../Thanks/Thanks';

export function Card() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <div className="card">
      {!submit === true ? <Rating setSubmit={setSubmit} setRating={setRating} rating={rating} options={[1, 2, 3, 4, 5]} /> : <Thanks rating={rating} />}
    </div>
  )
};