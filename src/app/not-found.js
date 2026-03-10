import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import styles from "./not-found/not-found.module.css";
import banner from "./not-found/not-found_desktop.png";
import { ArrowBackIcon } from "@/components/Icons/ArrowBackIcon";

const Notfound = () => {
  return ( 
    <div className={styles.container}>
      <Image src={banner} alt="Error 404 Image" width={656} height={367} />
      <Heading level={1}>OPS! Página não encontrada.</Heading>
      <p className={styles.subtitle}>Você pode voltar ao feed e continuar buscando projetos incríveis.</p>
      <Link href="/" className={styles.link}> Voltar ao feed
        <ArrowBackIcon className={styles.svg}/>
      </Link>
    </div>
  )
}

export default Notfound;