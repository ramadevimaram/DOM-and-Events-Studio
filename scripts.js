// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    //buttons
    let takeOffButton = document.getElementById('takeoff'); 
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    
    let buttons = document.querySelector("body > div:nth-child(2) > div:nth-child(3)");
    let up = buttons.getElementsByTagName("button")[0];
    let down = buttons.getElementsByTagName("button")[1];
    let right = buttons.getElementsByTagName("button")[2];
    let left = buttons.getElementsByTagName("button")[3];

    //rocket
    let rocket = document.querySelector("#shuttleBackground img");
    //html elements
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight=document.getElementById("spaceShuttleHeight");
    takeOffButton.addEventListener("click", function(){
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(result){
            flightStatus.innerHTML="Shuttle in flight";
            shuttleBackground.style.backgroundColor="blue";
            shuttleHeight.innerHTML=10000;
        }
    });

    landButton.addEventListener("click", function(){
        // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        alert("The shuttle is landing. Landing gear engaged.");
        // The flight status should change to "The shuttle has landed."
        flightStatus.innerHTML="The shuttle has landed.";
        // The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor="green";
        // The shuttle height should go down to 0.
        shuttleHeight.innerHTML=0;
    });

    abortButton.addEventListener("click", function(){
        //A window confirm should let the user know "Confirm that you want to abort the mission." 
        let abort = window.confirm("Confirm that you want to abort the mission.");
        //If the user wants to abort the mission, then add parts b-d.
        if(abort){
            //The flight status should change to "Mission aborted."
            flightStatus.innerHTML="Mission aborted.";
            //The background color of the shuttle flight screen should change from blue to green.
            shuttleBackground.style.backgroundColor="green";
            //The shuttle height should go to 0.
            shuttleHeight.innerHTML=0;
        }
        
    });
//     When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:

    up.addEventListener("click", function(){
        // The rocket image should move 10 px in the direction of the button that was clicked.
        rocket.style.transform="translateY(-10px)";
        // If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
        // 23.8.3. Bonus Mission
        
    });
});