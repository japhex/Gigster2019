export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const years = () => {
  const yearsArray = []
  const date = new Date()

  for (let i = 0; i < 30; i++) {
    yearsArray.push(date.getFullYear() - i)
  }

  return yearsArray
}
