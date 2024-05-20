function accionParaCuandoEllaDigaQueSi() {
    window.location.href = "aceptacion.html";
}

let lastPosition = { x: 0, y: 0 };

function mueveElBoton() {
    const containerWidth = 720;
    const containerHeight = 720;
    const minDistance = 150;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const x1 = centerX - containerWidth / 2 + minDistance;
    const y1 = centerY - containerHeight / 2 + minDistance;
    const x2 = centerX + containerWidth / 2 - minDistance;
    const y2 = centerY + containerHeight / 2 - minDistance;

    const newWidth = x1 + Math.random() * (x2 - x1);
    const newHeight = y1 + Math.random() * (y2 - y1);

    lastPosition.x = newWidth;
    lastPosition.y = newHeight;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";
}
