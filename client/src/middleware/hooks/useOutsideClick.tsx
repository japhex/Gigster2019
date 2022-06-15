import { useEffect } from 'react'

interface Props {
  ref: any
  callback: any
}

const useOutsideClick = ({ ref, callback }: Props) => {
  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (ref.current.contains(e.target)) {
        return
      }

      callback()
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [callback, ref])
}

export default useOutsideClick
