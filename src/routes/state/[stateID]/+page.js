// @ts-nocheck
export const load = ({params, fetch }) =>{
    
    // @ts-ignore
    const fetchPosts = async (id) =>{
        const res = await fetch(`https://api.covidtracking.com/v1/states/current.json`)
        const data = await res.json()
        // console.log(data)
        return data.filter(d => d.state === id)
    }

    return {
        posts: fetchPosts(params.stateID)
    }
    
}