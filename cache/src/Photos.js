import React from 'react'
import { fetchPhoto, getOverFiveKg } from './store/photo'
import { useDispatch, useSelector } from 'react-redux'

const Photos = () => {
  const data = useSelector(getOverFiveKg)
  const dispatch = useDispatch()
  const wait = React.useRef(false)

  React.useEffect(() => {
    if (wait.current === false) {
      dispatch(fetchPhoto())
    }
    wait.current = true
  }, [dispatch])

  if (!data) return null
  return (
    <div>
      {data.map(photo => (
        <li key={photo.id}>
          {photo.title} | {photo.peso} pounds
        </li>
      ))}
    </div>
  )
}

export default Photos
