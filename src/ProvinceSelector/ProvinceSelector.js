import provinces from "../provinces";

function ProvinceSelector() {
    return <select name="province">
        {
            provinces.map(prov => {
                return <option key={prov} value={prov}>{prov}</option>
            })
        }
    </select>;
}

export default ProvinceSelector;