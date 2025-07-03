import PropTypes from 'prop-types'

import Entry from 'components/Entry'
import styles from './DirectoryContent.module.sass'

const DirectoryContent = ({ entries }) => {
  return (
    <div className={styles.wrapper}>
      {entries.map((entry) => (
        <Entry entry={entry} key={entry.name} />
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
