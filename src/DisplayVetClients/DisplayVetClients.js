import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonChart from "../JsonChart/JsonChart";

function DisplayVetClients({host}) {

    const [clientData, setClientData] = useState([]);
    
    const { id } = useParams(); 
    
    useEffect(() => {
        const url = host + '/vet/' + id + '/clients';
        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClientData(data);
        });
    }, [host, id]);

    return (<>
            <h2>Clients</h2>
        {
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Province</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientData.map(client => {
                            return <tr>
                                <td> <a href={`/vet/${id}/clients/${client.id}`}>{client.name}</a></td>
                                <td>{client.city}</td>
                                <td>{client.province}</td>
                            </tr>
                        })
                    }
                </tbody>
                
            </table>
        }
    </>);
}

export default DisplayVetClients;