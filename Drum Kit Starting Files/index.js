
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
        gotClicked(keysAndSounds[c])
       
    });
}

// ******

// A global event listener using "Keydown" that listens for keydown with a function.key to grab keyboard strokes

document.addEventListener("keydown",function(keyPressed){
    gotClicked(keysAndSounds[keyPressed.key])    // add the main function to play audio with input from keydown funciton.key
    
})


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