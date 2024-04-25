import Link from 'next/link';
import { FC } from 'react';
import styles from '../../styles/header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header__container}>
      <Link className={styles.header__link} href='/'>
        Home
      </Link>
      <Link className={styles.header__link} href='/blog'>
        Blog
      </Link>
      <Link className={styles.header__link} href='/about'>
        About
      </Link>
    </header>
  );
};
