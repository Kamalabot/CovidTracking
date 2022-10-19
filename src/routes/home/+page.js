import parsers from '../../lib/parsers'

//@ts-nocheck
export const load = async({fetch}) =>{
    const fetchUSCurrent = async() =>{
        const res = await fetch('https://api.covidtracking.com/v1/us/current.json')
        const data = await res.json()
        //console.log(data)
        const parsedData = parsers.usStats(data)
        return parsedData
    }

    return {
        country:fetchUSCurrent()
    }
}