document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.3s ease';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    const demoButton = document.querySelector('.demo-button');
    demoButton.addEventListener('click', () => {
        alert('Booking demo call...');
    });

    const playButton = document.querySelector('.play-button');
    playButton.addEventListener('click', () => {
        alert('Playing demo video...');
    });

    const signUpButton = document.querySelector('.sign-up');
    signUpButton.addEventListener('click', () => {
        alert('Opening sign up form...');
    });
});