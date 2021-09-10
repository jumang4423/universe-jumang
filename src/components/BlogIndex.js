import { Link } from 'react-router'
import '../App.css'
import "../styles/blogIndex.css"

// トップページのUI
export const BlogIndex = (thought_blogs, note_blogs) => () => {

  const thoguth_blog_meta_sort = () => {
    return [...thought_blogs.keys()]
      .map(path => {

        let blog_meta = Object.assign({}, thought_blogs.get(path))
        blog_meta.filename = path
        return blog_meta
      })
      .sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      .map(metas => {
        return metas.filename
      })
  }

  const note_meta_sort = () => {
    return [...note_blogs.keys()]
      .map(path => {

        let blog_meta = Object.assign({}, note_blogs.get(path))
        blog_meta.filename = path
        return blog_meta
      })
      .sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      .map(metas => {
        return metas.filename
      })
  }

  return (

    <div className={"fuckyouoverscroll"}>

      <div className={"margin_12 App"}>

        {/* <img src="https://github.com/jumang4423/jumang4423/raw/master/_design/jima.png" width={"95%"} className={"margin_12 pic_cc"} title="i am everywhere" /> */}

        <h2 className={"title flex-row"}>
          <div className={"rotate"}>☯</div>
          jumang universe
          <div className={"rotate"}>☯</div>
        </h2>

        <h2> im everywhere </h2>

        {/* 線 */}
        <hr className={"width50p"} />

        <h1 className={"lefter"}> thought | {[...thought_blogs.keys()].length} posts</h1>

        {/* 線 */}
        <hr className={"width50p"} />

        {thoguth_blog_meta_sort().map((path) =>
          <div key={path}>
            <Link to={'/' + path} className={"link-deco-fuck"}>
              <div className={"post_title"}>
                {thought_blogs.get(path).title || path}
              </div>
            </Link>
          </div>
        )}

        {/* 線 */}
        <hr className={"width50p"} />

        <h1 className={"lefter"}> note | {[...note_blogs.keys()].length} posts</h1>

        {/* 線 */}
        <hr className={"width50p"} />

        {note_meta_sort().map((path) =>
          <div key={path}>
            <Link to={'/' + path} className={"link-deco-fuck"}>
              <div className={"post_title"}>
                {note_blogs.get(path).title || path}
              </div>
            </Link>
          </div>
        )}

      </div>

      {/* 線 */}
      <hr className={"width50p"} />

      <p align="center" style={{margin: "24px"}}>
        <img src="https://count.getloli.com/get/@jumang4423" alt="@jumang4423" />
      </p>


    </div>
  )
}

export default BlogIndex