import DirectoryContent from 'components/DirectoryContent/DirectoryContent'
import { useEffect, useState } from 'react'

const App = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.openDir().then((response) => {
        setEntries(response)
      })
    }
  }, [])

  return (
    <div>
      <DirectoryContent entries={entries} viewMode="grid" />
    </div>
  )
}

export default App

