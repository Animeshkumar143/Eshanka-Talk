// ================= ISHTA DEVATA POPUP =================

document.addEventListener("DOMContentLoaded",()=>{

const form = document.getElementById("moonForm");

const popup = document.getElementById("ishtaPopup");
const close = document.getElementById("ishtaClose");
const again = document.getElementById("ishtaAgain");
const share = document.getElementById("ishtaShare");


/* ================= DATA ================= */

const ishtaData = {

  Ashwini:{
    north:{
      name:"Ashwini - Ashwini Kumar",
      img:"../assets/ishta/ashwini-north.jpg",
      desc:"The twin horsemen, divine healers and symbols of vitality and renewal."
    },
    south:{
      name:"Ashwini - Asvini Devargal",
      img:"../assets/ishta/ashwini-south.jpg",
      desc:"Southern tradition healers who bless with energy and recovery."
    }
  },

  Bharani:{
    north:{
      name:"Bharani - Yama",
      img:"../assets/ishta/bharani-north.jpg",
      desc:"Lord of discipline, transformation and karmic balance."
    },
    south:{
      name:"Bharani - Dharma Devargal",
      img:"../assets/ishta/bharani-south.jpg",
      desc:"Represents justice, duty and spiritual responsibility."
    }
  }

  // Baad me aur add kar sakte ho
};


/* ================= SUBMIT ================= */

form.addEventListener("submit",(e)=>{

 e.preventDefault();

 const name = document.getElementById("moonName").value.trim();

 if(!name){
   alert("Enter name first");
   return;
 }


 /* -------- DEMO LOGIC (abhi) -------- */
 /* Baad me backend se real nakshatra aayega */

 const nakshatra = "Ashwini"; // temporary


 const data = ishtaData[nakshatra];

 if(!data){
   alert("Data not found");
   return;
 }


 /* ================= OUTPUT ================= */

 document.getElementById("ishtaTitle").innerText =
 `${name}'s Ishta Devata Results`;


 // North
 document.getElementById("ishtaNorthImg").src = data.north.img;
 document.getElementById("ishtaNorthName").innerText = data.north.name;
 document.getElementById("ishtaNorthDesc").innerText = data.north.desc;


 // South
 document.getElementById("ishtaSouthImg").src = data.south.img;
 document.getElementById("ishtaSouthName").innerText = data.south.name;
 document.getElementById("ishtaSouthDesc").innerText = data.south.desc;


 popup.style.display="flex";

});


/* ================= CLOSE ================= */

close.addEventListener("click",()=>{
 popup.style.display="none";
});


/* ================= AGAIN ================= */

again.addEventListener("click",()=>{

 popup.style.display="none";

 form.reset();

});


/* ================= SHARE ================= */

share.addEventListener("click",()=>{

 const title = document.getElementById("ishtaTitle").innerText;

 const msg = `🙏 Ishta Devata Report 🙏

${title}

Check on Eshanka Talk 💫`;

 window.open(
  "https://wa.me/?text="+encodeURIComponent(msg),
  "_blank"
 );

});

});
