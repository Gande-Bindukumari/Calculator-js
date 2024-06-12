let buttons=document.getElementsByTagName('button');
let result=document.getElementById('result');

for(i=0; i<buttons.length; i++){
    buttons[i].onclick=function(){
        let input=this.innerText;
        updateDisplay(input);
    }
}

function updateDisplay(input){
    let currentDisplay=result.innerText;
    if(currentDisplay==='0'){
        if(input!=="C" && input!=="DEL" && input!=="="){
            //result.innerText="";//reset the display without any numbers 
            result.innerText=input;//default display will have 0.
        }

    }
    else{
        if(input=="DEL"){
            result.innerText=currentDisplay.substring(0,currentDisplay.length-1);
        //    if(result.innerText==""){
        //         result.innerText="0";
        //     } 
        }
        else if (input === 'C') {
            result.innerText = "0";
        }

        else if (input !== "=") {
            // Append digits to the current display
            result.innerText += input;
        } 

        else {
            // Evaluate the expression
            let display = result.innerText;
            result.innerText = eval(display);
        }
        
    }


}