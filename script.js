document.addEventListener('DOMContentLoaded', function() {
    const generatedCode = generateUniqueCode();
    console.log(generatedCode);

    document.getElementById('checkCodeButton').addEventListener('click', checkCode);

    function generateUniqueCode() {
        let digits = [];
        while (digits.length < 4) {
            const digit = Math.floor(Math.random() * 10);
            if (!digits.includes(digit)) {
                digits.push(digit);
            }
        }
        return digits.join('');
    }

    function checkCode() {
        const userInput = document.getElementById('userInput').value;
        if (userInput.length !== 4) {
            alert('Veuillez entrer exactement 4 chiffres.');
            return;
        }
        if (new Set(userInput).size !== 4) {
            alert('Tous les chiffres doivent être uniques.');
            return;
        }

        let correctDigits = 0;
        let correctPlaces = 0;
        for (let i = 0; i < 4; i++) {
            if (generatedCode.includes(userInput[i])) {
                correctDigits++;
            }
            if (generatedCode[i] === userInput[i]) {
                correctPlaces++;
            }
        }

        // Ajouter le résultat au tableau
        const resultsTable = document.getElementById('resultsTable');
        const newRow = resultsTable.insertRow();
        newRow.insertCell(0).innerText = userInput;
        newRow.insertCell(1).innerText = correctDigits;
        newRow.insertCell(2).innerText = correctPlaces;

        // Afficher le résultat dans le div
        document.getElementById('result').innerText = "Chiffres corrects: " + correctDigits + " À la bonne place: " + correctPlaces;
    }
});
