import { useState, useEffect } from 'react'
import { useSetup } from './SetupContext'
import { AttachmentIcon } from '@chakra-ui/icons'
import { Slide } from '@chakra-ui/react'

const loadSetupsText = (amount_setups: number) => (
  <>
    {amount_setups === 0 ? (
      <span>Load Setups</span>
    ) : amount_setups === 1 ? (
      <span>There is 1 setup loaded</span>
    ) : (
      <span>There are {amount_setups} setups loaded</span>
    )}
  </>
)

const Navbar = () => {
  const { updateSetups } = useSetup()
  const [amountSetups, setAmountSetups] = useState<number>(0)
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const handleFilesLoad = (files: unknown) => {
    const f = files as FileList

    if (updateSetups) updateSetups(f)

    const amount_new_setups = Array.from(f).length
    setAmountSetups(
      (old_amount_setups: number) => old_amount_setups + amount_new_setups
    )
  }

  return (
    <Slide direction="top" in={show} style={{ zIndex: 1 }} id="navbar">
      <div>
        <input
          type="file"
          id="file-loadSetup"
          className="inputfile inputfile-LoadSetup"
          data-multiple-caption="{count} setups loaded"
          multiple
          onChange={(e) => handleFilesLoad(e.target.files)}
        />
        <label id="lblLoadSetup" htmlFor="file-loadSetup">
          <AttachmentIcon />
          <span style={{ marginLeft: '4px' }}>
            {loadSetupsText(amountSetups)}
          </span>
        </label>
      </div>
    </Slide>
  )
}

export default Navbar
