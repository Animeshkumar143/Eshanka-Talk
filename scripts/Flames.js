const calcBtn = document.getElementById("calcBtn");

const yourName = document.getElementById("yourName");
const partnerName = document.getElementById("partnerName");

const formBox = document.getElementById("formBox");
const resultBox = document.getElementById("resultBox");

const youText = document.getElementById("youText");
const partnerText = document.getElementById("partnerText");

const resultTitle = document.getElementById("resultTitle");
const resultDesc = document.getElementById("resultDesc");
const resultIcon = document.getElementById("resultIcon");

const shareBtn = document.getElementById("shareBtn");
const againBtn = document.getElementById("againBtn");


/* FLAMES LOGIC */

function calculateFlames(name1, name2){

  name1 = name1.toLowerCase().replace(/\s/g,'');
  name2 = name2.toLowerCase().replace(/\s/g,'');

  let arr1 = name1.split('');
  let arr2 = name2.split('');

  for(let i=0;i<arr1.length;i++){

    let index = arr2.indexOf(arr1[i]);

    if(index !== -1){
      arr1.splice(i,1);
      arr2.splice(index,1);
      i--;
    }

  }

  return arr1.length + arr2.length;
}


/* RESULT DATA */

const flamesData = {
  F:{ title:"FRIENDS", icon:"🤝", desc:"Strong friendship and trust." },
  L:{ title:"LOVE", icon:"❤️", desc:"Deep emotional connection." },
  A:{ title:"AFFECTION", icon:"🥰", desc:"Care and warmth." },
  M:{ title:"MARRIAGE", icon:"💍", desc:"Long-term commitment." },
  E:{ title:"ENEMIES", icon:"⚡", desc:"Conflicts but attraction." },
  S:{ title:"SIBLINGS", icon:"👫", desc:"Protective bond." }
};


/* CALCULATE */

calcBtn.addEventListener("click",()=>{

  const you = yourName.value.trim();
  const partner = partnerName.value.trim();

  if(!you || !partner){
    alert("Please enter both names");
    return;
  }

  let count = calculateFlames(you,partner);

  let flames = ["F","L","A","M","E","S"];

  let index = 0;

  while(flames.length > 1){

    index = (index + count - 1) % flames.length;
    flames.splice(index,1);

  }

  const final = flames[0];
  const data = flamesData[final];


  /* SHOW */

  youText.innerText = you;
  partnerText.innerText = partner;

  resultTitle.innerText = data.title;
  resultDesc.innerText = data.desc;
  resultIcon.innerText = data.icon;

  formBox.style.display="none";
  resultBox.style.display="block";

});


/* SHARE */

shareBtn.addEventListener("click",()=>{

  const msg = `🔥 FLAMES Result 🔥

${youText.innerText} ❤️ ${partnerText.innerText}

Result: ${resultTitle.innerText}

${resultDesc.innerText}

Check on Eshanka Talk 💫`;

  window.open(
    "https://wa.me/?text="+encodeURIComponent(msg),
    "_blank"
  );

});


/* AGAIN */

againBtn.addEventListener("click",()=>{

  yourName.value="";
  partnerName.value="";

  resultBox.style.display="none";
  formBox.style.display="block";

});
