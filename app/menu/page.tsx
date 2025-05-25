'use client'

import { useState } from 'react'
import { menu } from '@data/menu'
import MenuCard from '@components/MenuCard'
import styles from '@styles/Menu.module.css'

const categories = ['Pizza', 'Pâtes', 'Salade', 'Boisson', 'Menus Spéciaux']
const pizzaSubTypes = ['Les Traditionnelles', 'Les Gourmandes', 'Les Savoureuses', 'Les Spécialités']

// Prix par sous-type et taille (diamètre)
const pizzaPrices = {
  'Les Traditionnelles': { '24cm': 9, '30cm': 11, '40cm': 13 },
  'Les Gourmandes': { '24cm': 11, '30cm': 13, '40cm': 15 },
  'Les Savoureuses': { '24cm': 12, '30cm': 14, '40cm': 16 },
  'Les Spécialités': { '24cm': 13, '30cm': 15, '40cm': 17 },
}

// Prix des ingrédients supplémentaires par taille
const extraIngredientPrices = {
  '24cm': 1,
  '30cm': 1.5,
  '40cm': 2,
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Pizza')

  const filteredItems = menu.filter((item) => item.type === activeCategory)

  const getPizzaBySubType = (subType: string) =>
    filteredItems.filter((item) => item.subType === subType)

  return (
    <section className={styles.menu}>
      {/* Navigation des catégories */}
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${cat === activeCategory ? styles.active : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Affichage des plats */}
      <div className={styles.menuContent}>
        {activeCategory === 'Pizza' && (
          <div className={styles.extraInfo}>
            <p><strong>Ingrédient supplémentaire :</strong>{' '}
              {Object.entries(extraIngredientPrices).map(([size, price], index, arr) => (
                <span key={size}>
                  {size} : +{price}€{index < arr.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        )}

        {activeCategory === 'Pizza' ? (
          pizzaSubTypes.map((sub) => (
            <div key={sub} className={styles.subSection}>
              <div className={styles.subHeader}>
                <h2>{sub}</h2>
                <div className={styles.prices}>
                  {Object.entries(pizzaPrices[sub as keyof typeof pizzaPrices]).map(([size, price]) => (
                    <span key={size}>
                      {size} : <strong>{price}€</strong>
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.cardGrid}>
                {getPizzaBySubType(sub).map((item) => (
                  <MenuCard key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.cardGrid}>
            {filteredItems.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
