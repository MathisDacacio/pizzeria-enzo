import { menu } from '@data/menu'
import PizzaCard from '@components/PizzaCard'

export default function MenuPage() {
  return (
    <section>
      <h1>Notre Carte</h1>
      <div>
        {menu.map((pizza) => (
          <PizzaCard key={pizza.name} {...pizza} />
        ))}
      </div>
    </section>
  )
}
