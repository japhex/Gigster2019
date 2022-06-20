export const formatBandsInTownGigData = (artist, event) => ({
  id: event?.id,
  artist,
  date: {
    start: event?.datetime,
  },
  venue: {
    location: {
      latitude: event?.venue?.latitude,
      longitude: event?.venue?.longitude,
    },
    name: event?.venue?.name,
    city: event?.venue?.city,
    country: event?.venue?.country,
  },
  lineup: event?.lineup?.slice(1, 10).map(support => ({
    name: support,
  })),
  festival: {
    start_date: event?.festival_start_date,
    end_date: event?.festival_end_date,
  },
})

export const formatTicketmasterGigData = (artist, event) => ({
  id: event?.id,
  artist,
  date: {
    start: event?.dates?.start?.localDate || event?.dates?.start?.dateTime,
    end: event?.dates?.end?.localDate,
  },
  info: event?.info,
  venue: {
    location: event?._embedded?.venues[0]?.location,
    name: event?._embedded?.venues[0]?.name,
    city: event?._embedded?.venues[0]?.city?.name,
    country: event?._embedded?.venues[0]?.country?.name,
  },
  lineup: event?._embedded?.attractions?.slice(0, 10).map(support => ({
    name: support?.name,
    image: support?.images[0]?.url,
    genre: support?.classifications[0]?.genre?.name,
    subGenre: support?.classifications[0]?.subGenre?.name,
  })),
  festival: {
    start_date: event?.festival_start_date,
    end_date: event?.festival_end_date,
  },
})
