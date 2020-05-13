import React from 'react'
import { QueryHandlerContainer } from './styles/queryHandlerStyled'
import UseAnimations from 'react-useanimations'

const QueryHandler = ({ loading, error }) => {
  return (
    <QueryHandlerContainer>
      {loading && <UseAnimations animationKey="infinity" />}
      {error && <UseAnimations animationKey="alertCircle" />}
    </QueryHandlerContainer>
  )
}

export default QueryHandler
