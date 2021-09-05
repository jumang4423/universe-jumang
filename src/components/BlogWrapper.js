import { Link } from 'react-router'
import "../styles/blogIndex.css"
import "../styles/blogWrapper.css"

// ブログページのUI
export const BlogWrapper = ({ __content }) => () => {
    return (
        <div className={"margin_12"}>
            <Link to='/' className={"link-deco-fuck"}>
                <div className={"back_wrapper"}>
                    BACK
                </div>
            </Link>

            <hr />

            <div className='markdown-body' dangerouslySetInnerHTML={{ __html: __content }}>
            </div>
        </div>
    )
}