document.addEventListener("DOMContentLoaded",()=>{

  const form = document.getElementById("moonForm");

  const popup = document.getElementById("moonPopup");
  const close = document.getElementById("moonClose");
  const again = document.getElementById("moonAgain");
  const share = document.getElementById("moonShare");
  const pdfBtn = document.getElementById("moonPDFBtn");


  /* ================= RASHI CALC ================= */

  function getMoonRashi(day, month){

    const signs = [
      "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
      "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
    ];

    const days = [31,28,31,30,31,30,31,31,30,31,30,31];

    let total = day;

    for(let i=0;i<month-1;i++){
      total += days[i];
    }

    const pos = (total * 13) % 360;

    return signs[Math.floor(pos/30)];
  }


  /* ================= SUBMIT ================= */

  form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name = moonName.value.trim();
    const day = Number(moonDay.value);
    const monthName = moonMonth.value;
    const year = moonYear.value;
    const place = moonPlace.value;


    if(!name || !day || !monthName || !year || !place){
      alert("Please fill all details");
      return;
    }


    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];

    const month = months.indexOf(monthName)+1;

    const rashi = getMoonRashi(day, month);


    /* ================= FILL POPUP ================= */

    popupTitle.innerText = `${name}'s Rashi Report`;

    popupRashi.innerText = rashi;

    popName.innerText = name;

    popDob.innerText = `${day} ${monthName} ${year}`;

    popPlace.innerText = place;

    rashiImg.src = `../assets/rashi/${rashi.toLowerCase()}.png`;


    popup.style.display = "flex";

  });


  /* ================= CLOSE ================= */

  close.onclick = ()=> popup.style.display="none";

  again.onclick = ()=> popup.style.display="none";


  /* ================= SHARE ================= */

  share.onclick = ()=>{

    const msg = `✨ Moon Sign Report ✨

Name: ${popName.innerText}
Rashi: ${popupRashi.innerText}
DOB: ${popDob.innerText}
Place: ${popPlace.innerText}

Eshanka Talk 🌙`;

    window.open(
      "https://wa.me/?text="+encodeURIComponent(msg),
      "_blank"
    );

  };


  /* ================= PDF ================= */

  pdfBtn.onclick = ()=>{

    html2pdf()
      .set({
        margin:0.5,
        filename:`${popName.innerText}-rashi.pdf`,
        image:{type:'jpeg',quality:0.98},
        html2canvas:{scale:2},
        jsPDF:{unit:'in',format:'a4'}
      })
      .from(document.getElementById("moonPDF"))
      .save();

  };

});