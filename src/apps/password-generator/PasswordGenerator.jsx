import React, { useState, useEffect } from 'react';
import { useDocumentTitle, useClipboard, useLocalStorage } from 'xooks';
import { showNotification,NotificationsProvider } from '@mantine/notifications';

import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './characters'
// import generateText from './generate-text';
import Settings from './Settings/Settings';
import Preview from './Preview/Preview';

export default function PasswordGenerator() {
  useDocumentTitle('Password Generator');
  const INITIAL_VALUES = {
    length: 8,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  };
  const clipboard = useClipboard();
  const ls = useLocalStorage({ key: '@omatsuri/password-generator', delay: 1000 });
  const initialValues = ls.retrieve() || INITIAL_VALUES;

  const [password, setPassword] = useState('')
  const [includeUppercase, setIncludeUppercase] = useState(initialValues.includeUppercase)
  const [includeLowercase, setIncludeLowercase] = useState(initialValues.includeLowercase)
  const [includeNumbers, setIncludeNumbers] = useState(initialValues.includeNumbers)
  const [includeSymbols, setIncludeSymbols] = useState(initialValues.includeSymbols)
  const [length, setLength] = useState(initialValues.length || 8);

  useEffect(() => {
    ls.save({ length,includeUppercase,includeLowercase,includeNumbers,includeSymbols});
    
    clipboard.reset();
    return ls.cancel;
  }, [length, includeUppercase,includeLowercase,includeNumbers,includeSymbols]);

  const changeState=(state,value)=>{
    switch(state){
      case "setIncludeUppercase":
        return setIncludeUppercase(!value);
      case "setIncludeLowercase":
        return setIncludeLowercase(!value);
      case "setIncludeNumbers":
        return setIncludeNumbers(!value);
        case "setIncludeSymbols":
      return setIncludeSymbols(!value);  
      default:
        return ;  
    }
  }

  const values = {includeUppercase,includeLowercase,includeNumbers,includeSymbols };
  
  const handleSubmit=()=>{
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      showNotification({
        title: 'Oops!! You Forgot Something',
        message: 'You must Select atleast one option',
        color: 'red',
        autoClose: 2000,
      })
      setPassword();
      return;
    }
    let characterList = ''

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters
    }

    if (includeNumbers) {
      characterList = characterList + numbers
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters
    }

    setPassword(createPassword(characterList));
  }
  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < length; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    clipboard.copy(password);
    return password
  }

  return (
    <div>
      <Settings
        length={length}
        onLengthChange={setLength}
        values={values}
        changeState={changeState}
        onSubmit={handleSubmit}
        copied={clipboard.copied}
      />
       <NotificationsProvider position="top-right" zIndex={2077}>

       </NotificationsProvider>
      {password && <Preview text={password} />}
    </div>
  );
}
