import { useEffect, useState } from "react";

function JsonChart({dataArray, keysToUse}) {
    function firstLetterCapital(str) {
        return str[0].toUpperCase() + str.slice(1, str.length)
    }

    if(!keysToUse) return <>Loading</>;
    if(keysToUse.length === 0) return <>No results to display</>
    return(
        <table>
            <thead>
                <tr>
                    {
                        keysToUse.map(k => {
                            return <th key={k}>{firstLetterCapital(k)}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    dataArray.map((data, index) => {
                        return <tr key={index}>
                            {
                                keysToUse.map(k => {
                                    return <td key={k}> {data[k]} </td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    );
}
export default JsonChart;