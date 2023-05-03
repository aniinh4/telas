const form = document.getElementById("cadastro-form");
const nomeCompleto = document.getElementById("nome_completo");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar_senha");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");

const botao = document.querySelector(".botao1");
const mensagem = document.getElementById("mensagem");

function Cadastro() {
  var nome = nomeCompleto.value;
  var senhaValue = senha.value;
  var confirmarSenhaValue = confirmarSenha.value;
  var emailValue = email.value;
  var cpfValue = cpf.value;
  var telefoneValue = telefone.value;

  if (nome == "" || senhaValue == "" || confirmarSenhaValue == "" || emailValue == "" || cpfValue == "" || telefoneValue == "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  if (cpfValue.length !== 11) {
    alert("CPF inválido: deve conter 11 números.");
    return false;
  }
  if (senhaValue != confirmarSenhaValue) {
    alert("As senhas não correspondem.");
    return false;

}alert("Cadastro criado com sucesso!");
location.href = "home.html"
  form.reset();
  return true;

}