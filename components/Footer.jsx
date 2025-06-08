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
          <p><a target='_blank' href="https://www.google.fr/maps/place/Pizzeria+Enzo/@50.244687,3.6441933,19.25z/data=!3m1!5s0x47c28b83578d60bb:0xa321c4903be0b5f1!4m8!3m7!1s0x47c28b84a7b10b9f:0x86041b2488a1e3a6!8m2!3d50.2447242!4d3.6445736!9m1!1b1!16s%2Fg%2F11bzvzzcdn?hl=fr&entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D">Voir les avis</a></p>
        </div>

        <div className={styles.location}>
          <h4>Pizzeria Enzo - Le Cateau-Cambrésis</h4>
          <p>4 Rue Théophile Boyer, 59360</p>
          <p>Tél : <a href="tel:+33327770799">03 27 77 07 99</a></p>
          <p><a target='_blank' href="https://www.google.fr/maps/place/Pizzeria+Enzo,/@50.0977016,3.5424586,19z/data=!3m1!5s0x47c28518080b9bd5:0xbe49ae686f32ba54!4m16!1m7!3m6!1s0x47c28518075059e9:0xfd88e724458d1439!2sPizzeria+Enzo,!8m2!3d50.0978438!4d3.5423444!16s%2Fg%2F1q67ks54f!3m7!1s0x47c28518075059e9:0xfd88e724458d1439!8m2!3d50.0978438!4d3.5423444!9m1!1b1!16s%2Fg%2F1q67ks54f?hl=fr&entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D">Voir les avis</a></p>
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
