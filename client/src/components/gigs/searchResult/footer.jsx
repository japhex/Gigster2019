import {
  GigResultFooter,
  Strong,
  Festival,
} from '../styles/searchResultsStyled'

const GigResultFooterParent = ({ gig }) =>
  gig.performance.length > 1 && (
    <GigResultFooter>
      <Strong>Playing with:</Strong> &nbsp;
      {gig.performance.map(
        (band, index) =>
          band.billingIndex !== 1 &&
          index < 10 && (
            <span>
              {band.displayName}
              {index < 9 && index !== gig.performance.length - 1 && ', '}
              {index === 9 && '...'}
            </span>
          )
      )}
      {gig.type.toLowerCase() === 'festival' && <Festival>[FESTIVAL]</Festival>}
    </GigResultFooter>
  )

export default GigResultFooterParent
