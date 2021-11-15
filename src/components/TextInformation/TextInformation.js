import React, { useReducer } from 'react';
import CharacterCount from '../CharacterCount/CharacterCount';
import CharacterMap from '../CharacterMap/CharacterMap';
import WordCount from '../WordCount/WordCount';

const reducer = (state, action) => {
    return{
        ...state,
        [action]: !state[action]
    }
}

const TextInformation = () => {
    const [tabs, toggleTabs] =useReducer(reducer, {
        characterCount: true,
        wordCount: true,
        characterMap: true
    });
    
    return(
        <div>
            <button onClick={() =>toggleTabs('characterCount')}>CharacterCount</button>
            <button onClick={() => toggleTabs('wordCount')}>WordCount</button>
            <button onClick={() => toggleTabs('characterMap')}>CharacterMap</button>
            <CharacterCount show={tabs.characterCount} />
            <WordCount show={tabs.wordCount} />
            <CharacterMap show={tabs.characterMap} />
        </div>
    );
}

export default TextInformation;