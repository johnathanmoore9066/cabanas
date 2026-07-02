/*
 * Single source of truth for every word on the site, in both languages.
 * Dish names that are proper names (Torta Fajita, Pollo Loco…) stay identical
 * in both languages; generic English names get a natural Spanish equivalent.
 */

export const ui = {
  'meta.title': {
    en: 'Cabañas Restaurante — Authentic Mexican & Honduran Food · West Columbia, SC',
    es: 'Cabañas Restaurante — Auténtica Comida Mexicana y Hondureña · West Columbia, SC',
  },

  'nav.story': { en: 'Our Story', es: 'Nuestra Historia' },
  'nav.menu': { en: 'Menu', es: 'Menú' },
  'nav.visit': { en: 'Visit', es: 'Visítanos' },
  'nav.call': { en: 'Call', es: 'Llamar' },

  'hero.eyebrow': {
    en: 'Mexican & Honduran Kitchen — West Columbia, SC',
    es: 'Cocina Mexicana y Hondureña — West Columbia, SC',
  },
  'hero.tagline': {
    en: 'The homestyle sazón that sets us apart.',
    es: 'El sazón casero que nos distingue.',
  },
  'hero.scroll': { en: 'Scroll', es: 'Desliza' },

  'story.eyebrow': { en: 'Our Story', es: 'Nuestra Historia' },
  'story.heading': { en: 'Two flags, one kitchen.', es: 'Dos banderas, una cocina.' },
  'story.body1': {
    en: 'We invite you to enjoy a true taste of home — the best of authentic Honduran and Mexican cooking, with a wide variety of dishes made from fresh ingredients, traditional recipes, and the homestyle sazón that sets us apart.',
    es: 'Te ofrecemos disfrutar de una deliciosa experiencia gastronómica con lo mejor de la auténtica comida hondureña y mexicana: una gran variedad de platillos preparados con ingredientes frescos, recetas tradicionales y el sazón casero que nos distingue.',
  },
  'story.body2': {
    en: 'From street-style tacos al pastor to handmade baleadas, everything comes off the grill and the comal the way it’s made back home.',
    es: 'De los tacos al pastor estilo callejero a las baleadas hechas a mano, todo sale de la parrilla y del comal como se hace en casa.',
  },
  'story.mexico': { en: 'México', es: 'México' },
  'story.honduras': { en: 'Honduras', es: 'Honduras' },

  'family.caption': { en: 'La familia Cabañas', es: 'La familia Cabañas' },
  'family.sub': {
    en: 'The crew that keeps the comal hot.',
    es: 'El equipo que mantiene el comal caliente.',
  },
  'family.alt': {
    en: 'The Cabañas team gathered inside the restaurant, with the Mexican and Honduran flags on the wall behind them',
    es: 'El equipo de Cabañas reunido dentro del restaurante, con las banderas de México y Honduras en la pared',
  },

  'menu.eyebrow': { en: 'The Menu', es: 'El Menú' },
  'menu.heading': {
    en: 'Cooked to order, seasoned from memory.',
    es: 'Hecho al momento, sazonado de memoria.',
  },
  'menu.note': {
    en: 'Ask about prices and daily specials — (803) 851-1189.',
    es: 'Pregunta por precios y especiales del día — (803) 851-1189.',
  },
  'menu.badge': { en: 'Honduran specialty', es: 'Especialidad hondureña' },

  'visit.eyebrow': { en: 'Visit', es: 'Visítanos' },
  'visit.heading': { en: 'Come hungry.', es: 'Ven con hambre.' },
  'visit.hours': { en: 'Hours', es: 'Horario' },
  'visit.open': { en: 'Open now', es: 'Abierto ahora' },
  'visit.closed': { en: 'Closed now', es: 'Cerrado ahora' },
  'visit.closedDay': { en: 'Closed', es: 'Cerrado' },
  'visit.findUs': { en: 'Find us', es: 'Encuéntranos' },
  'visit.directions': { en: 'Get directions', es: 'Cómo llegar' },
  'visit.callUs': { en: 'Call us', es: 'Llámanos' },
  'visit.writeUs': { en: 'Write to us', es: 'Escríbenos' },

  'footer.line': {
    en: 'Authentic Mexican & Honduran food in West Columbia, South Carolina.',
    es: 'Auténtica comida mexicana y hondureña en West Columbia, Carolina del Sur.',
  },
  'footer.facebook': { en: 'Follow us on Facebook', es: 'Síguenos en Facebook' },
  'footer.rights': { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },

  'lang.label': { en: 'Switch language', es: 'Cambiar idioma' },
};

