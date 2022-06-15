interface Props {
  gig: any
}

const Tags = ({ gig }: Props) => (
  <ul className="gig__tags">
    {gig.artistInfo !== undefined &&
      gig.artistInfo.artist !== undefined &&
      // @ts-ignore
      gig.artistInfo.artist.tags.tag.map((tag, index) => (
        <li key={index} className="tag">
          {tag.name}
        </li>
      ))}
  </ul>
)

export default Tags
