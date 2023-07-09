import React from 'react'

interface CardProps {
    height: string;
    width: string;
    bgColor: string;
    textColor: string;
    text?: string;
    image?: string;
  }


function Card(props: CardProps) {
  return (
    <div className={`${props.bgColor+ ' '+ props.height+ ' '+ props.width+ ' '+ props.textColor} rounded-lg `}>
      <div className='w-40 h-80 bg-transparent m-auto mt-2' >
        <img src={props.image} alt="" className='rounded-full flex-1 ' />
      </div>
    </div>
  )
}

export default Card