let userInput: unknown; // more strict than type 'any'
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; ERROR!!!
if(typeof userInput === 'string'){
    userName = userInput;
}
