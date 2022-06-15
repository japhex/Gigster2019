import { format, parseISO } from 'date-fns'

export const Date = ({ gigDate }: { gigDate: string }) => <>{format(parseISO(gigDate), 'MMMM do yyyy')}</>
