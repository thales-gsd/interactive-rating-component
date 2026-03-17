import { useState } from 'react';
import './RatingForm.css'
import { RatingFormRadioInput } from './components/RatingFormRadioInput/RatingFormRadioInput';
import { RatingFormError } from './components/RatingFormError/RatingFormError';

export function RatingForm({ setSubmit, setRating, rating, options }) {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating) {
        setError(true);
    } else {
        setSubmit(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="options-conteiner">
        {options.map((op) => (
          <RatingFormRadioInput
            key={op}
            value={op}
            selectedValue={rating}
            onChange={(value) => {
                setRating(value);
                setError(false);
            }}
          />
        ))}
      </div>

      {error && <RatingFormError />}

      <button type="submit">SUBMIT</button>
    </form>
  )
};