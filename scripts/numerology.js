// ================= NAME NUMEROLOGY (POPUP FINAL FIXED) =================
(function () {

  console.log("✅ numerology.js loaded");

  document.addEventListener("click", function (e) {

    const submitBtn = e.target.closest(".num-submit");
    const resetBtn  = e.target.closest(".num-reset");

    const popup = document.getElementById("numPopup");

    /* ---------- SUBMIT ---------- */
    if (submitBtn) {

      e.preventDefault();
      console.log("🔥 Submit button clicked");

      const nameEl  = document.getElementById("numName");
      const dayEl   = document.getElementById("numDay");
      const monthEl = document.getElementById("numMonth");
      const yearEl  = document.getElementById("numYear");

      if (!nameEl || !dayEl || !monthEl || !yearEl || !popup) {
        alert("Numerology DOM missing");
        return;
      }

      const name  = nameEl.value.trim();
      const day   = Number(dayEl.value);
      const month = monthEl.value;
      const year  = Number(yearEl.value);

      if (!name || !day || !month || !year) {
        alert("Please fill all required details");
        return;
      }

      /* ---------- HELPERS ---------- */

      const reduce = (n) => {
        while (n > 9) {
          n = n.toString().split("").reduce((a,b)=>a+ +b,0);
        }
        return n;
      };

      const nameNumber = (str) => {
        const map = {
          A:1,J:1,S:1,B:2,K:2,T:2,C:3,L:3,U:3,
          D:4,M:4,V:4,E:5,N:5,W:5,F:6,O:6,X:6,
          G:7,P:7,Y:7,H:8,Q:8,Z:8,I:9,R:9
        };

        let sum = 0;

        str.toUpperCase()
          .replace(/[^A-Z]/g,"")
          .split("")
          .forEach(c => sum += map[c] || 0);

        return reduce(sum);
      };

      const monthMap = {
        January:1, February:2, March:3, April:4, May:5, June:6,
        July:7, August:8, September:9, October:10, November:11, December:12
      };


      /* ---------- CALCULATION ---------- */

      const radical  = reduce(day);

      const destiny  =
        reduce(reduce(day) + reduce(monthMap[month]) + reduce(year));

      const nameNum  = nameNumber(name);


      /* ---------- OUTPUT (POPUP) ---------- */

      document.getElementById("numTitle").innerText =
        `${name}'s Numerology Report`;

      document.getElementById("popRadical").innerText = radical;
      document.getElementById("popDestiny").innerText = destiny;
      document.getElementById("popNameNum").innerText = nameNum;

      document.getElementById("popName").innerText = name;
      document.getElementById("popDob").innerText =
        `${day} ${month} ${year}`;


      /* ---------- SHOW POPUP ---------- */

      popup.style.display = "flex";

    }


    /* ---------- RESET ---------- */
    if (resetBtn) {

      e.preventDefault();

      console.log("♻️ Reset clicked");

      const popup = document.getElementById("numPopup");

      if (popup) popup.style.display = "none";

    }

  });


  /* ================= CLOSE ================= */

  document.getElementById("numClose")?.addEventListener("click",()=>{

    document.getElementById("numPopup").style.display="none";

  });


  /* ================= AGAIN ================= */

  document.getElementById("numAgainPop")?.addEventListener("click",()=>{

    document.getElementById("numPopup").style.display="none";

    document.getElementById("numName").value="";
    document.getElementById("numDay").value="";
    document.getElementById("numMonth").value="";
    document.getElementById("numYear").value="";

  });


  /* ================= SHARE ================= */

  document.getElementById("numSharePop")?.addEventListener("click",()=>{

    const name   = document.getElementById("popName")?.innerText;
    const dob    = document.getElementById("popDob")?.innerText;
    const rad    = document.getElementById("popRadical")?.innerText;
    const des    = document.getElementById("popDestiny")?.innerText;
    const nam    = document.getElementById("popNameNum")?.innerText;

    if(!name){
      alert("Please calculate first");
      return;
    }

    const message = `✨ Name Numerology Report ✨

Name: ${name}
DOB: ${dob}

Radical: ${rad}
Destiny: ${des}
Name: ${nam}

Check on Eshanka Talk 💫`;

    window.open(
      "https://wa.me/?text="+encodeURIComponent(message),
      "_blank"
    );

  });

})();