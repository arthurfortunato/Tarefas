import { FaHeart } from 'react-icons/fa'

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.content}>
      <p>
        Desenvolvido com <FaHeart color="#8E47BC" /> por @luizarthur.<strong>F</strong>ortunato
      </p>
    </footer>
  )
}