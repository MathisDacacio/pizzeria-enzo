import styles from '@styles/PizzaCard.module.css'

export default function PizzaCard({ name, description, price, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>{price} €</strong></p>
    </div>
  )
}
