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

const getEvents = (params: { page: number; limit: number }) => {
  return eventApiClient.get<EventData[]>('events', {
    params
  })
}

const getEvent = (id: string) => {
  return eventApiClient.get<EventData>(`events/${id}`)
}

const EventService = {
  getEvents,
  getEvent
}

export default EventService
