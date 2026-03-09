"use client"
import styles from "./modal.module.css"
const { forwardRef, useRef, useImperativeHandle } = require("react")

export const Modal = forwardRef(({children}, ref) => {

    const dialogRef = useRef(null)
    const closeModal = () => dialogRef.current.close()
    const openModal = () => dialogRef.current.showModal()

    useImperativeHandle(ref, () => {
        return {
            openModal,
            closeModal
        }
    })

    return (
        <dialog ref={dialogRef} className={styles.container}>
            <header className={styles.header}>
                <button onClick={closeModal}>X</button>
            </header>
            {children}
        </dialog>
    )
})