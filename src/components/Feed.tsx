import { format, formatDistanceToNow } from "date-fns";

import styles from "./Feed.module.css";
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export interface Content {
  type: 'paragraph' | 'link';
    content: string;
}

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Post {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[]; 
}

interface FeedProps {
  post: Post;
}

export function Feed({ post }: FeedProps) {
  const [comments, setComments] = useState([
    "É realmente muito interessante de acompanhar seus posts!",
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(post.publishedAt, "d LLLL 'at' hh:mm a");

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    {
      event.target.setCustomValidity(
        "Thanks for trying to post without filling out"
      );
    }
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.feed}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((row) => {
          if (row.type === "paragraph") {
            return <p key={row.content}>{row.content}</p>;
          } else if (row.type === "link") {
            return (
              <p key={row.content}>
                <a href="">{row.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          placeholder="Leave your comments here"
          name="comment" //we can also use input as a name property
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Add Comment
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
