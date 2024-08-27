import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div id="loading">
      <Image src="/ball.gif" alt="loading" width={200} height={200}/>
    </div>
  )
}
