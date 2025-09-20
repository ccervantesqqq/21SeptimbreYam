document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('falling-flowers');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let flowers = [];
    const numberOfFlowers = 50; 
    const flowerEmoji = '🌻'; 

    function init() {
        for (let i = 0; i < numberOfFlowers; i++) {
            flowers.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 20 + 20,
                speed: Math.random() * 2 + 1, 
                angle: Math.random() * Math.PI * 2,
                spin: (Math.random() - 0.5) * 0.1
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        flowers.forEach(flower => {
            flower.y += flower.speed;
            flower.angle += flower.spin;
            

            if (flower.y > canvas.height) {
                flower.y = -flower.size;
                flower.x = Math.random() * canvas.width;
            }

            ctx.save();
            ctx.translate(flower.x, flower.y);
            ctx.rotate(flower.angle);
            ctx.font = `${flower.size}px Arial`;
            ctx.fillText(flowerEmoji, -flower.size / 2, flower.size / 2);
            ctx.restore();
        });

        requestAnimationFrame(draw);
    }

    init();
    draw();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        flowers = [];
        init();
    });
});