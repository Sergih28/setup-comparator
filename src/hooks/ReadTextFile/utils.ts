export const readTextFile = (file: string): string => {
  const rawFile = new XMLHttpRequest()
  let content = ''
  rawFile.open('GET', file, false)
  rawFile.onreadystatechange = function (): void {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const allText = rawFile.responseText
        content = allText
      }
    }
  }
  rawFile.send(null)
  return content
}
