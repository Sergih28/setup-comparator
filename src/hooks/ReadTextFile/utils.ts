export const readTextFile = async (file: string): Promise<string> => {
  const r = await fetch(file)
  const text = await r.text()
  return text
}
