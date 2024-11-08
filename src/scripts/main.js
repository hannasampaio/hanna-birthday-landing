AOS.init();

const dataDoEvento = new Date("jun 1, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.querySelector('.hero__contador').innerHTML = `
        <div class="hero__contador__item">
            ${diasAteOEvento}
            <span class="hero__contador__item__label">Days</span>
        </div>
        <div class="hero__contador__item">
            ${horasAteOEvento}
            <span class="hero__contador__item__label">Hours</span>
        </div>
        <div class="hero__contador__item">
            ${minutosAteOEvento}
            <span class="hero__contador__item__label">Minutes</span>
        </div>
        <div class="hero__contador__item">
            ${segundosAteOEvento}
            <span class="hero__contador__item__label">Seconds</span>
        </div>
    `;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('.hero__contador').innerHTML = 'A festa já começou! Obrigada por celebrar comigo';
    }
}, 1000);