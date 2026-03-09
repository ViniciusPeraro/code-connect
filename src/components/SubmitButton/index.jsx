"use client"

import { ArrowBack } from "../Icons/ArrowBack"
import styles from "./submitbutton.module.css"

export const SubmitButton = ({children, ...rest}) => {
    return (
        <button {...rest} className={styles.btn}>
            {children}
            <ArrowBack className={styles.icon}></ArrowBack>
        </button>
    )
}