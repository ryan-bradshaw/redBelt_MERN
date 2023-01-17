import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link, useParams, useHistory} from "react-router-dom"

const Dashboard = () => {
    const {id} = useParams()
    const [pirates, setPirates] = useState()
    // const [errors, setErrors] = useState([])
    const [refresh, setRefresh] = useState(true)
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates`)
            .then(res => setPirates(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {setRefresh(!refresh)})
            .catch(err => console.log(err))
    }

    // const handleDelete = (deleteId) => {
    //     axios.delete(`http://localhost:8000/api/pirates/${deleteId}`)
    //         .then(res=>{
    //             setRefresh(!refresh)
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="container">
            <Link to="/pirates/new"> Recruit a Pirate! </Link>
            {
                pirates?
                <table className="table">
                    <thead>
                        <tr>
                            <th> </th>
                            <th> Pirate's Name </th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pirates.map((pirate, i) => (
                                <tr>
                                    <td><img src={pirate.image} alt="this pirate" width="200" height="200" /></td>
                                    <td> {pirate.name} </td>
                                    <td><Link to={`/pirates/${pirate._id}`} className="btn btn-primary"> Check for Scurvy! </Link></td>
                                    <td><button type="button" onClick={() => handleDelete(pirate._id)} className="btn btn-danger"> Walk the Plank! </button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>:
                <h1> No Pirates have joined ye crew! Go get some! </h1>
            }

        </div>
    )
}

export default Dashboard