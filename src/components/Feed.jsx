import styles from './Feed.module.css'
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar';

export function Feed() {
  return (
    <article className={styles.feed}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src="http://github.com/jonrusso.png" />
          <div className={styles.authorInfo}>
            <strong>João Russo</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime='2022-05-11 08:13:38'>1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Howdy everyone! 👋</p>

        <p>I just uploaded another project to my portfolio. It is a project I did at the NLW Return, Rocketseat's event. The name of the project is DoctorCare 🚀</p>

        <p><a href="">👉 jane.design/doctorcare</a></p>

        <p><a href="">#newproject #nlw #rocketseat</a></p>
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
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
