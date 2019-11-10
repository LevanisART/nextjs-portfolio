import Layout from './default'

function Page ({ meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <article className="d-flex w-100">
        <div className="px-0 my-2 container-fluid">
          <header>
            <h1 className="h5 mx-3">{meta.title}</h1>
          </header>
          <div className="p-3 mt-3">
            {children}
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Page
