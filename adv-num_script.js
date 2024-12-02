let secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const guess = document.getElementById('guess').value;
            const message = document.getElementById('message');
            attempts++;

            if (guess == secretNumber) {
                message.textContent = `Parabéns! Você acertou em ${attempts} tentativas!`;
                message.style.color = 'green';
            } else if (guess < secretNumber) {
                message.textContent = 'O número é maior!';
                message.style.color = 'red';
            } else {
                message.textContent = 'O número é menor!';
                message.style.color = 'red';
            }
        }