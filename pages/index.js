import { withRouter } from 'next/router';
import _range from 'lodash.range';
import Link from 'next/link';
import pagination from 'pagination';
import Layout from '../components/layouts/default';
import Project from '../components/project-index';
import projects from '../projects/index';
import { siteMeta } from '../portfolio.config';

const Portfolio = ({ router, meta, page = 1 }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: '/',
    current: page,
    rowsPerPage: siteMeta.projectsPerPage,
    totalResult: projects.length
  })

  const {
    previous,
    range,
    next,
    fromResult,
    toResult
  } = paginator.getPaginationData()
  const results = _range(fromResult - 1, toResult)


  // function getCategories(category) {
  //   projects
  //     .filter((_project, index) => _project.category === category)
  //     .map((project, index) => (
  //       <Project
  //         key={index}
  //         title={project.title}
  //         category={project.category}
  //         image={project.image}
  //         date={project.publishedAt}
  //         path={project.path}
  //       />
  //     )
  //   );
  // }

  return (
    <Layout pageTitle='Portfolio' path={router.pathname}>
      <div className="portfolio">

        {/* <div className="filter d-flex mb-4">
          <div className="category mx-4"><a className="active" href="#">All</a></div>
          <div className="category mx-4"><a onClick={getCategories('UI/UX Design')} href="#">UI/UX Design</a></div>
          <div className="category mx-4"><a onClick={getCategories('Front-end Development')} href="#">Front-end Development</a></div>
        </div> */}

        <div className="row">
          {projects
            .filter((_project, index) => results.indexOf(index) > -1)
            .map((project, index) => (
              <Project
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                date={project.publishedAt}
                path={project.path}
              />
            )
          )}
        </div>

        <ul>
          {previous && (
            <li>
              <Link href={`/projects?page=${previous}`} as={`/projects/${previous}`}>
                <a>Previous</a>
              </Link>
            </li>
          )}
          {range.map((page, index) => (
            <li key={index}>
              <Link key={index} href={`/projects?page=${page}`} as={`/projects/${page}`}>
                <a>{page}</a>
              </Link>
            </li>
          ))}
          {next && (
            <li>
              <Link href={`/projects?page=${next}`} as={`/projects/${next}`}>
                <a>Next</a>
              </Link>
            </li>
          )}
        </ul>
      
      </div>
    </Layout>
  )
}

Portfolio.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default withRouter(Portfolio)
