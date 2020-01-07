function BAKpwGen() {

    //Declaring objects and character sets
    var charsetNums = "0123456789";
    var charsetLows = "abcdefghijklmnopqrstuvwxyz";
    var charsetUps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charsetSpecs = "!@#$%^&*()_-+={}[]:;<>?/";

    //Introduces program and prompts user to continue
    var runPwGen = confirm("Welcome to Password Generator!  Your may choose a password length between 8 and 128 characters.  Would you like to continue?");

    //Reset our variables to empty values 
    var charCollection = "";
    var singleChar = "";
    var resultPW = [];

    //User input: How many characters...?
    do {

        var validNum = false;  
        console.log("Initialized: validNum = " + validNum);

        var pwChars = Number(prompt("How many characters would you like your password to be? [8 - 128] "));   
        console.log("User input: pwChars = " + pwChars);

        //Validating input...
        if (Number.isInteger(pwChars) && (pwChars >= 8) && (pwChars<=128)) { 
            var validNum = true;    
            console.log("Input validated: validNum is " + validNum); 
        } 
        else {
            alert("Invalid input!  You must type an integer between 8 and 128."); 
            console.log("Input rejected: validNum is" + validNum); 
        }
    }
    while ( validNum == false );


    //User input: Other criteria... ALSO, building the character collection
    if (confirm("Shall we include numbers?")) {
    charCollection = charCollection + charsetNums;
    }
    if (confirm("Shall we include uppercase letters?")) {
    charCollection = charCollection + charsetUps;
    }
    if (confirm("Shall we include lowercase letters?")) {
    charCollection = charCollection + charsetLows;
    }
    if (confirm("Shall we include special characters?")) {
    charCollection = charCollection + charsetSpecs;
    }
        console.log(charCollection);

    //Converts our character collection into a navigable array    
    charCollection = charCollection.split('');
        console.log(charCollection);


    //Generate password according to user criteria
    for (var i = 0 ; i < pwChars ; i++ ) {
        singleChar = charCollection[(Math.floor(Math.random() * charCollection.length))];
        resultPW = resultPW + singleChar;
        console.log("Appended: " + singleChar + " , to create " + resultPW);
    }       

    var password = document.getElementById("password");
    password.innerHTML = resultPW;
    password.style.color = "black";
    password.style.fontWeight = "800";
    password.style.fontSize = "1.5em";
    password.style.fontStyle = "normal"; 
    password.style.fontFamily = "monospace";   

    console.log("...and we're done!");
}