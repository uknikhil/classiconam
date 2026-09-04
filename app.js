const schedule = [
  { time:'05:00 PM', tag:'27th Sep 2026', title:'Onam Fest Market', desc:'Food, fashion, crafts, accessories and more by Signature Classic residents.' },
  { time:'03:00 PM', tag:'2nd Oct 2026', title:'Tug of War', desc:'A thrilling Onam tradition that brings teamwork, strength, laughter, and community spirit together.' },
    { time:'06:00 PM', tag:'2nd Oct 2026', title:'Procession', desc:'A vibrant Onam procession bringing together tradition, music, colors, and community spirit.' },
  { time:'06:00 PM', tag:'2nd Oct 2026', title:'Mega Thiruvathira', desc:'A spectacular traditional dance bringing women together in rhythm, grace, and Onam spirit.' },
  { time:'07:00 PM', tag:'2nd Oct 2026', title:'Live Band Performance', desc:'An energetic live musical experience filled with rhythm, entertainment, and festive vibes.' },
  { time:'09:00 AM', tag:'3rd Oct 2026', title:'Inauguration', desc:'Lighting the traditional lamp to warmly inaugurate our Onam celebrations with joy and togetherness.' },
  { time:'10:00 AM', tag:'3rd Oct 2026', title:'Games', desc:'Fun-filled traditional games bringing everyone together with laughter, excitement, and festive spirit.' },
   { time:'12:00 AM', tag:'3rd Oct 2026', title:'Sadhya', desc:'A grand traditional feast bringing everyone together to savour the authentic flavours of Onam.' },
 { time:'04:00 PM', tag:'3rd Oct 2026', title:'Shinkarimelam', desc:'A vibrant traditional percussion performance filling the celebration with energy, rhythm, and festive spirit.' },
 { time:'06:30 PM', tag:'3rd Oct 2026', title:'Cultural Program', desc:'A vibrant showcase of music, dance, and talent by our Signature Classic residents.' }
];
const journey = [
  { year:'2022', title:'Where the memories began', text:'Our Onam journey at Signature Classic began in 2022, bringing our community together to celebrate the joy and spirit of Onam.', image:'2022.jpg' },
  { year:'2023', title:'More colours, more togetherness', text:'In 2023, our Onam celebration came alive as Aarppo 2023, bringing our community together in the true spirit of Onam.', image:'sample-dance.svg' },
  { year:'2024', title:'Traditions that bring us closer', text:'In 2024, we celebrated Aavesham, filling Signature Classic with energy, joy and the vibrant spirit of Onam.', image:'2024.jpg' },
  { year:'2025', title:'A celebration to remember', text:'In 2025, Aavesham Thudarum carried forward the energy, joy, and togetherness of our Onam celebrations.', image:'2025.jpg' },
  { year:'2026', title:'A new chapter begins', text:'In 2026, Prakambanam takes our Onam spirit to new heights with excitement, energy, and togetherness.', image:'onam-2026-poster.jpg' }
];
const sponsors = [
  { tier:'Title Partner', name:'Signature Dwellings', detail:'An award-winning real estate residential developer', logo:'Signature.jfif' },
  { tier:'Gold Partner', name:'Divine Providence School', detail:'Co-educational, English-medium school affiliated with CBSE.', logo:'Divine.jpg' },
  { tier:'Community Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-3.svg' },
  { tier:'Food Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-4.svg' },
  { tier:'Celebration Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-5.svg' },
  { tier:'Media Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-6.svg' }
];
const gallery = [
  ['gal5.jpg','2025'],
  ['gal6.jpg','2025'],
  ['gl19.jpeg','2025'],
  ['gal8.jpeg','2025'],
  ['gal21.jpeg','2024'],
  ['gal23.jpeg','2022']
];

document.getElementById('scheduleGrid').innerHTML = schedule.map(x => `<article class="schedule-card reveal"><div><span class="tag">${x.tag}</span><h3>${x.title}</h3><p>${x.desc}</p></div><div class="time">${x.time}</div></article>`).join('');
document.getElementById('timeline').innerHTML = journey.map((x,i) => `<article class="timeline-item reveal"><div class="timeline-copy"><span class="timeline-year">${x.year}</span><h3>${x.title}</h3><p>${x.text}</p></div><div class="timeline-image"><img src="${x.image}" alt="${x.year} Signature Classic Onam sample" /></div></article>`).join('');
document.getElementById('sponsorGrid').innerHTML = sponsors.map(x => `<article class="sponsor-card reveal"><div class="sponsor-logo"><img src="${x.logo}" alt="${x.name} sample logo" /></div><div><span class="sponsor-tier">${x.tier}</span><h3>${x.name}</h3><p>${x.detail}</p></div></article>`).join('');
document.getElementById('galleryGrid').innerHTML = gallery.map(x => `<figure class="gallery-item reveal"><img src="${x[0]}" alt="${x[1]} sample" /><figcaption>${x[1]}</figcaption></figure>`).join('');

const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('show-mobile');
});
