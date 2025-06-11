import './editor.css'
import Layers from './Layers'
import Options from './Options'
import Workspace from './Workspace'

const Editor = () => {
  return (
    <div>
      <Layers/>
      <Workspace/>
      <Options/>
    </div>
  )
}

export default Editor
