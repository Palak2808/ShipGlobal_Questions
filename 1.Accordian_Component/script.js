document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        
        // Close all other content areas
        document.querySelectorAll('.accordion-content').forEach(c => {
            if (c !== content) {
                c.classList.remove('show');
            }
        });
        
        // Toggle the clicked content area
        content.classList.toggle('show');
    });
});
