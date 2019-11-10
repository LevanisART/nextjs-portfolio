// import Link from 'next/link'
import { siteMeta } from '../../portfolio.config'
import Layout from './default'
// import PublishedAt from '../utils/published-at'
import projects from '../../projects/index'
import NextPrevProject from '../next-prev-project'

function Project ({ path, meta, children }) {
  const currentProjectIndex = projects
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousProject = projects[currentProjectIndex + 1]
  const nextProject = projects[currentProjectIndex - 1]
  
  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <article className="projectFull">
        <img className="projectFull-image img-fluid" src={meta.image} alt={meta.title} />

        <div className="p-md-4 p-3 my-2 mx-3">

          <div className="d-flex flex-column">
            <h2 className="project-title">{meta.title}</h2>
            {meta.description 
              ?
              <p className="project-description mt-3">{meta.description}</p>
              : null
            }
          </div>

          <div className="list-group mt-4 pt-2">
            {meta.category && (
              <div className="list-group-item py-3 px-0">
                <span>Category</span>
                <h3 className="mt-2">{meta.category}</h3>
              </div>
            )}
            {meta.website  && (
              <div className="list-group-item py-3 px-0">
                <span>Website</span>
                <h3 className="mt-2"><a target="_blank" href={meta.website}>{meta.website}</a></h3>
              </div>
            )}
            {meta.dribbble && (
              <div className="list-group-item py-3 px-0">
                <span>Dribbble</span>
                <h3 className="mt-2"><a target="_blank" href={meta.dribbble}>{meta.dribbble}</a></h3>
              </div>
            )}
            {/* <PublishedAt date={meta.publishedAt} link={path} /> */}
          </div>
        
        </div>
      </article>

      {(meta.attachments) && (

        (meta.attachments.attachment1 || meta.attachments.attachment2 || meta.attachments.attachment3 || meta.attachments.attachment4 || meta.attachments.attachment5 || meta.attachments.attachment6) && (
          <div className="block bg-white mt-4 d-flex w-100">
            <div className="p-4 my-2">
              <h4 className="title mx-3">Attachments</h4>
              <div className="attachments row mx-n1">
                {
                  Object.keys(meta.attachments).map(function(i) {
                    return <div className="attachment col-sm-6 col-lg-6 col-xl-4 col-12 p-3"><a target="_blank" href={meta.attachments[i]}><img className="img-fluid" src={meta.attachments[i]} alt=""/></a></div>
                  })
                }
              </div>
            </div>
          </div>    
        )
      )
      }

      {(previousProject || nextProject) && (
        <div className="block bg-white mt-4 d-flex w-100">
          <div className="w-100 p-3">
            <div className="project-pagination d-flex justify-content-between flex-wrap">
              {previousProject && (
                <NextPrevProject
                  title={previousProject.title}
                  path={previousProject.path}
                  position='Previous'
                />
              )}
              {nextProject && (
                <NextPrevProject
                  title={nextProject.title}
                  path={nextProject.path}
                  position='Next'
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Project;
