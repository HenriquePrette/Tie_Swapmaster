// Função para processar o resgate da recompensa
function processarResgate(dia) {
    const diaElemento = document.getElementById(`dia-${dia}`);
    const botao = document.getElementById(`btn-dia-${dia}`);
    const contador = document.getElementById(`contador-dia-${dia}`);
    
    // Verifica se o dia já foi resgatado
    if (localStorage.getItem(`dia${dia}Resgatado`)) {
        botao.textContent = '100 Moedas Resgatada✔️';
        botao.disabled = true;
        return;
    }
    
    if (dia === 1) {
        // Marca o dia 1 como resgatado
        botao.textContent = 'Recompensa Resgatada';
        botao.disabled = true;
        botao.classList.add('resgatado'); // Adiciona a classe de resgatado
        localStorage.setItem('dia1Resgatado', 'true');
        
        // Mostra a mensagem de recompensa resgatada
        const mensagem = document.createElement('div');
        mensagem.className = 'mensagem-resgatada';
        mensagem.textContent = 'Recompensa Resgatada';
        diaElemento.appendChild(mensagem);
        mensagem.style.display = 'block';
        
        // Configura o desbloqueio do próximo dia
        const agora = new Date().getTime();
        localStorage.setItem('proximoDia', agora + 24 * 60 * 60 * 1000); // Adiciona 24 horas
    } else if (dia === 2) {
        // Verifica se o dia 1 foi resgatado
        if (!localStorage.getItem('dia1Resgatado')) {
            botao.textContent = 'Dia Bloqueado';
            botao.disabled = true;
            return;
        }
        
        botao.textContent = 'Resgatar Recompensa';
        botao.disabled = false;
        
        // Calcula o tempo restante para desbloquear o dia 2
        const proximoDia = localStorage.getItem('proximoDia');
        const tempoRestante = proximoDia ? proximoDia - new Date().getTime() : 0;
        
        if (tempoRestante > 0) {
            const horas = Math.floor(tempoRestante / (1000 * 60 * 60));
            const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
            
            contador.textContent = `Tempo restante: ${horas}h ${minutos}m ${segundos}s`;
            setInterval(() => {
                const tempoRestante = proximoDia - new Date().getTime();
                if (tempoRestante <= 0) {
                    contador.textContent = 'Dia desbloqueado!'; 
                    botao.disabled = false;
                    botao.textContent = 'Resgatar Recompensa';
                } else {
                    const horas = Math.floor(tempoRestante / (1000 * 60 * 60));
                    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
                    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
                    contador.textContent = `Tempo restante: ${horas}h ${minutos}m ${segundos}s`;
                }
            }, 1000);
        } else {
            contador.textContent = 'Dia desbloqueado!';
            botao.disabled = false;
            botao.textContent = 'Resgatar Recompensa';
        }
    }
}

// Inicializa o sistema de recompensas
document.addEventListener('DOMContentLoaded', () => {
    const dias = [1, 2]; // Lista de dias
    dias.forEach(dia => processarResgate(dia));
});
