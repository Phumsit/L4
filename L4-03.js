function onClick(event){
    const A1 = document.querySelector('.A1');
    const A1hide = document.querySelector('.A1hide');
    const A2 = document.querySelector('.A2');
    const A2hide = document.querySelector('.A2hide');
    const text = document.querySelector('h1');


isVisible = !isVisible;
if (isVisible){
    A1.classList.add('hidden')
    A1hide.classList.remove('hidden');
    A2.classList.add('hidden')
    A2hide.classList.remove('hidden');
}else{
    A1.classList.remove('hidden')
    A1hide.classList.add('hidden');
    A2.classList.remove('hidden')
    A2hide.classList.add('hidden');
}}
let isVisible = false;
const onClick1 = document.querySelector('.A1');
onClick1.addEventListener('click',onClick);
const onClick2 = document.querySelector('.A1hide');
onClick2.addEventListener('click',onClick);
const onClick3 = document.querySelector('.A2');
onClick3.addEventListener('click',onClick);
const onClick4 = document.querySelector('.A2hide');
onClick4.addEventListener('click',onClick);
const onClick5 = document.querySelector('h1');
onClick5.addEventListener('click',onClick);
