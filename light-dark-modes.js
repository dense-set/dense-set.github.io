// Function to update the classes of all <table> elements
function updateTableClasses(isDarkMode) {
    const tables = document.getElementsByTagName('table');
    for (const table of tables) {
        if (isDarkMode) {
            table.classList.add('table-dark');
        } else {
            table.classList.remove('table-dark');
        }
    }
}

// Updation on initial page load
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const isDarkMode = body.classList.contains('quarto-dark');
    updateTableClasses(isDarkMode);
});

// Watch for changes in the class of <body>
const bodyObserver = new MutationObserver((mutationsList) => {
    const isDarkMode = mutationsList[0].target.classList.contains('quarto-dark');
    updateTableClasses(isDarkMode);
});

const body = document.body;
bodyObserver.observe(body, { 
    attributes: true,
    attributeFilter: ['class']
});