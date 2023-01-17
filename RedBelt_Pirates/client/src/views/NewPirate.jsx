import React, {useState} from "react"
import axios from "axios"
import {Link, useHistory} from "react-router-dom"

const NewPirate = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [numberOfTreasures, setNumberOfTreasures] = useState(0)
    const [catchPhrase, setCatchPhrase] = useState("")
    const [crewPosition, setCrewPosition] = useState("")
    const [pegLeg, setPegLeg] = useState(false)
    const [eyePatch, setEyePatch] = useState(false)
    const [hookHand, setHookHand] = useState(false)
    const [errors, setErrors] = useState([])
    const history = useHistory()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("Hello?")
        axios.post(`http://localhost:8000/api/pirates`, {name, image, numberOfTreasures, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand})
            .then(res => history.push("/")) //this redirects to dashboard
            .catch(err => {
                const errRes = err.response.data.errors
                console.log(errRes)
                const errArr = []
                for(const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message)
                }
                setErrors(errArr)
            })
        }

    const clearForm = () => {
        setName("")
        setImage("")
        setNumberOfTreasures(0)
        setCatchPhrase("")
        setCrewPosition("")
        setPegLeg(false)
        setEyePatch(false)
        setHookHand(false)
    }

    return(
        <div>
            <h1>Tell me about this here Pirate</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pirate's Name</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                </div>
                <div>
                    <label>Pirate's Picture (URL)</label>
                    <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)} className="form-control" />
                </div>
                <div>
                    <label>Number of Treasures Found</label>
                    <input type="number" name="numberOfTreasures" value={numberOfTreasures} onChange={e => setNumberOfTreasures(e.target.value)} className="form-control" />
                </div>
                <div>
                    <label>Pirate's Catch Phrase</label>
                    <input type="text" name="catchPhrase" value={catchPhrase} onChange={e => setCatchPhrase(e.target.value)} className="form-control" />
                </div>
                <div>
                    <label>Crew Position</label>
                    <select name="crewPosition" value={crewPosition} onChange={e => setCrewPosition(e.target.value)} className="form-control">
                        <option value=""> Please select a role </option>
                        <option value="captain"> Captain </option>
                        <option value="firstmate"> First Mate </option>
                        <option value="quartermaster"> Quartermaster </option>
                        <option value="boatswain"> Boatswain </option>
                        <option value="powdermonkey"> Powdermonkey </option>
                    </select>
                </div>
                <div>
                    <h5>Extra-Piratey stuff?</h5>
                    <div>
                        <label>Peg leg</label>
                        <input type="checkbox" name="pegLeg" checked={pegLeg} onChange={e => setPegLeg(e.target.checked)} className="" />
                    </div>
                    <div>
                        <label>Eye patch</label>
                        <input type="checkbox" name="eyePatch" checked={eyePatch} onChange={e => setEyePatch(e.target.checked)} className="" />
                    </div>
                    <div>
                        <label>Hook hand</label>
                        <input type="checkbox" name="hookHand" checked={hookHand} onChange={e => setHookHand(e.target.checked)} className="" />
                    </div>
                </div>
                <button className="btn btn-success"> Add this Pirate </button>
                <button type="button" onClick={clearForm} className="btn btn-default"> Reset </button>
            </form>
            <Link to="/"> Back to Dashboard </Link>
            {
                errors.map((err, i) => (
                    <p style={{color: "red"}} key={i}> {err} </p>
                ))
            }
        </div>
    )
}

export default NewPirate