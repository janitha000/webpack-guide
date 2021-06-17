import component from "./component";
import imageComponent from './imageComponent'
import './style.css'

import 'react'
import 'react-dom'

document.body.appendChild(component())

console.log('Is production ' + PRODUCTION)