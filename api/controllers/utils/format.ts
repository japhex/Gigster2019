export const formatBandsInTownGigData = (artist, event) => ({
  id: event?.id,
  artist,
  date: event?.datetime,
  venue: {
    location: event?.venue?.location,
    name: event?.venue?.name,
    latitude: event?.venue?.latitude,
    longitude: event?.venue?.longitude,
    city: event?.venue?.city,
    country: event?.venue?.country,
  },
  lineup: event?.lineup?.slice(1, 10),
  festival: {
    start_date: event?.festival_start_date,
    end_date: event?.festival_end_date,
  },
})
