import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Convert= ({text, language})=> {
    const [translated, setTranslated] = useState('')
    useEffect(()=>{
        const translate = async()=>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{} ,{
        params: {
            q:text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
        });
        setTranslated(data.data.translations[0].translatedText);
        }
        const timeoutId = setTimeout(() => {
            if (text) {
              translate();
            }
          }, 500);
          return () => {
            clearTimeout(timeoutId);
          };
        
        
    },[language, text]);


    return (
        <div>
            <h2>{translated}</h2>
        </div>
    )
}

export default Convert

