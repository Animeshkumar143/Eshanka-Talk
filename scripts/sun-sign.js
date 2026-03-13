// ================= SUN SIGN POPUP SCRIPT (FINAL) =================

document.addEventListener("DOMContentLoaded",()=>{

/* ================= ELEMENTS ================= */

const form = document.getElementById("sunForm");
const popup = document.getElementById("sunPopup");

const sunName  = document.getElementById("sunName");
const sunDay   = document.getElementById("sunDay");
const sunMonth = document.getElementById("sunMonth");
const sunYear  = document.getElementById("sunYear");
const sunPlace = document.getElementById("sunPlace");


/* ================= FILL DAY ================= */

for(let i=1;i<=31;i++){
  sunDay.innerHTML += `<option value="${i}">${i}</option>`;
}


/* ================= FILL YEAR ================= */

const now = new Date().getFullYear();

for(let y=now;y>=1950;y--){
  sunYear.innerHTML += `<option value="${y}">${y}</option>`;
}


/* ================= FILL CITY ================= */

const cities = [
 "Delhi","Mumbai","Kolkata","Chennai","Bangalore","Hyderabad",
 "Pune","Ahmedabad","Jaipur","Lucknow","Kanpur","Bhopal",
 "Indore","Patna","Ranchi","Gorakhpur","Varanasi","Agra",
 "Noida","Gurgaon","Faridabad","Amritsar","Ludhiana",
 "Chandigarh","Dehradun","Shimla","Udaipur","Jodhpur",
 "Surat","Vadodara","Rajkot","Nagpur","Nashik"
];

cities.forEach(c=>{
  sunPlace.innerHTML += `<option value="${c}">${c}</option>`;
});


/* ================= MONTHS ================= */

const months = [
 "January","February","March","April","May","June",
 "July","August","September","October","November","December"
];


/* ================= ZODIAC ================= */

const zodiac = [
 {sign:"Capricorn",from:[12,22],to:[1,19],ele:"Earth",pl:"Saturn"},
 {sign:"Aquarius",from:[1,20],to:[2,18],ele:"Air",pl:"Uranus"},
 {sign:"Pisces",from:[2,19],to:[3,20],ele:"Water",pl:"Neptune"},
 {sign:"Aries",from:[3,21],to:[4,19],ele:"Fire",pl:"Mars"},
 {sign:"Taurus",from:[4,20],to:[5,20],ele:"Earth",pl:"Venus"},
 {sign:"Gemini",from:[5,21],to:[6,20],ele:"Air",pl:"Mercury"},
 {sign:"Cancer",from:[6,21],to:[7,22],ele:"Water",pl:"Moon"},
 {sign:"Leo",from:[7,23],to:[8,22],ele:"Fire",pl:"Sun"},
 {sign:"Virgo",from:[8,23],to:[9,22],ele:"Earth",pl:"Mercury"},
 {sign:"Libra",from:[9,23],to:[10,22],ele:"Air",pl:"Venus"},
 {sign:"Scorpio",from:[10,23],to:[11,21],ele:"Water",pl:"Mars"},
 {sign:"Sagittarius",from:[11,22],to:[12,21],ele:"Fire",pl:"Jupiter"}
];


/* ================= SUBMIT ================= */

form.addEventListener("submit",(e)=>{

 e.preventDefault();

 const name  = sunName.value.trim();
 const day   = Number(sunDay.value);
 const month = sunMonth.value;
 const year  = sunYear.value;
 const place = sunPlace.value;

 if(!name || !day || !month || !year || !place){
   alert("Please fill all details");
   return;
 }

 const m = months.indexOf(month)+1;

 let result=null;

 zodiac.forEach(z=>{
  if(
   (m===z.from[0] && day>=z.from[1]) ||
   (m===z.to[0] && day<=z.to[1])
  ){
   result=z;
  }
 });

 if(!result){
   alert("Invalid Date");
   return;
 }


 /* ================= OUTPUT ================= */

 document.getElementById("sunTitle").innerText =
   `${name}'s Sun Sign Report`;

 document.getElementById("sunSignPop").innerText = result.sign;

 document.getElementById("sunElementPop").innerText = result.ele;
 document.getElementById("sunPlanetPop").innerText = result.pl;
 document.getElementById("vedicSignPop").innerText = result.sign;

 document.getElementById("sunPlacePop").innerText = place;

 document.getElementById("sunProfilePop").innerText =
 `Born on ${day} ${month} ${year} in ${place}.
 Your Sun sign is ${result.sign}.
 Element: ${result.ele}, Planet: ${result.pl}.`;

 // Image
 document.getElementById("sunImg").src =
   `../assets/zodiac/${result.sign.toLowerCase()}.png`;

 popup.style.display="flex";

});


/* ================= CLOSE ================= */

document.getElementById("sunClose").onclick = ()=>{
 popup.style.display="none";
};


/* ================= AGAIN ================= */

document.getElementById("sunAgainPop").onclick = ()=>{
 popup.style.display="none";
 form.reset();
};


/* ================= SHARE ================= */

document.getElementById("sunSharePop").onclick = ()=>{

 const msg =
 document.getElementById("sunTitle").innerText;

 window.open(
  "https://wa.me/?text="+encodeURIComponent(msg),
  "_blank"
 );

};

});