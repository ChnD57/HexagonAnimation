document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const hexagonSize = 100;
    const hexagonLineWidth = 5;
    const hexagonSpacing = 50;

    function drawHexagon(x, y) {
        ctx.beginPath();
        ctx.moveTo(x + hexagonSize * Math.cos(0), y + hexagonSize * Math.sin(0));

        for (let i = 1; i <= 6; i++) {
            ctx.lineTo(x + hexagonSize * Math.cos(i * 2 * Math.PI / 6), y + hexagonSize * Math.sin(i * 2 * Math.PI / 6));
        }

        ctx.closePath();
        ctx.lineWidth = hexagonLineWidth;
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        const cols = Math.floor(width / (hexagonSize * 1.5 + hexagonSpacing));
        const rows = Math.floor(height / (hexagonSize * Math.sqrt(3) + hexagonSpacing));

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = i * (hexagonSize * 1.5 + hexagonSpacing) + ((j % 2) * hexagonSize * 1.5);
                const y = j * (hexagonSize * Math.sqrt(3) + hexagonSpacing);
                drawHexagon(x, y);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
});
