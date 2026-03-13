const calcBtn = document.getElementById("calcBtn");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const form = document.getElementById("loshuForm");
const result = document.getElementById("loshuResult");

const gridBox = document.getElementById("gridBox");
const presentBox = document.getElementById("presentBox");
const missingBox = document.getElementById("missingBox");

const shareBtn = document.getElementById("shareBtn");
const againBtn = document.getElementById("againBtn");


/* Reduce to single digit */

function reduce(num){
  while(num > 9){
    num = num.toString().split("").reduce((a,b)=>a+ +b,0);
  }
  return num;
}


/* Calculate */

calcBtn.addEventListener("click",()=>{

  if(!day.value || !month.value || !year.value){
    alert("Please select full DOB");
    return;
  }

  let dob = day.value + month.value + year.value;

  let nums = dob.split("").map(n=>Number(n));

  let freq = {};

  nums.forEach(n=>{
    if(n!==0){
      freq[n] = (freq[n]||0)+1;
    }
  });


  /* GRID */

  gridBox.innerHTML="";

  for(let i=1;i<=9;i++){

    let count = freq[i] || 0;

    let text = count ? i.toString().repeat(count) : "-";

    gridBox.innerHTML += `
      <div class="loshu-cell cell${i}">
        ${text}
      </div>
    `;
  }


  /* PRESENT / MISSING */

  presentBox.innerHTML="";
  missingBox.innerHTML="";

  for(let i=1;i<=9;i++){

    if(freq[i]){

      presentBox.innerHTML += `
        <div class="loshu-item">
          <b>${i}</b> is Present
        </div>
      `;

    }else{

      missingBox.innerHTML += `
        <div class="loshu-item">
          <b>${i}</b> is Missing
        </div>
      `;
    }

  }


  form.style.display="none";
  result.style.display="block";

});


/* SHARE */

shareBtn.addEventListener("click",()=>{

  const msg = `✨ Lo Shu Grid Result ✨

Check your numerology on Eshanka Talk 💫`;

  window.open(
    "https://wa.me/?text="+encodeURIComponent(msg),
    "_blank"
  );

});


/* AGAIN */

againBtn.addEventListener("click",()=>{

  day.value="";
  month.value="";
  year.value="";

  result.style.display="none";
  form.style.display="block";

});
