document.addEventListener('DOMContentLoaded', function () {
    function atualizarNivel(exp) {
        const barraProgresso = document.getElementById('barra-progresso');
        const progressoExtra = document.getElementById('progresso-extra');
        const nivelElemento = document.getElementById('nivel');
        const expPorNivel = 2000;
        const nivel = Math.floor(exp / expPorNivel) + 1;
        const progresso = (exp % expPorNivel) / expPorNivel * 100;
        
        barraProgresso.style.width = `${progresso}%`;
        progressoExtra.style.width = `30%`; // Exibir 30% como progresso extra
        nivelElemento.textContent = `Nível ${nivel}`;
    }

    // Atualize a quantidade de experiência aqui
    atualizarNivel(4500); // Experiência total do usuário
});