import React, { createContext, useState } from 'react';

import Navigation from '../Navigation/Navigation';
import SaladMaker from '../SaladMaker/SaladMaker';
import UserContext from '../User/User';
import FileNamer from '../FileNamer/FileNamer';
import TextInformation from '../TextInformation/TextInformation';
import CustomForm from '../CustomForm/CustomForm';
import CustomForm2 from '../CustomForm2/CustomForm2';

export const TextContext = createContext();

const user = {
  name: 'Michael',
  favorites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  const [text, setText] = useState('');

  return(
    <UserContext.Provider value={user}>
       <Navigation />
       <SaladMaker />
       <FileNamer />
       <CustomForm />
       <CustomForm2 />
       <TextContext.Provider value={text}>
          <div className='wrapper' style={{padding: '10px'}}>
            <label htmlFor='text'>
              Add your Text here:
              <br />
              <textarea 
                id='text'
                name='text'
                rows='10'
                cols='100'
                onChange={e => setText(e.target.value)}
              />
            </label>
            <TextInformation />
          </div>
       </TextContext.Provider>
    </UserContext.Provider>
  );  
}

export default App;
