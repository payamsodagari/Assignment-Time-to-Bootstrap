// fetch data from html
const myForm = document.querySelector('body');
const nameInput = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const inp = document.querySelector('#EditorGender');
const editor = document.querySelector('#Editor');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
// define an eventlistener
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    // To get rid of page reloading
    e.preventDefault();
    if (nameInput.value === '' || lastName.value === '' || inp.value === '') {
        if (!msg) {
            msg.appendChild(div);
            msg.classList.add('msg')
        }
        msg.classList.add('error');
        // Validation
        if (nameInput.value === '' && lastName.value === '') {
            msg.innerHTML = 'Fill the required fields';
        }else if (nameInput.value === '') {
            msg.innerHTML = 'Field name is required';
        } else if (lastName.value === '') {
            msg.innerHTML = 'Field last name is required';
        }
        setTimeout(() => [msg.className = 'msg', msg.innerHTML = ''], 3000);
        // setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}  ${lastName.value}  - ${inp.value} -  ${editor.value}`));
        userList.appendChild(li);
        // clear fields
        nameInput.value = '';
        lastName.value = '';
        editor.value = '-- Select your editor --';
        inp.value = '-- Select your Gender --';
    }
}

var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
});