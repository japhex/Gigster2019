import UseAnimations from 'react-useanimations'
import alertCircle from 'react-useanimations/lib/alertCircle'
import infinity from 'react-useanimations/lib/infinity'

import { QueryHandlerContainer } from './styles/query-handler.styled'

interface Props {
  loading: any
  error: any
  strikeColor?: any
}

const QueryHandler = ({ loading, error, strokeColor }: Props) => {
  return (
    <QueryHandlerContainer>
      {loading && <UseAnimations strokeColor={strokeColor} animation={infinity} />}
      {error && <UseAnimations strokeColor={strokeColor} animation={alertCircle} />}
    </QueryHandlerContainer>
  )
}

export default QueryHandler
