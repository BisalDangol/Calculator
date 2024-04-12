const show= document.getElementById("display");

function clearDisplay(){
    display.value= "";
}

function cal(){
    display.value = eval(display.value)
}

function performSomething(input){
    display.value += input;

}