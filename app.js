const schedule = [
  { time:'09:00 AM', tag:'ARRIVAL', title:'Welcome & Festive Kick-off', desc:'Registration, welcome desk and opening moments.' },
  { time:'10:00 AM', tag:'TRADITION', title:'Pookalam & Cultural Start', desc:'Floral celebration, community participation and photos.' },
  { time:'12:30 PM', tag:'FEAST', title:'Onam Sadhya', desc:'A traditional community feast served together.' },
  { time:'03:00 PM', tag:'FUN', title:'Onam Games & Music', desc:'Friendly competitions, music and family activities.' },
  { time:'05:30 PM', tag:'STAGE', title:'Cultural Programme', desc:'Dance, music and performances by our community.' },
  { time:'07:30 PM', tag:'FINALE', title:'Prize Giving & Closing', desc:'Celebrate participants, partners and memorable moments.' }
];
const journey = [
  { year:'2022', title:'Where the memories began', text:'Add the story of your first documented Signature Classic Onam edition here.', image:'sample-pookalam.svg' },
  { year:'2023', title:'More colours, more togetherness', text:'Add your real 2023 highlights, games, cultural moments and community memories.', image:'sample-dance.svg' },
  { year:'2024', title:'Traditions that bring us closer', text:'Add a short caption about the moments residents still talk about.', image:'sample-sadhya.svg' },
  { year:'2025', title:'A celebration to remember', text:'Add your best 2025 photo and a short recap here.', image:'sample-games.svg' },
  { year:'2026', title:'A new chapter begins', text:'This year’s edition becomes part of the Signature Classic story.', image:'onam-2026-poster.svg' }
];
const sponsors = [
  { tier:'Title Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-1.svg' },
  { tier:'Gold Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-2.svg' },
  { tier:'Community Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-3.svg' },
  { tier:'Food Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-4.svg' },
  { tier:'Celebration Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-5.svg' },
  { tier:'Media Partner', name:'Your Brand Here', detail:'Replace with official sponsor name.', logo:'sample-sponsor-6.svg' }
];
const gallery = [
  ['sample-pookalam.svg','Pookalam'],
  ['sample-dance.svg','Cultural moments'],
  ['sample-sadhya.svg','Sadhya'],
  ['sample-games.svg','Onam games'],
  ['sample-community.svg','Community'],
  ['sample-lamps.svg','Festive evenings']
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
