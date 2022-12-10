function numberInInput(id, value){
    let number = document.querySelector(id);

        number.addEventListener("click", ()=>{
            if(!(id == "#dot" && input.value.includes(".")))
                input.value += value;
        });
}
function saveOperation(operator){
    if(operation.length < 2)
        operation.push(operator);
}
function operate(){
    let n1 = eval(operation[0]);
    let n2 = eval(operation[2]);
    let result;
    if(operation[1] == "+"){
        result = n1+n2;
    }
    else if(operation[1] == "-"){
        result = n1-n2;
    }
    else if(operation[1] == "*"){
        result = n1*n2;
    }
    else if(operation[1] == "/"){
        if(!n2 == 0){
           result = n1/n2
        }
        else{
            input.value = "Can't divide by zero ";
            return;
        }
    }
    input.value = result;
    operation = [];
    if(typeof(result) == "number")
        operation.push(result);
        input.value = operation[0];
};
function clearInput(){
    input.value = "";
}
function saveFirstNumber(id, operator){
    id.addEventListener("click", ()=>{
        if(operation.length < 1){
            operation.push(input.value);
            saveOperation(operator);
            clearInput();
        }
        else{
            if(operation.length == 1){
                saveOperation(operator);
            }
            saveOperation(operator);
            operation.push(input.value);
            operate();
            operation = [];
            operation.push(input.value);
        }
    });
};
const input = document.querySelector("#calcInput");
let ac = document.querySelector("#reset");
let del = document.querySelector("#delete");
let operation = [];
let sum = document.querySelector("#add"); 
let substract = document.querySelector("#substract");
let multiply = document.querySelector("#multiply"); 
let divide = document.querySelector("#divide");
let solve = document.querySelector("#solve");
numberInInput("#zero", 0);
numberInInput("#one", 1);
numberInInput("#two", 2);
numberInInput("#three", 3);
numberInInput("#four", 4);
numberInInput("#five", 5);
numberInInput("#six", 6);
numberInInput("#seven", 7);
numberInInput("#eight", 8);
numberInInput("#nine", 9);
numberInInput("#dot", ".");
ac.addEventListener("click", ()=>{
    input.value = "";
    operation = [];
});
del.addEventListener("click", ()=>{   
    input.value = input.value.slice(0,-1);
});
saveFirstNumber(sum, "+");
saveFirstNumber(substract, "-");
saveFirstNumber(multiply, "*");
saveFirstNumber(divide, "/");
solve.addEventListener("click", ()=>{
    if(!operation.length == 0){
        operation.push(input.value);
        operate();
        operation = [];
    }
    else{
        input.value = "0";
    }

});