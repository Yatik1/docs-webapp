import React from 'react'
import Card from './Card'

function Foreground() {

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      fileSize: '0.9mb',
      close: true,
      tag: {
        isOpen : true,
        tagTitle: "Download Now",
        tagColor: "green"
      } 
    },{
      desc: "Lorem ipsum dolor sit amet consectetur.",
      fileSize: '0.9mb',
      close: true,
      tag: {
        isOpen : true,
        tagTitle: "Download Now",
        tagColor: "blue"
      }
    },{
      desc: "Lorem ipsum dolor sit amet consectetur.",
      fileSize: '0.9mb',
      close: true,
      tag: {
        isOpen : true,
        tagTitle: "Download Now",
        tagColor: "green"
      }
    }
  ]

  return (
    <div className="fixed top-0 left-0 z-[4] p-5 w-full h-full gap-5 flex flex-wrap" >
       {data?.map((item,index) => (
        <Card data={item} />
       ))}
    </div>
  )
}

export default Foreground
