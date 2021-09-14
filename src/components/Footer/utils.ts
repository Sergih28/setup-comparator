export const copyrightYears = (): string => {
  const first_year = new Date(new Date().setFullYear(2019, 3, 6)).getFullYear()
  const today_year = new Date().getFullYear()
  if (first_year !== today_year) return `${first_year} - ${today_year}`
  return `${first_year}`
}
