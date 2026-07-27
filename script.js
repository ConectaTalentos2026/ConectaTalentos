document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o formulário e os campos de entrada
  const form = document.querySelector("form");
  const usuarioInput = document.getElementById("usuario-id");
  const senhaInput = document.getElementById("senha"); // Seleciona pelo ID que ajustamos

  


  form.addEventListener("submit", (event) => {
    // Evita que o formulário envie os dados para a URL do 'action' e recarregue a página
    event.preventDefault();

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value;

    // Validação das credenciais
    if (usuario === "lucas" && senha === "01234") {
      // Redireciona para a página do candidato
      window.location.href = "Usuario.html";
    } else if (usuario === "serasa" && senha === "56789") {
      // Redireciona para a página da empresa
      window.location.href = "empresa.html";
    } else {
      // Alerta simples caso os dados estejam incorretos
      alert("Usuário ou senha inválidos. Tente novamente!");
    }
  });
});