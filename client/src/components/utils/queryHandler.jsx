import React from 'react'

import UseAnimations from 'react-useanimations'
import alertCircle from 'react-useanimations/lib/alertCircle'
import infinity from 'react-useanimations/lib/infinity'

import { QueryHandlerContainer } from './styles/queryHandlerStyled'

const QueryHandler = ({ loading, error, strokeColor }) => {
  return (
    <QueryHandlerContainer>
      {loading && (
        <UseAnimations strokeColor={strokeColor} animation={infinity} />
      )}
      {error && (
        <UseAnimations strokeColor={strokeColor} animation={alertCircle} />
      )}
    </QueryHandlerContainer>
  )
}

export default QueryHandler
