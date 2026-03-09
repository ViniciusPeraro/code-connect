import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./cardpost.module.css";
import Link from "next/link";
import { incrementThumbsUp, postComment } from "@/app/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment } from "../ModalComment";

export const CardPost = ({ post, highlight }) => {

  const submithThumbsUp = incrementThumbsUp.bind(null, post);
  const createComment = postComment.bind(null, post);

  return (
    <article
      className={styles["card-post"]}
      style={{
        width: highlight ? 993 : 486,
        height: highlight ? "fit-content" : "max-content",
      }}
    >
      <header className={styles["header"]}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image
            className={styles["banner"]}
            src={post.cover}
            alt={`Capa do post "${post.title}"`}
            fill
          />
        </figure>
      </header>
      <section className={styles["section"]}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`} className={styles["link"]}>
          Ver detalhes
        </Link>
      </section>
      <footer className={styles["footer"]}>
        <div className={styles["action-container"]}>
          <form action={submithThumbsUp} className={styles["form"]}>
            <ThumbsUpButton />
            <p>{post.likes}</p>
          </form>
          <div>
            <ModalComment action={createComment} ></ModalComment>
            <p>{post.comments.length}</p>
          </div>

        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
