import React, { useState, useEffect } from 'react';
import './App.css';
import ShowForm from './components/ShowForm';
import Form from './components/Form';
import Header from './components/Header';
import GenerateUserName from './components/GenerateUserName';
import Info from './components/InformationWindow';

export default function App() {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    age: ''
  });

  const handleFieldChange = (fieldName, e) => {
    setUser({
      ...user,
      [fieldName]: e.target.value
    });
  };

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    // Add any side effects you want to run on showForm change
  }, [showForm]);

  return (
    <div className="app-container">
      <Header />
      <Info />
      <Form
        name={user.name}
        surname={user.surname}
        age={user.age}
        onChangeName={(e) => handleFieldChange('name', e)}
        onChangeSurname={(e) => handleFieldChange('surname', e)}
        onChangeAge={(e) => handleFieldChange('age', e)}
      />
      <div>{showForm ? <ShowForm name={user.name} surname={user.surname} age={user.age} /> : ""}</div>
      <button
        className={(user.name && user.surname && user.age) ? '' : 'disabled'}
        disabled={!(user.name && user.surname && user.age)}
        onClick={handleButtonClick}
      >
        {!showForm ? "Submit" : "Hide"}
      </button>
      <span style={{ marginLeft: '8px' }} />
      <button
        onClick={() => setUser({ name: "", surname: "", age: "" })}
      >
        Clear
      </button>
      <GenerateUserName name={user.name} surname={user.surname} age={user.age} />
    </div>
  );
}