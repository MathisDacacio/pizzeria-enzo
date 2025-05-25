import styles from '@styles/Accueil.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Bienvenue chez les pizzerias Enzo! 🍕</h1>
        </div>
      </section>

      {/* Section 1 */}
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h2>Pizza au feu de bois depuis 1998</h2>
          <p>Chez Mario, chaque pizza est faite maison avec des produits frais et locaux.</p>
          <div className={styles.horaires}>
            <h4>Horaires</h4>
            <p>Lun - Ven : 11h30–14h30 / 18h–22h<br />Sam - Dim : 18h–23h</p>
          </div>
        </div>
        <div className={styles.imageBlock}>
          <Image
            src="/images/décorative/pizza1.webp"
            alt="Pizza artisanale"
            width={500}
            height={300}
            className={styles.img}
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.sectionReverse}>
        <div className={styles.imageBlock}>
          <Image
            src="/images/menu/pizza2.webp"
            alt="Ingrédients frais"
            width={500}
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.textBlock}>
          <h2>Des ingrédients frais chaque jour</h2>
          <p>Tomates mûries au soleil, mozzarella fondante, basilic du jardin… le goût est au rendez-vous !</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h2>Ambiance chaleureuse et familiale</h2>
          <p>Un coin d’Italie en plein cœur de la ville, pour manger sur place ou à emporter.</p>
        </div>
        <div className={styles.imageBlock}>
          <Image
            src="/images/menu/pizza3.webp"
            alt="Intérieur du restaurant"
            width={500}
            height={300}
            className={styles.img}
          />
        </div>
      </section>
    </div>
  );
}
