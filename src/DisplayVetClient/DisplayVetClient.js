import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonChart from "../JsonChart/JsonChart";

function DisplayVetClient({host}) {

    const [clientData, setClientData] = useState({});
    const [patientsData, setPatientsData] = useState([]);
    
    const { vetId, clientId } = useParams(); 
    
    useEffect(() => {
        const url = host + '/vet/' + vetId + '/clients/' + clientId;
        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            setClientData(data);
        });
    }, [host, vetId, clientId]);

    useEffect(() => {
        const url = host + '/vet/' + vetId + '/clients/' + clientId + '/patients';
        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            setPatientsData(data);
        });
    }, [host, vetId, clientId, clientData]);


    return (<>
        <div>
            <h2>{clientData.name}</h2> 
            Location: {clientData.city + ', ' + clientData.province}
            {/* {
                JSON.stringify(clientData)
            }  */}
        </div>
        <div>
            <h3>Patients</h3>
            {/* {
                <JsonChart dataArray={patientsData} keysToUse={['name', 'species', 'history']}/>
                
            
            } */}
            <table>
                <thead>
                   <tr>
                        <th>Name</th>
                        <th>Species</th>
                        <th>History</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        patientsData.map(patient => {
                            return <tr key={patient.id}>
                                <td>{patient.name}</td>
                                <td>{patient.species}</td>
                                <td>{patient.history}</td>
                            </tr>
                        })
                    } 
                </tbody>
                
            </table>
        </div>
        
        <form action={host + `/vet/${vetId}/clients/${clientId}/patients`} method="post"
            target="hiddenFrame">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" minLength="2" maxLength="255" required/>
            
            <label htmlFor="species">Species:</label>
            <input type="text" name="species" minLength="2" maxLength="255" required/>
            
            <label htmlFor="history">History:</label>
            <input type="text" name="history"/>
            
            <input type="submit" />
        </form>
        <iframe title="hiddenFrame" name="hiddenFrame" width="0" height="0" border="0"></iframe>
    </>);
}

export default DisplayVetClient;