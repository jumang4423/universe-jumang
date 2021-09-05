import { Link } from 'react-router'
import '../App.css'
import "../styles/blogIndex.css"

// トップページのUI
export const BlogIndex = (blogs) => () => {
  return (

    <div className={"margin_12 App"}>

      <a
        href="https://imgur.com/nyiq8aP"
        className={""}>
        <img width={"60%"} src="https://i.imgur.com/nyiq8aP.gif" className={"margin_12"} title="i am everywhere" />
      </a>

      <h1 className={"title"}> jumang universe </h1>

      <p align="center">
        <img src="https://count.getloli.com/get/@jumang4423" alt="@jumang4423" />
      </p>

      <h2> everywhere i am me </h2>

      {/* 線 */}
      <hr className={"width50p"} />

      <div className={"App"}>
        <ul className={"width50px"}>
          {[...blogs.keys()].map(path =>
            <li key={path}>
              <Link to={'/' + path} className={"link-deco-fuck"}>
                <h2>
                  {blogs.get(path).title || path}
                </h2>
              </Link>
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default BlogIndex