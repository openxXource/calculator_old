document.getElementById("history").innerText = "0";
var userInput = [];
var clone;
var operator;
var secNum;
var counter = 1;
var checkPosNeg = false;
var memStore;		
var process = []; 
var copyUserInput = [];
var copyResult; 
var copySec; 
function changeVal(){
if(counter == 1){
process = [];
if(clone > 0){
let toNeg = -Math.abs(clone);
clone = toNeg;
process.push(clone); 
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = clone;
checkPosNeg = false;}
	else if(clone < 0){
		let toPos = Math.abs(clone);
		clone = toPos;
		process.push(clone); 
		document.getElementById("input-bar").value = clone;
		document.getElementById("history").innerText = clone;
		checkPosNeg = true;
		}}
	else if(counter == 2){
	if(secNum > 0){
	let toNeg = -Math.abs(secNum);
	secNum = toNeg;
	process.pop(); 
	process.push(secNum); 
	document.getElementById("input-bar").value = secNum;
	document.getElementById("history").innerText = process.join("");}
	else if(secNum < 0){
		let toPos = Math.abs(secNum);
		secNum = toPos;
		process.pop();
		process.push(secNum); 
		document.getElementById("input-bar").value = secNum;
		document.getElementById("history").innerText = process.join("");
	}}}
function plus(){
		let empty = document.getElementById("input-bar").value;
		operator = "+";
		if(empty == ""){
		process.pop();
		process.push(operator);
		document.getElementById("history").innerText = process.join("");
		}
		
		else if(empty != ""){ 
		if(copyResult == undefined){
			if(clone != ""){
				++counter;
				document.getElementById("input-bar").value = "";
				document.getElementById("history").innerText = "" + clone + "+" ;
				userInput = [/*BP*/];
				process.push(operator);
				}
			}
		else if(copyResult != undefined){
		process.push(operator);
		document.getElementById("input-bar").value = "";
		document.getElementById("history").innerText = process.join("");
}
} 
}
function minus(){
	  let empty = document.getElementById("input-bar").value; 	 
	  operator = "-";
	if(empty == ""){
	process.pop();
	process.push(operator);
	document.getElementById("history").innerText = process.join("");
	}
 else if(empty != ""){  
if(copyResult == undefined){
if(clone != ""){
++counter;
document.getElementById("input-bar").value = "";
document.getElementById("history").innerText = "" + clone + "-" ;
userInput = [];
process.push(operator);
}
}
		else if(copyResult != undefined){
		process.push(operator);
		document.getElementById("input-bar").value = "";
		document.getElementById("history").innerText = process.join("");
}
}
}
function multiply(){
	let empty = document.getElementById("input-bar").value;
	operator = "*";
	if(empty == ""){
	process.pop();
	process.push(operator);
	document.getElementById("history").innerText = process.join("");
}
 else if(empty !=""){ 
 if(copyResult == undefined){ 
if(clone != ""){
++counter;
document.getElementById("input-bar").value = "";
document.getElementById("history").innerText = "" + clone + "*" ;
userInput = [];
process.push(operator);
}
}
	else if(copyResult != undefined){
	process.push(operator);
	document.getElementById("input-bar").value = "";
	document.getElementById("history").innerText = process.join("");
}
}
}
function division(){
		let empty = document.getElementById("input-bar").value;
	  operator = "/";
  if(empty != ""){
  if(copyResult == undefined){
if(clone != "") {
++counter;
document.getElementById("input-bar").value = "";
document.getElementById("history").innerText = "" + clone + "/" ;
userInput = [];
process.push(operator);
}
}
	else if(copyResult != undefined){
	process.push(operator);
	document.getElementById("input-bar").value = "";
	document.getElementById("history").innerText = process.join("");
}
}
}
function potency(){
	let empty = document.getElementById("input-bar").value;
	  operator = "^";
	  if(empty == ""){
	  process.pop();
	  process.push(operator);
	  document.getElementById("history").innerText = process.join("");
	  }
  if(empty != ""){ 
  if(copyResult == undefined){
if(clone != "") {
++counter;
document.getElementById("input-bar").value = "";
document.getElementById("history").innerText = "base(" + clone + ")^";
userInput = [];
process.push(operator);
}
}
	else if(copyResult != undefined){
	process.push(operator);
	document.getElementById("input-bar").value = "";
	document.getElementById("history").innerText = process.join("");
	}
}
}

