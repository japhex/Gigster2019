import {
  SupportStyled,
  Title,
  Band,
} from 'components/gigs/display/styled/support'

export const Support = ({ supports, type }) => (
  <>
    {supports.length > 0 ? (
      <Title>{type === 'Festival' ? 'with:' : 'support:'}</Title>
    ) : (
      <Title empty>No support acts</Title>
    )}
    <SupportStyled>
      {supports && supports.length > 0 && (
        <>
          {supports.map(band => (
            <Band>{band}</Band>
          ))}
        </>
      )}
    </SupportStyled>
  </>
)
