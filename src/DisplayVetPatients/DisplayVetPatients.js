import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JsonChart from "../JsonChart/JsonChart";

function DisplayVetPatients({host}) {
    const [patientsData , setPatientsData] = useState([]);
    const { id } = useParams(); 
    useEffect(() => {
        const url = host + '/vet/' + id + '/patients';
        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            setPatientsData(data);
        });
    }, [host, id]);
    return <JsonChart dataArray={patientsData}/>
}

export default DisplayVetPatients;