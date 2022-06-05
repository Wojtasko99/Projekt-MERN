import { useRef, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const Form = () => {
    const [data, setData] = useState({
        email: "",
        favMovie: "",
        country: "Poland",
        types: "",
        rate: "10"
    })

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
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
        window.location = "/form"

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/forms"
            const { data: res } = await axios.post(url, data)
            navigate("/form")
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
    const handleMovies = () => {
        window.location = "/movies"
    }
    const handleEdit = () => {
        window.location = "/edit"
    }
    return (

        <div className={styles.con}>
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
                <form className={styles.form_container}
                    onSubmit={handleSubmit}>
                    <h1>Wypełnij formularz</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Ulubiony film"
                        name="favMovie"
                        onChange={handleChange}
                        value={data.favMovie}
                        required
                        className={styles.input}
                    />
                    <div className={styles.text}>Skąd pochodzisz?</div>

                    <select name="country" className={styles.select} onChange={handleChange} required>
                        <option value="Poland">Polska</option>
                        <option value="USA">USA</option>
                        <option value="England">Anglia</option>
                        <option value="Germany">Niemcy</option>
                        <option value="Ukraine">Ukraina</option>
                    </select>
                    <div className={styles.text}>Twoje ulubione kategorie filmów:</div>
                    <div className={styles.checkbox}>
                        <input type="checkbox" id="1" name="types" value="Horror" onClick={handleChange} />Horrory
                        <input type="checkbox" id="2" name="types" value="Comedy" onClick={handleChange} />Komedie
                        <input type="checkbox" id="3" name="types" value="Dramat" onClick={handleChange} />Dramat
                        <input type="checkbox" id="4" name="types" value="Animation" onClick={handleChange} />Animacja
                    </div>
                    <div className={styles.text}>Oceń naszą stronę:</div>
                    <div className={styles.radio}>
                        <label><input type="radio" name="rate" onChange={handleChange} value="0" />0</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="1" />1</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="2" />2</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="3" />3</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="4" />4</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="5" />5</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="6" />6</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="7" />7</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="8" />8</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="9" />9</label>
                        <label><input type="radio" name="rate" onChange={handleChange} value="10" checked />10</label>
                    </div>
                    {error && <div
                        className={styles.error_msg}>{error}</div>}
                    <div>
                        <button type="submit"
                            className={styles.green_btn}>
                            Wyślij
                        </button>
                        <button onClick={handleReset}
                            className={styles.red_btn}>
                            Reset
                        </button>
                    </div>
                </form>
                
            </div>
        </div>

    );
};
export default Form