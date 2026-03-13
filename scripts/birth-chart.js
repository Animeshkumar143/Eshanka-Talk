document.addEventListener("DOMContentLoaded",()=>{

  const form = document.getElementById("moonForm");

  const popup = document.getElementById("birthPopup");

  const close = document.getElementById("birthClose");

  const again = document.getElementById("birthAgain");

  const share = document.getElementById("birthShare");


  /* ================= DUMMY DATA ================= */

  const planets = [
    ["Sun","Virgo","17°13","10","Friendly"],
    ["Moon","Aries","6°22","5","Friendly"],
    ["Mars","Sagittarius","20°43","1","Friendly"],
    ["Mercury","Libra","5°26","11","Friendly"],
    ["Venus","Leo","22°15","9","Enemy"],
    ["Jupiter","Gemini","20°26","7","Enemy"],
    ["Saturn","Taurus","21°24","6","Friendly"],
    ["Rahu","Gemini","7°10","7","—"],
    ["Ketu","Sagittarius","7°10","1","—"]
  ];


  const dasha = [
    ["Ketu","Birth","2005"],
    ["Venus","2005","2025"],
    ["Sun","2025","2031"],
    ["Moon","2031","2041"],
    ["Mars","2041","2048"],
    ["Rahu","2048","2066"],
    ["Jupiter","2066","2082"],
    ["Saturn","2082","2101"],
    ["Mercury","2101","2118"]
  ];


  /* ================= SUBMIT ================= */

  form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name = moonName.value.trim();

    if(!name){
      alert("Fill name");
      return;
    }


    /* TITLE */

    birthTitle.innerText = `${name}'s Birth / Natal Report`;


    /* CHART IMAGES */

    lagnaChart.src = "../assets/chart/lagna.png";

    navamsaChart.src = "../assets/chart/navamsa.png";


    /* PLANET TABLE */

    const planetBody = document.querySelector("#planetTable tbody");

    planetBody.innerHTML = "";

    planets.forEach(p=>{

      planetBody.innerHTML += `
        <tr>
          <td>${p[0]}</td>
          <td>${p[1]}</td>
          <td>${p[2]}</td>
          <td>${p[3]}</td>
          <td>${p[4]}</td>
        </tr>
      `;

    });


    /* DASHA TABLE */

    const dashaBody = document.querySelector("#dashaTable tbody");

    dashaBody.innerHTML="";

    dasha.forEach(d=>{

      dashaBody.innerHTML += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
        </tr>
      `;

    });


    popup.style.display="flex";

  });


  /* ================= CLOSE ================= */

  close.onclick = ()=> popup.style.display="none";

  again.onclick = ()=> popup.style.display="none";


  /* ================= SHARE ================= */

  share.onclick = ()=>{

    const msg = `✨ Birth Chart Report ✨

Name: ${moonName.value}

Eshanka Talk`;

    window.open(
      "https://wa.me/?text="+encodeURIComponent(msg),
      "_blank"
    );

  };

});