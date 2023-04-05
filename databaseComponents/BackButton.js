import React from 'react';
import { useNavigate } from 'react-router-dom'; // For using url

const BackButton = () => {
  let navigate = useNavigate();

  return (
    <div>
      <button id="bva" className='btnViewAll' onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default BackButton