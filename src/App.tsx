import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store, RootReducer } from './store'
import { adicionar as addCarrinho } from './store/reducers/carrinho'
import {
  adicionar as addAosFavoritos,
  remover as removerAosFavoritos
} from './store/reducers/favoritos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { favoritos } = useSelector((state: RootReducer) => state)
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  const dispatch = useDispatch()

  function adicionarAoCarrinho(produto: Produto): void {
    dispatch(addCarrinho(produto))
  }

  function favoritar(produto: Produto): void {
    console.log(favoritos)

    if (favoritos.find((favorito: Produto) => favorito.id === produto.id)) {
      dispatch(removerAosFavoritos(produto))
    } else {
      dispatch(addAosFavoritos(produto))
    }
    // dispatch(addAosFavoritos(produto))
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
