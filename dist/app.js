'use strict';
const faqData = [
 ['How do I start a project with Toribo Agency?','It starts with a free 30-minute business analysis. We map how your business runs today, where work gets stuck, and what that is costing you. You leave with a written plan — whether or not you hire us.'],
 ['What does Toribo Agency actually build?',"Whatever solves the problem we find together — an AI agent, a voice agent, a workflow automation, an internal tool, or a website. We don't start from a product list; we start from where your business is losing time, money or leads."],
 ['Is the business analysis really free?','Yes. Nothing is charged until we have agreed what to build. Paid work is scoped and quoted only after that conversation.'],
 ['How much does a project cost?','We don’t publish fixed prices, because the right fix depends on the problem. After the analysis you get a written quote — a Custom Package for one focused problem, or a Business Package when several systems need to work together.'],
 ['How long does a project take?','A single focused automation is usually a matter of weeks; a connected multi-system build takes longer. You get a realistic timeline in writing with your quote, before any work starts.'],
 ['Is this a one-time project or ongoing support?','Both are possible. Some businesses need one system built once; others want it kept running and improved as they grow. We scope that with you rather than pushing you into a retainer.']
];
const faqRoot = document.querySelector('.faqs');
faqData.forEach(([question,answer],i)=>{
 const item=document.createElement('article');item.className='faq-item';item.style.setProperty('--faq-delay',(i*45)+'ms');
 const heading=document.createElement('h3'); const button=document.createElement('button');button.className='faq-button';button.type='button';button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls',`faq-answer-${i}`);button.append(document.createTextNode(question));const symbol=document.createElement('span');symbol.textContent='⌄';symbol.setAttribute('aria-hidden','true');button.append(symbol);heading.append(button);
 const panel=document.createElement('div');panel.className='faq-answer';panel.id=`faq-answer-${i}`;panel.inert=true;const inner=document.createElement('div');const p=document.createElement('p');p.textContent=answer;inner.append(p);panel.append(inner);item.append(heading,panel);faqRoot.append(item);
});
function setExpanded(button,open){button.setAttribute('aria-expanded',String(open));document.getElementById(button.getAttribute('aria-controls')).inert=!open;}
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
 brief=`TORIBO AGENCY — FREE BUSINESS ANALYSIS BRIEF\n\nName: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}\nWhatsApp: ${data.get('phone').trim() || 'Not provided'}\nInterested in: ${data.get('interest')}
Rough budget: ${data.get('budget') || 'Not specified'}
Also needs: ${(data.get('other')||'').trim() || 'Nothing extra mentioned'}\n\nWhat I would like to improve:\n${data.get('problem').trim()}\n\nPrepared locally. No booking or enquiry has been submitted.\n`;
 document.getElementById('brief-status').textContent='Your brief is ready. Download a copy to share with the Toribo team.';
 result.hidden=false;
});
form.addEventListener('input',()=>{result.hidden=true;});
document.getElementById('download-brief').addEventListener('click',()=>{
 const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));
 const link=document.createElement('a');link.href=url;link.download='Toribo-Business-Analysis-Brief.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
