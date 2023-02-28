import React from 'react';
import data from '../metal.json';
import './MetalMeta.css';

function MetalMeta() {

  return (
    <div className='metalmeta-container'>
        <ul>
            <li className='text-3xl font-thin'>Metal Bands 🤘</li>
            <li className='text-3xl font-thin'>Bands: {data.length}</li>
        </ul>
    </div>    
  )
}

export default MetalMeta;
