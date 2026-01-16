const form = document.getElementById("form-services");
const telefone = document.getElementById("telefone");

form.addEventListener("submit", (e) => {
const valor = telefone.value;

    if (!/^\d+$/.test(valor)) {e.preventDefault();
        alert("Digite apenas números no telefone");
        telefone.focus();
    }
});