export const info = {
  phone: '(803) 851-1189',
  phoneHref: 'tel:+18038511189',
  email: 'cabanasrestaurante.sc@gmail.com',
  address1: '825 Sunset Blvd, Suite D',
  address2: 'West Columbia, SC 29169',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Caba%C3%B1as+Restaurante+825+Sunset+Blvd+Suite+D+West+Columbia+SC+29169',
  facebook: 'https://www.facebook.com/cabanasrestaurante1/',
};

/* Times are ET, minutes-from-midnight, used for the "open now" pill. */
export const hoursData = [
  {
    label: { en: 'Monday – Thursday', es: 'Lunes – Jueves' },
    display: '11:00 AM – 9:30 PM',
    days: [1, 2, 3, 4],
    open: 660,
    close: 1290,
  },
  {
    label: { en: 'Friday – Saturday', es: 'Viernes – Sábado' },
    display: '11:00 AM – 10:00 PM',
    days: [5, 6],
    open: 660,
    close: 1320,
  },
  {
    label: { en: 'Sunday', es: 'Domingo' },
    display: null,
    days: [0],
    closed: true,
  },
];

export const marqueeWords = [
  'Tacos', 'Baleadas', 'Pupusas', 'Fajitas', 'Tortas', 'Carne Asada', 'Sopes', 'Tajadas',
];

const N = (en, es) => ({ en, es: es || en });

