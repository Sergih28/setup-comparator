import { useSetup } from './SetupContext'
import { AttachmentIcon } from '@chakra-ui/icons'

export const tabs: string[] = [
  'Setup',
  'General',
  'Suspension',
  'Chassis',
  'Advanced',
]

const Navbar = () => {
  const { updateSetups } = useSetup()

  const handleFilesLoad = (files: unknown) => {
    const f = files as FileList
    if (updateSetups) updateSetups(f)
  }

  return (
    <div className="navbar">
      <input
        type="file"
        id="file-loadSetup"
        className="inputfile inputfile-LoadSetup"
        data-multiple-caption="{count} setups loaded"
        multiple
        onChange={(e) => handleFilesLoad(e.target.files)}
      />
      <label
        id="lblLoadSetup"
        className="waves-effect waves-light"
        htmlFor="file-loadSetup"
      >
        <AttachmentIcon />
        <span style={{ marginLeft: '4px' }}>Load Setups</span>
      </label>
    </div>
  )
}

export default Navbar
