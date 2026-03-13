const container = document.getElementById("astroContainer");

const skills = ["Love","Career","Marriage"];

let astrologers=[];

for(let i=1;i<=50;i++){

let skill = skills[Math.floor(Math.random()*skills.length)];

let exp = Math.floor(Math.random()*15)+1;

let price = Math.floor(Math.random()*40)+20;

let rating = (Math.random()*5).toFixed(1);

let gender = Math.random()>0.5 ? "men" : "women";

let img=`https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random()*90)}.jpg`;

astrologers.push({

name:"Astrologer "+i,
skill,
exp,
price,
rating,
img

});

}

function displayAstrologers(list){

container.innerHTML="";

list.forEach(a=>{

container.innerHTML+=`

<div class="astro-card" data-skill="${a.skill}">

<img src="${a.img}">

<h3>${a.name}</h3>

<p>${a.skill}</p>

<p>Experience: ${a.exp} Years</p>

<p>₹${a.price}/min</p>

<p class="rating">⭐ ${a.rating}</p>

<button class="chat-btn" onclick="openChat('${a.name}')">Chat</button>

</div>

`;

});

}

displayAstrologers(astrologers);


/* SEARCH */

document.getElementById("searchInput").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=astrologers.filter(a=>a.name.toLowerCase().includes(value));

displayAstrologers(filtered);

});


/* FILTER */

function filterCategory(cat){

if(cat==="All"){

displayAstrologers(astrologers);

return;

}

let filtered=astrologers.filter(a=>a.skill===cat);

displayAstrologers(filtered);

}


/* CHAT UI */

function openChat(name){

document.getElementById("chatPopup").style.display="block";

document.getElementById("chatName").innerText="Chat with "+name;

}


function closeChat(){

document.getElementById("chatPopup").style.display="none";

}


function sendMessage(){

let input=document.getElementById("chatInput");

let msg=input.value;

if(msg==="") return;

let box=document.getElementById("chatMessages");

box.innerHTML+="<p><b>You:</b> "+msg+"</p>";

input.value="";

}