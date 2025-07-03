import { useEffect, useState } from 'react'

import DirectoryContent from './components/DirectoryContent'

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
      <DirectoryContent entries={entries} />
    </div>
  )
}

export default App

