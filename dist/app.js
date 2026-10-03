'use strict';
const faqData = [
 ['What does Toribo Agency actually build?',"Whatever your business needs to solve the problem we find together — an AI agent, voice agent, workflow automation, website, or a combination."],
 ['Do I need to know what automation I need?','No. We help identify the right solution during the business analysis.'],
 ['How does the process start?','With a free business analysis call.'],
 ['Is the business analysis really free?','Yes — paid work is only scoped after that.'],
 ['Is this a one-time project or ongoing support?','Both are possible, scoped with you.'],
 ['Do you build websites too?',"Yes, when it's part of the right solution."],
 ['Is Toribo Agency the same as Toribo IT?','No — Toribo IT is a separate course/training brand.']
];
const faqRoot = document.querySelector('.faqs');
faqData.forEach(([question,answer],i)=>{
 const item=document.createElement('article');item.className='faq-item';
 const heading=document.createElement('h3'); const button=document.createElement('button');button.className='faq-button';button.type='button';button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls',`faq-answer-${i}`);button.append(document.createTextNode(question));const symbol=document.createElement('span');symbol.textContent='+';symbol.setAttribute('aria-hidden','true');button.append(symbol);heading.append(button);
 const panel=document.createElement('div');panel.className='faq-answer';panel.id=`faq-answer-${i}`;panel.inert=true;const inner=document.createElement('div');const p=document.createElement('p');p.textContent=answer;inner.append(p);panel.append(inner);item.append(heading,panel);faqRoot.append(item);
});
function setExpanded(button,open){button.setAttribute('aria-expanded',String(open));document.getElementById(button.getAttribute('aria-controls')).inert=!open;button.querySelector('.toggle-symbol,span:last-child').textContent=open?'−':'+';}
document.querySelectorAll('.faq-button').forEach(button=>button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';document.querySelectorAll('.faq-button').forEach(b=>setExpanded(b,false));setExpanded(button,open);}));
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window){
 if(!reduced.matches){document.documentElement.classList.add('motion-ready');const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:0.07,rootMargin:'0px 0px -25px 0px'});document.querySelectorAll('.reveal').forEach(el=>{if(el.parentElement.matches('.team-grid,.solution-grid,.benefit-grid,.testimonial-grid,.package-grid'))el.style.setProperty('--delay',`${Array.from(el.parentElement.children).indexOf(el)%4*65}ms`);revealObserver.observe(el);});reduced.addEventListener('change',event=>{if(event.matches)document.documentElement.classList.remove('motion-ready');});}
}
const navLinks=[...document.querySelectorAll('.bottom-nav a')];const navSections=navLinks.map(link=>document.querySelector(link.getAttribute('href')));let scheduled=false;
function updateNav(){scheduled=false;let current=0;navSections.forEach((section,i)=>{if(section.getBoundingClientRect().top<=window.innerHeight*.38)current=i;});navLinks.forEach((link,i)=>{link.classList.toggle('active',i===current);if(i===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateNav);}},{passive:true});updateNav();
const form=document.getElementById('brief-form');
const result=document.getElementById('brief-result');
let brief='';
form.addEventListener('submit',event=>{
 event.preventDefault();
 const data=new FormData(form);
 brief=`TORIBO AGENCY — FREE BUSINESS ANALYSIS BRIEF\n\nName: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}\nWhatsApp: ${data.get('phone').trim() || 'Not provided'}\nInterested in: ${data.get('interest')}\n\nWhat I would like to improve:\n${data.get('problem').trim()}\n\nPrepared locally. No booking or enquiry has been submitted.\n`;
 document.getElementById('brief-status').textContent='Your brief is ready. Download a copy to share with the Toribo team.';
 result.hidden=false;
});
form.addEventListener('input',()=>{result.hidden=true;});
document.getElementById('download-brief').addEventListener('click',()=>{
 const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));
 const link=document.createElement('a');link.href=url;link.download='Toribo-Business-Analysis-Brief.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
