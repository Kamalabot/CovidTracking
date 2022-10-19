//@ts-nocheck
import parsers from "../../lib/parsers";

export const load = async({fetch}) =>{
    const fetchData = async()=>{
        const res = await fetch('https://api.covidtracking.com/v1/us/daily.json')
        const recpt = await res.json();
        // console.log(recpt)
        const intermid = parsers.historicUS(recpt)
        return intermid[0].data.slice(0,20)   
    }

    return {
        parseData: fetchData()
    }
}