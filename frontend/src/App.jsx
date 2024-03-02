import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [password, setPassword] = useState('');
  const generatePassword = () =>{
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
  setPassword(password);
  console.log(password);
  }

  useEffect(()=>{
    generatePassword();
  },[])

  const copyPassword = () => {
    alert("text copied ", password)
    navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div>
        <button onClick={generatePassword}>Generate passowrd</button>
        <div>
          <div style={{marginTop: '20px'}}>
            {password}
          <button onClick={copyPassword} style={{marginLeft: '20px'}}><i class="fa-solid fa-copy"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
