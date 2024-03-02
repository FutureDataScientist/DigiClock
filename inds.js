
const mininum=1;
const maxmum=100;
const answer=Math.floor(Math.random()*(maxmum-mininum+1));

console.log(answer);

let attempts=0;
let guess;
let running=true;

while (running) {
    guess=window.prompt(`guess a number ${mininum}-${maxmum}`);
    guess=Number(guess);
    if(isNaN(guess)) {
        window.alert("please enter  a valid number");
}
else if(guess<mininum ||guess>maxmum) {
    window.alert("please enter a valid number");
}
else {
    attempts++;
    if(guess<answer){
        window.alert("TOO LOW! TRY AGAIN");
    }
    else if(guess>answer){
        window.alert("TOO HIGH!TRY AGAIN");
    }
    else {
        window.alert(`CORRECT! THE ANSWER WAS ${answer}.it took you ${attempts} attempts`);
        running = false;
    }
}

}