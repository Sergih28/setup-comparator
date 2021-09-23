import { useState } from 'react'

import { readTextFile } from './utils'

import { ReadTextFileProps } from './types'

const useReadTextFile = (): ReadTextFileProps => {
  const [content, setContent] = useState<string>('')

  const updateContent = async (file: string): Promise<void> => {
    const new_content: string = await readTextFile(file)
    setContent(new_content)
  }

  return { content, updateContent }
}

export default useReadTextFile
