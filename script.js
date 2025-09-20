// Wait for the page to fully load
window.addEventListener('DOMContentLoaded', () => {
    // Get the <h1> element
    const title = document.querySelector('h1');
    if(title){
        title.style.color = 'blue'; // Change text color to blue
    }
    document.body.style.backgroundImage = "url('bg.png')";
    document.body.style.backgroundSize = "cover";       // scale to cover page
    document.body.style.backgroundRepeat = "no-repeat"; // no tiling
    document.body.style.backgroundPosition = "center";  // center the image
});
