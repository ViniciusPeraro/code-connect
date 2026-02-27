import Image from "next/image"
import { Avatar } from "../Avatar"
import styles from "./cardpost.module.css"
import Link from "next/link"

export const CardPost = ({ post, highlight }) => {
    return (
        <Link href={`/posts/${post.slug}`} className={styles["link"]}>
             <article className={styles["card-post"]} 
                style={{ width: highlight ? 993 : 486, height: highlight ? "fit-content" : "auto"}}>
                <header className={styles["header"]}>
                    <figure style={{ height: highlight ? 300 : 133}}>
                        <Image 
                            src={post.cover} 
                            alt={`Capa do post "${post.title}"`} 
                            fill/>
                    </figure>
                </header>
                <section className={styles["section"]}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p> 
                </section>
                <footer className={styles["footer"]}>
                    <Avatar imageSrc={post.author.avatar} name={post.author.username}/>
                </footer>
            </article>
        </Link> 
    )
}

        