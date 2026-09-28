(function(){
var WA='2349050566099',nav=document.getElementById('nav'),menu=document.getElementById('menu'),bg=document.getElementById('burger');
function link(t){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(t)}
function sc(){nav.classList.toggle('s',window.scrollY>30)}window.addEventListener('scroll',sc,{passive:true});sc();
function tog(o){menu.classList.toggle('o',o);bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
bg.addEventListener('click',function(){tog(!menu.classList.contains('o'))});
menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){tog(false)})});
document.querySelectorAll('[data-wa]').forEach(function(a){a.href=link('Hello Trotpen Tech Agency, '+a.getAttribute('data-wa'));a.target='_blank';a.rel='noopener'});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
document.getElementById('form').addEventListener('submit',function(ev){ev.preventDefault();var f=ev.target,v=function(n){return f.elements[n].value.trim()||'-'};
var m="Hello Trotpen Tech Agency, I'd like to request a website.\n\nName: "+v('n')+"\nBusiness: "+v('b')+"\nEmail: "+v('e')+"\nPhone: "+v('p')+"\nWebsite type: "+v('t')+"\nBudget: "+v('g')+"\nDetails: "+v('d');
window.open(link(m),'_blank','noopener')});
})();
