function onOuterClick() {
    outer.classList.add('selected');
}

function onInnerClick() {
    inner.classList.add('selected');
}

function onResetClick() {
    inner.classList.remove('selected');
    outer.classList.remove('selected');
}

const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
outer.addEventListener('click',onOuterClick);
inner.addEventListener('click',onInnerClick);

const reset = document.querySelector('button');
reset.addEventListener('click',onResetClick);
