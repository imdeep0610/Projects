const txt=document.querySelector(".text");
const cpyBtn=document.querySelector(".cpyBtn");
const cpyMsg=document.querySelector(".cpyMsg");
const lengthPass=document.querySelector(".passLength");
const pass=document.querySelector(".pass");
const slider=document.querySelector("#slider");
const indicator=document.querySelector(".strength-icon");
const symbol=`~!@#$%^&*()_+-{}?<:",.;'`;

   let passLength=10;
    let password="";
    handleSlider();

    function handleSlider(){
        slider.value=passLength;
        lengthPass.innerText=passLength;
    }
    function strengthIndicator(color){
          indicator.style.backgroundColor=color;
          indicator.style.boxShdow=`0px 0px 12px 1px ${color}`;
    }

    function getRandomNo(min,max){
         return Math.floor(Math.random()*(max-min))+min;
    }

    function getRanNo(){
        return getRandomNo(0,9);
    }
    function getUpper(){
        return String.fromCharCode(getRandomNo(65,90));
    }
    function getLower(){
        return String.fromCharCode(getRandomNo(97,112));
    }
    function getSymbol(){
       let index= getRandomNo(0,symbol.length);
        return symbol.charAt(index);
    }


