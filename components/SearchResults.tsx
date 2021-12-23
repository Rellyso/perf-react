import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

type SearchResultsProps = {
  results: Array<{
    id: number,
    price: number,
    title: string,
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

  return (
    <div>
      {results?.map((product) => {
        return (
          <ProductItem key={product.id} product={product} />
        )
      })}
    </div>
  )
}

/** useMemo
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informação para um componente filho)
 */