import { useEffect } from "react"
import { ALLOWED_CHARACTERS, alphabetToMorse, MORSE_CODE } from "./Utilities"
function Generate({genText, setGenText,  morseCodeElement, setMorseCodeElement, morseCode, setMorseCode}){

    function handleOnInput(e){
        const inputCharacter = e.target.value[genText.length]
        for (let x = 0; x< ALLOWED_CHARACTERS.length ; x++){
            if(inputCharacter != " "){
                if(inputCharacter && inputCharacter.toUpperCase() ==  ALLOWED_CHARACTERS[x]){
                    setGenText(e.target.value )
                }
            } else{
                setGenText(e.target.value)
            }
        }
        !inputCharacter && setGenText(e.target.value)
    }

    useEffect(()=>{
        let [morse_generated_element, morse_generated_text] = alphabetToMorse(genText, MORSE_CODE)
        if(morse_generated_element){
            setMorseCodeElement(morse_generated_element)
            setMorseCode(morse_generated_text)
        }
        if(genText == ""){
            setMorseCode("")
        }
    }, [genText])
    return(
        <>
            <form onSubmit={(e)=> e.preventDefault()}>
                <input 
                    className="inputElement"
                    type="text"
                    placeholder="e.g., A B Z 1 4 3"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="off"
                    value={genText}
                    onChange={handleOnInput}
                />
            </form>
            <div className="inputView">
                {genText ? <h3 className="break-all ">{genText}</h3> : <h3>Your entered text will appear here.</h3>}
            </div>
            <div className="outputViewBorder">
                <div className="outputView">
                    {genText ? <h3>{morseCode}</h3> : <h3>Your Morse Code will appear here.</h3>}
                </div>
            </div>
        </>
    )
}
export default Generate