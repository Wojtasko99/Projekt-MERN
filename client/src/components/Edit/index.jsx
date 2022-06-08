import { useRef, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const Edit = () => {
    const [data, setData] = useState({
        tytul: "",
        rezyser: "",
        ocena: ""
    })
    const [data1, setData1] = useState({
        tytul: "",
        rezyser: "",
        ocena: ""
    })
    const [data2, setData2] = useState({
        tytul: ""
    })
    
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleChange1 = e => {
        setData1({ ...data1, [e.target.name]: e.target.value })
    }
    const handleChange2 = e => {
        setData2({ ...data2, [e.target.name]: e.target.value })
    }


    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }

    const handleForm = () => {
        window.location = "/form"
    }
    const handleMain = () => {
        window.location = "/"
    }
    const handleReset = () => {
        window.location = "/edit"
        
    }
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    
    const handleMovies = () => {
        window.location = "/movies"
    }
    const handleEdit = () => {
        window.location = "/edit"
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/edit"
            const { data: res } = await axios.post(url, data)
            navigate("/edit")
            console.log(res.message)
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }
    const handleSubmit1 = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/edit/update"
            const { data: res } = await axios.post(url, data1)
            navigate("/edit")
            console.log(res.message)
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }
    const handleSubmitUsun = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/edit/delete"
            const { data: res } = await axios.post(url, data2)
            navigate("/edit")
            console.log(res.message)
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
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
            <div className={styles.main_container}>
                <div className={styles.form}>
                <form className={styles.form_container}
                    onSubmit={handleSubmit}>
                    <h1>Edycja danych</h1>
                    <h2>Dodaj film</h2>
                    <input
                        type="text"
                        placeholder="Tytul"
                        name="tytul"
                        onChange={handleChange}
                        value={data.tytul}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Rezyser"
                        name="rezyser"
                        onChange={handleChange}
                        value={data.rezyser}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Ocena"
                        name="ocena"
                        onChange={handleChange}
                        value={data.ocena}
                        required
                        className={styles.input}
                    /><br></br>
                    
                    {error && <div
                        className={styles.error_msg}>{error}</div>}
                    
                        <button type="submit"
                            className={styles.green_btn}>
                            Akceptuj
                        </button>
                        <button onClick={handleReset}
                            className={styles.red_btn}>
                            Reset
                        </button>
                    
                </form>
                </div>
                <div className={styles.form}>
                <form className={styles.form_container}
                    onSubmit={handleSubmit1}>
                    <h2>Aktualizuj film</h2>
                    <input
                        type="text"
                        placeholder="Tytul"
                        name="tytul"
                        onChange={handleChange1}
                        value={data1.tytul}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Rezyser"
                        name="rezyser"
                        onChange={handleChange1}
                        value={data1.rezyser}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Ocena"
                        name="ocena"
                        onChange={handleChange1}
                        value={data1.ocena}
                        required
                        className={styles.input}
                    /><br></br>
                    
                    {error && <div
                        className={styles.error_msg}>{error}</div>}
                    
                        <button type="submit"
                            className={styles.green_btn}>
                            Akceptuj
                        </button>
                        <button onClick={handleReset}
                            className={styles.red_btn}>
                            Reset
                        </button>
                    
                </form>
                </div>
                <div className={styles.form}>
                <form className={styles.form_container}
                    onSubmit={handleSubmitUsun}>
                    <h2>Usun film</h2>
                    <input
                        type="text"
                        placeholder="Tytul"
                        name="tytul"
                        onChange={handleChange2}
                        value={data2.tytul}
                        required
                        className={styles.input}
                    /><br></br>
                    
                    {error && <div
                        className={styles.error_msg}>{error}</div>}
                    
                        <button type="submit"
                            className={styles.green_btn}>
                            Akceptuj
                        </button>
                        <button onClick={handleReset}
                            className={styles.red_btn}>
                            Reset
                        </button>
                    
                </form>
                </div>
            </div>

        </div>
    )
}
export default Edit