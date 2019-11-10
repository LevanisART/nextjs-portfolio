import PropTypes from 'prop-types'
import Link from 'next/link'

const NextPrevProject = ({ title, path, position }) => {
  const isNext = position === 'next'
  return (
    <div className="pagination d-flex flex-column my-2 mx-3">
      <span className="title">{position} project </span>
      <Link href={path}>
        <a className="mt-2">
          {title}
        </a>
      </Link>
    </div>
  )
}

NextPrevProject.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['next', 'previous'])
}

export default NextPrevProject
