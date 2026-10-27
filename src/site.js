const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);toggle.textContent=open?'Close menu':'Menu';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){toggle.click();toggle.focus();}});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(nav.classList.contains('open'))toggle.click();}));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('will-reveal');observer.observe(el);});}

// Scroll-linked character journey. Native scroll stays untouched; all content is in HTML.
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const journey=document.querySelector('.journey');
const hero=document.querySelector('.hero');
const motionButton=document.querySelector('.motion-toggle');
let motionPaused=false;
let framePending=false;
const clamp=(value,min=0,max=1)=>Math.min(max,Math.max(min,value));
function paintMotion(){
  framePending=false;
  if(motionPreference.matches)return;
  if(hero&&!motionPaused){const rect=hero.getBoundingClientRect();const progress=clamp(-rect.top/rect.height);hero.style.setProperty('--hero-y',`${progress*65}px`);hero.style.setProperty('--hero-x',`${progress*20}px`);hero.style.setProperty('--hero-rotation',`${progress*-12}deg`);}
  if(!journey)return;
  const rect=journey.getBoundingClientRect();
  if(rect.bottom<0||rect.top>innerHeight)return;
  const mobile=innerWidth<=760;
  const progress=clamp((innerHeight*(mobile?.38:.35)-rect.top)/(rect.height-innerHeight*.5));
  const scene=Math.min(2,Math.floor(progress*3));
  journey.dataset.scene=String(scene);
  const labels=['A place to belong','A little lift, every day','Together feels better'];
  journey.querySelector('.scene-label').textContent=labels[scene];
  journey.querySelectorAll('.journey-dots span').forEach((dot,index)=>dot.classList.toggle('active',index===scene));
  if(motionPaused)return;
  const flight=progress>.2&&progress<.86?1:0;
  const wave=Math.sin(progress*Math.PI*2);
  journey.style.setProperty('--bird-x',`${wave*(mobile?22:55)}px`);
  journey.style.setProperty('--bird-y',`${-Math.sin(progress*Math.PI)*(mobile?24:85)}px`);
  journey.style.setProperty('--bird-rotation',`${wave*-12}deg`);
  journey.style.setProperty('--bird-scale',String(1+Math.sin(progress*Math.PI)*.07));
  journey.style.setProperty('--standing-opacity',String(1-flight));
  journey.style.setProperty('--flying-opacity',String(flight));
  journey.style.setProperty('--shadow-scale',String(1-flight*.35));
  journey.style.setProperty('--shadow-opacity',String(.8-flight*.5));
  journey.style.setProperty('--decoration-y',`${wave*30}px`);
  journey.style.setProperty('--orbit-rotation',`${progress*100}deg`);
  journey.style.setProperty('--glow-scale',String(1+flight*.25));
}
function queueMotion(){if(!framePending){framePending=true;requestAnimationFrame(paintMotion);}}
addEventListener('scroll',queueMotion,{passive:true});
addEventListener('resize',queueMotion,{passive:true});
motionPreference.addEventListener('change',queueMotion);
motionButton?.addEventListener('click',()=>{motionPaused=!motionPaused;document.body.classList.toggle('motion-paused',motionPaused);motionButton.setAttribute('aria-pressed',String(motionPaused));motionButton.textContent=motionPaused?'Resume character motion':'Pause character motion';queueMotion();});
queueMotion();
