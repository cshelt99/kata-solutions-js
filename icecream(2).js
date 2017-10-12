var icecream = ["chocolate", "vanilla", "strawberry","fish"]
badcream = icecream[2];
goodcream = icecream[0];
goodstuff = icecream[1];
var things = prompt("Pick your flavor my guy(Pick chocolate, vanilla, strawberry ,or fish.");
if (things == badcream) {
	alert =("Why would you choose "+icecream+" thats an awful flavor!");
}
else if(things == goodstuff) {
	alert =("Here is your "+icecream+" icecream");
}
else if(things == goodcream) {
    alert =("Great choice my man here is your "+icecream+"");
	}
else if(things != icecream) {
	alert=("We don't have "+things+" we are an icecream shop");
}