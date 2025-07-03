import PropTypes from 'prop-types'
import styles from './Entry.module.sass'
import { FaFile, FaFolder } from 'react-icons/fa'

const Entry = ({ entry }) => {
  return (
    <div className={styles.entry}>
      {entry.type === 'file' ? (
        <FaFile style={{ color: '#4a86e8' }} />
      ) : (
        <FaFolder style={{ color: '#ffc107' }} />
      )}
      <span>{entry.name}{entry.extension && entry.extension}</span>
    </div>
  )
}

Entry.propTypes = {
  entry: PropTypes.shape({
    name: PropTypes.string.isRequired,
    extension: PropTypes.string,
    type: PropTypes.string.isRequired
  }).isRequired
}

export default Entry