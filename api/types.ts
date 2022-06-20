import { Request } from 'express'

export interface RequestWithProps extends Request {
  user: string
}

export enum API {
  TICKET_MASTER = 'Ticketmaster',
  BANDS_IN_TOWN = 'BandsInTown',
}

export type Gig = {
  id: string
  artist: {
    name: string
    image: string
  }
  date: string
  venue: {
    location: string
    name: string
    latitude: string
    longitude: string
    city: string
    country: string
  }
  lineup: string[]
  festival: {
    start_date: string
    end_date: string
  }
}
