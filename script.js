const form = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e){
        e.preventDefault();
    })
})
const inputs = 
form.querySelectorAll('input, select, textarea');
let valid = true;
inputs.forEach(input => {
    if (!input.value) {
        valid = false;
        input.style.borderColor = 'red';
     } else {
        input.style.borderColor = '#ccc';
     }
    });
    if (valid) {
        alert('Thank you! Your form has been Submitted Successfully.');
        form.reset();
    }  else {
        alert('Please fill all required fields.')
    }