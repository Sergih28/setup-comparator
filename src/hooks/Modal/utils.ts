export const readTextFile = (file: string): string[] => {
  const rawFile = new XMLHttpRequest()
  let content: string[] = []
  rawFile.open('GET', file, false)
  rawFile.onreadystatechange = function (): void {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const allText = rawFile.responseText
        content = allText.split('\n')
      }
    }
  }
  rawFile.send(null)
  return content
}

export const showContent = (content: string[]): string =>
  content.reduce(
    (prev_value: string, current_value: string): string => prev_value + '\n' + current_value,
  )
