import { SearchIcon } from "../Icons/SearchIcon";
import styles from "./searchbar.module.css";

const Searchbar = () => {
    return (
        <form className={styles.container} action="/">
            <div className={styles.searchbar}>
                <SearchIcon className={styles.icon}/>
                <input name="q" type="text" placeholder="Digite o que você procura" className={styles.input} />
            </div>
            <button className={styles.button}>Buscar</button>
        </form>
    );
}
export default Searchbar;