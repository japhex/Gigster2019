import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Player, Image, Song, Action } from './styled/SpotifyPlayerStyled'

const SpotifyPlayer = ({ token, clientId }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [notListening, setNotListening] = useState(true)
  const [spotify, setSpotify] = useState({
    album: { images: [{ url: '' }] },
    name: '',
    artists: [{ name: '' }],
  })

  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/me/player`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        console.log(data)
        setNotListening(data === '')
        setSpotify(data)
        setIsLoading(false)
      })
      .catch((error) => {
        const errorStatus = error.response.data.error.status

        if (errorStatus === 401) {
          axios
            .post(
              `https://accounts.spotify.com/api/token`,
              { grant_type: 'refresh_token', refresh_token: token },
              { headers: { Authorization: `Basic ${clientId}` } }
            )
            .then(({ data }) => {
              console.log(data)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
  }, [])

  if (isLoading || notListening) {
    return null
  }

  const {
    item: { name, album, artists },
    is_playing,
  } = spotify

  return (
    <Player>
      <img src={album.images[0].url} />
      <Song>
        {name} - {artists[0].name}
      </Song>
      <Action>{is_playing ? 'Playing' : 'Paused'}</Action>
    </Player>
  )
}

export default SpotifyPlayer
