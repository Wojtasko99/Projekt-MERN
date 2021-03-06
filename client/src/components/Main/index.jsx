import styles from "./styles.module.css"
import batman from "../../images/batman.jpg"
import maveric from "../../images/top_gun.jpg"
import strange from "../../images/strange.jpg"
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
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
        
        
        <div className={styles.container}>
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
            <div className="container">
                <div className={styles.title}>
                    <h1>Sprawdź najnowsze filmy!</h1>
                </div>
                <div className={styles.movies_main}>
                    <div className={styles.movie_main}>
                        <img src={maveric} className={styles.photo}></img>

                        <div className={styles.movie_button}>
                        <a href="https://www.youtube.com/watch?v=Yg1TEuX1xH0" className={styles.white_btn} target="_blank">Zwiastun</a>
                        </div>
                    </div>
                    <div className={styles.movie_main}>
                        <img src={batman} className={styles.photo}></img>

                        <div className={styles.movie_button}>
                            <a href="https://www.youtube.com/watch?v=mqqft2x_Aa4" className={styles.white_btn} target="_blank">Zwiastun</a>
                        </div>
                    </div>

                    <div className={styles.movie_main}>
                        <img src={strange} className={styles.photo}></img>

                        <div className={styles.movie_button}>
                        <a href="https://www.youtube.com/watch?v=aWzlQ2N6qqg" className={styles.white_btn} target="_blank">Zwiastun</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navbar}></div>
        </div>
    )
}
export default Main