import styles from "./iconbutton.module.css"

export const IconButton = ({ children, ...rest }) => {
    return (
        <button className={styles.btn} {...rest}>
            {children}
        </button>
    )
}