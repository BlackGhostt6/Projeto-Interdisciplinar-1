const botao = document.getElementById("botao");
const whatsapp = document.getElementById("whatsapp")

botao.addEventListener("click", function() {
    window.location.href = "contact/index.html";
});

whatsapp.addEventListener("click", function() {
    window.location.href = "https://wa.me/5531995584785?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20minha%20empresa.";
});