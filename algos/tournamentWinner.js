//o(max(n,k)) //O(number of teams)
function tournamentWinner(competitions, results) {
  // Write your code here.
	let team = {};
	
	for(let i = 0; i< competitions.length; i++){
		const [homeTeam, awayTeam] = competitions[i];
		const winningSide = results[i]; 
		
		team[homeTeam] = (team[homeTeam] || 0);
		team[awayTeam] = (team[awayTeam] || 0);
		
		const winningTeam = winningSide === 1 ? homeTeam : awayTeam;
		team[winningTeam] += 3;
	}
	// console.log(team)
	const winner = ['', -Infinity] //O(1) space
	for(const teamName in team){
		if(team[teamName] > winner[1]) winner[0] = teamName, winner[1] = team[teamName]
	}
  return winner[0];
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
