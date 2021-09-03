import React, {Suspense} from 'react'
import {useImage} from 'react-image'
 
function MyImageComponent() {
  const {src} = useImage({
    srcList: 'https://www.example.com/foo.jpg',
  })
 
  return <img src={src} />
}
 
export default function MyComponent() {
  return (
    <Suspense>
      <MyImageComponent />
    </Suspense>
  )
}
