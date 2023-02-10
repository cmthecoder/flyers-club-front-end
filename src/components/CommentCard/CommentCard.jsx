import { Link } from "react-router-dom"
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment, blogId, user }) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/blogs/${blogId}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
              <button>DELETE</button>
            </>
          }
        </span>
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard