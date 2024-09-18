import React, { useState } from 'react'

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);   

  };

  return (
    <>
     <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="English">English</option>   

      <option value="Swahili">Swahili</option>
      <option value="Somali">Somali</option>
    </select>
    </>
   
  );
}

export default LanguageSelector