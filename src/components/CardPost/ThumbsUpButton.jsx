'use client'

import { IconButton } from "../IconButton"
import { Spinner } from "../Spinner"
import { ThumbsUp } from "../icons/ThumbsUp"

import { useFormStatus } from 'react-dom'
import styles from "./cardpost.module.css"

export const ThumbsUpButton = () => {
    const { pending } = useFormStatus()
    return (
        <IconButton disabled={pending}>
            { pending ? <Spinner /> : <ThumbsUp className={styles["icon"]}/> }
        </IconButton>
    )
}