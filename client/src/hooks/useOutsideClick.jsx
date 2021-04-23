import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  const handleOutsideClick = e => {
    if (ref.current.contains(e.target)) {
      return
    }

    callback()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleOutsideClick])
}

export default useOutsideClick
