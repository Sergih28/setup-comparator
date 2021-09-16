import { ReactElement, useState } from 'react'

import { FaUpload } from 'react-icons/fa'

import { useSetup } from 'hooks/Setup'

import { loadSetupsText } from './utils'

import { MyInput, MyLabel } from './styles'

const InputSetups = (): ReactElement => {
  const { updateSetups } = useSetup()
  const [amountSetups, setAmountSetups] = useState<number>(0)

  //TODO: Show this as a notification instead of changing the title
  const label_title = loadSetupsText(amountSetups)

  const handleFilesLoad = (files: unknown): void => {
    const f = files as FileList

    if (updateSetups) updateSetups(f)

    const amount_new_setups = Array.from(f).length

    //TODO
    // In the future this might be
    // setAmountSetups((old_amount_setups: number) => old_amount_setups + amount_new_setups)
    // For now we just erase everything when loading more setups
    setAmountSetups(amount_new_setups)
  }

  return (
    <>
      <MyInput
        type='file'
        id='file-loadSetup'
        data-multiple-caption='{count} setups loaded'
        multiple
        onChange={(e): void => handleFilesLoad(e.target.files)}
      />
      <MyLabel htmlFor='file-loadSetup' title={label_title}>
        <FaUpload />
      </MyLabel>
    </>
  )
}

//<span style={{ marginLeft: '4px' }}>{loadSetupsText(amountSetups)}</span>

export default InputSetups
