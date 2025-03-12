// @ts-nocheck


// Navigation Menu close/open in Mobile view
document.addEventListener("DOMContentLoaded", function ()
{
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
    const closeIcon = document.querySelector(".close-icon");

    function toggleMenu()
    {
        navigation.classList.toggle("active");
        hamburger.classList.toggle("active");
    }
    hamburger.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);
});

// Cards Carousel 

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

