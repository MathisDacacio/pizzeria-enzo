'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@styles/Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>Accueil</Link>
        <Link href="/menu" className={pathname === '/menu' ? styles.active : ''}>Carte</Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>À propos</Link>
      </nav>
    </header>
  );
}
