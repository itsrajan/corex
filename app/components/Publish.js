import React from 'react';
import Iframe from 'react-iframe';
import './components.css';

function Publish () {
  return (
    <div>
    <article>
      <Iframe url="https://crud.rajnagrwl.repl.co/"
        id="myId"
        className="crud"
        position="fixed"/>
        
    </article>
    </div>
  )
}

export default Publish 
