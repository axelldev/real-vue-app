export type EventData = {
  id: string
  title: string
  date: string
  location: string
  description: string
}

export type FlashMessage = {
  message: string | null
  type: 'success' | 'error' | 'info' | 'warning'
}

export type FlashMessageStore = {
  flashMessage: FlashMessage
}
