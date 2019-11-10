import { useRouter } from 'next/router'

export default function ActiveLink({ children, href }) {
  const router = useRouter()
//   const style = {
//     marginRight: 10,
//     color: router.pathname === href ? 'red' : 'black',
//   }

  let className = 'nav-link d-flex align-items-center';
  if (router.pathname === href) {
    className += ' active';
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}