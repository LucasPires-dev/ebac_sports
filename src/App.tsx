import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store, RootReducer } from './store'
import { adicionar as addCarrinho } from './store/reducers/carrinho'
// import {
//   adicionar as addAosFavoritos,
//   remover as removerAosFavoritos
// } from './store/reducers/favoritos'
import { favoritar as favoritarProduto } from './store/reducers/favoritos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { itens: favoritos } = useSelector(
    (state: RootReducer) => state.favoritos
  )

  const dispatch = useDispatch()

  function adicionarAoCarrinho(produto: Produto): void {
    dispatch(addCarrinho(produto))
  }

  function favoritar(produto: Produto): void {
    dispatch(favoritarProduto(produto))
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
