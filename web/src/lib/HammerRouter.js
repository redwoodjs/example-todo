const rePath = (path) => {
  const withParams = path.replace(/:([^\/]+)/g, '(?<$1>[^/]+)')
  const fullString = `^${withParams}$`
  return fullString
}

export const Router = ({ children }) => {
  const routes = React.Children.toArray(children)
  const url = window.location.pathname
  for (let route of routes) {
    const { path, page: Page } = route.props
    const matches = Array.from(url.matchAll(rePath(path)))
    if (matches.length > 0) {
      const pathProps = matches[0].groups
      return <Page {...pathProps} />
    }
  }
  return <div>404</div>
}

export const Route = () => {
  return null
}
