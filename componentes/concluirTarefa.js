const BotaoConclui = () => {
    const botao = document.createElement ('button')
    botao.classList.add('check-button')
    botao.innerText = 'concluído'
    botao.addEventListener('click', concluirTarefa)
    return botao
}

const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target // indica o alvo do evento, do click
    const tarefaConcluida = botaoConclui.parentElement // pegar o pai do elemento botaoConclui
    tarefaConcluida.classList.toggle('done') // metodo toggle(devolve bolleano V or F) e executa a classe css 
}

export default BotaoConclui