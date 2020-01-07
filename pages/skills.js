import Page from '../components/layouts/page'
import { withRouter } from 'next/router'

export const meta = {
  title: 'Skills & Tools',
}

export default withRouter(({ children, router }) => (
  <Page path={router.pathname} meta={meta}>
    <div className="skills">
      <h2 className="job-title">UI/UX Design:</h2>
      <div className="skills-list mt-3 ml-lg-2 d-flex flex-column">
        <h3 className="mb-2">Skills</h3>
        <span className="mb-2">- Communication</span>
        <span className="mb-2">- Organization</span>
        <span className="mb-2">- User research</span>
        <span className="mb-2">- Information architecture</span>
        <span className="mb-2">- Wireframing and prototyping</span>


        <h3 className="mt-4 mb-2">Tools</h3>
        <span className="mb-2">- Figma</span>
        <span className="mb-2">- Adobe XD</span>
        <span className="mb-2">- Adobe Photoshop</span>
        <span className="mb-2">- Adobe After Effects</span>
        <span className="mb-2">- Axure</span>
        <span className="mb-2">- Invision</span>
      </div>
    </div>
    

    <div className="skills mt-5">
      <h2 className="job-title">Front-end Development:</h2>
      <div className="skills-list mt-3 ml-lg-2 d-flex flex-column">
        <h3 className="mb-2">Skills</h3>
        <span className="mb-2">- Git</span>
        <span className="mb-2">- HTML5</span>
        <span className="mb-2">- CSS3</span>
        <span className="mb-2">- Bootstrap 4+</span>
        <span className="mb-2">- SCSS/SASS</span>
        <span className="mb-2">- Javascript</span>
        <span className="mb-2">- React.js</span>
        <span className="mb-2">- Redux.js</span>
        <span className="mb-2">- Firebase</span>
        <span className="mb-2">- Next.js</span>
        <span className="mb-2">- Typescript</span>
      </div>
    </div>
  </Page>
))
