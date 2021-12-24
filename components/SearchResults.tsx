import { ProductItem } from "./ProductItem"

import { List, ListRowRenderer, AutoSizer } from 'react-virtualized'

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

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <AutoSizer>
        {({ height, width }) => {
          return (
            <List
              height={300}
              rowHeight={25}
              width={width}
              overscanRowCount={5}
              rowCount={results.length}
              rowRenderer={rowRenderer}
            />
          )
        }}
      </AutoSizer >
    </div>
  )
}

/** useMemo
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informação para um componente filho)
 */