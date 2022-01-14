import * as React from 'react'
import * as ReactDOM from 'react-dom';
import './Banner.css';

function Banner(props:any) {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Banner;
