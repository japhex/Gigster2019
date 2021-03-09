import React from 'react'

export const Time = ({ time }) =>
  time !== '0' && <>Doors open: {time.substring(0, 5)} PM</>
