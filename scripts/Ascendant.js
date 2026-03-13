document.addEventListener("DOMContentLoaded",()=>{

  const form = document.getElementById("moonForm");

  const popup = document.getElementById("ascPopup");

  const close = document.getElementById("ascClose");

  const again = document.getElementById("ascAgain");

  const share = document.getElementById("ascShare");


  /* ================= DATA ================= */

  const ascData = {

    Aries:{
      about:"Aries ascendant people are energetic, confident and courageous.",
      personality:"Bold, ambitious, leadership oriented and competitive.",
      physical:"Strong body, sharp eyes, athletic build.",
      health:"May face headaches, stress and blood pressure issues.",
      career:"Good in leadership, defence, sports, business.",
      love:"Passionate, loyal and protective partner."
    },

    Taurus:{
      about:"Taurus ascendants are calm, stable and practical.",
      personality:"Patient, reliable and luxury loving.",
      physical:"Strong neck, attractive face, solid body.",
      health:"May face throat and weight issues.",
      career:"Banking, art, real estate, finance.",
      love:"Loyal, romantic and caring."
    },

    Gemini:{
      about:"Gemini ascendants are intelligent and communicative.",
      personality:"Talkative, curious and adaptable.",
      physical:"Slim body, sharp features.",
      health:"Nervous system issues possible.",
      career:"Media, writing, sales, teaching.",
      love:"Flirty but emotionally attached."
    },

    Cancer:{
      about:"Cancer ascendants are emotional and nurturing.",
      personality:"Sensitive, caring, family oriented.",
      physical:"Round face, soft features.",
      health:"Digestive issues possible.",
      career:"Healthcare, hospitality, education.",
      love:"Deeply emotional and loyal."
    },

    Leo:{
      about:"Leo ascendants are confident and royal.",
      personality:"Leader, proud and ambitious.",
      physical:"Broad shoulders, glowing face.",
      health:"Heart and spine care needed.",
      career:"Politics, acting, management.",
      love:"Protective and passionate."
    },

    Virgo:{
      about:"Virgo ascendants are analytical and disciplined.",
      personality:"Practical, perfectionist.",
      physical:"Slim body, sharp eyes.",
      health:"Stomach and skin issues.",
      career:"IT, research, medicine.",
      love:"Loyal but shy."
    },

    Libra:{
      about:"Libra ascendants are charming and balanced.",
      personality:"Diplomatic, artistic.",
      physical:"Beautiful face, balanced body.",
      health:"Kidney and skin issues.",
      career:"Law, design, fashion.",
      love:"Romantic and caring."
    },

    Scorpio:{
      about:"Scorpio ascendants are intense and powerful.",
      personality:"Secretive, determined.",
      physical:"Sharp eyes, strong aura.",
      health:"Reproductive health issues.",
      career:"Investigation, research.",
      love:"Deep and possessive."
    },

    Sagittarius:{
      about:"Sagittarius ascendants are optimistic and adventurous.",
      personality:"Truthful, energetic.",
      physical:"Tall, athletic body.",
      health:"Liver and thigh problems.",
      career:"Teaching, travel, philosophy.",
      love:"Freedom loving."
    },

    Capricorn:{
      about:"Capricorn ascendants are disciplined and hardworking.",
      personality:"Responsible, ambitious.",
      physical:"Lean body, serious look.",
      health:"Joint pain issues.",
      career:"Management, engineering.",
      love:"Serious in relationships."
    },

    Aquarius:{
      about:"Aquarius ascendants are innovative and humanitarian.",
      personality:"Creative, independent.",
      physical:"Tall, unique features.",
      health:"Blood circulation issues.",
      career:"Technology, science.",
      love:"Friendly partner."
    },

    Pisces:{
      about:"Pisces ascendants are spiritual and emotional.",
      personality:"Kind, imaginative.",
      physical:"Soft eyes, delicate body.",
      health:"Foot related issues.",
      career:"Music, healing.",
      love:"Romantic dreamer."
    }

  };


  /* ================= CALC (Demo Logic) ================= */

  function getAscendant(day, hour){

    const signs = Object.keys(ascData);

    return signs[(day + hour) % 12];
  }


  /* ================= SUBMIT ================= */

  form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name = moonName.value.trim();
    const day = Number(moonDay.value);
    const hour = Number(moonHour.value);

    if(!name || !day){
      alert("Fill details");
      return;
    }

    const sign = getAscendant(day, hour);

    const data = ascData[sign];


    /* ================= FILL ================= */

    ascSign.innerText = sign;

    ascImg.src = `../assets/rashi/${sign.toLowerCase()}.png`;

    ascAbout.innerText = data.about;

    ascLine.innerText = `Your ascendant is ${sign}`;

    ascPersonality.innerText = data.personality;

    ascPhysical.innerText = data.physical;

    ascHealth.innerText = data.health;

    ascCareer.innerText = data.career;

    ascLove.innerText = data.love;


    popup.style.display="flex";

  });


  /* ================= CLOSE ================= */

  close.onclick = ()=> popup.style.display="none";

  again.onclick = ()=> popup.style.display="none";


  /* ================= SHARE ================= */

  share.onclick = ()=>{

    const msg = `✨ Ascendant Report ✨

Name: ${moonName.value}
Ascendant: ${ascSign.innerText}

Eshanka Talk`;

    window.open(
      "https://wa.me/?text="+encodeURIComponent(msg),
      "_blank"
    );

  };

});