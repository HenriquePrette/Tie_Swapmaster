// Função para inicializar o Google Maps
function initMap() {
    var location = { lat: -23.550520, lng: -46.633308 }; // Localização: São Paulo, Brasil
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Nível de zoom
        center: location // Define o centro do mapa para a localização especificada
    });
    var marker = new google.maps.Marker({
        position: location, // Posição do marcador
        map: map // Mapa onde o marcador será exibido
    });
}

// Redirecionar para a página inicial em uma nova aba
function goHome() {
    window.open('nhene.html', '_blank'); // Substitua 'index.html' pelo caminho correto da página inicial
}

// Manipular o envio do formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simular envio da mensagem
    document.getElementById("success-message").style.display = "block";

    // Limpar o formulário
    document.getElementById("contact-form").reset();

    // Ocultar a mensagem de sucesso após 3 segundos
    setTimeout(function() {
        document.getElementById("success-message").style.display = "none";
    }, 3000);
});
