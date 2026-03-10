import { Comment } from "../Comment";
import { Replies } from "../Replies/indes";
import styles from "./commentlist.module.css"

export const CommentList = ({ comment }) => {
  return (
    <ul className={styles.container}>
      {comment.map((comment) => (
        <li key={comment.id} className={styles.list}>
          <Comment comment={comment} replyable={true}  />
          <Replies comment={comment}/>
        </li>
      ))}
    </ul>
  );
};
