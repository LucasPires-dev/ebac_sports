import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
import { RootReducer } from '..'

type FavoritosInit = {
  itens: Produto[]
}

const initialState: FavoritosInit = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((item) => item.id === produto.id)) {
        state.itens = state.itens.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.itens.push(produto)
      }
    }
    // adicionar: (state, action: PayloadAction<Produto>) => {
    //   const produto = action.payload
    //   state.push(produto)
    // },
    // remover: (state, action: PayloadAction<Produto>) => {
    //   console.log(action.payload)
    //   state = state.filter((item) => item.id !== action.payload.id)
    // }
  }
})

// export const { adicionar, remover } = favoritosSlice.actions
export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
