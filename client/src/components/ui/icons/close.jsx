import { Svg } from './styled'

export const CloseIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    clickable
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.4064 31.9981L0.864522 1.47717L2.3174 0.0232974L32.8593 30.5442L31.4064 31.9981Z"
      fill={props.fill || '#000'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.8622 1.47724L2.31617 31.9982L0.86339 30.5442L31.4094 0.0232619L32.8622 1.47724Z"
      fill={props.fill || '#000'}
    />
  </Svg>
)
