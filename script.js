let quote=document.getElementById('quote');
let author=document.getElementById('author');
let btn=document.querySelector('#btn');
let tweet=document.getElementById('tweet');
let quotesdata="";
let real="";
const getnewquotes=()=>{

let r=Math.floor(Math.random()*20);
//    console.log('hi');
quotesdata=real[r];
console.log(quotesdata.text);

quote.innerText=`${quotesdata.text}`;
if(quotesdata.author==null){
author.innerText=`Unknown`;

}
else{
author.innerText=`${real[r].author}`;
}

    // console.log(r);
};
const getquote= async ()=>{
    try{
    let data= await fetch("https://type.fit/api/quotes");
     real=await data.json();
    // console.log(real);
    // console.log(real[0].text);
    // sb.innerText=`${real[0].text}`;
    getnewquotes();
    // console.log(sb);
    }
    catch(err){


    }
}
const tweetnow=()=>{
let tweetpost=`https://twitter.com/intent/tweet?text=${quotesdata.text} ${quotesdata.author}`;
window.open(tweetpost);
}

btn.addEventListener('click',getquote);
tweet.addEventListener('click',tweetnow);