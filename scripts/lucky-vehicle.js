document.addEventListener("DOMContentLoaded",()=>{

/* ELEMENTS */

const formBox = document.getElementById("luckyForm");
const resultBox = document.getElementById("luckyResult");

const dayEl = document.getElementById("lvDay");
const monthEl = document.getElementById("lvMonth");
const yearEl = document.getElementById("lvYear");

const vehicleEl = document.getElementById("vehicleNum");

const btn = document.getElementById("luckyBtn");

const resultVehicle = document.getElementById("resultVehicle");
const resultStatus = document.getElementById("resultStatus");
const resultNote = document.getElementById("resultNote");

const againBtn = document.getElementById("luckyAgain");
const shareBtn = document.getElementById("luckyShare");


/* DATE FILL */

for(let i=1;i<=31;i++){
  dayEl.innerHTML += `<option>${i}</option>`;
}

for(let i=1;i<=12;i++){
  monthEl.innerHTML += `<option>${i}</option>`;
}

for(let i=1950;i<=2026;i++){
  yearEl.innerHTML += `<option>${i}</option>`;
}


/* NUMBER REDUCE */

function reduce(num){

  while(num>9){
    num = num.toString().split("")
      .reduce((a,b)=>a+Number(b),0);
  }

  return num;
}


/* CALCULATE */

btn.addEventListener("click",()=>{

  const d = dayEl.value;
  const m = monthEl.value;
  const y = yearEl.value;

  const vehicle = vehicleEl.value.trim();

  if(!d || !m || !y || !vehicle){
    alert("Fill all details");
    return;
  }

  /* DOB NUMBER */

  const dobNum = reduce(
    Number(d)+Number(m)+Number(y)
  );


  /* VEHICLE NUMBER */

  const nums = vehicle.replace(/\D/g,"");

  let sum = 0;

  nums.split("").forEach(n=>{
    sum += Number(n);
  });

  const vehicleNum = reduce(sum);


  /* COMPARE */

  let status = "";
  let note = "";

  if(dobNum === vehicleNum){

    status = "Highly Compatible";
    note = "This number perfectly matches your energy and brings success.";
    
    resultStatus.className = "lucky-status lucky-good";

  }
  else{

    status = "Not Compatible";
    note = "This number may create conflicting energies for your journey.";

    resultStatus.className = "lucky-status lucky-bad";

  }


  /* OUTPUT */

  resultVehicle.innerText = vehicle;

  resultStatus.innerText = "⚠️ " + status;

  resultNote.innerText = note;


  formBox.style.display="none";
  resultBox.style.display="block";

});


/* AGAIN */

againBtn.addEventListener("click",()=>{

  formBox.style.display="block";
  resultBox.style.display="none";

  vehicleEl.value="";

});


/* SHARE */

shareBtn.addEventListener("click",()=>{

  const msg = `🚗 Lucky Vehicle Number 🚗

Number: ${resultVehicle.innerText}

Status: ${resultStatus.innerText}

${resultNote.innerText}

Check on Eshanka Talk 💫`;

  window.open(
    "https://wa.me/?text="+encodeURIComponent(msg),
    "_blank"
  );

});

});
