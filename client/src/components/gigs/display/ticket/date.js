import React from 'react'
import moment from 'moment'
import { DateStyled, Day, Month, Year } from '../../styles/gigStyled'

export const Date = ({ gigDate }) => (
  <DateStyled>
    <Month>{moment(gigDate).format('MMM')}</Month>
    <Day>{moment(gigDate).format('D')}</Day>
    <Year>{moment(gigDate).format('YYYY')}</Year>
  </DateStyled>
)
