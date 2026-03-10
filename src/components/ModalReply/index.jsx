"use client"

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { CommentsIcon } from "../Icons/CommentsIcon"
import { Modal } from "../Modal"
import styles from "./modalreply.module.css"
import { SubmitButton } from "../SubmitButton"
import { Textarea } from "../Textarea"
import { Comment } from "../Comment"

export const ModalReply = ({ action, comment }) => {
    const modalRef = useRef(null)
    const formRef = useRef(null)

    const handleSubmit = () => {
        modalRef.current.closeModal()
    }

    const handleOpenModal = () => {
        modalRef.current.openModal()
        formRef.current.reset()
    }

    return (
        <>
            <Modal ref={modalRef} onClick={() => formRef.current.reset()}>
                <Comment comment={comment} replyable={false}></Comment>
                <form className={styles.form}
                    ref={formRef} 
                    action={action} 
                    onSubmit={handleSubmit}>
                    <Textarea required rows={8} name="text" placeholder="Digite aqui..." ></Textarea>
                    <div className={styles.footer}>
                        <SubmitButton type="submit" className={styles.button}>Responder</SubmitButton>
                    </div>
                </form> 
            </Modal>
            <IconButton onClick={handleOpenModal}>
                <strong>Responder</strong>
                {/* <CommentsIcon className={styles.icon}></CommentsIcon> */}
            </IconButton>
        </>
    )
}