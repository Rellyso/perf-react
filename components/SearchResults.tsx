import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

type SearchResultsProps = {
  results: Array<{
    id: number,
    price: number,
    priceFormatted: string,
    title: string,
  }>,
  totalPrice: number,
  onAddToWishList: (id: number) => void,
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
  return (
    <div>
      {results?.map((product) => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
        )
      })}
    </div>
  )
}

/** useMemo
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informação para um componente filho)
 */