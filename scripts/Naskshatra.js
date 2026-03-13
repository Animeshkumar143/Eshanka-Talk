// ================= NAKSHATRA RESULT =================

document.getElementById("moonForm")
.addEventListener("submit",function(e){

 e.preventDefault();

 const name = document.getElementById("moonName").value;

 // Demo: Abhi fixed Ashwini
 const data = {

   name:"Ashwini",

   charMale:"Ashwini males are confident...",
   charFemale:"Ashwini females are energetic...",

   proMale:"Good in business...",
   proFemale:"Good in management...",

   marMale:"Marriage after 26...",
   marFemale:"Marriage after 23...",

   healthMale:"Generally healthy...",
   healthFemale:"Minor issues...",

   pada:[
     "Leadership qualities",
     "Artistic nature",
     "Intelligent mind",
     "Medical profession"
   ]

 };


 // Fill Data

 document.getElementById("nakTitle").innerText =
 `${name}'s Birth Star Analysis`;

 document.getElementById("nakSub").innerText =
 data.name+" Nakshatra";


 document.getElementById("nakCharMale").innerText = data.charMale;
 document.getElementById("nakCharFemale").innerText = data.charFemale;

 document.getElementById("nakProMale").innerText = data.proMale;
 document.getElementById("nakProFemale").innerText = data.proFemale;

 document.getElementById("nakMarMale").innerText = data.marMale;
 document.getElementById("nakMarFemale").innerText = data.marFemale;

 document.getElementById("nakHealthMale").innerText = data.healthMale;
 document.getElementById("nakHealthFemale").innerText = data.healthFemale;


 document.getElementById("pada1").innerText = data.pada[0];
 document.getElementById("pada2").innerText = data.pada[1];
 document.getElementById("pada3").innerText = data.pada[2];
 document.getElementById("pada4").innerText = data.pada[3];


 document.getElementById("nakResult").style.display="block";
 document.getElementById("nakResult")
 .scrollIntoView({behavior:"smooth"});

});
