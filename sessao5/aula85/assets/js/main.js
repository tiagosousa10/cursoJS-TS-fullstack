class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario"); // selecionar formulario
    this.eventos();
  }
  //              TODOS OS PROCEDIMENTOS
  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  //        enviar formulario 
  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasValidas();
    if (camposValidos && senhasValidas) {
      alert("formulario Enviado");
      this.formulario.submit();
    }
  }
  senhasSaoValidas() {
    let valid = true;
    const senha = this.formulario.querySelector(".senha");
    const repetirsenha = this.formulario.querySelector(".repetir-senha");
    if (senha.value !== repetirsenha.value) {
      valid = false;
      this.criaErro(senha, "campos senha e repetir senha nao sao iguais");
      this.criaErro(
        repetirsenha,
        "campos senha e repetir senha nao sao iguais"
      );
    }
    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, "precisa de ter no minimo 6 e max 12");
    }
  }
  camposSaoValidos() {
    let valid = true;
    for (let errorText of this.formulario.document.querySelector(
      ".error-text"
    )) {
      // selecionar todas as tags .error-text
      errorText.remove();
    }
    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText; //elemento irmao anterior
      if (!campo.value) {
        // se o campo estiver vazio
        this.criaErro(campo, `Campo ${label} nao pode estar em branco.`);
        valid = false;
      }
      if (campo.classList.contains("cc")) {
        if (!this.validaCPF(campo)) valid = false;
      }
      if (campo.classList.contains("utilizador")) {
        if (!this.validaUtilizador(campo)) valid = false;
      }
    }
  }

  validaUtilizador(campo) {
    const utilizador = campo.value;
    let valid = true;
    if (utilizador.length < 3 || utilizador.length > 12) {
      this.criaErro(
        campo,
        "CC Invalido, precisa de ter entre 3 a 12 caracteres"
      );
      valid = false;
    }
    if (!utilizador.match(/a-zA-Z0-9)+/g)) {
      this.criaErro(
        campo,
        "CC Invalido, nome de utilizador apenas pode conter letras e/ou numeros"
      );
      valid = false;
    }
    return valid;
  }
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);
    if (!cpf.valida()) {
      this.criaErro(campo, "CPF Invalido");
      return false;
    }
    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
