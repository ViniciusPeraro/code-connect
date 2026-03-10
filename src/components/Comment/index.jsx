import Image from "next/image";
import styles from "./comment.module.css";
import { ModalReply } from "../ModalReply";
import { postReply } from "@/app/actions";

export const Comment = ({ comment, replyable }) => {
  const createReply = postReply.bind(null, comment);

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <Image
          width={32}
          height={32}
          alt={`Avatar do(a) ${comment.author.name}`}
          src={comment.author.avatar}
        ></Image>

        <strong>@{comment.author.name}</strong>
        <p>{comment.text}</p>
      </div>
      {replyable && <ModalReply action={createReply} comment={comment} />}
    </div>
  );
};
