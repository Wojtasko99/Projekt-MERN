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
        window.location = "/Edit"
    }
}


export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [], data: "" };
        
    }
    
    
    handleDelete = e => {
        this.setState({data: "ObjectId('"+e.target.value+"')"})
    }
    handleSubmitUsun(){
        try{
            const url = "http://localhost:8080/api/form/deleteForm"
            res.send(this.data)
            const { data: res } =  axios.post(url, this.data)
            console.log(res.message)
        }catch{
            console.log(this.data)
        }  
    }

    handleReset(){
        window.location="/formsEdit"
    }
    


    componentDidMount() {
        axios.get("http://localhost:8080/api/forms/fetchForms")
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
                                <th>Email</th>
                                <th>Favorite Movie</th>
                                <th>Country</th>
                                <th>Favorite Types</th>
                                <th>Site rate</th>
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