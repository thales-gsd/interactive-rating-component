import './ThanksBadge.css'

export function ThanksBadge({ rating }) {
  return (
    <div className="badge">
      <p>You selected {rating} out of 5</p>
    </div>
  )
};