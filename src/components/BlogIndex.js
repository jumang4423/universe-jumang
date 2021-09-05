import { Link } from 'react-router'
import '../App.css'
import "../styles/blogIndex.css"

// トップページのUI
export const BlogIndex = (blogs) => () => {
  return (

    <div className={"margin_12 App"}>

      <img src="https://i.imgur.com/zKLWbeN.gif" className={"margin_12"} title="i am everywhere" />

      <h1 className={"title"}> jumang universe </h1>

      <p align="center">
        <img src="https://count.getloli.com/get/@jumang4423" alt="@jumang4423" />
      </p>

      <h2> everywhere i am me </h2>

      {/* 線 */}
      <hr className={"width50p"} />

      <h2 className={"lefter"}> {[...blogs.keys()].length} posts</h2>

      {/* 線 */}
      <hr className={"width50p"} />

      {[...blogs.keys()].map((path) =>
        <div key={path}>
          <Link to={'/' + path} className={"link-deco-fuck"}>
            <h2>
              {blogs.get(path).title || path}
            </h2>
          </Link>
        </div>
      )}

    </div>
  )
}

export default BlogIndex