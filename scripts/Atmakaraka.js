// ================= KARAKA SCRIPT =================

document.addEventListener("DOMContentLoaded",()=>{

const form = document.getElementById("moonForm");

const resultBox = document.getElementById("karakaResult");

const title = document.getElementById("karakaTitle");

const body = document.getElementById("karakaBody");

const switches = document.querySelectorAll(".switch-btn");

const again = document.getElementById("karakaAgain");

const share = document.getElementById("karakaShare");


/* ================= DEMO REAL DATA STRUCTURE ================= */
/* Baad me backend se yahin data aayega */

const karakaData = {

  vedic:[
    {
      karaka:"ATMAKARAKA",
      planet:"VENUS",
      degree:"22.27°",
      sign:"Leo",
      lord:"Sun",
      nak:"Purva Phalguni (Pada 3)",
      status:"enemy"
    },
    {
      karaka:"DARAKARAKA",
      planet:"MERCURY",
      degree:"5.44°",
      sign:"Libra",
      lord:"Venus",
      nak:"Chitra (Pada 4)",
      status:"friendly"
    }
  ],

  western:[
    {
      karaka:"ATMAKARAKA",
      planet:"URANUS",
      degree:"27.32°",
      sign:"Capricorn",
      lord:"Saturn",
      nak:"Dhanishta (Pada 2)",
      status:""
    },
    {
      karaka:"DARAKARAKA",
      planet:"MERCURY",
      degree:"5.44°",
      sign:"Libra",
      lord:"Venus",
      nak:"Chitra (Pada 4)",
      status:"friendly"
    }
  ]

};


/* ================= FILL TABLE ================= */

function render(type){

  body.innerHTML="";

  karakaData[type].forEach(row=>{

    let statusHTML = "-";

    if(row.status==="friendly"){
      statusHTML = `<span class="status friendly">FRIENDLY</span>`;
    }

    if(row.status==="enemy"){
      statusHTML = `<span class="status enemy">ENEMY</span>`;
    }

    body.innerHTML += `
      <tr>
        <td>${row.karaka}</td>
        <td>${row.planet}</td>
        <td>${row.degree}</td>
        <td>${row.sign}</td>
        <td>${row.lord}</td>
        <td>${row.nak}</td>
        <td>${statusHTML}</td>
      </tr>
    `;

  });

}


/* ================= FORM SUBMIT ================= */

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const name = document.getElementById("moonName").value.trim();

  if(!name){
    alert("Enter Name");
    return;
  }

  title.innerText = `${name}'s Karaka Analysis`;

  render("vedic");

  resultBox.style.display="block";

  resultBox.scrollIntoView({behavior:"smooth"});

});


/* ================= SWITCH ================= */

switches.forEach(btn=>{

  btn.addEventListener("click",()=>{

    switches.forEach(b=>b.classList.remove("active"));

    btn.classList.add("active");

    render(btn.dataset.type);

  });

});


/* ================= AGAIN ================= */

again.addEventListener("click",()=>{

  resultBox.style.display="none";

  form.reset();

});


/* ================= SHARE ================= */

share.addEventListener("click",()=>{

  const msg = title.innerText;

  window.open(
    "https://wa.me/?text="+encodeURIComponent(msg),
    "_blank"
  );

});

});
