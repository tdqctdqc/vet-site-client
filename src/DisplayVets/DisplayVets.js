import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function DisplayVets({host}) {
    const [vetData, setVetData] = useState([]);
    useEffect(() => {
        const url = host + '/vet/';
        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            setVetData(data);
        })
    }, [host]);

    return (
        <>
        <h1>Vets</h1>
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
                    vetData.map(vet => {
                        return <tr key={vet.id}>
                            <td> <Link to={`/vet/${vet.id}`}>{vet.name}</Link></td>
                            <td>{vet.city}</td>
                            <td>{vet.province}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
    );
}

export default DisplayVets;