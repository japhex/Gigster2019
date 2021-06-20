import { format, parseISO } from 'date-fns'

export const Date = ({ gigDate }) => (
  <>Date: {format(parseISO(gigDate), 'MMMM do yyyy')}</>
)
