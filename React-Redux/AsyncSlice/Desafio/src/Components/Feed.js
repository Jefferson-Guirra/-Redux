import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Feed.module.css'
import { ReactComponent as Out } from '../Assets/sair.svg'
import { ReactComponent as ArrowNext } from '../Assets/arrow.svg'
import { clearToken } from '../store/token'
import { clearUser } from '../store/user'
import { clearFeed, fetchFeed } from '../store/feedData'
import Dogs from './Dogs'

const Feed = () => {
  const [eye, setEye] = React.useState('3')
  const [pages, setPages] = React.useState([1])
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.feedData)


  function isMobile(){
   const mob = 'ontouchstart' in document.documentElement
   return mob
  }
  

  function animation() {
    for (let c = 0; c < 4; c++) {
      setTimeout(() => {
        setEye(c)
      }, 100 * c)
    }
  }
  async function handleNext(event) {
    if (data.length === 3) {
      animation()
      setPages([...pages, pages.length + 1])
      dispatch(fetchFeed(pages.length + 1))
    }
  }
  function handleLogout(event) {
    
    window.localStorage.removeItem('token')
    dispatch(clearToken())
    dispatch(clearUser())
    dispatch(clearFeed())
  }

  function handlePrev(event) {
    if (pages.length >= 2) {
      animation()
      pages.pop()
      dispatch(fetchFeed(pages.length))
    }
  }

  if (data)
    return (
      <section className={`${styles.section}`}>
        <Dogs eye={eye} />
        <div className={`scale ${styles.containerBox}`}>
          <ul className={styles.container}>
            {data.map(item => (
              <li className={styles.content} key={item.id}>
                <span className={styles.img}>
                  <img src={item.src} alt={item.title} />
                </span>
                {item.title}
              </li>
            ))}
          </ul>
          <div className={`${styles.btnContent}`}>
            {data && (
              <span 
              className={styles.btn} 
              onClick={isMobile() ? undefined : handleNext}
              onTouchStart={handleNext}
              >
                <ArrowNext />
              </span>
            )}
            {data && (
              <span type='button'
                className={`${styles.btn} ${styles.btnPrev}`}
                onClick={isMobile() ? undefined : handlePrev}
                onTouchStart={handlePrev}
              >
                <ArrowNext />

              </span>

                
              
            )}
          </div>
          <span onClick={handleLogout} className={styles.logout}>
            <Out />
          </span>
        </div>
      </section>
    )
  else return null
}

export default Feed
