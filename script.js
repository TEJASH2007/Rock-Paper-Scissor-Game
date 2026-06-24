let res=document.querySelector("#res");

let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");

let userScore=0;
let AIScore=0;
let input="";

let AIwatch=document.querySelector("#AIScore");
let userwatch=document.querySelector("#userScore");

AIwatch.innerText=`${AIScore}`;
userwatch.innerText=`${userScore}`;

one.addEventListener("click",()=>{
    let a=getScore();
    input=1;

    if(a==2){
        AIScore+=1;
        AIwatch.innerText=`${AIScore}`;
        userwatch.innerText=`${userScore}`;
        clear();
    }else{
        userScore+=1;
        AIwatch.innerText=`${AIScore}`;
        userwatch.innerText=`${userScore}`;
        clear();
    }
});

two.addEventListener("click",()=>{
    input=2;
    let a=getScore();

    if(a==1){
        userScore+=1;
        AIwatch.innerText=`${AIScore}`;
        userwatch.innerText=`${userScore}`;
        clear();
    }else if(a==3){
        AIScore+=1;
        AIwatch.innerText=`${AIScore}`;
        userwatch.innerText=`${userScore}`;
        clear();
    }
});

three.addEventListener("click",()=>{
    input=3;
    let a=getScore();

    if(a==1){
        AIScore+=1;
        AIwatch.innerText=`${AIScore}`;
        userwatch.innerText=`${userScore}`;
        clear();
    }else if(a==2){
        userScore+=1;
        AIwatch.innerText=`${AIScore}`;
        userwatch.innerText=`${userScore}`;
        clear();
    }
});

function clear(){
    console.log("Start");

    setTimeout(()=>{
        AI.innerHTML="";
        console.log("End");
    },1000);
}

let AI=document.querySelector("#computer");

function getScore(){
    let a=Math.floor(Math.random()*3)+1;

    console.log(a);

    AI.innerHTML="";

    let icon=document.createElement("i");

    let arr=[
        'fa-solid fa-hand-scissors',
        'fa-solid fa-hand-back-fist',
        'fa-solid fa-hand'
    ];

    icon.className=arr[a-1];

    AI.appendChild(icon);

    clear();

    return a;
}