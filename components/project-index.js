import Link from 'next/link'
// import PublishedAt from './utils/published-at'

const Project = ({ title, category, date, image, path }) => (
  <article className="col-lg-6 col-12 mb-4 pt-1 col-project">
    <Link href={path}>
      <a>
        <div className="project p-3">
          <img className="project-image img-fluid p-1" src={image} alt=""/>
          <div className="d-flex flex-column pt-2 px-2 pb-1">
            <h3 className="project-title">{title}</h3>
            <div className='project-category mt-2'>{category}</div>
          </div>
          {/* <PublishedAt link={path} date={date} /> */}
        </div>
      </a>
    </Link>
  </article>
)

export default Project
