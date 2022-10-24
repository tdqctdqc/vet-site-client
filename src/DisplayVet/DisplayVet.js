import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DisplayVet({host}) {

    const [vetData, setVetData] = useState({});
    
    const { id } = useParams(); 
    
    useEffect(() => {
        const url = host + '/vet/' + id;
        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            setVetData(data[0]);
        });
    }, [host, id]);

    return (<>
        <h1>{vetData.name}</h1>
        <div>
            <Link to={`/vet/${id}/clients`}>See Clients</Link>
        </div>
        <div>
            <Link to={`/vet/${id}/patients`}>See Patients</Link>
        </div>
    </>);
}

export default DisplayVet;