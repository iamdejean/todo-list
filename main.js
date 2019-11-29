const myForm = document.querySelector('#form');
const taskInput = document.querySelector('#task');
const descritionInput = document.querySelector('#descrition');
const placeInput = document.querySelector('#place');
const timeInput = document.querySelector('#time');
const msg = document.querySelector('.msg');
const taskList = document.querySelector('#tasks');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(taskInput.value === '' || descritionInput.value === '' || placeInput.value === '' || timeInput.value === '' ) {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';  

        setTimeout(() => msg.remove(), 3000);
    } else {
         const li = document.createElement('li');
         li.appendChild(document.createTextNode('${taskInput.value}:${descritionInput.value}:${placeInput.value}:${timeInput.value}'));

         taskList.appendChild(li);

         //clear fields
         taskInput.value = '';
         descritionInput.value = '';
         placeInput.value = '';
         timeInput.value = '';
       

    }
}