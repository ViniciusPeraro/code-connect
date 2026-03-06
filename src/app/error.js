'use client' // Error components must be Client Components
import Heading from '@/components/Heading'
import style from './error/error.module.css'
import { ArrowBack } from '@/components/Icons/ArrowBack'
import { useEffect } from 'react'
import Image from 'next/image'
import banner from './error/error500_desktop.png' 
import Link from 'next/link'

export default function Error({ error }) {
  useEffect(() => {
  }, [error])
 
  return (
    <div className={style.container}>
      <Image src={banner} alt="Error Image" width={656} height={367} />
      <Heading level={1}>Opa! Um erro ocorreu.</Heading>
      <p className={style.subtitle}>Não conseguimos carregar a página, volte para seguir navegando.</p>
      <Link href="/" className={style.link}> Voltar ao feed
        <ArrowBack className={style.svg}/>
      </Link>
    </div>
  )
}