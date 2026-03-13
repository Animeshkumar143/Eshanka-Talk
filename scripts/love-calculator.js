// ================= LOVE CALCULATOR (POPUP FINAL) =================

document.addEventListener("DOMContentLoaded",()=>{

  const btn = document.querySelector(".kundli-btn");

  // ❗ Agar button hi nahi mila, JS yahin ruk jaaye
  if(!btn) return;


  const inputs = document.querySelectorAll(".love-col input");
  if(inputs.length < 2) return;

  const yourNameEl    = inputs[0];
  const partnerNameEl = inputs[1];

  const popup   = document.getElementById("lovePopup");
  const close   = document.getElementById("loveClose");
  const again   = document.getElementById("loveAgain");
  const share   = document.getElementById("loveShare");

  const percentEl = document.getElementById("lovePercentPop");
  const namesEl   = document.getElementById("loveNamesPop");
  const textEl    = document.getElementById("loveTextPop");

  if(!popup || !close || !again || !share) return;


  /* ================= CALCULATE ================= */

  btn.addEventListener("click",(e)=>{

    e.preventDefault();

    const you = yourNameEl.value.trim();
    const partner = partnerNameEl.value.trim();

    if(!you || !partner){
      alert("Please enter both names");
      return;
    }

    /* Love % Logic */
    let sum = 0;

    (you + partner).toUpperCase().split("")
    .forEach(c=>{
      sum += c.charCodeAt(0);
    });

    const percent = (sum % 41) + 60; // 60–100%


    /* Message */
    let msg = "";

    if(percent >= 90){
      msg = "You both are made for each other 💖";
    }
    else if(percent >= 75){
      msg = "Strong bond with great understanding ❤️";
    }
    else{
      msg = "Love will grow with trust and care 💞";
    }


    /* OUTPUT */

    percentEl.innerText = percent + "%";
    namesEl.innerText = `${you} ❤️ ${partner}`;
    textEl.innerText = msg;

    popup.style.display = "flex";

  });


  /* ================= CLOSE ================= */

  close.addEventListener("click",()=>{
    popup.style.display="none";
  });


  /* ================= AGAIN ================= */

  again.addEventListener("click",()=>{

    popup.style.display="none";
    yourNameEl.value="";
    partnerNameEl.value="";

  });


  /* ================= SHARE ================= */

  share.addEventListener("click",()=>{

    const message = `❤️ Love Calculator Result ❤️

${namesEl.innerText}

Love Percentage: ${percentEl.innerText}

${textEl.innerText}

Check on Eshanka Talk 💫`;

    window.open(
      "https://wa.me/?text="+encodeURIComponent(message),
      "_blank"
    );

  });

});
