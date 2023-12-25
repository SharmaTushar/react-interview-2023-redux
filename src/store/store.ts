import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import rootReducer from './reducers'

const isDevelopmentMode = import.meta.env.MODE === 'development'

export const store = configureStore({
    reducer: rootReducer,
    devTools: isDevelopmentMode,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
