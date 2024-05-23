document.addEventListener('DOMContentLoaded', function() {

    const dropdowns = document.querySelectorAll('.subjects-dropdown');

    // loop all dropdowns elements

    dropdowns.forEach(dropdown => {

        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelector('.menu li');
        const selected = dropdown.querySelector('.selected');


        // a click event listener to the select elements

        select.addEventListener('click', () => {

            // add the css styles to the select elements

            select.classList.toggle('select-clicked');
            select.classList.toggle('caret-rotate');
            select.classList.toggle('menu-open');
        });

        // loop through all options

        options.forEach(option =>{

            // add an event listener for option elements
            option.addEventListener('click', () => {

                selected.innerText = option.innerText;

                // add the css styles to the select elements
                select.classList.remove('select-clicked');
                select.classList.remove('caret-rotate');
                select.classList.remove('menu-open');

                options.forEach(option => {

                    option.classList.remove('Active');
                });

                // add the active class to the option elements
                option.classList.add('Active');
            });
        });
    });
});