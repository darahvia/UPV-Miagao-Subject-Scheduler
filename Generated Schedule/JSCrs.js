document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.subjects-dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li'); 
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            // Add the CSS styles to the select elements
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate'); 
            menu.classList.toggle('menu-open'); 
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;

                // Remove the CSS styles from the select elements
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate'); 
                menu.classList.remove('menu-open'); 

                options.forEach(option => {
                    option.classList.remove('Active');
                });

                // Add the active class to the selected option
                option.classList.add('Active');
            });
        });
    });
});
