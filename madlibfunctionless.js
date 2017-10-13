var sentence = [];
var replacements = [];
var index = 0;



	index = 0;
do {
	console.log(index);
		sentence[index] = prompt(replacements+index+ ":");
	index++;
}
	while(sentence[index - 1] != "^") 
		
	
	sentence.pop();
	console.log(sentence);
	
