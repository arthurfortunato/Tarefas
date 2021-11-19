
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import styles from './styles.module.scss';

export function Main(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <main className={styles.content}>
      {props.children}
    </main>
  )
}