import PropTypes from 'prop-types'
import { FaFile, FaFolder } from 'react-icons/fa'

import styles from './DirectoryContent.module.sass'

const DirectoryContent = ({ entries }) => {
  return (
    <div className={styles.wrapper}>
      {entries.map((entry, index) => (
        <div key={index} className={styles.entry}>
          {entry.type === 'file' ? (
            <FaFile style={{ color: '#4a86e8' }} />
          ) : (
            <FaFolder style={{ color: '#ffc107' }} />
          )}
          <span>{entry.name}{entry.extension && entry.extension}</span>
        </div>
      ))}
    </div>
  )
}

DirectoryContent.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      extension: PropTypes.string,
      type: PropTypes.string.isRequired
    })
  ).isRequired
}

export default DirectoryContent
