import './RatingFormRadioInput.css'

export function RatingFormRadioInput({ value, selectedValue, onChange }) {
  const isChecked = String(value) === String(selectedValue);

  return (
    <label className={`radio-label ${isChecked ? 'active' : ''}`}>
      <p>{value}</p>
      <input
        type="radio"
        name="rating"
        value={value}
        checked={isChecked}
        onChange={(e) => onChange(e.target.value)}
        className='radio-input'
      />
    </label>
  )
};