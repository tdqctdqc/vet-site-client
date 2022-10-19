import ProvinceSelector from '../ProvinceSelector/ProvinceSelector';



function AddVet({host}) {

    const vetData = {
        name: 'John Doe',
        city: 'Toronto',
        province: 'ON'
    }

    async function defaultAddVetReq() {
        const url = host + '/vet/addVet';
        
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
        <form action={host + '/vet/addVet'} method="post"
            target="hiddenFrame">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" minLength="2" maxLength="255" required/>
            <label htmlFor="city">City:</label>
            <input type="text" name="city" minLength="2" maxLength="255" required/>

            <label htmlFor="province">Province:</label>
            <ProvinceSelector/>


            <input type="submit" />
        </form>
        <button onClick={defaultAddVetReq}>Add Vet</button>
        <iframe title="hiddenFrame" name="hiddenFrame" width="0" height="0" border="0"></iframe>
    </>);
}

export default AddVet;