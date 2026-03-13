// ================= REAL SHANI SADE SATI =================

document.addEventListener("DOMContentLoaded",()=>{

const form = document.getElementById("moonForm");
const resultBox = document.getElementById("sadeResult");

const title = document.getElementById("sadeTitle");
const status = document.getElementById("sadeStatus");
const note = document.getElementById("sadeNote");
const timeline = document.getElementById("sadeTimeline");


/* SATURN DATA */

const saturnData = [
 {sign:"Aries", from:1998, to:2000},
 {sign:"Taurus", from:2000, to:2003},
 {sign:"Gemini", from:2003, to:2005},
 {sign:"Cancer", from:2005, to:2008},
 {sign:"Leo", from:2008, to:2011},
 {sign:"Virgo", from:2011, to:2014},
 {sign:"Libra", from:2014, to:2017},
 {sign:"Scorpio", from:2017, to:2020},
 {sign:"Sagittarius", from:2020, to:2023},
 {sign:"Capricorn", from:2023, to:2025},
 {sign:"Aquarius", from:2025, to:2028},
 {sign:"Pisces", from:2028, to:2030}
];


/* MOON SIGN */

function getMoonSign(day,month){

 const signs = [
  "Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini",
  "Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"
 ];

 return signs[(day + month.length) % 12];
}


/* GET HOUSE */

function getNextSign(sign,step){

 const signs = [
  "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
  "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
 ];

 let i = signs.indexOf(sign);

 return signs[(i+step+12)%12];
}


/* SUBMIT */

form.addEventListener("submit",(e)=>{

 e.preventDefault();

 const name = moonName.value.trim();
 const day = Number(moonDay.value);
 const month = moonMonth.value;
 const year = Number(moonYear.value);


 const moonSign = getMoonSign(day,month);


 title.innerText = `${name}'s Shani Sade Sati Report`;

 timeline.innerHTML="";


 const risingSign  = getNextSign(moonSign,-1);
 const peakSign    = moonSign;
 const settingSign = getNextSign(moonSign,1);


 let active=false;


 saturnData.forEach(row=>{

  let phase="";

  if(row.sign===risingSign) phase="Rising";
  if(row.sign===peakSign) phase="Peak";
  if(row.sign===settingSign) phase="Setting";


  if(phase){

   if(new Date().getFullYear()>=row.from &&
      new Date().getFullYear()<=row.to){

      active=true;
   }


   timeline.innerHTML+=`

   <tr>
    <td>${row.sign}</td>
    <td>${row.from}</td>
    <td>${row.to}</td>
    <td>${phase}</td>
   </tr>

   `;

  }

 });


 status.innerText = active ? "Currently Active" : "Not Active";

 note.innerText =
 active ?
 "You are currently under Shani Sade Sati period." :
 "Currently you are free from Sade Sati.";


 resultBox.style.display="block";

 resultBox.scrollIntoView({behavior:"smooth"});

});

});
