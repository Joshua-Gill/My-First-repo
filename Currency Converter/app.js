const BASE_URL='https://cdn.moneyconvert.net/api/latest.json';
const dropdowns=document.querySelectorAll('.dropdown select');
const submitBtn=document.getElementById('submitBtn');
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const Msg=document.getElementById("msg");

for(let  select of dropdowns) {
    for( currCode in countryList) {
     newOption=document.createElement("option");
     newOption.innerText=currCode;   
     newOption.value=currCode;
     if(select.name==="from" && currCode==="USD"){
        newOption.selected==true;
     }else if(select.name==="to" && currCode==="PKR"){
        newOption.selected=true;
}
  select.append(newOption);
} 
   
     
select.addEventListener('change',(evt)=>{
     updateFlag(evt.target);
     });
}
const updateFlag=(element)=>{
   let currCode=element.value;
   let countryCode=countryList[currCode];
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
   let img=element.parentElement.querySelector("img")
   img.src=newSrc;
}
submitBtn.addEventListener('click', async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amtVal = amount.value || 1;

  let response = await fetch(BASE_URL);
  let data = await response.json();

  const fromRate = data.rates[fromCurr.value]; // e.g., USD
  const toRate = data.rates[toCurr.value];     // e.g., PKR

  const converted = (amtVal * toRate) / fromRate;

  
  Msg.innerText=`${amtVal} ${fromCurr.value} = ${converted} ${toCurr.value}`;
});

