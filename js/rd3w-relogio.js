function atualizarRelogio() {
    const relogioElement = document.getElementById("relogio");
    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart(2, "0");
    const minutos = dataAtual.getMinutes().toString().padStart(2, "0");
    const segundos = dataAtual.getSeconds().toString().padStart(2, "0");
    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    relogioElement.textContent = horaFormatada;
  }

  // Chama a função inicialmente para evitar atrasos
  atualizarRelogio();

  // Atualiza o relógio a cada segundo
  setInterval(atualizarRelogio, 1000);