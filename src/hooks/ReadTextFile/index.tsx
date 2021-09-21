import { useState } from 'react'

import { readTextFile } from './utils'

import { ReadTextFileProps } from './types'

const useReadTextFile = (): ReadTextFileProps => {
  const [content, setContent] = useState<string>('')

  const updateContent = (file: string): void => {
    const new_content: string = readTextFile(file)
    setContent(new_content)
  }

  return { content, updateContent }
}

export default useReadTextFile
