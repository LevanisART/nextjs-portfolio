import { withRouter } from 'next/router'
import Page from '../components/layouts/page'

export const meta = {
  title: 'Contact'
}

export default withRouter(({ children, router }) => (
  <Page path={router.pathname} meta={meta}>
    <div className="contact">
      <h2 className="email mb-4">Email me at - <a href="mailto:levani.qotolashvili@gmail.com">levani.qotolashvili@gmail.com</a></h2>
      <form action="https://formspree.io/levani.qotolashvili@gmail.com" method="POST">
        <div className="d-flex flex-wrap contact-info">
          <div className="form-input col-lg-6 col-12 pr-0 pl-0 pr-lg-2">
            <input type="text" placeholder="Full name" name="name" />
          </div>
          <div className="form-input col-lg-6 col-12 pl-0 pr-0 pl-lg-2">
            <input type="email" placeholder="E-mail" name="_replyto" />
          </div>
        </div>

        <div className="form-input">
          <textarea placeholder="Message" name="message"></textarea>
        </div>

        <div className="submit-button">
          <input className="btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </Page>
))
