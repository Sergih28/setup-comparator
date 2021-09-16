export const loadSetupsText = (amount_setups: number): string => {
  if (amount_setups === 0) return 'Load Setups'
  if (amount_setups === 1) return 'There is 1 setup loaded'
  return `There are ${amount_setups} setups loaded`
}
