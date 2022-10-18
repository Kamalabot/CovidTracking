//@ts-nocheck
export const load = async({fetch}) =>{
    const fetchUSCurrent = async() =>{
        const res = await fetch('https://api.covidtracking.com/v1/us/current.json')
        const data = await res.json()
        return data
    }

    return {
        country:fetchUSCurrent()
    }
}