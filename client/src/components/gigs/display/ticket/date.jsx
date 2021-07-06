import { format, parseISO } from 'date-fns'

export const Date = ({ gigDate }) => (
  <>{format(parseISO(gigDate), 'MMMM do yyyy')}</>
)
