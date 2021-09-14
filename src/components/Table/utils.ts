export const tableCaptionText = (n_setups: number): string => {
  if (n_setups === 0) return 'There are no setups loaded'
  if (n_setups === 1) return 'You are viewing an rFactor 2 setup'
  return `You are comparing ${n_setups} rFactor 2 setups`
}