export const menuData = [
  {
    id: 'antojitos',
    name: N('Appetizers', 'Antojitos'),
    items: [
      { name: N('Queso Dip') },
      { name: N('Guacamole') },
      {
        name: N('Plantain', 'Plátanos Fritos'),
        desc: N(
          'Fried plantains topped with Honduran cream and cheese.',
          'Plátanos fritos con crema y queso hondureño.'
        ),
      },
      {
        name: N('Chori Beans Dip'),
        desc: N(
          'Refried beans with chorizo, topped with cheese and pico de gallo.',
          'Frijoles refritos con chorizo, cubiertos con queso y pico de gallo.'
        ),
      },
      {
        name: N('Nachos'),
        desc: N(
          'Choice of beef or chicken on a bed of fresh chips, topped with cheese, jalapeño peppers, and sour cream.',
          'Res o pollo a elegir sobre una cama de totopos, con queso, jalapeños y crema agria.'
        ),
      },
      {
        name: N('Chicken Wings', 'Alitas de Pollo'),
        desc: N(
          'Five pieces served with french fries, celery, and ranch dip. Choose from hot, medium, BBQ, or lemon pepper.',
          'Cinco piezas con papas fritas, apio y aderezo ranch. Elige entre picante, medio, BBQ o limón con pimienta.'
        ),
      },
      {
        name: N('Fajitas Nachos', 'Nachos de Fajita'),
        desc: N(
          'Your choice of chicken or steak cooked with onions, bell peppers, and tomatoes, served with cheese dip.',
          'Pollo o carne a elegir, cocinado con cebolla, pimientos y tomate, servido con queso fundido.'
        ),
      },
    ],
  },
  {
    id: 'tortas',
    name: N('Tortas'),
    items: [
      {
        name: N('Torta Fajita'),
        desc: N(
          'Choice of chicken or steak cooked with onions and bell peppers, topped with cheese. Served with mayonnaise, lettuce, tomatoes, jalapeños, and avocado.',
          'Pollo o carne a elegir, cocinado con cebolla y pimientos, cubierto con queso. Servida con mayonesa, lechuga, tomate, jalapeños y aguacate.'
        ),
      },
      {
        name: N('Torta Carne Asada'),
        desc: N(
          'Filled with steak cooked on the grill. Served with mayonnaise, lettuce, tomatoes, jalapeños, and avocado.',
          'Rellena de carne asada a la parrilla. Servida con mayonesa, lechuga, tomate, jalapeños y aguacate.'
        ),
      },
      {
        name: N('Torta de Pastor'),
        desc: N(
          'Filled with seasoned pork cooked on the grill. Served with mayonnaise, lettuce, tomatoes, jalapeños, and avocado.',
          'Rellena de carne al pastor a la parrilla. Servida con mayonesa, lechuga, tomate, jalapeños y aguacate.'
        ),
      },
      {
        name: N('Torta de Milanesa'),
        desc: N(
          'Your choice of chicken or steak, breaded and lightly fried. Served with mayonnaise, lettuce, tomatoes, jalapeños, and avocado.',
          'Milanesa de pollo o res, empanizada y ligeramente frita. Servida con mayonesa, lechuga, tomate, jalapeños y aguacate.'
        ),
      },
    ],
  },
  {
    id: 'burritos',
    name: N('Burritos'),
    items: [
      {
        name: N('California Burrito'),
        desc: N(
          'Filled with your choice of steak or chicken, rice, beans, and sour cream, topped with cheese dip.',
          'Relleno de carne o pollo a elegir, arroz, frijoles y crema agria, bañado en queso fundido.'
        ),
      },
      {
        name: N('Fajita Burrito'),
        desc: N(
          'Chicken or steak fajitas cooked with onions and bell peppers, rolled in a flour tortilla and covered with cheese sauce. Served with guacamole, sour cream, and your choice of rice or beans.',
          'Fajitas de pollo o carne cocinadas con cebolla y pimientos, envueltas en tortilla de harina y bañadas en salsa de queso. Servido con guacamole, crema agria y arroz o frijoles a elegir.'
        ),
      },
      {
        name: N('Burrito Deluxe'),
        desc: N(
          'Your choice of beef or chicken, covered with cheese dip and topped with lettuce, tomatoes, sour cream, and guacamole.',
          'Res o pollo a elegir, bañado en queso fundido y cubierto con lechuga, tomate, crema agria y guacamole.'
        ),
      },
    ],
  },
  {
    id: 'quesadillas',
    name: N('Quesadillas'),
    items: [
      {
        name: N('Quesadillas'),
        desc: N(
          'Flour tortilla filled with cheese and your choice of meat — or spinach, mushrooms, and onions. Served with sour cream and guacamole.',
          'Tortilla de harina rellena de queso y carne a elegir — o espinacas, champiñones y cebolla. Servida con crema agria y guacamole.'
        ),
      },
      {
        name: N('Fajita Quesadilla', 'Quesadilla de Fajita'),
        desc: N(
          'Twelve-inch flour tortilla filled with cheese and your choice of chicken or steak fajita, cooked with onions and bell peppers. Served with guacamole and sour cream.',
          'Tortilla de harina de 12 pulgadas rellena de queso y fajita de pollo o carne, cocinada con cebolla y pimientos. Servida con guacamole y crema agria.'
        ),
      },
      {
        name: N('Quesadilla California'),
        desc: N(
          'Flour tortilla filled with your choice of steak or chicken and stuffed with pico de gallo. Served with lettuce, guacamole, tomatoes, and sour cream.',
          'Tortilla de harina rellena de carne o pollo a elegir con pico de gallo. Servida con lechuga, guacamole, tomate y crema agria.'
        ),
      },
      {
        name: N('Shrimp Quesadilla', 'Quesadilla de Camarón'),
        desc: N(
          'Flour tortilla filled with cheese and shrimp, served with a guacamole salad.',
          'Tortilla de harina rellena de queso y camarones, servida con ensalada de guacamole.'
        ),
      },
    ],
  },
  {
    id: 'ensaladas',
    name: N('Salads & Soups', 'Ensaladas y Sopas'),
    items: [
      {
        name: N('Taco Salad', 'Ensalada de Taco'),
        desc: N(
          'Flour tortilla shell filled with your choice of beef or chicken, beans, and lettuce, topped with cheese, tomatoes, sour cream, and guacamole.',
          'Canasta de tortilla de harina rellena de res o pollo a elegir, frijoles y lechuga, cubierta con queso, tomate, crema agria y guacamole.'
        ),
      },
      {
        name: N('Grilled Chicken Salad', 'Ensalada de Pollo Asado'),
        desc: N(
          'Grilled chicken strips with lettuce, carrots, and tomatoes.',
          'Tiras de pollo a la parrilla con lechuga, zanahoria y tomate.'
        ),
      },
      {
        name: N('Fajitas Salad', 'Ensalada de Fajitas'),
        desc: N(
          'Your choice of chicken or steak cooked with onions, bell peppers, and tomatoes. Served with lettuce and guacamole.',
          'Pollo o carne a elegir, cocinado con cebolla, pimientos y tomate. Servida con lechuga y guacamole.'
        ),
      },
      { name: N('Chicken Soup', 'Sopa de Pollo') },
      { name: N('Tortilla Soup', 'Sopa de Tortilla') },
    ],
  },
  {
    id: 'tacos',
    name: N('Tacos'),
    items: [
      {
        name: N('Mexican Tacos', 'Tacos Mexicanos'),
        desc: N(
          'Soft corn tortilla with your choice of meat, topped with diced onions and cilantro — pastor, carnitas, asada, or pollo (seasoned pork, pork carnitas, steak, or chicken).',
          'Tortilla de maíz suave con carne a elegir, con cebolla picada y cilantro — pastor, carnitas, asada o pollo.'
        ),
      },
      { name: N('Tripa & Lengua Taco', 'Taco de Tripa y Lengua') },
      {
        name: N('Hard or Soft Tacos', 'Tacos Duros o Suaves'),
        desc: N(
          'Hard: ground beef or shredded chicken in a crispy corn shell with lettuce, tomato, and mozzarella cheese. Soft: the same, on a flour tortilla.',
          'Duros: res molida o pollo deshebrado en tortilla de maíz crujiente con lechuga, tomate y queso mozzarella. Suaves: lo mismo, en tortilla de harina.'
        ),
      },
      {
        name: N('Sopes'),
        desc: N(
          'Thick fried corn tortilla with raised edges, topped with refried beans, your choice of steak, chicken, or seasoned pork (asada, pollo, o pastor), lettuce, cream, cheese, and tomatoes.',
          'Tortilla de maíz gruesa y frita con bordes, con frijoles refritos, carne a elegir (asada, pollo o pastor), lechuga, crema, queso y tomate.'
        ),
      },
    ],
  },
  {
    id: 'platillos',
    name: N('Dinners', 'Platillos Fuertes'),
    items: [
      {
        name: N('Triple Delicia'),
        desc: N(
          'Shrimp, steak, and chicken cooked with tomatoes, peppers, and onions in diablo sauce. Served with rice, beans, and tortillas.',
          'Camarones, carne y pollo cocinados con tomate, pimientos y cebolla en salsa diabla. Servido con arroz, frijoles y tortillas.'
        ),
      },
      {
        name: N('Carne Asada'),
        desc: N(
          'Thin-cut ribeye steak, seasoned and grilled, topped with grilled onions. Served with rice, beans, guacamole salad, and tortillas.',
          'Ribeye en corte fino, sazonado y asado, con cebolla asada. Servido con arroz, frijoles, ensalada de guacamole y tortillas.'
        ),
      },
      {
        name: N('Carnitas Dinner', 'Carnitas'),
        desc: N(
          'Marinated pork served with rice, beans, salad, and tortillas.',
          'Carne de cerdo marinada, servida con arroz, frijoles, ensalada y tortillas.'
        ),
      },
      {
        name: N('Steak Cabañas'),
        desc: N(
          'Grilled ribeye steak cooked with poblano pepper, tomatoes, and onions. Served with rice, beans, and tortillas.',
          'Ribeye a la parrilla con chile poblano, tomate y cebolla. Servido con arroz, frijoles y tortillas.'
        ),
      },
      {
        name: N('Pollo a la Plancha'),
        desc: N(
          'Grilled chicken breast topped with cheese dip and pico de gallo, served with rice and beans.',
          'Pechuga a la plancha bañada en queso fundido, con pico de gallo, servida con arroz y frijoles.'
        ),
      },
      {
        name: N('Steak a la Mexicana'),
        desc: N(
          'Grilled steak cooked with jalapeño peppers, tomatoes, and onions. Served with rice, beans, and tortillas.',
          'Carne a la mexicana con jalapeños, tomate y cebolla. Servida con arroz, frijoles y tortillas.'
        ),
      },
      {
        name: N('Pollo Loco'),
        desc: N(
          'Grilled chicken breast topped with sautéed shrimp, onions, mushrooms, spinach, and melted cheese. Served with rice and pico de gallo.',
          'Pechuga a la parrilla con camarones salteados, cebolla, champiñones, espinacas y queso derretido. Servida con arroz y pico de gallo.'
        ),
      },
      {
        name: N('Choripollo'),
        desc: N(
          'Grilled chicken breast topped with chorizo and cheese, served with rice and beans.',
          'Pechuga a la parrilla con chorizo y queso, servida con arroz y frijoles.'
        ),
      },
      {
        name: N('Chile Relleno'),
        desc: N(
          'Poblano pepper stuffed with mozzarella cheese, wrapped in an egg omelette, and topped with ranchero sauce. Served with a beef burrito, rice, and beans.',
          'Chile poblano relleno de queso mozzarella, envuelto en huevo y bañado en salsa ranchera. Servido con un burrito de res, arroz y frijoles.'
        ),
      },
    ],
  },
  {
    id: 'fajitas',
    name: N('Fajitas'),
    intro: N(
      'All fajitas are cooked with onions, bell peppers, and tomatoes — served with rice, beans, pico de gallo, sour cream, guacamole, and tortillas. Single or for two.',
      'Todas las fajitas se cocinan con cebolla, pimientos y tomate — servidas con arroz, frijoles, pico de gallo, crema agria, guacamole y tortillas. Individual o para dos.'
    ),
    items: [
      { name: N('Chicken Fajitas', 'Fajitas de Pollo') },
      { name: N('Steak Fajitas', 'Fajitas de Carne') },
      { name: N('Steak & Chicken Fajitas', 'Fajitas de Carne y Pollo') },
      {
        name: N('Mixed Fajitas', 'Fajitas Mixtas'),
        desc: N('Chicken, steak, and shrimp.', 'Pollo, carne y camarones.'),
      },
      { name: N('Shrimp Fajitas', 'Fajitas de Camarón') },
    ],
  },
  {
    id: 'combinaciones',
    name: N('Combination Dinners', 'Combinaciones'),
    items: [
      {
        name: N('Dinner #1', 'Cena #1'),
        desc: N(
          'Chicken enchilada, beef burrito, and beef taco, served with rice, beans, and sour cream.',
          'Enchilada de pollo, burrito de res y taco de res, servidos con arroz, frijoles y crema agria.'
        ),
      },
      {
        name: N('Dinner #2', 'Cena #2'),
        desc: N(
          'Two beef burritos and one chicken burrito covered with cheese dip, served with rice and beans.',
          'Dos burritos de res y uno de pollo bañados en queso fundido, servidos con arroz y frijoles.'
        ),
      },
      {
        name: N('Dinner #3', 'Cena #3'),
        desc: N(
          'One beef, one chicken, and one cheese enchilada covered with ranchero sauce, served with rice, beans, and a side of sour cream.',
          'Una enchilada de res, una de pollo y una de queso bañadas en salsa ranchera, servidas con arroz, frijoles y crema agria.'
        ),
      },
      {
        name: N('Dinner #4', 'Cena #4'),
        desc: N(
          'Three tacos of your choice — beef or chicken, hard or soft — topped with lettuce, cheese, and tomato, served with rice and beans.',
          'Tres tacos a elegir — res o pollo, duros o suaves — con lechuga, queso y tomate, servidos con arroz y frijoles.'
        ),
      },
      {
        name: N('Dinner #5', 'Cena #5'),
        desc: N(
          'Two enchiladas — one beef, one cheese — with ranchero sauce, served with a beef taco, rice, and beans.',
          'Dos enchiladas — una de res y una de queso — con salsa ranchera, servidas con un taco de res, arroz y frijoles.'
        ),
      },
    ],
  },
  {
    id: 'hondurenos',
    name: N('Platillos Hondureños'),
    honduran: true,
    intro: N(
      'The Honduran side of the house.',
      'El lado hondureño de la casa.'
    ),
    items: [
      {
        name: N('Tacos Catrachos'),
        desc: N(
          'Three golden fried corn tortillas stuffed with chicken, topped with cabbage salad, pico de gallo, ranchero sauce, pickled onion, and Honduran cheese.',
          'Tres tacos dorados de maíz rellenos de pollo, cubiertos con ensalada de repollo, pico de gallo, salsa ranchera, cebolla encurtida y queso hondureño.'
        ),
      },
      {
        name: N('Pastelitos Catrachos'),
        desc: N(
          'Three fried corn patties filled with beef and rice, served with cabbage salad, Honduran cheese, ranchero sauce, pico de gallo, and pickled onions.',
          'Tres pastelitos de maíz fritos rellenos de carne y arroz, servidos con ensalada de repollo, queso hondureño, salsa ranchera, pico de gallo y cebolla encurtida.'
        ),
      },
      {
        name: N('Chuleta con Tajadas'),
        desc: N(
          'Honduran-style pork chop served with fried green banana slices, cabbage salad, rice, and tortilla.',
          'Chuleta al estilo hondureño servida con tajadas de guineo verde, ensalada de repollo, arroz y tortilla.'
        ),
      },
      {
        name: N('Pescado Frito Catracho'),
        desc: N(
          'A whole deep-fried fish served with fried green banana slices, cabbage salad, rice, and tortillas.',
          'Pescado entero frito, servido con tajadas de guineo verde, ensalada de repollo, arroz y tortillas.'
        ),
      },
      {
        name: N('Tamales Hondureños'),
        desc: N(
          'Chicken-filled tamales, a tradition of our folklore.',
          'Tamales rellenos de pollo, tradición de nuestro folclor.'
        ),
      },
      {
        name: N('Tajadas con Carne Molida'),
        desc: N(
          'Fried green banana slices topped with seasoned ground beef, cabbage salad, pico de gallo, dressing, Honduran cheese, and pickled onions.',
          'Tajadas de guineo verde con carne molida, ensalada de repollo, pico de gallo, aderezo, queso hondureño y cebolla encurtida.'
        ),
      },
      {
        name: N('Carne Asada Hondureña'),
        desc: N(
          'Marinated grilled steak slices served on a bed of fried green banana, with rice, beans, cabbage salad, and Honduran cheese.',
          'Carne asada marinada en rebanadas sobre una cama de tajadas, con arroz, frijoles, ensalada de repollo y queso hondureño.'
        ),
      },
      {
        name: N('Cena Hondureña'),
        desc: N(
          'Marinated steak slices with fried beans, Honduran cheese and cream, avocado, and eggs, alongside fried ripe plantain and tortillas.',
          'Carne marinada en rebanadas con frijoles fritos, queso y crema hondureña, aguacate y huevos, acompañada de plátano maduro frito y tortillas.'
        ),
      },
      {
        name: N('Cena Catracha'),
        desc: N(
          'Marinated pork chop with fried beans, Honduran cheese and cream, avocado, and eggs, alongside fried ripe plantain and tortillas.',
          'Chuleta marinada con frijoles fritos, queso y crema hondureña, aguacate y huevos, acompañada de plátano maduro frito y tortillas.'
        ),
      },
      {
        name: N('Pollo con Tajadas'),
        desc: N(
          'Crispy fried chicken over fried green banana slices with pico de gallo, ranchero sauce, dressing, and Honduran cheese, topped with cabbage salad and pickled onions.',
          'Pollo frito crujiente sobre tajadas de guineo verde con pico de gallo, salsa ranchera, aderezo y queso hondureño, cubierto con ensalada de repollo y cebolla encurtida.'
        ),
      },
      {
        name: N('Enchiladas Catrachas'),
        desc: N(
          'Two flat crispy-fried tortillas topped with beef, dressing, cabbage salad, tomatoes, and cheese.',
          'Dos tortillas planas fritas cubiertas con carne, aderezo, ensalada de repollo, tomate y queso.'
        ),
      },
      {
        name: N('Yuca con Chicharrón'),
        desc: N(
          'Fried or boiled yuca served with crispy pork rinds, topped with cabbage salad, dressing, pico de gallo, ranchero sauce, Honduran cheese, and pickled onions.',
          'Yuca frita o cocida con chicharrón, cubierta con ensalada de repollo, aderezo, pico de gallo, salsa ranchera, queso hondureño y cebolla encurtida.'
        ),
      },
    ],
  },
  {
    id: 'baleadas',
    name: N('Baleadas'),
    honduran: true,
    intro: N(
      'Handmade flour tortillas, folded the catracho way.',
      'Tortillas de harina hechas a mano, al estilo catracho.'
    ),
    items: [
      {
        name: N('One Baleada Sencilla', 'Una Baleada Sencilla'),
        desc: N(
          'One handmade flour tortilla filled with beans, Honduran cream, and Honduran cheese.',
          'Una tortilla de harina hecha a mano, rellena de frijoles, crema y queso hondureño.'
        ),
      },
      {
        name: N('Two Baleadas Sencillas', 'Dos Baleadas Sencillas'),
        desc: N(
          'Two handmade flour tortillas filled with beans, Honduran cream, and Honduran cheese.',
          'Dos tortillas de harina hechas a mano, rellenas de frijoles, crema y queso hondureño.'
        ),
      },
      {
        name: N('One Baleada con Huevo', 'Una Baleada con Huevo'),
        desc: N(
          'One handmade flour tortilla filled with beans, eggs, Honduran cream, and Honduran cheese.',
          'Una tortilla de harina hecha a mano, rellena de frijoles, huevo, crema y queso hondureño.'
        ),
      },
      {
        name: N('Two Baleadas con Huevo', 'Dos Baleadas con Huevo'),
        desc: N(
          'Two handmade flour tortillas filled with beans, eggs, Honduran cream, and Honduran cheese.',
          'Dos tortillas de harina hechas a mano, rellenas de frijoles, huevo, crema y queso hondureño.'
        ),
      },
      {
        name: N('One Baleada con Aguacate', 'Una Baleada con Aguacate'),
        desc: N(
          'One handmade flour tortilla filled with beans, Honduran cream, Honduran cheese, and avocado.',
          'Una tortilla de harina hecha a mano, rellena de frijoles, crema, queso hondureño y aguacate.'
        ),
      },
      {
        name: N('Two Baleadas con Aguacate', 'Dos Baleadas con Aguacate'),
        desc: N(
          'Two handmade flour tortillas filled with beans, Honduran cream, Honduran cheese, and avocado.',
          'Dos tortillas de harina hechas a mano, rellenas de frijoles, crema, queso hondureño y aguacate.'
        ),
      },
      {
        name: N('One Baleada con Salchicha', 'Una Baleada con Salchicha'),
        desc: N(
          'One handmade flour tortilla filled with beans, Honduran cream, Honduran cheese, and sausage.',
          'Una tortilla de harina hecha a mano, rellena de frijoles, crema, queso hondureño y salchicha.'
        ),
      },
      {
        name: N('Two Baleadas con Salchicha', 'Dos Baleadas con Salchicha'),
        desc: N(
          'Two handmade flour tortillas filled with beans, Honduran cream, Honduran cheese, and sausages.',
          'Dos tortillas de harina hechas a mano, rellenas de frijoles, crema, queso hondureño y salchicha.'
        ),
      },
      {
        name: N('One Baleada Preparada', 'Una Baleada Preparada'),
        desc: N(
          'One handmade flour tortilla filled with beans, eggs, Honduran cream, Honduran cheese, avocado, and your choice of steak, chicken, or sausage.',
          'Una tortilla de harina hecha a mano, rellena de frijoles, huevo, crema, queso hondureño, aguacate y carne, pollo o salchicha a elegir.'
        ),
      },
      {
        name: N('Two Baleadas Preparadas', 'Dos Baleadas Preparadas'),
        desc: N(
          'Two handmade flour tortillas filled with beans, eggs, Honduran cream, Honduran cheese, avocado, and a mix of steak, chicken, or sausage.',
          'Dos tortillas de harina hechas a mano, rellenas de frijoles, huevo, crema, queso hondureño, aguacate y carne, pollo o salchicha.'
        ),
      },
    ],
  },
  {
    id: 'pupusas',
    name: N('Pupusas'),
    honduran: true,
    intro: N(
      'Griddled corn cakes — a Central American classic.',
      'Clásico centroamericano a la plancha.'
    ),
    items: [
      {
        name: N('Cheese', 'De Queso'),
        desc: N(
          'Grilled flat corn cakes filled with cheese.',
          'Pupusas a la plancha rellenas de queso.'
        ),
      },
      {
        name: N('Cheese and Pork', 'De Queso con Cerdo'),
        desc: N(
          'Grilled flat corn cakes filled with cheese and pork.',
          'Pupusas a la plancha rellenas de queso y cerdo.'
        ),
      },
      {
        name: N('Cheese and Beans', 'De Queso con Frijoles'),
        desc: N(
          'Grilled flat corn cakes filled with cheese and beans.',
          'Pupusas a la plancha rellenas de queso y frijoles.'
        ),
      },
      { name: N('Mixed', 'Mixta') },
    ],
  },
  {
    id: 'combo',
    name: N('Make Your Own Combo', 'Arma Tu Combo'),
    items: [
      {
        name: N('Burrito'),
        desc: N(
          'Flour tortilla rolled around beef filling, topped with cheese and red sauce.',
          'Tortilla de harina enrollada con relleno de res, cubierta con queso y salsa roja.'
        ),
      },
      {
        name: N('Enchilada'),
        desc: N(
          'Corn tortilla rolled around beef filling, topped with cheese and brown sauce.',
          'Tortilla de maíz enrollada con relleno de res, cubierta con queso y salsa café.'
        ),
      },
      {
        name: N('Hard Taco', 'Taco Duro'),
        desc: N(
          'Crispy corn shell with beef, lettuce, and cheese.',
          'Tortilla de maíz crujiente con res, lechuga y queso.'
        ),
      },
      {
        name: N('Soft Taco', 'Taco Suave'),
        desc: N(
          'Flour tortilla with beef, lettuce, and cheese.',
          'Tortilla de harina con res, lechuga y queso.'
        ),
      },
      {
        name: N('Cheese Quesadilla', 'Quesadilla de Queso'),
        desc: N('Flour tortilla stuffed with cheese.', 'Tortilla de harina rellena de queso.'),
      },
      {
        name: N('Beef or Chicken Quesadilla', 'Quesadilla de Res o Pollo'),
        desc: N(
          'Flour tortilla stuffed with cheese and beef or chicken.',
          'Tortilla de harina rellena de queso y res o pollo.'
        ),
      },
      {
        name: N('Chile Relleno'),
        desc: N(
          'Bell pepper topped with cheese and beef.',
          'Chile relleno con queso y res.'
        ),
      },
      {
        name: N('Chile Poblano'),
        desc: N(
          'Whole poblano pepper stuffed with chicken or beef, topped with sour cream sauce.',
          'Chile poblano entero relleno de pollo o res, bañado en salsa de crema.'
        ),
      },
      {
        name: N('Beef and Cheese Tostada', 'Tostada de Res con Queso'),
        desc: N(
          'Flat corn tortilla topped with beef and cheese.',
          'Tostada de maíz con res y queso.'
        ),
      },
      {
        name: N('Tamal'),
        desc: N(
          'Savory meat filling, steamed in a corn-masa casing.',
          'Relleno de carne, cocido al vapor en masa de maíz.'
        ),
      },
      {
        name: N('Chalupa'),
        desc: N(
          'Flat corn tortilla topped with beans, lettuce, guacamole, and tomatoes.',
          'Tostada de maíz con frijoles, lechuga, guacamole y tomate.'
        ),
      },
      {
        name: N('Tostaguac'),
        desc: N(
          'Flat corn tortilla topped with beef, lettuce, guacamole, cheese, and tomatoes.',
          'Tostada de maíz con res, lechuga, guacamole, queso y tomate.'
        ),
      },
      { name: N('Rice', 'Arroz'), desc: N('Mexican rice.', 'Arroz mexicano.') },
      { name: N('Beans', 'Frijoles'), desc: N('Refried beans.', 'Frijoles refritos.') },
    ],
  },
  {
    id: 'otros',
    name: N('Others', 'Otros'),
    items: [
      {
        name: N('Flautas'),
        desc: N(
          'Three deep-fried flour tortillas filled with shredded chicken, topped with lettuce, tomatoes, sour cream, and cheese.',
          'Tres flautas de tortilla de harina rellenas de pollo deshebrado, cubiertas con lechuga, tomate, crema agria y queso.'
        ),
      },
      {
        name: N('Tortilla Quiles'),
        desc: N(
          'Tortilla strips cooked in green sauce with chicken and cheese, served with two eggs, rice, and beans.',
          'Tiras de tortilla guisadas en salsa verde con pollo y queso, servidas con dos huevos, arroz y frijoles.'
        ),
      },
      {
        name: N('Chimichanga'),
        desc: N(
          'Flour tortilla filled with your choice of grilled chicken or steak, fried until crisp and topped with lettuce, tomatoes, sour cream, and cheese. Served with beans, cheese dip, and guacamole.',
          'Tortilla de harina rellena de pollo o carne a la parrilla, frita hasta quedar crujiente y cubierta con lechuga, tomate, crema agria y queso. Servida con frijoles, queso fundido y guacamole.'
        ),
      },
      {
        name: N('Tres Amigos'),
        desc: N(
          'Grilled chicken, steak, shrimp, and onions topped with mozzarella cheese and pineapple. Served with rice, beans, salad, and tortillas.',
          'Pollo, carne y camarones a la parrilla con cebolla, cubiertos con queso mozzarella y piña. Servido con arroz, frijoles, ensalada y tortillas.'
        ),
      },
      {
        name: N('Shrimp Soft Taco', 'Taco Suave de Camarón'),
        desc: N(
          'Soft flour tortilla with grilled shrimp, lettuce, and cheese.',
          'Tortilla de harina suave con camarones a la parrilla, lechuga y queso.'
        ),
      },
      { name: N('Order of Grilled Shrimp', 'Orden de Camarones a la Parrilla') },
    ],
  },
];
