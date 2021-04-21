import React from 'react'

const SpotifyContext = React.createContext()

export const SpotifyProvider = SpotifyContext.Provider
export const SpotifyConsumer = SpotifyContext.Consumer

export default SpotifyContext
