import React from 'react'
import '../Styles/Button.css'
const Button = ({size, variant, onClick,label}) =>{
    return(<button className={`btn ${size} ${variant}`} onClick={onClick}>{label}</button>)
}

export default Button;
