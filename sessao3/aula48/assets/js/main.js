const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  // verificar as telcas pressionadas 'keypress''
  if (e.keyCode === 13) {
    // verificar o ENTER = 13
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

/* inputTarefa.addEventListener('keypress', function(e){ // verificar as telcas pressionadas 'keypress''
if(e.keyCode ===13){ // verificar o ENTER = 13
    console.log('ENTER pressionado')
}

}) */

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar();
  salvarTarefas();
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "apagar esta tarefa");
  li.appendChild(botaoApagar);
}

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    console.log(el.parentElement);
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    const tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
  //criar um json com a listadetarefas
  const tarefasJSON = JSON.stringify(listaDeTarefas); //converter para string json
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
   const listaDeTarefas = JSON.parse(tarefas) //converter para um array json
    console.log(tarefas)


    for (let tarefa of listaDeTarefastarefas){
        criaTarefa(tarefa)
    }
    adicionarTarefasSalvas();
}


