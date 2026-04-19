// ============================================
// Torres Garden — JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- Mobile menu toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    }
  });

  // --- Scroll reveal animations ---
  const revealElements = document.querySelectorAll(
    '.about-content, .about-images, .plant-card, .gallery-item, .testimonial-card, .contact-info, .contact-map, .section-header'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Staggered animation for plant cards and gallery items ---
  const staggerGroups = [
    document.querySelectorAll('.plant-card'),
    document.querySelectorAll('.gallery-item')
  ];

  staggerGroups.forEach(group => {
    group.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  // --- Smooth scroll for nav links (fallback for older browsers) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Active nav link highlight on scroll ---
  const sections = document.querySelectorAll('section[id]');

  const highlightNav = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.style.opacity = '1';
        } else {
          link.style.opacity = '';
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // --- Language Toggle (EN / ES) ---
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_plants: 'Our Plants',
      nav_gallery: 'Gallery',
      nav_contact: 'Visit Us',
      hero_subtitle: 'Berryessa Flea Market, San Jose',
      hero_description: 'From gorgeous succulents to perfectly handled trees and a variety of other beautiful plants and flowers.',
      hero_btn_explore: 'Explore Our Plants',
      hero_btn_find: 'Find Us',
      hero_scroll: 'Scroll',
      about_tag: 'Our Story',
      about_title: 'Rooted in Family,<br>Grown with Love',
      about_text_1: 'Torres Garden is a family-run business built on a deep love for plants and a passion for bringing natural beauty into people\'s lives. What started as a personal hobby grew into something the whole community now enjoys.',
      about_text_2: 'Every weekend at the Berryessa Flea Market, we hand-select and care for each plant — from delicate succulents to towering trees — so you can bring home something truly special. We believe everyone deserves a little green in their life.',
      stat_varieties: 'Plant Varieties',
      stat_customers: 'Happy Customers',
      stat_every: 'Every',
      stat_weekend: 'Weekend at Berryessa',
      plants_tag: 'What We Offer',
      plants_title: 'Our Plant Collection',
      plants_subtitle: 'Carefully selected and lovingly maintained — every plant is ready to thrive in your home or garden.',
      card_succulents_title: 'Succulents',
      card_succulents_text: 'Gorgeous, low-maintenance succulents in all shapes, sizes, and colors. Perfect for beginners and collectors alike.',
      card_trees_title: 'Trees',
      card_trees_text: 'From ornamental to fruit-bearing, our trees are perfectly handled and ready to plant in your yard or garden.',
      card_flowers_title: 'Flowers',
      card_flowers_text: 'Vibrant, seasonal flowers to add a splash of color to any space. Fresh selections every weekend.',
      card_indoor_title: 'Indoor Plants',
      card_indoor_text: 'Beautiful houseplants that purify your air and bring life to any room. We\'ll help you pick the perfect one.',
      gallery_tag: 'Gallery',
      gallery_title: 'A Look at Our Work',
      gallery_subtitle: 'Every plant tells a story. Here are some of our favorites.',
      testimonial_text: 'Every time I visit Berryessa, I make sure to stop by Torres Garden. Their plants are always healthy, beautiful, and affordable. You can tell they really care about what they do.',
      testimonial_author: '— A Happy Customer',
      contact_tag: 'Visit Us',
      contact_title: 'Come Say Hello',
      contact_text: 'Find us every weekend at the Berryessa Flea Market. We\'d love to help you find the perfect plant for your home or garden.',
      contact_location: 'Location',
      contact_hours_label: 'Market Hours',
      contact_hours_value: 'Saturday &amp; Sunday<br>6:00 AM – 4:00 PM',
      contact_phone_label: 'Phone',
      footer_tagline: 'Beautiful plants, grown with love.',
      footer_plants: 'Plants',
      footer_contact: 'Contact',
      footer_copyright: '&copy; 2026 Torres Garden. All rights reserved.',
    },
    es: {
      nav_home: 'Inicio',
      nav_about: 'Nosotros',
      nav_plants: 'Nuestras Plantas',
      nav_gallery: 'Galería',
      nav_contact: 'Visítanos',
      hero_subtitle: 'Berryessa Flea Market, San José',
      hero_description: 'Desde hermosas suculentas hasta árboles perfectamente cuidados y una gran variedad de plantas y flores.',
      hero_btn_explore: 'Explorar Plantas',
      hero_btn_find: 'Encuéntranos',
      hero_scroll: 'Desliza',
      about_tag: 'Nuestra Historia',
      about_title: 'Raíces en Familia,<br>Crecidos con Amor',
      about_text_1: 'Torres Garden es un negocio familiar construido con un profundo amor por las plantas y la pasión de llevar belleza natural a la vida de las personas. Lo que comenzó como un pasatiempo personal se convirtió en algo que toda la comunidad disfruta.',
      about_text_2: 'Cada fin de semana en el Berryessa Flea Market, seleccionamos y cuidamos cada planta — desde delicadas suculentas hasta árboles imponentes — para que puedas llevar a casa algo verdaderamente especial. Creemos que todos merecen un poco de verde en su vida.',
      stat_varieties: 'Variedades de Plantas',
      stat_customers: 'Clientes Felices',
      stat_every: 'Cada',
      stat_weekend: 'Fin de Semana en Berryessa',
      plants_tag: 'Lo Que Ofrecemos',
      plants_title: 'Nuestra Colección de Plantas',
      plants_subtitle: 'Cuidadosamente seleccionadas y mantenidas con cariño — cada planta está lista para florecer en tu hogar o jardín.',
      card_succulents_title: 'Suculentas',
      card_succulents_text: 'Hermosas suculentas de bajo mantenimiento en todas las formas, tamaños y colores. Perfectas para principiantes y coleccionistas.',
      card_trees_title: 'Árboles',
      card_trees_text: 'Desde ornamentales hasta frutales, nuestros árboles están perfectamente cuidados y listos para plantar en tu jardín.',
      card_flowers_title: 'Flores',
      card_flowers_text: 'Flores vibrantes y de temporada para dar un toque de color a cualquier espacio. Selección fresca cada fin de semana.',
      card_indoor_title: 'Plantas de Interior',
      card_indoor_text: 'Hermosas plantas de interior que purifican el aire y dan vida a cualquier habitación. Te ayudamos a elegir la perfecta.',
      gallery_tag: 'Galería',
      gallery_title: 'Una Mirada a Nuestro Trabajo',
      gallery_subtitle: 'Cada planta cuenta una historia. Aquí algunas de nuestras favoritas.',
      testimonial_text: 'Cada vez que visito Berryessa, siempre paso por Torres Garden. Sus plantas siempre están saludables, hermosas y a buen precio. Se nota que realmente les importa lo que hacen.',
      testimonial_author: '— Un Cliente Feliz',
      contact_tag: 'Visítanos',
      contact_title: 'Ven a Saludarnos',
      contact_text: 'Encuéntranos cada fin de semana en el Berryessa Flea Market. Nos encantaría ayudarte a encontrar la planta perfecta para tu hogar o jardín.',
      contact_location: 'Ubicación',
      contact_hours_label: 'Horario del Mercado',
      contact_hours_value: 'Sábado y Domingo<br>6:00 AM – 4:00 PM',
      contact_phone_label: 'Teléfono',
      footer_tagline: 'Plantas hermosas, cultivadas con amor.',
      footer_plants: 'Plantas',
      footer_contact: 'Contacto',
      footer_copyright: '&copy; 2026 Torres Garden. Todos los derechos reservados.',
    }
  };

  let currentLang = localStorage.getItem('torres-lang') || 'en';
  const langToggle = document.getElementById('langToggle');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('torres-lang', lang);
    document.documentElement.lang = lang;
    langToggle.textContent = lang === 'en' ? 'ES' : 'EN';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'es' : 'en');
  });

  // Apply saved language on load
  if (currentLang !== 'en') {
    setLanguage(currentLang);
  }
});
