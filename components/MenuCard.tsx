import styles from '@styles/MenuCard.module.css';

interface MenuCardProps {
  name: string;
  type: string;
  image: string;
  ingredients?: string[];
  price?: number;
  magnets?: string[]; // ex: ['Végé', 'Épicé']
}

export default function MenuCard({
  name,
  type,
  image,
  ingredients = [],
  price,
  magnets = [],
}: MenuCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />

      <div className={styles.content}>
        <h3>{name}</h3>

        {ingredients.length > 0 && (
          <p className={styles.ingredients}>
            <strong>Ingrédients :</strong> {ingredients.join(', ')}
          </p>
        )}

        <div className={styles.infoRow}>
          <p className={styles.price}>
            <strong>
              {price !== undefined ? `${price.toFixed(2)} €` : ''}
            </strong>
          </p>

          <div className={styles.tags}>
            {magnets.map((tag, idx) => (
              <span key={idx} className={styles.magnet}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
