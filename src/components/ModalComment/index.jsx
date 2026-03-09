"use client"

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Comments } from "../Icons/Comments"
import { Modal } from "../Modal"
import styles from "./modalcomment.module.css"
import { SubmitButton } from "../SubmitButton"

export const ModalComment = ({ action }) => {
    const modalRef = useRef(null)
    const formRef = useRef(null)

    const handleSubmit = () => {
        formRef.current.reset()
        modalRef.current.closeModal()
    }


    return (
        <>
            <Modal ref={modalRef}>
                <h2 className={styles.h2}>Deixe seu comentário sobre o post:</h2>
                <form className={styles.form}
                    ref={formRef} 
                    action={action} 
                    onSubmit={handleSubmit}>
                    <textarea name="text" className={styles.textarea}></textarea>
                    <SubmitButton type="submit" className={styles.button}>Responder</SubmitButton>
                </form> 
            </Modal>
            <IconButton onClick={() => modalRef.current.openModal()}>
                <Comments className={styles.icon}></Comments>
            </IconButton>
        </>
    )
}