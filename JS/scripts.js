


function toggle() {
    const input = document.getElementById("searchInp");
    const div = document.getElementById("randCard");
    const headSec = document.getElementById("headSec");
    headSec.style.height = headSec.style.height === "110vh" ? "50vh" : "110vh"
    input.style.display = input.style.display === "none" ? "block" : "none"
    div.style.display = div.style.display === "flex" ? "none" : "flex"
};
toggle()

// Yuxarı qayıt düyməsinin funksionallığı
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
}


document.getElementById("backToTopBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



function goHome(){
  window.location.href = 'index.htm'
};