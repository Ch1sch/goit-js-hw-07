const loginForm = document.querySelector('.login-form');

        loginForm.addEventListener('submit', function(event) {
        
            event.preventDefault();
            
            const formElements = event.target.elements;

            const formData = {};

            let isFormValid = true;

            for (let i = 0; i < formElements.length; i++) {
                const input = formElements[i];

                if (input.type !== 'submit') {
                    const trimmedValue = input.value.trim();

                    if (!trimmedValue) {
                        isFormValid = false;
                        alert('All form fields must be filled in');
                        break;
                    }

                    formData[input.name] = trimmedValue;
                }
            }

            if (isFormValid) {
                console.log(formData);
                loginForm.reset();
            }
        });
