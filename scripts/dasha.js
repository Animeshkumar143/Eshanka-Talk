const btn = document.getElementById("dashaBtn");

const form = document.getElementById("dashaForm");
const result = document.getElementById("dashaResult");

const nameInput = document.getElementById("userName");

const title = document.getElementById("resultTitle");
const grid = document.getElementById("dashaGrid");

const shareBtn = document.getElementById("dashaShare");
const againBtn = document.getElementById("dashaAgain");


/* SAMPLE DASHa DATA (Demo but Real Structure) */

const dashaList = [
  {name:"Rahu", years:"2004 - 2022"},
  {name:"Jupiter", years:"2022 - 2038"},
  {name:"Saturn", years:"2038 - 2057"},
  {name:"Mercury", years:"2057 - 2074"},
  {name:"Ketu", years:"2074 - 2081"},
  {name:"Venus", years:"2081 - 2101"},
  {name:"Sun", years:"2101 - 2107"},
  {name:"Moon", years:"2107 - 2117"},
  {name:"Mars", years:"2117 - 2124"}
];


/* CALCULATE */

btn.addEventListener("click",()=>{

  const name = nameInput.value.trim();

  if(!name){
    alert("Please enter your name");
    return;
  }

  title.innerText = `${name}'s Planetary Dasha Periods`;

  grid.innerHTML = "";

  dashaList.forEach(d=>{

    const div = document.createElement("div");
    div.className = "dasha-card";

    div.innerHTML = `
      <h4>${d.name} Mahadasha</h4>
      <span>${d.years}</span>
      <p>Your ${d.name} period influences major life events.</p>
    `;

    grid.appendChild(div);

  });


  form.style.display="none";
  result.style.display="block";

});


/* SHARE */

shareBtn.addEventListener("click",()=>{

  const msg = `✨ Dasha Report ✨

${title.innerText}

Check on Eshanka Talk 💫`;

  window.open(
    "https://wa.me/?text="+encodeURIComponent(msg),
    "_blank"
  );

});


/* AGAIN */

againBtn.addEventListener("click",()=>{

  nameInput.value="";

  result.style.display="none";
  form.style.display="block";

});
