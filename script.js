// Wait for the page to fully load
window.addEventListener('DOMContentLoaded', () => {
    // Get the <h1> element
    const title = document.querySelector('h1');
    if(title){
        title.style.color = 'blue'; // Change text color to blue
    }
});
