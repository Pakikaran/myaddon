const error_Number_One="Error: Division by Zero!";var leftSide="";var rightSide="";var binaryOperator="";var lastOperator="";var lastRightSide="";var canClear=false,nextEnterIsFake=false;var complexOp="";var complexIsRight=false;var isDegrees=false;var isPercent=false;function memPlus(f){unaryPreprocessor();var g="0",a="0";if(document.getElementById("display1").value!=""){g=document.getElementById("display1").value}if(document.getElementById("memC").value!=""){a=document.getElementById("memC").value}var e=new BigDecimal(a);var c=new BigDecimal(g);var b=new MathContext(40);if(f==true){a=e.subtract(c,b).toString()}else{a=e.add(c,b).toString()}$("#memC").val(a)}function memClear(){$("#memC").val("")}function memoryRecall(){$("#display1").val($("#memC").val());dc()}function scrollHistory(){var b=$("#history1").val(),a=0;if(b.length>42){a=b.length-42;$("#history1").val(b.substr(a,b.length))}}function addToHistory(b){var a=$("#history1").val()+b;$("#history1").val(a);scrollHistory()}function clearAll(a){a.value="0";leftSide="";rightSide="";binaryOperator="";$("#history1").val("");lastOperator="";lastRightSide="";dc()}function copyToClipboard(){var a=document.getElementById("display1");buffer=document.getElementById("display123");buffer.value=a.value;curr=buffer.value;s=(buffer.value).slice(-3);if(s==" + "||s==" - "||s==" * "||s==" / "){buffer.value=(buffer.value).slice(0,(buffer.value).length-3)}d=buffer.value;if(d.search(" - ")!=-1||d.search(" + ")!=-1||d.search(" * ")!=-1||d.search(" / ")!=-1){enterPressed();buffer.value=curr=document.getElementById("display1").value}buffer.select();document.execCommand("copy",false,null);buffer.value=curr;a.value=buffer.value;dc()}function pasteFromClipboard(){var a=document.getElementById("display1");saved_on_err=a.value;buffer=document.getElementById("display123");buffer.readOnly=false;a.readOnly=false;buffer.value=a.value;curr="";s=(buffer.value).slice(-3);if(s==" + "||s==" - "||s==" * "||s==" / "){curr=buffer.value}buffer.select();document.execCommand("paste",false,null);curr=curr+buffer.value;if(!isNumber(buffer.value)){errorFlash();buffer.value=saved_on_err;dc()}else{buffer.value=curr;a.value=buffer.value;dc()}buffer.readOnly=true;a.readOnly=true}function isNumber(a){return !isNaN(parseFloat(a))&&isFinite(a)}function formatNumber(b){b+="";x=b.split(".");x1=x[0];x2=x.length>1?"."+x[1]:"";var a=/(\d+)(\d{3})/;while(a.test(x1)){x1=x1.replace(a,"$1,$2")}return x1+x2}function removeZeroes(a){if(typeof(a)!="string"){return a}a=a.replace(/(\.[0-9]*?)0+$/,"$1");a=a.replace(/\.$/,"");return a}function isInteger(a){if((undefined===a)||(null===a)){return false}return a%1==0}function dc(){var e=document.getElementById("display1"),b=document.getElementById("display123"),c=e.value,a=c.length;s=(c).slice(-3);if(s==" + "||s==" - "||s==" * "||s==" / "){c=(c).slice(0,(c).length-3);b.value=formatNumber(c)+s;return}plus=c.search(" - ");minus=c.search(" + ");divide=c.search(" / ");multiple=c.search(" * ");if(plus!=-1||minus!=-1||divide!=-1||multiple!=-1){if(plus>-1){op=plus}if(minus>-1){op=minus}if(divide>-1){op=divide}if(multiple>-1){op=multiple}left=c.slice(0,op);operation=c.slice(op,(c).length);right=operation.slice(3,operation.length);operation=operation.slice(0,3);b.value=formatNumber(left)+operation+formatNumber(right)}else{b.value=formatNumber(c)}}origin="";function errorFlash(){origin=document.getElementById("display123").style.backgroundColor;document.getElementById("display123").style.backgroundColor="red";var a=setTimeout(backit,100)}function backit(){document.getElementById("display123").style.backgroundColor=origin;clearTimeout(this)}function addNow(a){binaryOperator=" "+a+" ";addBinaryOp();canClear=false;lastOperator="";dc()}function addBinaryOp(){var f=$("#display1").val(),e="",c="";e=f.search(" + ");if(e!="-1"){c=" + "}else{e=f.search(" - ");if(e!="-1"){c=" - "}else{e=f.search(" * ");if(e!="-1"){c=" * "}else{e=f.search(" / ");if(e!="-1"){c=" / "}else{c=""}}}}if(c==""){$("#display1").val(f+binaryOperator)}else{var b=f.substring(0,e);b+=binaryOperator;if(b.length!=f.length){var a=binaryOperator;enterPressed();binaryOperator=a;b=$("#display1").val()+binaryOperator;$("#display1").val(b)}else{$("#display1").val(b)}}dc()}function compute(){var a=isPercent;isPercent=false;if(leftSide==""){leftSide="0"}if(binaryOperator==" / "){if(rightSide==""||rightSide==0){errorFlash();$("#display1").val(leftSide);dc();return}}else{if(rightSide==""){rightSide="0"}}var i=new BigDecimal(leftSide);var g=new BigDecimal(rightSide);var e=new MathContext(40);if(a){var f=new BigDecimal("0");var c=new BigDecimal(rightSide);var b=new BigDecimal(leftSide);var h=new BigDecimal("100");var e=new MathContext(40);f=c.divide(h,e);g=f.multiply(b,e);if(binaryOperator==" + "){result=i.add(g,e).toString()}else{if(binaryOperator==" - "){result=i.subtract(g,e).toString()}else{if(binaryOperator==" * "){result=g.toString()}else{if(binaryOperator==" / "){if(g==""||g==0){errorFlash()}result=i.divide(c.divide(h,e),e).toString()}}}}if(result!=""){result=removeZeroes(result);return result}}else{if(binaryOperator==" + "){result=i.add(g,e).toString()}else{if(binaryOperator==" - "){result=i.subtract(g,e).toString()}else{if(binaryOperator==" * "){result=i.multiply(g,e).toString()}else{if(binaryOperator==" / "){if(g==""||g==0){errorFlash()}result=i.divide(g,e).toString()}}}}if(result!=""){return result}}return""}function enterPressed(){var f=false;if(isPercent){lastOperator="";lastRightSide="";f=true}var e=$("#display1").val(),c=-1,b="";c=e.indexOf(" + ");if(c!=-1){b=" + "}else{c=e.indexOf(" - ");if(c!=-1){b=" - "}else{c=e.indexOf(" * ");if(c!=-1){b=" * "}else{c=e.indexOf(" / ");if(c!=-1){b=" / "}else{b=""}}}}if(b==""){if(lastOperator!=""){if(b==""){binaryOperator=lastOperator;leftSide=$("#display1").val();rightSide=lastRightSide;e=compute()}}}else{var a=e.substring(0,c);leftSide=a;a+=b;if(a.length!=e.length){rightSide=e.substring(c+3,e.length);binaryOperator=b;if(binaryOperator==" / "){if(rightSide==""||rightSide==0){errorFlash();$("#display1").val(leftSide);dc();return}}e=compute();lastOperator=binaryOperator;lastRightSide=rightSide}else{}}var g=e.substring(e.length-3,e.length);if(g==" + "||g==" - "||g==" * "||g==" / "){}else{canClear=true}$("#display1").val(e);dc();if(nextEnterIsFake==false){if(f){addToHistory(leftSide+binaryOperator+rightSide+"% = "+e+"; ");f=false}else{addToHistory(leftSide+binaryOperator+rightSide+" = "+e+"; ")}}binaryOperator=""}function revertSign(a){stripBadSymbols();var f=$("#display1").val(),e=-1,c="";e=f.indexOf(" + ");if(e!=-1){c=" + "}else{e=f.indexOf(" - ");if(e!=-1){c=" - "}else{e=f.indexOf(" * ");if(e!=-1){c=" * "}else{e=f.indexOf(" / ");if(e!=-1){c=" / "}else{c=""}}}}if(c==""){if(a.value.substring(0,1)=="-"){a.value=a.value.substring(1,a.value.length)}else{a.value="-"+a.value}}else{var b=f.substring(0,e);leftSide=b;b+=c;rightSide=f.substring(e+3,f.length);if(rightSide.substring(0,1)=="-"){rightSide=rightSide.substring(1,rightSide.length)}else{rightSide="-"+rightSide}a.value=b+rightSide}dc()}function backSpace(){var b=$("#display1").val();var a="";a=b.substring(b.length-3,b.length);if(a==" + "||a==" - "||a==" * "||a==" / "){b=b.substring(0,b.length-3)}else{b=b.substring(0,b.length-1)}if(b==""){b="0"}$("#display1").val(b);lastOperator="";dc()}function unaryPreprocessor(){var b=$("#display1").val();var a="";a=b.substring(b.length-3,b.length);if(a==" + "||a==" - "||a==" * "||a==" / "){b=b.substring(0,b.length-3)}$("#display1").val(b);lastOperator="";nextEnterIsFake=true;enterPressed();lastOperator="";nextEnterIsFake=false;dc()}function unaryOperationRight(b,a){if(b==""||a==""){return}var i=$("#display1").val(),h=-1,k="";h=i.indexOf(" + ");if(h!=-1){k=" + "}else{h=i.indexOf(" - ");if(h!=-1){k=" - "}else{h=i.indexOf(" * ");if(h!=-1){k=" * "}else{h=i.indexOf(" / ");if(h!=-1){k=" / "}else{k=""}}}}if(k!=""){var j=i.substring(0,h);leftSide=j;j+=k;rightSide=i.substring(h+3,i.length);var l=rightSide;if(rightSide!=""){if(b=="percent"){var g=new BigDecimal("100");var f=new BigDecimal(rightSide);var c=new BigDecimal(leftSide);var e=new MathContext(40);g=f.divide(g,e);rightSide=g.multiply(c,e).toString()}else{rightSide=computeUnary(rightSide,b,a)}rightSide=removeZeroes(rightSide);$("#display1").val(j+rightSide);addToHistory(leftSide+binaryOperator+" "+b+"("+l+") = "+j+rightSide+"; ")}else{if(b!="percent"){unaryOperation(b,a)}}}else{if(b!="percent"){unaryOperation(b,a)}}dc()}function unaryOperation(a,e){if(a==""||e==""){return}stripBadSymbols();var c=$("#display1").val();unaryPreprocessor();c=$("#display1").val();var b=c;c=computeUnary(c,a,e);c=removeZeroes(c);$("#display1").val(c);addToHistory(a+"("+b+") = "+c+"; ");canClear=true;dc()}function computeUnary(e,a,h){if(e==""||a==""||h==""){return}var b="";var g=new BigDecimal(e);if(h!=""&&h>-1){var f=new BigDecimal(String(h))}var c=new MathContext(40);num=parseFloat(e);if(!Number.toFixed){Number.prototype.toFixed=function(i){return Math.round(this*Math.pow(10,i))/Math.pow(10,i)}}if(isDegrees){num=(num*3.14159265359/180)}if(a=="sqr"){b=g.multiply(g,c).toString()}else{if(a=="sqrt"){b=Math.sqrt(e)}else{if(a=="rt3"){b=nRroot(e,3)}else{if(a=="cube"){b=g.multiply(g,c).multiply(g,c).toString()}else{if(a=="rtN"){b=nRroot(e,h)}else{if(a=="powN"){b=g.pow(f,c).toString()}else{if(a=="random"){if(e==0){b=Math.random()}else{b=(Math.random()*(e))}}else{if(a=="roundXX"){b=roundNum(e,2)}else{if(a=="int"){b=Math.round(e)}else{if(a=="roundN"){b=roundNum(e,h)}else{if(a=="sin"){b=(num.sin()).toFixed(11)}else{if(a=="cos"){b=(num.cos()).toFixed(11)}else{if(a=="tan"){b=(num.tan()).toFixed(11)}else{if(a=="cot"){b=(num.cot()).toFixed(11)}else{if(a=="asin"){b=(num.asin()).toFixed(11)}else{if(a=="acos"){b=(num.acos()).toFixed(11)}else{if(a=="atan"){b=(num.atan()).toFixed(11)}else{if(a=="sinh"){b=(num.sinh()).toFixed(11)}else{if(a=="cosh"){b=(num.cosh()).toFixed(11)}else{if(a=="tanh"){b=(num.tanh()).toFixed(11)}else{if(a=="coth"){b=(num.coth()).toFixed(11)}else{if(a=="acot"){b=(num.acot()).toFixed(11)}else{if(a=="sec"){b=(num.sec()).toFixed(11)}else{if(a=="asec"){b=(num.asec()).toFixed(11)}else{if(a=="sech"){b=(num.sech()).toFixed(11)}else{if(a=="exp"){b=(num.exp()).toFixed(11)}else{if(a=="ln"){b=(num.ln()).toFixed(11)}else{if(a=="logN"){b=(num.log(h)).toFixed(11)}else{if(a=="log10"){b=(num.log10()).toFixed(11)}}}}}}}}}}}}}}}}}}}}}}}}}}}}}return b}function nRroot(a,h){try{var g=h%2==1&&a<0;if(g){a=-a}var c=Math.pow(a,1/h);h=Math.pow(c,h);if(Math.abs(a-h)<1&&(a>0==h>0)){var b=g?-c:c}if(b==""||b=="undefined"){b=="NaN"}return b}catch(f){return"NaN"}}function ln(a){a.display.value=Math.log(a.display.value)}function exp(a){a.display.value=Math.exp(a.display.value)}function sqrt(a){a.display.value=Math.sqrt(a.display.value)}function backSpace3(){var a=$("#display3").val();a=a.substring(0,a.length-1);if(a==""){a="0"}$("#display3").val(a);canClear=false}function clearAll2(){$("#display3").val("")}function revertSign2(){var a=$("#display3").val();if(a.substring(0,1)=="-"){a=a.substring(1,a.length)}else{a="-"+a}$("#display3").val(a)}function addDigit2(b){var a=$("#display3").val();a=a+b;$("#display3").val(a)}function complexOperation(){var a=$("#display3").val();if(complexOp!=""){if(complexIsRight==true){unaryOperationRight(complexOp,a)}else{unaryOperation(complexOp,a)}}canClear=true;clearAll2();$("#question").hide();$("#calculator").show()}function roundNum(b,e){var c=Math.pow(10,e),a=Math.round(b*c)/c;return a}function pi(){var a=$("#display1").val();if(a==0){a=""}if(canClear==true){a=""}a=a+Math.PI;$("#display1").val(a);dc()}function eNum(){var a=$("#display1").val();if(a==0){a=""}if(canClear==true){a=""}a=a+Math.E;$("#display1").val(a);dc()}Number.prototype.abs=function(){return Math.abs(this)};Number.prototype.acos=function(){return Math.acos(this)};Number.prototype.acosec=function(){return Math.asin(1/this)};Number.prototype.acosech=function(){return this<0?Math.log((1-Math.sqrt(1+this*this))/this):Math.log((1+Math.sqrt(1+this*this))/this)};Number.prototype.acosh=function(){return Math.log(this+Math.sqrt(this*this-1))};Number.prototype.acot=function(){return Math.PI/2-Math.atan(this)};Number.prototype.acoth=function(){return Math.log((this+1)/(this-1))/2};Number.prototype.asec=function(){return Math.PI/2-Math.asin(1/this)};Number.prototype.asech=function(){return Math.log((1+Math.sqrt(1-this*this))/this)};Number.prototype.asin=function(){return Math.asin(this)};Number.prototype.asinh=function(){return Math.log(this+Math.sqrt(this*this+1))};Number.prototype.atan=function(){return Math.atan(this)};Number.prototype.atanh=function(){return Math.log((1+this)/(1-this))/2};Number.prototype.ceil=function(){return Math.ceil(this)};Number.prototype.cos=function(){return Math.cos(this)};Number.prototype.cosec=function(){return 1/Math.sin(this)};Number.prototype.cosech=function(){return 2/(Math.exp(this)-Math.exp(-this))};Number.prototype.cosh=function(){return(Math.exp(this)+Math.exp(-this))/2};Number.prototype.cot=function(){return 1/Math.tan(this)};Number.prototype.coth=function(){return(Math.exp(this)+Math.exp(-this))/(Math.exp(this)-Math.exp(-this))};Number.prototype.degToRad=function(){return this*Math.PI/180};Number.prototype.exp=function(){return Math.exp(this)};Number.prototype.floor=function(){return Math.floor(this)};Number.prototype.isInRange=function(a,b){return this>=a&&this<=b};Number.prototype.limit=function(a,b){return this<a?a:(this>b?b:this)};Number.prototype.limitAbove=function(a){return Math.min(a,this)};Number.prototype.limitBelow=function(a){return Math.max(a,this)};Number.prototype.ln=function(){return Math.log(this)};Number.prototype.log=function(a){return Math.log(this)/Math.log(a)};Number.prototype.log2=function(){return Math.log(this)/Math.LN2};Number.prototype.log10=function(){return Math.log(this)/Math.LN10};Number.prototype.mod=function(a){return this>=0?this%a:(this%a+Math.abs(a))%a};Number.prototype.radToDeg=function(){return this*180/Math.PI};Number.prototype.round=function(){return Math.round(this)};Number.prototype.sec=function(){return 1/Math.cos(this)};Number.prototype.sech=function(){return 2/(Math.exp(this)+Math.exp(-this))};Number.prototype.sign=function(){return this==0?0:(this>0?1:-1)};Number.prototype.sin=function(){return Math.sin(this)};Number.prototype.sinh=function(){return(Math.exp(this)-Math.exp(-this))/2};Number.prototype.sqrt=function(){return Math.sqrt(this)};Number.prototype.pow=function(a){return Math.pow(this,a)};Number.prototype.tan=function(){return Math.tan(this)};Number.prototype.tanh=function(){return(Math.exp(this)-Math.exp(-this))/(Math.exp(this)+Math.exp(-this))};Number.prototype.wrap=function(a,b){return a+(this-a).mod(b-a)};