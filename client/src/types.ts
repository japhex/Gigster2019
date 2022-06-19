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
