import { useParams } from "react-router-dom";
import ProvinceSelector from "../ProvinceSelector/ProvinceSelector";

function VetAddClient({host}) {
    const {id} = useParams();
    return <>
        <form action={host+'/vet/'+id+'/addClient'} method='post' target="hiddenFrame">
            <label htmlFor="name">Client Name: </label>
            <input type="text" name="name" minLength="2" maxLength="255" required/>
            <label htmlFor="city">City:</label>
            <input type="text" name="city" minLength="2" maxLength="255" required/>
            <label htmlFor="province">Province:</label>
            <ProvinceSelector/>
            <input type="submit" />
        </form>
        <iframe title="hiddenFrame" name="hiddenFrame" width="0" height="0" border="0"></iframe>

    </>;    
}

export default VetAddClient;