import { memo } from 'react'

type ProductItemProps = {
  product: {
    id: number,
    price: number,
    title: string,
  }
}

// shallow compare -> comparação rasa 
// {} === {} // false
// igualdade referencial

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
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