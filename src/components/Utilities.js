const ALLOWED_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const ALLOWED_CHARACTERS_MORSE = '.-'
const MORSE_CODE = {
   A: ".-",
   B: "-...",
   C: "-.-.",
   D: "-..",
   E: ".",
   F: "..-.",
   G: "--.",
   H: "....",
   I: "..",
   J: ".---",
   K: "-.-",
   L: ".-..",
   M: "--",
   N: "-.",
   O: "---",
   P: ".--.",
   Q: "--.-",
   R: ".-.",
   S: "...",
   T: "-",
   U: "..-",
   V: "...-",
   W: ".--",
   X: "-..-",
   Y: "-.--",
   Z: "--..",
   1: ".----",
   2: "..---",
   3: "...--",
   4: "....-",
   5: ".....",
   6: "-....",
   7: "--...",
   8: "---..",
   9: "----.",
   0: "-----",
}
const generateRandomText = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";
    let RandomText = "";
    for(let i=0; i< 50; i++){
        let a = alphabet[Math.floor(Math.random() * alphabet.length)]
        if(a != " ") RandomText += a
    }
    return RandomText
}

function alphabetToMorse(alphabet, MORSE_CODE){
    let MORSE_GENERATED = ""
    const alphabet_array = alphabet.split("")
    alphabet_array.map((LETTER)=> {
        if (LETTER != " "){
            MORSE_GENERATED += MORSE_CODE[LETTER.toUpperCase()]
            MORSE_GENERATED += '   '
        } else{ 
            MORSE_GENERATED += LETTER
        }
    })
    
    let MORSE_GENERATED_ARRAY = MORSE_GENERATED.split("")
    let MORSE_GENERATED_ELEMENT = MORSE_GENERATED_ARRAY.map((morse)=> {
        if (morse == "."){
            return <span key={generateRandomText()} className="morse-code-dot"></span>
        } else if(morse =="-") {
            return <span key={generateRandomText()} className="morse-code-dash"></span>
        } else if (morse == " "){
            return <span key={generateRandomText()} className="morse-code-space"></span>
        }
    })
    generateRandomText(ALLOWED_CHARACTERS)
    return  MORSE_GENERATED.length != 0 ? [MORSE_GENERATED_ELEMENT, MORSE_GENERATED] : [false, false]
}
function morseToAlphabet(morse, MORSE_CODE){
    const morse_dot_dash_array = morse.split("")
    const morse_dot_dash_elements = morse_dot_dash_array.map((morse_raw)=>{
        if (morse_raw == "."){
            return <span key={generateRandomText()} className="morse-code-dot"></span>
        } else if(morse_raw =="-") {
            return <span key={generateRandomText()} className="morse-code-dash"></span>
        } else if (morse_raw == " "){
            return <span key={generateRandomText()} className="morse-code-space"></span>
        }
    });
    let decoded_text = ""
    if (morse != ""){
        const morse_array = morse.split(" ")
        morse_array.map((morse_one)=>{
            Object.entries(MORSE_CODE).map(([text, text_morse])=>{
                if(morse_one == text_morse){
                    decoded_text += text
                }
            })
        })
    }
    return [morse_dot_dash_elements, decoded_text]   
}
export {ALLOWED_CHARACTERS, ALLOWED_CHARACTERS_MORSE ,MORSE_CODE, alphabetToMorse, morseToAlphabet}