import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import Sidebar from '../../components/Sidebar'

import styles from './styles.module.scss';

export function Home() {

  return (
    <main className={styles.Wrapper}>

      <Sidebar />
      <Header />
      <Footer />
    </main>
  )
}