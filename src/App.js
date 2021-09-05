import './App.css'
import 'github-markdown-css'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import BlogIndex from './components/BlogIndex'
import { BlogWrapper } from './components/BlogWrapper'

function App() {

  // フォルダーからmarkdownをとってくる
  const mdFolder = require
    .context('!markdown-with-front-matter-loader!./_posts', false, /.md$/)

  const blogs = mdFolder
    .keys()
    .reduce(
      (memo, fileName) => memo
        .set(fileName.match(/.\/([^.]+).*/)[1],
          mdFolder(fileName)),
      new Map()
    )

  return (
    <div className="all-font">
      <Router history={browserHistory}>
        <Route path="/">

          {/* 最初のページのルートを作成 */}
          <IndexRoute key='index' component={BlogIndex(blogs)} />

          {/* 各ページのルート(/post01, /post02など)を作成 */}
          {
            [...blogs.keys()]
              .map(path =>
                <Route key={path} path={path} component={BlogWrapper(blogs.get(path))} />
              )
          }

        </Route>
      </Router>
    </div>
  )
}

export default App
