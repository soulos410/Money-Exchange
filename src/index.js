module.exports = function makeExchange(currency) {
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency === 0) return {};
    let answer = {
    	H : 0,
    	Q : 0,
    	D : 0,
    	N : 0,
    	P : 0
    }
   let arrayOfValues = [50,25,10,5,1] , arrayOfKeys = ['H','Q','D','N','P'];
   let index = 0, finalAnswer = '';
   while(currency > 0){
    	answer[arrayOfKeys[index]] = Math.floor(currency / arrayOfValues[index]);
    	currency = currency - ((Math.floor(currency / arrayOfValues[index])) * arrayOfValues[index]);
    	index++;
    } 
    for (let key in answer) {
    	if(answer[key] === 0) {delete answer[key];}
    	else{
    		finalAnswer += (key+': '+answer[key]);
    	}
	}
	return answer;
}