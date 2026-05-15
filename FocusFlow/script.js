AOS.init();

let timerInterval = null;
let secondsLeft = 25 * 60;
const timerDisplay = document.getElementById('timerDisplay');
const statusLabel = document.getElementById('statusLabel');
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const finishModal = new bootstrap.Modal(document.getElementById('finishModal'));

// REQUISITO: Consumo de API Pública (Frases Motivacionais)
async function fetchMotivationalQuote() {
    quoteText.textContent = "Carregando frase inspiradora...";
    quoteAuthor.textContent = "";
    try {
        // Usando uma API pública/aberta que não exige chaves privadas de acesso (Token/Auth)
        const response = await fetch('https://openquotesapi.herokuapp.com/api/quotes/random', { timeout: 5000 });
        if (!response.ok) throw new Error();
        const data = await response.json();
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `- ${data.author || 'Desconhecido'}`;
    } catch (error) {
        // Fallback resiliente caso a API externa falhe ou dê timeout
        quoteText.textContent = `"O sucesso é a soma de pequenos esforços repetidos dia após dia."`;
        quoteAuthor.textContent = "- Robert Collier";
    }
}

function updateTimer() {
    if (secondsLeft > 0) {
        secondsLeft--;
        const mins = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
        const secs = (secondsLeft % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${mins}:${secs}`;
    } else {
        clearInterval(timerInterval);
        document.getElementById('modalMessage').textContent = `Você concluiu a tarefa: ${document.getElementById('taskInput').value || 'Foco'}!`;
        finishModal.show();
        resetTimer();
    }
}

btnStart.addEventListener('click', () => {
    // Dispara a busca na API toda vez que o usuário inicia um ciclo de foco
    fetchMotivationalQuote();
    
    statusLabel.textContent = "Foco Ativo!";
    btnStart.classList.add('d-none');
    btnStop.classList.remove('d-none');
    timerInterval = setInterval(updateTimer, 1000);
});

btnStop.addEventListener('click', resetTimer);

function resetTimer() {
    clearInterval(timerInterval);
    secondsLeft = 25 * 60;
    timerDisplay.textContent = "25:00";
    statusLabel.textContent = "Aguardando Início";
    btnStart.classList.remove('d-none');
    btnStop.classList.add('d-none');
}