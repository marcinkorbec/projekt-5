const input = document.getElementById('pass');
const div = document.querySelector('.message');
const password = ["user", "wiosna"];
const message = ["wyjechałam na zawsze", "spadaj"];

input.addEventListener('input', function(e) {
 // console.log(e.target.value);
const text = e.target.value;

 password.forEach((password, index) => {
     if (password === text) {
        div.textContent = message[index];
     };
     
 });

})

input.addEventListener('focus', (e) => {
 e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
 e.target.classList.remove('active');
})

// if (password === this.value) {
//     div.textContent = message;
//     this.value = '';
//    } else if (password !== this.value) {
//     div.textContent = 'błędne hasło';
//    } else {
//       div.textContent = '';

//    }