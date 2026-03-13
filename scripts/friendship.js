document.addEventListener("DOMContentLoaded",()=>{

const btn = document.getElementById("friendBtn");

const yourName = document.getElementById("yourName");
const friendName = document.getElementById("friendName");

const form = document.getElementById("friendForm");
const result = document.getElementById("friendResult");

const youText = document.getElementById("youText");
const friendText = document.getElementById("friendText");

const percentEl = document.getElementById("friendPercent");
const statusEl = document.getElementById("friendStatus");
const msgEl = document.getElementById("friendMsg");

const shareBtn = document.getElementById("friendShare");
const againBtn = document.getElementById("friendAgain");


/* CALCULATE */

btn.addEventListener("click",(e)=>{

  e.preventDefault();

  const you = yourName.value.trim();
  const fr = friendName.value.trim();

  if(!you || !fr){
    alert("Please enter both names");
    return;
  }


  /* Fake logic (stable result) */
  let sum = 0;

  (you + fr).toUpperCase().split("")
  .forEach(c=>{
    sum += c.charCodeAt(0);
  });

  const percent = (sum % 41) + 60; // 60–100


  /* STATUS */

  let status = "";
  let msg = "";

  if(percent >= 85){
    status = "Best Friends 💙";
    msg = "You both share a deep bond and amazing understanding.";
  }
  else if(percent >= 70){
    status = "Strong Bond 🤝";
    msg = "Your friendship is reliable and supportive.";
  }
  else{
    status = "Good Friends 😊";
    msg = "With time and care, your bond will grow stronger.";
  }


  /* OUTPUT */

  youText.innerText = you;
  friendText.innerText = fr;

  percentEl.innerText = percent + "%";

  statusEl.innerText = status;

  msgEl.innerText = msg;


  form.style.display="none";
  result.style.display="block";

});


/* SHARE */

shareBtn.addEventListener("click",()=>{

  const message = `💙 Friendship Compatibility 💙

${youText.innerText} ❤️ ${friendText.innerText}

Match: ${percentEl.innerText}

${statusEl.innerText}

Check on Eshanka Talk 💫`;

  window.open(
    "https://wa.me/?text="+encodeURIComponent(message),
    "_blank"
  );

});


/* AGAIN */

againBtn.addEventListener("click",()=>{

  yourName.value="";
  friendName.value="";

  result.style.display="none";
  form.style.display="block";

});

});
