
// a dictionary with the keys versus names of mp3 audio files 

const keysAndSounds = {
    "w":"tom-1",
    "a":"tom-2",
    "s":"tom-3",
    "d":"tom-4",
    "j":"snare",
    "k":"crash",
    "l":"kick-bass"
}

// DOM selecting all buttons in a list 

const buttons = document.querySelectorAll('button');

// the main function that takes an input of a track name and fetches the track then plays audio using new Audio(track name)

function gotClicked(soundName){
    let sound = new Audio("sounds/"+soundName+ ".mp3");
    sound.play();
}

// ***** PLAY SOUNDS BY EVENTLISTENER CLICK RATHER THAN KEYBOARD

for (let i = 0; i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        let c = this.innerHTML;
// dictionary with keys to help with sounds
        gotClicked(keysAndSounds[c]);
        buttonAnimation(c);
    });
}

// ******

// A global event listener using "Keydown" that listens for keydown with a function.key to grab keyboard strokes

document.addEventListener("keydown",function(keyPressed){
    let letterDown = keyPressed.key;
    letter = keysAndSounds[letterDown];
    console.log(letter)
    gotClicked(letter);   // add the main function to play audio with input from keydown funciton.key
    buttonAnimation(letterDown);
})

// annimate button press or keydown

function buttonAnimation(buttonLetter){
//    console.log('.'+ buttonLetter)
    let activebutton = document.querySelector('.'+ buttonLetter);
    activebutton.classList.add("pressed");        // add styling using classList.add(CLASS from stylesheet)

    // set a timeout function to remove the background from a button using .remove

    setTimeout(function(){activebutton.classList.remove("pressed");},100)  // remove styling using classList.remove(CLASS from stylesheet)

}


// boring way to replace a dictionary

 // if (c == "w"){
        //     gotClicked("tom-1");
        // }else if (c == "a"){
        //     gotClicked("tom-2");
        // }else if (c == "s"){
        //     gotClicked("tom-3");
        // } else if (c == "d"){
        //     gotClicked("tom-4");
        // } else if (c == "j"){
        //     gotClicked("snare");
        // } else if (c == "k"){
        //     gotClicked("crash");
        // }else if (c == "l"){
        //     gotClicked("kick-bass");
        // }      
