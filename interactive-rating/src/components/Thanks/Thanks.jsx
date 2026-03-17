import './Thanks.css'
import { ThanksBadge } from './components/ThanksBadge/ThanksBadge'
import { ThanksImg } from './components/ThanksImg/ThanksImg'
import { ThanksText } from './components/ThanksText/ThanksText'

export function Thanks({ rating }) {
  return (
    <div className="thanks-container">
      <ThanksImg />
      <ThanksBadge rating={rating} />
      <ThanksText />
    </div>
  )
};