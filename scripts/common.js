// ================= COMMON JS =================
document.addEventListener("DOMContentLoaded", () => {

  /* FADE ON SCROLL */
  const fades = document.querySelectorAll(".fade");
  if (fades.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    fades.forEach(el => obs.observe(el));
  }

  /* SWIPER */
  if (window.Swiper && document.querySelector(".astroSwiper")) {
    new Swiper(".astroSwiper", {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 2500 },
      breakpoints: {
        0:{slidesPerView:1},
        600:{slidesPerView:2},
        900:{slidesPerView:3}
      }
    });
  }

  /* ZODIAC SELECT */
  document.querySelectorAll(".zodiac-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".zodiac-card")
        .forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

});
// ================= BLOG SLIDER =================
if (document.querySelector(".blogSwiper")) {

  new Swiper(".blogSwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 }
    }
  });

}
// ================= LOGIN POPUP =================

document.addEventListener("DOMContentLoaded", function(){

  const openBtn = document.getElementById("open-login");
  const modal = document.getElementById("login-modal");
  const closeBtn = document.getElementById("close-login");

  // Open popup
  openBtn.addEventListener("click", function(){
    modal.classList.add("active");
  });

  // Close on X
  closeBtn.addEventListener("click", function(){
    modal.classList.remove("active");
  });

  // Close when clicking outside box
  modal.addEventListener("click", function(e){
    if(e.target === modal){
      modal.classList.remove("active");
    }
  });

});
// ================= TALK NOW POPUP =================

const openTalk = document.getElementById("open-talk");
const talkModal = document.getElementById("talk-modal");
const closeTalk = document.getElementById("close-talk");

// Open
openTalk.addEventListener("click", function(){
  talkModal.classList.add("active");
});

// Close
closeTalk.addEventListener("click", function(){
  talkModal.classList.remove("active");
});

// Close on outside click
talkModal.addEventListener("click", function(e){
  if(e.target === talkModal){
    talkModal.classList.remove("active");
  }
});
// ================= TALK CHAT CONNECT =================

const talkChatBtn = document.getElementById("talk-chat");
const chatbotToggle = document.getElementById("chatbot-toggle");
const talkModalBox = document.getElementById("talk-modal");

if(talkChatBtn){

  talkChatBtn.addEventListener("click", function(){

    // Close Talk Popup
    talkModalBox.classList.remove("active");

    // Open Chatbot
    chatbotToggle.click();

  });

}
