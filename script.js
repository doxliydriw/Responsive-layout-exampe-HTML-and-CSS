// @ts-nocheck


// Navigation Menu close/open in Mobile view
document.addEventListener("DOMContentLoaded", function ()
{
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
    const closeIcon = document.querySelector(".close-icon");
    const menuItems = document.querySelectorAll(".menu-item");

    function toggleMenu()
    {
        navigation.classList.toggle("active");
        hamburger.classList.toggle("active");
    }

    // Close the menu when a menu item is clicked
    function closeMenu()
    {
        navigation.classList.remove("active");
        hamburger.classList.remove("active");
    }

    hamburger.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);

    menuItems.forEach(item =>
    {
        item.addEventListener("click", closeMenu);
    });
});

/* Cards Carousel 

document.addEventListener("DOMContentLoaded", function ()
{
    const carousel = document.getElementById("carousel");
    const slider = document.getElementById("carousel-slider");

    // Duplicate items for infinite scroll
    function duplicateItems()
    {
        const items = [...carousel.children];
        items.forEach((item) =>
        {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
    }

    duplicateItems(); // Duplicate carousel items

    // Update slider based on scroll position
    function updateSlider()
    {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const percentage = (carousel.scrollLeft / maxScroll) * 100;
        slider.value = percentage;
    }

    // Update carousel scroll based on slider
    slider.addEventListener("input", () =>
    {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const newScroll = (slider.value / 100) * maxScroll;
        carousel.scrollLeft = newScroll;
    });

    // Scroll carousel using mouse wheel
    carousel.addEventListener("wheel", (event) =>
    {
        event.preventDefault();
        carousel.scrollLeft += event.deltaY;
        updateSlider();
    });

    // Sync slider on manual scroll
    carousel.addEventListener("scroll", updateSlider);
});

/* toggle tariff buttons */

document.addEventListener('DOMContentLoaded', () =>
{
    const buttons = document.querySelectorAll('.tariff-select button');

    buttons.forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            // Remove 'button-filled' from all buttons and add 'button-transparent'
            buttons.forEach(btn => btn.classList.remove('button-filled', 'button-transparent'));

            // Set clicked button to 'button-filled' and others to 'button-transparent'
            button.classList.add('button-filled');
            buttons.forEach(btn =>
            {
                if (btn !== button) {
                    btn.classList.add('button-transparent');
                }
            });
        });
    });
});

/* Accordion open-close */

document.querySelectorAll('.accordion-header').forEach(header =>
{
    header.addEventListener('click', () =>
    {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const accordionIcon = header.querySelector('.accordion-open');

        // Close all open accordions except the current one
        document.querySelectorAll('.accordion-content').forEach(content =>
        {
            if (content !== accordionContent) {
                content.style.maxHeight = null;
                content.previousElementSibling.classList.remove('active');
                content.previousElementSibling.querySelector('.accordion-open').classList.remove('active');
            }
        });

        // Toggle the current accordion
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            header.classList.remove('active');
            accordionIcon.classList.remove('active');
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            header.classList.add('active');
            accordionIcon.classList.add('active');
        }
    });
});


