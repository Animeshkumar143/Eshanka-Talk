// ================= CHATBOT =================
document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("chatbot-toggle");
  const modal = document.getElementById("chatbot-modal");
  const closeBtn = document.getElementById("chatbot-close");

  const input = document.getElementById("chatbot-input-field");
  const send = document.getElementById("chatbot-send");
  const messages = document.getElementById("chatbot-messages");

  if (!toggle || !modal) return;


  // Fake astrologers
  const astrologers = [
    "Pandit Abhay",
    "Acharya Animesh",
    "Guruji Vinimesh",
    "Astro Akkansha",
    "Jyotish Ankit",
    "Pandit Ramesh"
  ];

  let agentAssigned = false; // IMPORTANT FLAG


  // Add message
  function addMsg(txt, type){

    const d = document.createElement("div");
    d.className = "message " + type;
    d.innerText = txt;

    messages.appendChild(d);
    messages.scrollTop = messages.scrollHeight;
  }


  // Assign agent (only once)
  function assignAgent(){

    if(agentAssigned) return;

    agentAssigned = true;

    const name =
      astrologers[Math.floor(Math.random() * astrologers.length)];

    addMsg("🔍 Finding available astrologer...", "bot");

    setTimeout(() => {
      addMsg(`✅ You are now connected with ${name}`, "bot");
    }, 2000);
  }


  // Open chatbot
  toggle.addEventListener("click", () => {

    modal.classList.add("active");

    if (!messages.children.length){

      addMsg("👋 Hi! I am Eshanka Assistant.", "bot");

    }

  });


  // Close chatbot
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });


  // Send message
  send?.addEventListener("click", () => {

    const txt = input.value.trim();
    if (!txt) return;

    addMsg(txt, "user");
    input.value = "";

    // First user message → assign agent
    if(!agentAssigned){
      assignAgent();
    }

    setTimeout(() => {
      addMsg("✨ Our astrologer will guide you shortly.", "bot");
    }, 500);

  });

});
