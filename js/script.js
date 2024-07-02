// Menu Hamburguesa
let menu = document.querySelector("nav div:nth-of-type(1)");
let icons = document.querySelector("nav div:nth-of-type(2)");
let iconos = document.querySelectorAll("nav div:nth-of-type(2) span");

function mostrarMenu() {
    menu.classList.toggle("mostrar");
    iconos[0].classList.toggle("oculto");
    iconos[1].classList.toggle("oculto");
}

icons.addEventListener("click", mostrarMenu);

// Swiper Initialization
let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    speed: 1000,
    spaceBetween: 100,
    slidesPerView: 2,
    effect: 'cube',
});

// Dulces Section

let dulcesImages = document.querySelectorAll('#dulces article img');

dulcesImages.forEach(img => {
    img.addEventListener('click', () => {
        dulcesImages.forEach(otherImg => {
            if (otherImg !== img) {
                otherImg.classList.remove('enlarged');
            }
        });

        img.classList.toggle('enlarged');
    });
});

// Mejor Elección Section
let products = document.querySelectorAll('#mejor_eleccion .product');

products.forEach(product => {
    let iconClass = product.getAttribute('data-icon');

    if (!product.querySelector('i')) {
        let iconElement = document.createElement('i');
        iconElement.classList.add('fa', 'fas', iconClass);
        product.prepend(iconElement);
    }
});

//Form validation

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form.decor');
    
    form.addEventListener('submit', function (event) {
      // Validate Name
      const nombre = form.elements['nombre'].value.trim();
      if (nombre === '') {
        alert('Por favor, ingrese su nombre y apellido.');
        event.preventDefault();
        return;
      }
      
      // Validate Email
      const email = form.elements['email'].value.trim();
      if (email === '') {
        alert('Por favor, ingrese su email.');
        event.preventDefault();
        return;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Por favor, ingrese un email válido.');
        event.preventDefault();
        return;
      }
      
      // Validate Phone
      const telefono = form.elements['telefono'].value.trim();
      if (telefono === '') {
        alert('Por favor, ingrese su número de teléfono.');
        event.preventDefault();
        return;
      } else if (!/^\d{3} \d{3} \d{3}$/.test(telefono)) {
        alert('Por favor, ingrese un número de teléfono válido en el formato 123 456 789.');
        event.preventDefault();
        return;
      }
      
      // Validate Message
      const mensaje = form.elements['mensaje'].value.trim();
      if (mensaje === '') {
        alert('Por favor, ingrese un mensaje.');
        event.preventDefault();
        return;
      }
    });
  });
//*******My hobby*******/

// $(".hover").mouseleave(
//     function () {
//       $(this).removeClass("hover");
//     }
//   );