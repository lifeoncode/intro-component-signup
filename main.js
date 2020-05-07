

window.addEventListener('DOMContentLoaded', init);


function init(e){
    // grab form elements
    const [form, firstName, lastName, email, pass] = [document.querySelector('form'), document.querySelector('#first-name'), document.querySelector('#last-name'), document.querySelector('#email'), document.querySelector('#pw')];


    // when form is submitted
    form.addEventListener('submit', (e) => {

        e.preventDefault();

        // validate
        if(firstName.value === ''){

            document.querySelector('#first-name-error').textContent = 'First Name cannot be empty';
            firstName.style.borderColor = 'red';
            
        }else if(lastName.value === ''){

            document.querySelector('#last-name-error').textContent = 'Last Name cannot be empty';
            lastName.style.borderColor = 'red';

        }else if(email.value === '' || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){

            document.querySelector('#email-error').textContent = 'Looks like this is not an email';
            email.style.borderColor = 'red';

        }else if(pass.value === ''){

            document.querySelector('#pw-error').textContent = 'Password cannot be empty';
            pass.style.borderColor = 'red';

        }else{
            
            form.classList.add('hide');

            setTimeout(() => {

                document.querySelector('.container_form').style.display = 'flex';
                document.querySelector('.container_form').style.justifyContent = 'center';
                document.querySelector('.container_form').style.alignItems = 'center';
                document.querySelector('.container_form').style.textAlign = 'center';

                document.querySelector('.container_form').innerHTML = '<h1>CHECK YOUR<br>INBOX</h1>';
                document.querySelector('.container_form h1').style.color = '#fff';
                document.querySelector('.container_form h1').style.fontSize = '2.5rem';
            }, 500);
            
            e.preventDefault();
        }
        
    })


}



