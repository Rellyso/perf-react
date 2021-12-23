import { memo, useState } from 'react'

import dynamic from 'next/dynamic'
import { AddProductToWishListProps } from './AddProductToWishList'

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
  loading: () => <span>Carregando...</span>
})

type ProductItemProps = {
  product: {
    id: number,
    price: number,
    priceFormatted: string,
    title: string,
  },
  onAddToWishList: (id: number) => void,
}

// shallow compare -> comparação rasa 
// {} === {} // false
// igualdade referencial

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Add to wishList</button>

      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})

/**
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. re-renders with same props
 * 4. Medium to big size
 */