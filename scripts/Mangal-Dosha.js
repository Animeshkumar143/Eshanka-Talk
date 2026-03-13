document.addEventListener("DOMContentLoaded",()=>{

const form = document.getElementById("moonForm");
const popup = document.getElementById("doshaPopup");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const name = document.getElementById("moonName").value;
  const day = document.getElementById("moonDay").value;

  if(!name || !day){
    alert("Fill all details");
    return;
  }

  // Dummy logic (later API se replace kar sakte ho)

  let isManglik = day % 2 === 0;

  const status = isManglik ? "Manglik" : "Non-Manglik";

  // Title
  document.getElementById("doshaTitle").innerText =
    `${name}'s Mangal Dosha Analysis`;

  // Badge
  const badge = document.getElementById("doshaBadge");

  if(isManglik){
    badge.innerText = "✔ Manglik";
    badge.style.background="#e74c3c";
  }else{
    badge.innerText="✔ Non-Manglik";
    badge.style.background="#27ae60";
  }

  // Note
  document.getElementById("doshaNote").innerText =
   "This is a computer generated result. Please consult an astrologer for confirmation.";

  // Status
  document.getElementById("currentStatus").innerText = status;
  document.getElementById("naturalStatus").innerText = "Present";
  document.getElementById("moonStatus").innerText = "Non-Manglik";

  // Planets
  document.getElementById("moonRashi").innerText = "10th Sign";
  document.getElementById("marsRashi").innerText = "5th Sign";

  popup.style.display="flex";

});


/* Close */

document.getElementById("doshaClose").onclick=()=>{
  popup.style.display="none";
};

document.getElementById("doshaAgain").onclick=()=>{
  popup.style.display="none";
  form.reset();
};

/* Share */

document.getElementById("doshaShare").onclick=()=>{

  const msg = document.getElementById("doshaTitle").innerText;

  window.open(
    "https://wa.me/?text="+encodeURIComponent(msg),
    "_blank"
  );
};

});