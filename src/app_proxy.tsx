import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {useState, useEffect}  from 'react';

function ProxyApp() {
  const [quotes, setQuotes] = useState([]);

  let onButtonClick = () => {
    console.log("Fetching data via proxy...");
    // proxy is configured in webpack.config.js devServer.proxy
    fetch("api/v1/quotes").then(res => res.json()).then(data => {
      console.log("Got data ", data);
      setQuotes(data);
    });
  };
  
  return (
    <div>
      <h1>Proxy App</h1>
      <p>Fetch data via proxy api configured in webserver devServer.proxy</p>
      <button onClick={onButtonClick} >Fetch Data</button>
      {
        quotes.map((item, index) => <div>{item.content}</div>)
      }
    </div>    
  )
}

ReactDOM.render(<ProxyApp/>, document.getElementById('root'));