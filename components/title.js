import Link from 'next/link'
import { siteMeta } from '../portfolio.config'

const Title = ({ path }) => (
  <p>
    <Link href='/'>
      <h1>
        <a rel='me'>{siteMeta.title}</a>
      </h1>
    </Link>
  </p>
)

export default Title
