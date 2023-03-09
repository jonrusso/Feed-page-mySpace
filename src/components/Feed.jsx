import { format, formatDistanceToNow } from 'date-fns'

import styles from './Feed.module.css'
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar';

const comments = [
  1,
  2,
  3,
];

export function Feed({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d LLLL 'at' hh:mm a")

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,

  })

  return (
    <article className={styles.feed}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(row => {
          if (row.type === 'paragraph') {
            return <p>{row.content}</p>;
          } else if (row.type === 'link') {
            return <p><a href="">{row.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          placeholder="Leave your comments here"
        />
        <footer>
          <button type="submit">Add Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </article>
  )
}
