import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
      label: "Arabic",
      value: "ar",
    },
    {
        label: "French",
        value: "fr",
    },
    {
        label: "Russian",
        value: "ru",
    },
    {
        label: "English",
        value: "en",
    }
  ];

function Translate() {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text to translate</label>
                    <input value={text} onChange={(e)=> setText(e.target.value)} />
                </div>
            </div><br />
            
            <Dropdown
            label='Select a Language'
          options={options}
          selected={language}
          onSelectedChange={setLanguage}
        />
        <hr />
        <h3 className="header">Output</h3>
        <Convert text={text} language={language} />
        </div>
    )
}

export default Translate
