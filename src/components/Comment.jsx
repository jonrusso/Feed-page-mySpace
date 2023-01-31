import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/Michael.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Russo</strong>
              <time title="11 de Maio às 08:13h" dateTime='2022-05-11 08:13:38'>1h ago</time>
            </div>
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Very good Dave! Congrats 🤲</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Likes <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
