import React from 'react'

interface ButtonProps {
    height: string;
    width: string;
    bgColor: string;
    textColor: string;
    text?: string;
    afterHover: string;
  }



function Button(props: ButtonProps) {
  return (
    <div className={` transition-colors duration-300 ${props.bgColor+ ' '+ props.height+ ' '+ props.width+ ' '+ props.textColor + ' '+ props.afterHover} rounded-lg flex justify-center pt-2 cursor-pointer text-xl `} >{props.text}</div>
  )
}

export default Button