
function animateBall() {
    // Create the ball element
    const ball = document.createElement("div");
    ball.id = "ball";
    document.body.appendChild(ball);

    // Get the position of the buy button and the cart icon //
    const buyBtn = document.getElementById("buyBtn");
    const cartIcon = document.getElementById("cartIcon");
    const buyBtnRect = buyBtn.getBoundingClientRect();
    const cartIconRect = cartIcon.getBoundingClientRect();

    // Set the starting position of the ball to the buy button //
    ball.style.left = '${buyBtnRect.left + buyBtnRect.width / 2}px';
    ball.style.top = '${buyBtnRect.top + buyBtnRect.height / 2}px';
    ball.style.opacity = 1;

    // Force reflow to apply the starting position //
    requestAnimationFrame(() => {
        const deltaX = cartIconRect.left + cartIconRect.width / 2 - (buyBtnRect.left + buyBtnRect.width / 2);
        const deltaY = cartIconRect.top + cartIconRect.height / 2 - (buyBtnRect.top + buyBtnRect.height / 2);
    
        ball.style.transform = 'translate(${deltaX}px, ${deltaY}px)';
    });

    
    // Remove the ball after the animation completes //
    ball.addEventListener("transitionend", () => {
        ball.remove();
    });
}

setInterval(animateBall, 20)