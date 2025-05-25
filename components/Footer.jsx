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
          <p>19 Fbg Fauroeulx, 59530</p>
          <p>Tél : <a href="tel:+33327421836">03 27 42 18 36</a></p>
        </div>

        <div className={styles.location}>
          <h4>Pizzeria Enzo - Le Cateau-Cambrésis</h4>
          <p>4 Rue Théophile Boyer, 59360</p>
          <p>Tél : <a href="tel:+33327770799">03 27 77 07 99</a></p>
        </div>

        <div className={styles.right}>
          <p className={styles.catchphrase}>
            🍕 Découvrez les meilleures pizzas artisanales de votre quartier, cuites <br></br>sur pierre au feu de bois. Sur place, à emporter ou en livraison, savourez <br></br>des plats faits maison avec passion et des ingrédients frais, midi et soir.
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
