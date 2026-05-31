const limparButton = document.getElementById('btn-limpar');

let contagem = 0;

function adicionarTarefa(){
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaDeTarefas = document.getElementById('lista_de_tarefa');
    const contador = document.getElementById('mensagem_saudacao');

    let tarefa = inputElement.value;
    let mensagem, cor;
    
    if (tarefaValida(tarefa, contagem, limparButton)) {
        let novaTarefa = document.createElement('li');
        mensagem = 'Tarefa adicionada com Sucesso!';
        cor = 'green';

        contagem++;
        
        novaTarefa.textContent = tarefa;
        listaDeTarefas.appendChild(novaTarefa);
        
        limparButton.classList.add('apparent')
        console.log(limparButton.classList)

    }else{
        mensagem = 'Tarefa inválida, redigite!';
        cor = 'red';
    }
    
    contador.textContent = 'Adicione tarefas! (' + contagem + ')';
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
    
    inputElement.value = '';
    inputElement.focus();
}

function tarefaValida(tarefa){
    return tarefa.trim().length >=5;
}

function limparLista(){
   const listaDeTarefas = document.getElementById('lista_de_tarefa');
    
    if (listaDeTarefas.children.length >= 1) {
        const contador = document.getElementById('mensagem_saudacao');
        const mensagemElement = document.getElementById('mensagem');

        listaDeTarefas.textContent = '';
        contagem = 0;
        contador.textContent = 'Adicione tarefas! (' + contagem + ')';
        
        mensagemElement.textContent = 'Lista limpa!';
        mensagemElement.style.color = 'green';
        limparButton.classList.remove('apparent')
    }
}