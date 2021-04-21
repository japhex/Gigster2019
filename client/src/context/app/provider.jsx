import React, { useState } from 'react'

import { AppProvider } from './context'

const AppProviderWrapper = ({ children }) => {
  const [scroll, setScroll] = useState(true)

  return (
    <AppProvider
      value={{
        scroll,
        setScroll,
      }}
    >
      {children}
    </AppProvider>
  )
}

export default AppProviderWrapper
