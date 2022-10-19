// @ts-nocheck

import stateNames from "../../../lib/stateNames";
import parsers from '../../../lib/parsers'

export const load = ({params, fetch }) =>{
	
    // @ts-ignore
    const fetchPosts = async (id) =>{
		const fullStateName = stateNames.find(s => s.abbreviation === params.stateID).name;
		console.log(fullStateName)
	
      	const responseSt = await fetch('https://api.covidtracking.com/v1/states/current.json');
		const dataSt = await responseSt.json();
		
		//console.log(dataSt)
		const responseHi = await fetch('https://api.covidtracking.com/v1/us/daily.json');
		const dataHi = await responseHi.json()
		
		//console.log(dataSt, dataHi)
  		const stats = parsers.stateStats(params.stateID,dataSt );
		const historic = parsers.historicUS(dataHi);
		
      return { state: fullStateName, stats, historic };
    }

    return {
        posts: fetchPosts(params.stateID)
    }
    
}