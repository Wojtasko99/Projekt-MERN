import React, { Component } from 'react';
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
export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/edit/fetchMovies")
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
                    
                    <div className={styles.table}>
                    <Table striped bordered hover size="sm">
                        <thead className="thead-dark">
                            <tr>
                                <th>Rezyser</th>
                                <th>Tytul</th>
                                <th>Ocena</th>
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