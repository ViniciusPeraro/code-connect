"use client"

import { ArrowBackIcon } from "../Icons/ArrowBackIcon"
import styles from "./submitbutton.module.css"

export const SubmitButton = ({children, ...rest}) => {
    return (
        <button {...rest} className={styles.btn}>
            {children}
            <ArrowBackIcon className={styles.icon}></ArrowBackIcon>
        </button>
    )
}