// script.js
document.querySelectorAll('.poster').forEach(poster => {
    poster.addEventListener('click', () => {
        console.log(`Clicked on: ${poster.id}`);
        // You can open modals, show info, or redirect here
    });
});
