import React, { Component,useState } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import styles from "./styles.module.css"
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
const handleSelect = e => {
    const sort = e.target.value;
    if (sort === "movies") {
        window.location = "/edit"
    }else if (sort === "forms") {
        window.location = "/formsEdit"
    }
}


export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: []};
        
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/users/checkUsers")
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }


    render() {
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
                <div className={styles.tytul}>
                <h1>Edycja danych</h1>
            <form>
                <select className={styles.select} name="select" onChange={handleSelect}>
                    <option value="users">Przeglądaj użytkowników</option>
                    <option value="forms">Przeglądaj formularze</option>
                    <option value="movies">Edytuj filmy</option>
                </select>
            </form>
            </div>
                    
                    <div className={styles.table}>
                    <Table striped bordered hover size="sm" style={{background: "#d2cbbf"}}>
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Second Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </Table>
                    </div>
                    
                </div>
                <div className={styles.navbar}></div>
            </div>
            
        )
    }
}