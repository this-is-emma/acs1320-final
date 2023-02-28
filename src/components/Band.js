import React from 'react';
import Like from './Like';
import './Band.css';

function Band(props) {
  const { band_name, formed, origin, fans, split, style } = props;
  return (
    <div className='single-band-container'>
      <ul>
        <li className="text-3xl font-thin">{props.band_name}</li>
        <li>{props.origin}</li>
        <li>Fans: {props.fans}</li>
        <li>Formed: {props.formed}</li>
        <li>Split: {props.split}</li>
        <li>{props.style}</li>
      </ul>
      <div className='like-count'>
      {props.split === '-' ? null : <Like />}
      </div>
    </div>
  );
}

export default Band;
