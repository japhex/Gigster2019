import { GigResultFooter, Festival, SupportBand } from 'components/gigs/styles/search-results.styled'

const GigResultFooterParent = ({ gig }) =>
  gig.performance.length > 1 && (
    <>
      {gig.type.toLowerCase() === 'festival' && <Festival>[FESTIVAL]</Festival>}
      <GigResultFooter>
        {gig.performance.map(
          ({ billingIndex, displayName }, index) =>
            billingIndex !== 1 && index < 10 && <SupportBand>{displayName}</SupportBand>
        )}
      </GigResultFooter>
    </>
  )

export default GigResultFooterParent
