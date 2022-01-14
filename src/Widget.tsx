import * as React from 'react'
import * as ReactDOM from 'react-dom';
import './Widget.css';

function Widget(props:any) {
  return (
    <div className="widget">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Widget;
