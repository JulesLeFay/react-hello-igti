import { useEffect, useState } from 'react';
import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import OnlineOffline from './components/OnlineOffline';
import { getNewId } from './components/services/idService';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import { getAgeFrom } from './helpers/dateHelpers';

export default function App() {
  const [name, setName] = useState('Júlio');
  const [birthDate, setBirthDate] = useState('1984-10-15');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }
    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffline);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOffline);
    };
  }, []);

  function handleNameChange(newName) {
    setName(newName);
  }
  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    <>
      <Header>react-hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline} />

        {showTimer && (
          <div className="text-right mt-4">
            <Timer />
          </div>
        )}

        <CheckboxInput
          id={getNewId()}
          labelDescription="Ativar Timer"
          onCheckboxChange={toggleShowTimer}
        />

        <TextInput
          id={getNewId()}
          labelDescription="Digite o seu nome: "
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />
        <DateInput
          id={getNewId()}
          labelDescription="Informe sua data de nascimento"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui{' '}
          {getAgeFrom(birthDate)} anos.
        </p>
      </Main>
    </>
  );
}
