const btn = document.getElementById("kaalBtn");

const nameInput = document.getElementById("userName");
const dobInput = document.getElementById("dob");
const placeInput = document.getElementById("birthPlace");

const formBox = document.getElementById("kaalForm");
const resultBox = document.getElementById("kaalResult");

const nameText = document.getElementById("nameText");
const statusBox = document.getElementById("kaalStatus");
const msgBox = document.getElementById("kaalMsg");

const againBtn = document.getElementById("kaalAgain");
const shareBtn = document.getElementById("kaalShare");



/* ================= CALCULATE ================= */

btn.addEventListener("click", function(){

  const name = nameInput.value.trim();
  const dob = dobInput.value;
  const place = placeInput.value.trim();

  if(!name || !dob || !place){
    alert("Please fill all details");
    return;
  }


  /* Fake logic (frontend demo) */

  const hasDosha = Math.random() > 0.5;


  /* Show Name */

  nameText.innerText = name + "'s Kaal Sarp Yog";


  /* Result */

  if(hasDosha){

    statusBox.innerHTML = "⚠️ KAAL SARP DOSHA PRESENT";
    statusBox.style.background = "#ffdddd";
    statusBox.style.color = "#b30000";

    msgBox.innerText =
      "Your kundli shows signs of Kaal Sarp Dosha. It may cause delays and struggles. Remedies are advised.";

  }
  else{

    statusBox.innerHTML = "✅ NO KAAL SARP DOSHA";
    statusBox.style.background = "#ddffec";
    statusBox.style.color = "#006b3c";

    msgBox.innerText =
      "Your kundli is free from Kaal Sarp Dosha. You are blessed with positive planetary alignment.";

  }


  /* SHOW RESULT */

  formBox.style.display = "none";
  resultBox.style.display = "block";

  resultBox.scrollIntoView({behavior:"smooth"});

});



/* ================= AGAIN ================= */

againBtn.addEventListener("click",()=>{

  nameInput.value="";
  dobInput.value="";
  placeInput.value="";

  resultBox.style.display="none";
  formBox.style.display="block";

});



/* ================= SHARE ================= */

shareBtn.addEventListener("click",()=>{

  const msg = `🔮 Kaal Sarp Yog Report 🔮

Name: ${nameText.innerText}

Status: ${statusBox.innerText}

${msgBox.innerText}

Check on Eshanka Talk 💫`;

  window.open(
    "https://wa.me/?text="+encodeURIComponent(msg),
    "_blank"
  );

});
