// ================= MOON PHASE POPUP =================

document.addEventListener("DOMContentLoaded",()=>{

const form = document.getElementById("moonForm");

const popup = document.getElementById("moonPopup");

const close = document.getElementById("moonClose");
const again = document.getElementById("moonAgain");
const share = document.getElementById("moonShare");


/* DATA */

const phases = [
 {
  name:"New Moon",
  sub:"The Beginning",
  tags:["Fresh Start","Hope","Silence"],
  img:"../assets/moon/new.jpg",
  start:"0°",
  end:"45°"
 },
 {
  name:"First Quarter",
  sub:"Decision Time",
  tags:["Action","Growth","Effort"],
  img:"../assets/moon/first.jpg",
  start:"45°",
  end:"90°"
 },
 {
  name:"Full Moon",
  sub:"The Illuminator",
  tags:["Clarity","Power","Realization"],
  img:"../assets/moon/full.jpg",
  start:"157.5°",
  end:"202.5°"
 },
 {
  name:"Last Quarter",
  sub:"Reflection",
  tags:["Release","Healing","Wisdom"],
  img:"../assets/moon/last.jpg",
  start:"225°",
  end:"270°"
 }
];


/* SUBMIT */

form.addEventListener("submit",(e)=>{

 e.preventDefault();

 const name = document.getElementById("moonName").value.trim();

 if(!name){
   alert("Enter name");
   return;
 }


 /* DEMO LOGIC (Later Real Backend) */

 const index = Math.floor(Math.random()*phases.length);

 const phase = phases[index];


 /* OUTPUT */

 document.getElementById("moonTitle").innerText =
 `${name}'s Moon Phase Report`;

 document.getElementById("moonSub").innerText =
 `${phase.name} - ${phase.sub}`;


 /* Tags */

 let tagHTML="";

 phase.tags.forEach(t=>{
   tagHTML += `<span>${t}</span>`;
 });

 document.getElementById("moonTags").innerHTML = tagHTML;


 document.getElementById("moonPhaseNum").innerText = `#${index+1}`;
 document.getElementById("moonStart").innerText = phase.start;
 document.getElementById("moonEnd").innerText = phase.end;

 document.getElementById("moonImg").src = phase.img;


 /* SHOW */

 popup.style.display="flex";

});


/* CLOSE */

close.addEventListener("click",()=>{
 popup.style.display="none";
});


/* AGAIN */

again.addEventListener("click",()=>{

 popup.style.display="none";
 form.reset();

});


/* SHARE */

share.addEventListener("click",()=>{

 const msg = `🌙 Moon Phase Report 🌙

${document.getElementById("moonTitle").innerText}

${document.getElementById("moonSub").innerText}

Check on Eshanka Talk 💫`;

 window.open(
  "https://wa.me/?text="+encodeURIComponent(msg),
  "_blank"
 );

});

});
