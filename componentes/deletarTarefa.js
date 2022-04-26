const BotaoDeleta = () =>{
    const botao = document.createElement('button')
    botao.classList.add('check-button')
    botao.innerText = 'deletar'
    botao.addEventListener('click', deletarTarefa)
    return botao
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target
    const tarefaConcluida = botaoDeleta.parentElement
    tarefaConcluida.remove()
}

export default  BotaoDeleta 