import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JsonChart from "../JsonChart/JsonChart";
import { Link } from "react-router-dom";

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
            console.log(data);
        });
    }, [host, id]);
    return (<>
    <h1>Patients</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Species</th> 
                    <th>Client</th>
                </tr>
            </thead>
            <tbody>
                {
                    patientsData.map(patient => {
                        return <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.species}</td>
                            <td><a href={`/vet/${id}/clients/${patient.client}`}>{patient.clientName}</a></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default DisplayVetPatients;