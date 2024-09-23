window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('#banner, #map, #val, #home, #presentation, #maison, #histoire, #relation');
    const scrollY = window.scrollY;

    elements.forEach((element, index) => {
        const zIndex = 514 - (Math.floor(scrollY / window.innerHeight) * 2);

        // Update z-index, clamping it to a minimum of 500
        element.style.zIndex = Math.max(zIndex, 500);

        // Update opacity based on scroll position
        if (zIndex < 514) {
            const opacity = Math.max(1 - (scrollY / (window.innerHeight * 0.5)), 0);
            element.style.opacity = opacity;
        } else {
            element.style.opacity = 1; // Fully visible if zIndex is 514 or higher
        }
    });
}); // document.addEventListener('scroll', () => {
//     const scrollTop = window.scrollY;

//     // if (scrollTop >= 0 && scrollTop < 50) {
//     //     document.getElementById('banner').style.opacity = 1;

//     // } else {
//     //     document.getElementById('banner').style.opacity = 0;
//     // }

//     if (scrollTop >= 100 && scrollTop < 60) {
//         document.getElementById('map').style.opacity = 1;
//     } else {
//         document.getElementById('map').style.opacity = 0;
//     }

//     if (scrollTop >= 200 && scrollTop < 300) {
//         document.getElementById('val').style.opacity = 1;
//     } else {
//         document.getElementById('val').style.opacity = 0;
//     }

//     if (scrollTop >= 300 && scrollTop < 400) {
//         document.getElementById('home').style.opacity = 1;
//     } else {
//         document.getElementById('home').style.opacity = 0;
//     }

//     if (scrollTop >= 400 && scrollTop < 500) {
//         document.getElementById('presentation').style.opacity = 1;
//     } else {
//         document.getElementById('presentation').style.opacity = 0;
//     }

//     if (scrollTop >= 500 && scrollTop < 600) {
//         document.getElementById('maison').style.opacity = 1;
//     } else {
//         document.getElementById('maison').style.opacity = 0;
//     }

//     if (scrollTop >= 600 && scrollTop < 700) {
//         document.getElementById('histoire').style.opacity = 1;
//     } else {
//         document.getElementById('histoire').style.opacity = 0;
//     }

//     if (scrollTop >= 700) {
//         document.getElementById('relation').style.opacity = 1;
//     } else {
//         document.getElementById('relation').style.opacity = 0;
//     }
// });
// const options = {
//     root: null,
//     threshold: 0.1 // Adjust this value as needed
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//         } else {
//             entry.target.style.opacity = 0;
//         }
//     });
// }, options);

// const sections = document.querySelectorAll('.container');
// sections.forEach(section => {
//     observer.observe(section);
// });