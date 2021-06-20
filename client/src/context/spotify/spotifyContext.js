import { createContext } from 'react'

const SpotifyContext = createContext()

export const SpotifyProvider = SpotifyContext.Provider
export const SpotifyConsumer = SpotifyContext.Consumer

export default SpotifyContext
