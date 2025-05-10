'use client';
import styles from '@styles/Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.location}>
          <h4>Pizzeria Enzo - Le Quesnoy</h4>
          <p>123 Rue de la Pizza<br />75000 Paris</p>
          <p>Tél : <a href="tel:+33123456789">01 23 45 67 89</a></p>
        </div>

        <div className={styles.location}>
          <h4>Pizzeria Enzo - Quartier Est</h4>
          <p>87 Avenue des Saveurs<br />75012 Paris</p>
          <p>Tél : <a href="tel:+33987654321">09 87 65 43 21</a></p>
        </div>

        <div className={styles.right}>
          <p className={styles.catchphrase}>
            🍕 La meilleure pizza artisanale du quartier, avec amour et passion.
          </p>
          <a href="/mentions-legales" className={styles.legal}>Mentions légales</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Pizzeria Enzo — Réalisé par <strong>Dacacio Mathis</strong></p>
        <button onClick={scrollToTop} className={styles.scrollTop} aria-label="Retour en haut">
          ↑
        </button>
      </div>
    </footer>
  );
}
