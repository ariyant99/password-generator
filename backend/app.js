const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
app.get('/newPassword', (req,res) => {
    const length = 12;
    const numbers = "0123456789";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "!@#$%^&*()_+";
    let password = "";
    
    // Ensure password contains at least one of each required character type
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
    password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    
    // Fill the rest of the password length with random characters from all types
    const allCharacters = numbers + lowerCaseLetters + upperCaseLetters + specialCharacters;
    for (let i = password.length; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    
    // Shuffle the password to mix the initial characters
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    console.log(password);
    res.status(200).json({
        password : password
    })
})



app.listen(8080, ()=>{
    console.log("app is running: ", 8080)
})