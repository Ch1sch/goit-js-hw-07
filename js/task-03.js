const nameInput = document.getElementById('name-input');
        const nameOutput = document.getElementById('name-output');

        nameInput.addEventListener('input', function() {
            const enteredName = nameInput.value.trim();

            const displayName = enteredName !== '' ? enteredName : 'Anonymous';

            nameOutput.textContent = displayName;
        });