function AddVet(host) {

    const vetData = {
        
    }
    async function sendAddVetReq() {
        fetch(host, {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({a: 1, b: 2})
        })
        .then();
    }
    return (<>
        <button onClick={sendAddVetReq}>Add Vet</button>
    </>);
}

export default AddVet;