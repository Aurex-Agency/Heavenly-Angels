const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);toggle.textContent=open?'Close menu':'Menu';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){toggle.click();toggle.focus();}});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(nav.classList.contains('open'))toggle.click();}));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('will-reveal');observer.observe(el);});}