function equal(){
		process.push("=");
	if(operator == "+"){
		 if(copyResult != undefined){
			let result = copyResult + copySec;
			process.push(result);
			document.getElementById("input-bar").value = result;
			document.getElementById("history").innerText = process.join("");
			copyResult = result;
			
		}
			else if(copyResult == undefined){
			let result =  clone + secNum;
			process.push(result);
			document.getElementById("input-bar").value = result;
			document.getElementById("history").innerText = process.join("");
			copyResult = result;		
			}
	}
	else 	if(operator == "-"){
		
			if(copyResult != undefined){
			let result = copyResult - copySec;
			process.push(result);
			document.getElementById("input-bar").value = result;
			document.getElementById("history").innerText = process.join("");
			copyResult = result;
			}
			else if(copyResult == undefined){
			let result = clone - secNum;
			process.push(result);
			document.getElementById("input-bar").value = result;
			document.getElementById("history").innerText = process.join("");
			copyResult = result;
			}
	
	}

	else	if(operator == "*"){
	
			if(copyResult != undefined){
			let result = copyResult * copySec;
			process.push(result);
			document.getElementById("input-bar").value = result;
			document.getElementById("history").innerText = process.join("");
			copyResult = result;
			}
			
			else if(copyResult == undefined){
			let result = clone * secNum;
			process.push(result);
			document.getElementById("input-bar").value = result;
			document.getElementById("history").innerText = process.join("");
			copyResult = result;
			}	
	}
	else if(operator == "/"){
		if(copyResult != undefined){
		let result = copyResult / copySec;
		process.push(result);
		document.getElementById("input-bar").value = result;
		document.getElementById("history").innerText = process.join("");
		copyResult = result;
		}
		else if(copyResult == undefined){
		let result = clone / secNum;
		process.push(result);
		document.getElementById("input-bar").value = result;
		document.getElementById("history").innerText = process.join("");
		copyResult = result;
		}
	}
	else if(operator == "^"){
		
			if(copyResult != undefined){
		
			let exponent = copySec;
			let capt = 1;
			let result;
			for(let i = 1; i <= exponent; i++){
				 capt *= copyResult;
				 result = capt;
				
			}
			copyResult = result;
			process.push(copyResult);
			document.getElementById("input-bar").value = result;
			document.getElementById("history").innerText = process.join("");
			}
		else if(copyResult == undefined){
		let exponent = secNum;
		let capt = 1;
		let result;
			for(let i = 1; i <= exponent; i++){
				capt *= clone;
				result = capt;
	}
			copyResult = result;
			process.push(copyResult);
			document.getElementById("input-bar").value = result;
			document.getElementById("history").innerText = process.join("");	
	}
	}

	copyUserInput = [];
	counter = 1;
}

function getOne(){
		let nr = document.getElementById("num-one").innerText;
		userInput.push(nr);
		
		if(copyResult == undefined){
			if(counter == 1){
			clone = Number(userInput.join(""));
			process.push(nr);
			document.getElementById("input-bar").value = clone;
			document.getElementById("history").innerText = process.join("");
			
			}
			else if(counter == 2){
			secNum = Number(userInput.join(""));
			process.push(nr);
			document.getElementById("input-bar").value = secNum;
			document.getElementById("history").innerText = process.join("");
			}
}
			else if(copyResult != undefined){
			copyUserInput.push(nr);
			process.push(nr);
			copySec = Number(copyUserInput.join(""));
			document.getElementById("input-bar").value  = copySec;

			document.getElementById("history").innerText = process.join(""); //EDITED
		}
}

function getTwo(){
let nr = document.getElementById("num-two").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value= secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
		copyUserInput.push(nr);
		process.push(nr);
		copySec = Number(copyUserInput.join(""));
		document.getElementById("input-bar").value = copySec;
		document.getElementById("history").innerText = process.join("");
	}

}

function getThree(){
let nr = document.getElementById("num-three").innerText;
userInput.push(nr);

if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
	copyUserInput.push(nr);
	process.push(nr);
	copySec = Number(copyUserInput.join(""));
	document.getElementById("input-bar").value = copySec;
	document.getElementById("history").innerText = process.join("");
	}

}

function getFour(){
let nr = document.getElementById("num-four").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
	copyUserInput.push(nr);
	process.push(nr);
	copySec = Number(copyUserInput.join(""));
	document.getElementById("input-bar").value = copySec;
	document.getElementById("history").innerText = process.join("");
	}
}

function getFive(){
let nr = document.getElementById("num-five").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if (counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
	copyUserInput.push(nr);
	process.push(nr);
	copySec = Number(copyUserInput.join(""));
	document.getElementById("input-bar").value = copySec;
	document.getElementById("history").innerText = process.join("");
	}
}

