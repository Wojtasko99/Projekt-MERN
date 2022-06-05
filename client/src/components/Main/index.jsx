import styles from "./styles.module.css"
import batman from "../../images/batman.jpg"
import maveric from "../../images/top_gun.jpg"
import strange from "../../images/strange.jpg"
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    const handleForm = () => {
        window.location = "/form"
    }
    const handleMain = () => {
        window.location = "/"
    }
    const handleMovies = () => {
        window.location = "/movies"
    }
    const handleEdit = () => {
        window.location = "/edit"
    }

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <a href="#" onClick={handleMain}><h1>MoviesWeb</h1></a>
                <div className={StyleSheet.navbar_buttons}>
                    <button className={styles.white_btn} onClick={handleEdit}>
                        Edytuj dane
                    </button>
                    <button className={styles.white_btn} onClick={handleMovies}>
                        Filmy
                    </button>
                    <button className={styles.white_btn} onClick={handleForm}>
                        Formularz
                    </button>
                    <button className={styles.white_btn} onClick={handleLogout}>
                        Logout
                    </button>
                </div>

            </nav>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Sprawdź najnowsze filmy!</h1>
                </div>
                <div className={styles.movies_main}>
                    <div className={styles.movie_main}>
                        <img src={maveric} className={styles.photo}></img>

                        <div className={styles.movie_button}>
                            <button className={styles.white_btn} >
                                Sprawdź
                            </button>
                        </div>
                    </div>
                    <div className={styles.movie_main}>
                        <img src={batman} className={styles.photo}></img>

                        <div className={styles.movie_button}>
                            <button className={styles.white_btn}>
                                Sprawdź
                            </button>
                        </div>
                    </div>

                    <div className={styles.movie_main}>
                        <img src={strange} className={styles.photo}></img>

                        <div className={styles.movie_button}>
                            <button className={styles.white_btn}>
                                Sprawdź
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main