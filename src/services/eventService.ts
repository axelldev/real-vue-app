import type { EventData } from '@/types'
import axios from 'axios'

export const eventApiClient = axios.create({
  baseURL: 'https://6633fd529bb0df2359a079b0.mockapi.io',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getEvents = () => {
  return eventApiClient.get<EventData[]>('events')
}

const getEvent = (id: string) => {
  return eventApiClient.get<EventData>(`events/${id}`)
}

const EventService = {
  getEvents,
  getEvent
}

export default EventService
