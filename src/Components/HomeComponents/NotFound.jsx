//react
import React from 'react'
//comp
import '../../styleCss/notFound.css'
//img
import error from '../../img/notfound.png'

export default function NotFound() {
  return (
    <div className="notFound">
        <img alt='notfound' src={error}></img>
    </div>
  );
}


