import React, { useState } from 'react';
import './Like.css';

function Like() {
  const [like, setLike] = useState(0);
  return (
    <div className='like-container'>
        <input
            id = "thumb-down-btn" 
            className='class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"'
            type="button"
            value= "👎"
            onClick={() => setLike(like - 1)}
        />
        <h1>{like}</h1>
        <input
            id = "thumb-up-btn" 
            className='class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"'
            type="button"
            value= "👍"
            onClick={() => setLike(like +1)}
        />
    </div>
  )
}

export default Like;
