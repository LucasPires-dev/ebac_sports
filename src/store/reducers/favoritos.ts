import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosInit = Produto[]

const initialState: FavoritosInit = []

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      state.push(produto)
    },
    remover: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      state = state.filter((item) => item.id !== produto.id)
    }
  }
})

export const { adicionar, remover } = favoritosSlice.actions
export default favoritosSlice.reducer
