
import { useRef, useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const App = () => {

    const [file, setFile] = useState();
    const [array, setArray] = useState({});
    const [data, setData] = useState({ })

    const fileReader = new FileReader();

    //   const handleOnChange = (e) => {
    //     setFile(e.target.files[0]);
    //   };
    const navigate = useNavigate()
    const [error, setError] = useState("")
    //   const csvFileToArray = string => {
    //     const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    //     const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    //     const array = csvRows.map(i => {
    //       const values = i.split(",");
    //       const obj = csvHeader.reduce((object, header, index) => {
    //         object[header] = values[index];
    //         return object;
    //       }, {});
    //       return obj;
    //     });

    //     setArray(array);
    //   };

    //   const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(file)
    //     if (file) {
    //       fileReader.onload = function (event) {
    //         const text = event.target.result;
    //         csvFileToArray(text);
    //       };

    //       fileReader.readAsText(file);
    //     }
    //   };
    function wczytajFilmy() {
        try {
            const url = "http://localhost:8080/api/edit/showMovies"
            axios.get(url).then((response) => {
                Object.entries(response.data).map((key,value)=>{
                    setData({key: value})
                })
            })
            console.log({data})
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
    useEffect(() => {
        wczytajFilmy();
    }, []);

    //   const headerKeys = Object.keys(Object.assign({}, ...array));

    return (
        1
        // <div style={{ textAlign: "center" }}>
        //     <h1>REACTJS CSV IMPORT EXAMPLE </h1>
        //     <form>
        //         <input
        //             type={"file"}
        //             id={"csvFileInput"}
        //             accept={".csv"}
        //             onChange={handleOnChange}
        //         />

        //         <button
        //             onClick={(e) => {
        //                 handleOnSubmit(e);
        //             }}
        //         >
        //             IMPORT CSV
        //         </button>
        //     </form>

        //     <br />

        //     <table>
        //         <thead>
        //             <tr key={"header"}>
        //                 {headerKeys.map((key) => (
        //                     <th>{key}</th>
        //                 ))}
        //             </tr>
        //         </thead>

        //         <tbody>
        //             {array.map((item) => (
        //                 <tr key={item.id}>
        //                     {Object.values(item).map((val) => (
        //                         <td>{val}</td>
        //                     ))}
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    );
}
export default App;