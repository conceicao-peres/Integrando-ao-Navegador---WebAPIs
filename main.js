import BotaoConclui from './componentes/concluirTarefa.js'
import  BotaoDeleta from './componentes/deletarTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]')

const criarTarefa = (evento) => {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const valor = input.value // capturar o valor do input

    const lista = document.querySelector('[data-list]')

    const tarefa = document.createElement('li') //criar li
    tarefa.classList.add('task') //passar class 'task' para a li

    const conteudo = `<p class="content">${valor}</p>` // criar paragrafo na li e receber o valor do input
    tarefa.innerHTML = conteudo // colocar o paragrafo dentro da li

    tarefa.appendChild(BotaoConclui()) // colocar botao concluir na li
    tarefa.appendChild(BotaoDeleta())

    lista.appendChild(tarefa) // colocar a li dentro da lista

    input.value = " "
} 
novaTarefa.addEventListener('click', criarTarefa)