function getSix(){
let nr = document.getElementById("num-six").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
		copyUserInput.push(nr);
		process.push(nr);
		copySec = Number(copyUserInput.join(""));
		document.getElementById("input-bar").value = copySec;
		document.getElementById("history").innerText = process.join("");
	}
}

function getSeven(){
let nr = document.getElementById("num-seven").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
	copyUserInput.push(nr);
	process.push(nr);
	copySec = Number(copyUserInput.join(""));
	document.getElementById("input-bar").value = copySec;
	document.getElementById("history").innerText = process.join("");
	}
}

function getEight(){
let nr = document.getElementById("num-eight").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
	copyUserInput.push(nr);
	process.push(nr);
	copySec = Number(copyUserInput.join(""));
	document.getElementById("input-bar").value = copySec;
	document.getElementById("history").innerText = process.join("");
	}
}

function getNine(){
let nr = document.getElementById("num-nine").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
	copyUserInput.push(nr);
	process.push(nr);
	copySec = Number(copyUserInput.join(""));
	document.getElementById("input-bar").value = copySec;
	document.getElementById("history").innerText = process.join("");
	}
}

function getZero(){
let nr = document.getElementById("num-zero").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
	copyUserInput.push(nr);
	process.push(nr);
	copySec = Number(copyUserInput.join(""));
	document.getElementById("input-bar").value = copySec;
	document.getElementById("history").innerText = process.join("");
	}
}

function getDot(){
let nr = document.getElementById("num-dot").innerText;
userInput.push(nr);
if(copyResult == undefined){
if(counter == 1){
clone = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = userInput.join("");
document.getElementById("history").innerText = process.join("");
}
else if(counter == 2){
secNum = Number(userInput.join(""));
process.push(nr);
document.getElementById("input-bar").value = userInput.join("");
document.getElementById("history").innerText = process.join("");
}
}
	else if(copyResult != undefined){
	copyUserInput.push(nr);
	process.push(nr);
	copySec = Number(copyUserInput.join(""));
	document.getElementById("input-bar").value = copySec;
	document.getElementById("history").innerText = process.join("");
	}
}
function removeNum(){
if(counter == 1){
userInput =[];
clone = 0;
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = clone;
}
else if(counter == 2){
userInput =[];
secNum = 0;
document.getElementById("input-bar").value = secNum;
document.getElementById("history").innerText = clone + "" + operator + "" + secNum;
}
}


function removeA(){
counter = 1; 
clone = "";
secNum = "";
copyResult = undefined;
copyUserInput = [];
userInput = [];
process = []; 
document.getElementById("input-bar").value = userInput.join("");
document.getElementById("history").innerText = "0";
}

function removeS(){
if(counter == 1){
if(clone < 0){
userInput.pop();
process.pop();
let a = userInput.join("");
let b = Number(a);
clone = -Math.abs(b);
document.getElementById("input-bar").value = clone;
}

else if(clone > 0){
userInput.pop();
process.pop();
let a = userInput.join("");
let b = Number(a);
clone = Math.abs(b);
document.getElementById("input-bar").value = clone; 
}
document.getElementById("history").innerText = clone; 
}
else if(counter == 2){
if(secNum < 0){
userInput.pop();
process.pop();
let a = userInput.join("");
let b = Number(a);
secNum = -Math.abs(b);
document.getElementById("input-bar").value = secNum;
}

	else if(secNum > 0){
	userInput.pop();
	process.pop();
	let a = userInput.join("");
	let b = Number(a);
	secNum = Math.abs(b);
	document.getElementById("input-bar").value = secNum;
		}
		document.getElementById("history").innerText = clone + "" + operator + "" + secNum;
	}
}
function memoryPlus(){
result = clone + memStore;
document.getElementById("input-bar").value = result;
document.getElementById("history").innerText = clone + "" + "+" + "" + memStore + "=" + result;
}
function memoryMinus(){
result = clone - memStore;
document.getElementById("input-bar").value = result;
document.getElementById("history").innerText = clone + "" + "-" + "" + memStore + "=" + result;
}

function memoryClear(){
memStore = 0;
document.getElementById("input-bar").value = memStore;
}

function memoryRecall(){
clone = memStore;
document.getElementById("input-bar").value = clone;
document.getElementById("history").innerText = clone;
}

function memoryStore(){
var stored = clone;
memStore = stored;
document.getElementById("history").innerText = "MS(" + memStore + ")";
}

