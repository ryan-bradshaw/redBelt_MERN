import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link, useParams} from "react-router-dom"

const OnePirate = () => {
    const {id} = useParams()
    console.log(id)
    const [pirate, setPirate] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        {
            pirate?
            <div>
                <h3>{pirate.name}</h3>
                <div>
                    <img src={pirate.image} alt="this pirate!" width="200" height="200" />
                    <h2>{pirate.catchPhrase}</h2>
                </div>
                <div>
                    <h2>About</h2>
                    <p>Position: {pirate.crewPosition}</p>
                    <p>Treasures Found: {pirate.numberOfTreasures}</p>
                    <p>Peg Leg: {pirate.pegLeg?"Yea":"Nay"}</p>
                    <p>Eye Patch: {pirate.eyePatch?"Yea":"Nay"}</p>
                    <p>Hook Hand: {pirate.hookHand?"Yea":"Nay"}</p>
                </div>
            </div>:
            <h1> There be a problem, all the rum's gone! <Link to="/"> Go Back </Link></h1>
        }
        </>
    )
}

export default OnePirate