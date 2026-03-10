'use client'

import { IconButton } from "../IconButton"
import { Spinner } from "../Spinner"
import { ThumbsUpIcon } from "../Icons/ThumbsUpIcon"

import { useFormStatus } from 'react-dom'
import styles from "./cardpost.module.css"

export const ThumbsUpButton = () => {
    const { pending } = useFormStatus()
    return (
        <IconButton disabled={pending}>
            { pending ? <Spinner /> : <ThumbsUpIcon className={styles["icon"]}/> }
        </IconButton>
    )
}