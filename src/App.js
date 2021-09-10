import './App.css'
import 'github-markdown-css'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import BlogIndex from './components/BlogIndex'
import { BlogWrapper } from './components/BlogWrapper'

function App() {

  // フォルダーからmarkdownをとってくる
  const thought_mdFolder = require
    .context('!markdown-with-front-matter-loader!./_thought_posts', false, /.md$/)

  const thought_blogs = thought_mdFolder
    .keys()
    .reduce(
      (memo, fileName) => memo
        .set(fileName.match(/.\/([^.]+).*/)[1],
          thought_mdFolder(fileName)),
      new Map()
    )

  // フォルダーからmarkdownをとってくる
  const note_mdFolder = require
    .context('!markdown-with-front-matter-loader!./_note_posts', false, /.md$/)

  const note_blogs = note_mdFolder
    .keys()
    .reduce(
      (memo, fileName) => memo
        .set(fileName.match(/.\/([^.]+).*/)[1],
        note_mdFolder(fileName)),
      new Map()
    )

  return (
    <div className="all-font">
      <Router history={browserHistory}>
        <Route path="/">

          {/* 最初のページのルートを作成 */}
          <IndexRoute key='index' component={BlogIndex(thought_blogs, note_blogs)} />

          {/* 各ページのルート(/post01, /post02など)を作成 */}
          {
            [...thought_blogs.keys()]
              .map(path =>
                <Route key={path} path={path} component={BlogWrapper(thought_blogs.get(path))} />
              )
          }

{
            [...note_blogs.keys()]
              .map(path =>
                <Route key={path} path={path} component={BlogWrapper(note_blogs.get(path))} />
              )
          }

        </Route>
      </Router>
    </div>
  )
}

export default App
