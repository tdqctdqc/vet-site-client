function AddVet({host}) {

    const vetData = {
        name: 'John Doe',
        city: 'Toronto',
        province: 'ON'
    }
    async function sendAddVetReq() {

        const url = host + '/addVet';
        
        fetch(url, {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(vetData)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    return (<>
        <button onClick={sendAddVetReq}>Add Vet</button>
    </>);
}

export default AddVet;