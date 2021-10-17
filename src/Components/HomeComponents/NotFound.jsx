import React from 'react'
import '../../styleCss/notFound.css'
// import { notfound } from '../../img/notfound.png'
import error from '../../img/notfound.png'

export default function NotFound() {
  return (
    <div className="notFound">
        <img alt='notfound' src={error}></img>
    </div>
  );
}


