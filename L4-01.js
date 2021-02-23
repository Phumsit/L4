function toggleVisibility(event){
    const details = document.querySelector('.details');
    const text = event.currentTarget.querySelector('span');

    isVisible = !isVisible;
    if (isVisible){
        details.classList.remove('hidden');
        text.textContent = 'ปิดเถอะ';
    }
    else{
        details.classList.add('hidden');
        text.textContent = 'ดูอีกรอบ';
    }
}
let isVisible = false;// เช็คว่า เห็นข้อความที่ซ่อนไหม//

const deteilToggle = document.querySelector('.show-details');
deteilToggle.addEventListener('click',toggleVisibility);
