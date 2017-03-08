//Event Registration
//numbers mouseclick
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var decimal = document.getElementById("decimal");

zero.addEventListener("click", press);
one.addEventListener("click", press);
two.addEventListener("click", press);
three.addEventListener("click", press);
four.addEventListener("click", press);
five.addEventListener("click", press);
six.addEventListener("click", press);
seven.addEventListener("click", press);
eight.addEventListener("click", press);
nine.addEventListener("click", press);
decimal.addEventListener("click", pressd);

//numbers keypress
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", keyReleased, false);
var keys = [];

function checkKeyPressed(e) {
	keys[e.keyCode] = true;
	//numbers
    if (e.keyCode == "48") {
		kvalue = 0;
		kpress(this);
	}
		if (e.keyCode == "96") {
			kvalue = 0;
			kpress(this);
		}
	
	if (e.keyCode == "49") {
		kvalue = 1;
		kpress(this);
	}
		if (e.keyCode == "97") {
			kvalue = 1;
			kpress(this);
		}
	if (e.keyCode == "50") {
		kvalue = 2;
		kpress(this);
	}
		if (e.keyCode == "98") {
			kvalue = 2;
			kpress(this);
		}
	if (e.keyCode == "51") {
		kvalue = 3;
		kpress(this);
	}
		if (e.keyCode == "99") {
			kvalue = 3 ;
			kpress(this);
		}
	if (e.keyCode == "52") {
		kvalue = 4;
		kpress(this);
	}
		if (e.keyCode == "100") {
		kvalue = 4;
		kpress(this);
	}
	if (e.keyCode == "53") {
		kvalue = 5;
		kpress(this);
	}
		if (e.keyCode == "101") {
		kvalue = 5;
		kpress(this);
	}
	if (keys[54] && !keys[16]) {
		kvalue = 6;
		kpress(this);
	}
		if (e.keyCode == "102") {
		kvalue = 6;
		kpress(this);
	}
	if (e.keyCode == "55") {
		kvalue = 7;
		kpress(this);
	}
		if (e.keyCode == "103") {
		kvalue = 7;
		kpress(this);
	}
	
	if (keys[56] && !keys[16]) {
		kvalue = 8;
		kpress(this);
	}
		if (e.keyCode == "104") {
		kvalue = 8;
		kpress(this);
	}
	if (e.keyCode == "57") {
		kvalue = 9;
		kpress(this);
	}
		if (e.keyCode == "105") {
		kvalue = 9;
		kpress(this);
	}
	if (e.keyCode == "190") {
		kvalue = ".";
		kpress(this);
	}

	if (e.keyCode == "110") {
		kvalue = ".";
		kpress(this);
	}
	//operators
	
	if (keys[16] && keys[187]){
		pressplus();
	}
		if (e.keyCode == "107") {
			pressplus();
		}
	if (keys[187] && !keys[16]){
		pressequal();	
	}
		if (e.keyCode == "13") {
			pressequal();
			e.preventDefault();
		}
	if (keys[16] && keys[56]) {
		pressx();
	} 
		if (e.keyCode == "106") {
			pressx();
		}
	if (e.keyCode == "189") {
		pressminus();
	}
		if (e.keyCode == "109") {
			pressminus();
		}
	if (e.keyCode == "191"){
		pressdivide();
	}
		if (e.keyCode == "111") {
			pressdivide();
		}
	if (e.keyCode == "46") {
		pressclear();
	}
	if (e.keyCode == "8") {
		pressclear();
	}
	if (keys[54] && keys[16]) {
		presspower();
	}
	if (e.keyCode == "67") {
		memoryclear();
	}
	if (e.keyCode == "82") {
		memoryrecall();
	}
	if (e.keyCode == "83") {
		memorysave();
	}
	if (e.keyCode == "80") {
		memoryplus();
	}
	if (e.keyCode == "77") {
		memoryminus();
	}
	if (e.keyCode == "84") {
		signswitch();
	}
}

function keyReleased(e) {
    keys[e.keyCode] = false;
}


//operators
var plus = document.getElementById("plus");
var multiply = document.getElementById("multiply");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var power = document.getElementById("power");
var sqrt = document.getElementById("sqrt");
plus.addEventListener("click", pressplus);
multiply.addEventListener("click", pressx);
minus.addEventListener("click", pressminus);
divide.addEventListener("click", pressdivide);
equal.addEventListener("click", pressequal);
clear.addEventListener("click",pressclear);
power.addEventListener("click",presspower);
sqrt.addEventListener("click", pressroot);

//Functions
function signswitch() {
	var a = (Number(document.calculator.screen.value));
	document.calculator.screen.value = (-1)*a;
}

var saved = 0;
//function memorysave() {
//  saved = (Number(document.calculator.screen.value));
//}
function memoryrecall() {
	document.calculator.screen.value = saved;
}
function memoryclear() {
	saved = 0;
}
var upsave;
function memoryplus() {
	upsave = saved + (Number(document.calculator.screen.value));
	saved = upsave;
}

