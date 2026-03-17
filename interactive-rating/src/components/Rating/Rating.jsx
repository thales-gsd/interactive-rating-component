import { RatingContent } from './components/RatingContent/RatingContent'
import { RatingForm } from './components/RatingForm/RatingForm'
import { RatingIcon } from './components/RatingIcon/RatingIcon'
import './Rating.css'

export function Rating({ setSubmit, setRating, rating, options }) {
  return (
    <div className="rating">
      <RatingIcon />
      <RatingContent />
      <RatingForm setSubmit={setSubmit} setRating={setRating} rating={rating} options={options} />
    </div>
  )
};