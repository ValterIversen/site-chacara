

import styles from '../../styles/page.module.css'

import Register from '../../components/register_steps'


export default function Home() {

  return (
    <div className={styles.main}>
      <video autoPlay={true} muted className={styles.video}>         
          <source src="./drone_background.mp4" type="video/mp4"/>       
      </video>
      <div className={styles.steps}>
        <Register />
      </div>
    </div>
  )
}
