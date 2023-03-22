import { useEffect } from "react"
import { ALLOWED_CHARACTERS_MORSE, morseToAlphabet, MORSE_CODE } from "./Utilities"
function Decode({morseEntered, setMorseEntered, morseElement, setMorseElement, decodedText, setDecodedText}){
    function handleOnInput(e){
        const inputCharacter = e.target.value[morseEntered.length]
        for (let x = 0; x< ALLOWED_CHARACTERS_MORSE.length ; x++){
            if(inputCharacter != " "){
                if(inputCharacter && inputCharacter ==  ALLOWED_CHARACTERS_MORSE[x]){
                    setMorseEntered(e.target.value )
                }
            } else{
                setMorseEntered(e.target.value)
            }
        }
        !inputCharacter && setMorseEntered(e.target.value)
    }
    useEffect(()=>{
        const [morse_element, decoded_text] = morseToAlphabet(morseEntered, MORSE_CODE);
        setMorseElement(morse_element);
        setDecodedText(decoded_text);
    }, [morseEntered])

    return(
        <>
            <form onSubmit={(e)=> e.preventDefault()}>
                <input  
                    type="text"
                    className="inputElement"
                    placeholder="- -.-- .--. ."
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="off"
                    value={morseEntered}
                    onChange={handleOnInput}
                />
            </form>
            <div className="inputView">
                {morseEntered ? <h3 className="break-all ">{morseEntered}</h3> : <h3>Your morse code will appear here.</h3>}
            </div>
            <div className="outputViewBorder">
                <div className="outputView bg-[#121212]">
                    {morseEntered ? <h3>{decodedText ? decodedText : <span className="text-red-900">Invalid Morse Code or Entered Wrongly</span>}</h3> : <h3>Decoded text will appear here.</h3>}
                </div>
            </div>

        </>
    )
}

export default Decode