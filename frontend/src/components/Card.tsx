import React from 'react'

interface CardProps {
    height: string;
    width: string;
    bgColor: string;
    textColor: string;
    text?: string;
  }


function Card(props: CardProps) {
  return (
    <div className={`${props.bgColor+ ' '+ props.height+ ' '+ props.width+ ' '+ props.textColor} rounded-lg ` } ></div>
  )
}

export default Card