export function formatDate(date: string): string {
  const formater = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })
  return formater.format(new Date(date))
}
