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
    
    const fetchStateCurrent = async() =>{
        const res = await fetch('https://api.covidtracking.com/v1/states/current.json');
        const stateData = await res.json()
        //console.log(stateData,'stateData')
        const parsedState = parsers.stateTable(stateData)
        return parsedState
    }
    
    return {
        country:fetchUSCurrent(),
        state:fetchStateCurrent()
    }
}