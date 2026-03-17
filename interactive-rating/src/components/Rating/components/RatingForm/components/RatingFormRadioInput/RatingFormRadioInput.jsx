import './RatingFormRadioInput.css'

export function RatingFormRadioInput({ value, selectedValue, onChange }) {
  const isChecked = String(value) === String(selectedValue);

  return (
    <label className={`rating ${isChecked ? 'active' : ''}`}>
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