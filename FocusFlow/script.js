// Inicializa as animações AOS
AOS.init();

// Mapeamento dos elementos da tela
const taskInput = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput');
const timerDisplay = document.getElementById('timerDisplay');
const statusLabel = document.getElementById('statusLabel');
const timerBox = document.getElementById('timerBox');

const btnStart = document.getElementById('btnStart');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');

const finishModal = new bootstrap.Modal(document.getElementById('finishModal'));
const modalMessage = document.getElementById('modalMessage');

// Variáveis de controle do cronômetro
let timerInterval = null;
let secondsLeft = 0;
let isPaused = false;

// Formata segundos em MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Atualização a cada segundo
function updateTimer() {
    if (secondsLeft > 0) {
        secondsLeft--;
        timerDisplay.textContent = formatTime(secondsLeft);
    } else {
        // Tempo acabou!
        clearInterval(timerInterval);
        
        // Exibe mensagem personalizada no modal
        const currentTask = taskInput.value.trim() || "Ciclo de estudos";
        modalMessage.textContent = `Tarefa: "${currentTask}" finalizada com sucesso! Hora de uma pausa.`;
        finishModal.show();
        
        resetToInitial();
    }
}

// Ação do Botão Iniciar / Retomar
btnStart.addEventListener('click', () => {
    if (isPaused) {
        // Se estava pausado, apenas retoma de onde parating
        isPaused = false;
        statusLabel.textContent = "Foco Ativo";
        timerBox.className = "timer-display my-4 p-3 rounded-4 timer-active";
        
        btnStart.classList.add('d-none');
        btnPause.classList.remove('d-none');
        
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        // Início do zero (Validando casos limite/inválidos igual aos testes do Pytest!)
        const minutes = parseInt(timeInput.value);
        if (isNaN(minutes) || minutes <= 0) {
            alert("Por favor, insira um tempo válido maior que zero!");
            return;
        }

        secondsLeft = minutes * 60;
        timerDisplay.textContent = formatTime(secondsLeft);
        
        const currentTask = taskInput.value.trim() || "Foco Total";
        statusLabel.textContent = `Focando em: ${currentTask}`;
        timerBox.className = "timer-display my-4 p-3 rounded-4 timer-active";

        // Gerencia exibição dos botões profissionais da v1.1.0
        btnStart.classList.add('d-none');
        btnPause.classList.remove('d-none');
        btnStop.classList.remove('d-none');
        
        taskInput.disabled = true;
        timeInput.disabled = true;

        timerInterval = setInterval(updateTimer, 1000);
    }
});

// Ação do Botão Pausar
btnPause.addEventListener('click', () => {
    clearInterval(timerInterval);
    isPaused = true;
    
    statusLabel.textContent = "Sessão Pausada";
    timerBox.className = "timer-display my-4 p-3 rounded-4 timer-paused";
    
    btnPause.classList.add('d-none');
    btnStart.innerHTML = '<i class="fa-solid fa-play me-2"></i>Retomar';
    btnStart.classList.remove('d-none');
});

// Ação do Botão Parar / Resetar
btnStop.addEventListener('click', () => {
    clearInterval(timerInterval);
    resetToInitial();
});

// Reseta o estado da aplicação
function resetToInitial() {
    isPaused = false;
    secondsLeft = 0;
    
    const minutes = parseInt(timeInput.value) || 25;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:00`;
    
    statusLabel.textContent = "Aguardando Início";
    timerBox.className = "timer-display my-4 p-3 rounded-4 bg-light";
    
    btnStart.innerHTML = '<i class="fa-solid fa-play me-2"></i>Iniciar';
    btnStart.classList.remove('d-none');
    btnPause.classList.add('d-none');
    btnStop.classList.add('d-none');
    
    taskInput.disabled = false;
    timeInput.disabled = false;
}