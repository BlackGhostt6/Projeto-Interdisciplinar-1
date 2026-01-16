const form = document.getElementById("form-services");
const telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {
    telefone.value = telefone.value.replace(/[^0-9]/g, "");
});