import Gig from './gig'

interface Props {
  type: string
  title: string
  gigs: any[]
  withoutCrud?: boolean
}

const GigList = ({ type, title, gigs, withoutCrud }: Props) => {
  const gigType = type
  return (
    <>
      {gigs !== null ? (
        // @ts-ignore
        gigs.map(gig => <Gig key={gig.id} gig={gig} gigType={gigType} withoutCrud={withoutCrud} />)
      ) : (
        <>No {title}</>
      )}
    </>
  )
}

export default GigList