function memoryminus() {
	upsave = saved - (Number(document.calculator.screen.value));
	saved = upsave;
}




function press() {
    var pushed = Number(this.value);
	if (fin === true || repclear === true)
    {
        document.calculator.screen.value = pushed;
        fin = false;
		repclear = false;
        }
    else {document.calculator.screen.value += pushed;
    }    
    }

var kvalue;
function kpress() {
	var pushed = kvalue;
	if (fin === true || repclear === true)
    {
        document.calculator.screen.value = pushed;
        fin = false;
		repclear = false;
        }
    else {document.calculator.screen.value += pushed;
    }    
    }
	
function pressd() {
	var pushed = ".";
	if (Number(document.calculator.screen.value) === 0 || fin === true)
    {
        document.calculator.screen.value = pushed;
        fin = false;
        }
    else {document.calculator.screen.value += pushed;
    }

}

var secondpass = false;
var int;
var op;
var fin;
var rep = false;
var repclear = false;

function repetition() {

	 if (secondpass === false) {
        int2 = Number(document.calculator.screen.value);
        secondpass = true;
        }
    else {
        int = result;
        int2 = int2;
        }
    
    if (op === "plus") {
        result = Number(int + int2);
        printresult = int + " + " + int2 + " = ";
        }
    else if (op === "minus") {
        result = Number(int - int2);
        printresult = int + " - " + int2 + " = ";
        }
    else if (op === "x") {
        result = Number(int * int2);
        printresult = int + " x " + int2 + " = ";
        }
    else if (op === "divide") {
        result = Number(int / int2);
        printresult = int + " / " + int2 + " = ";
        }
	else if (op === "power") {
		result = Number(Math.pow(int,int2));
		printresult = int + " ^ " + int2 + " = ";
	}
	else if (op === "root") {
		result = Number(Math.pow(int2,(1/int)));
		printresult = int + " root " + int2 + " = ";
	}
     
	int = result;
    document.calculator.screen.value = result;
    document.getElementById("list").innerHTML = "<div>" + printresult + "</div>"; //History 
    fin = false;
	}
function pressplus() {
	
    if (rep === false) {
	int = Number(document.calculator.screen.value);
    fin = true;
	op = "plus";
	}
	
	if (rep === true) {
		repetition();
		op = "plus";
			
	} 
	rep = true;
	repclear = true;
	secondpass = false;
    }
function pressminus() {
	
	if (rep === false) {
    int = Number(document.calculator.screen.value);
    fin = true;
	op = "minus";
    }
	
	if (rep === true) {
		repetition();
		op = "minus";	
	}	
	rep = true;
	repclear = true;
	secondpass = false;
    }
function pressx() {

	if (rep === false) {
    int = Number(document.calculator.screen.value);
    op = "x";
    fin = true;
	}
	
	if (rep === true) {
		repetition();
		op = "x";
	}
	rep = true;
	repclear = true;
	secondpass = false;
    }
function pressdivide() {

	if (rep === false) {
    int = Number(document.calculator.screen.value);
    op = "divide";
    fin = true;
    }
	
	if (rep === true) {
		repetition();
		op = "divide";
	}
	rep = true;
	repclear = true;
	secondpass = false;
    }
function presspower() {

	if (rep === false) {
	int = Number(document.calculator.screen.value);
    op = "power";
    fin = true;
	}
	
	if (rep === true) {
		repetition();
		op = "power";
	}
	rep = true;
	repclear = true;
	secondpass = false;
	}
function pressroot() {

	if (rep === false) {
	int = Number(document.calculator.screen.value);
    op = "root";
    fin = true;
	}
	
	if (rep === true) {
		repetition();
		op = "root";
	}
	rep = true;
	repclear = true;
    secondpass = false;
}

var int2;
var result;
var printresult;
//Includes history functionality
function pressequal() { 
    
    if (secondpass === false) {
        int2 = Number(document.calculator.screen.value);
        secondpass = true;
        }
    else {
        int = result;
        int2 = int2;
        }
    
    if (op === "plus") {
        result = Number(int + int2);
        printresult = int + " + " + int2 + " = ";
        }
    else if (op === "minus") {
        result = Number(int - int2);
        printresult = int + " - " + int2 + " = ";
        }
    else if (op === "x") {
        result = Number(int * int2);
        printresult = int + " x " + int2 + " = ";
        }
    else if (op === "divide") {
        result = Number(int / int2);
        printresult = int + " / " + int2 + " = ";
        }
	else if (op === "power") {
		result = Number(Math.pow(int,int2));
		printresult = int + " ^ " + int2 + " = ";
	}
	else if (op === "root") {
		result = Number(Math.pow(int2,(1/int)));
		printresult = int + " root " + int2 + " = ";
	}
     
   
    document.calculator.screen.value = printresult+result;
    //document.getElementById("list").innerHTML = "<div>" + printresult + "</div>"; //History 
    fin = false;
	rep = false;
        
    }

function pressclear() {
    document.calculator.screen.value = "";
    fin = false;
    document.getElementById("list").innerHTML = " ";
    secondpass = false;
	rep = false;
    }