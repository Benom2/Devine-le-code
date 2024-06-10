document.addEventListener('DOMContentLoaded', function() {
    let player1Code = '';
    let player2Code = '';

    document.getElementById('setCodeButton1').addEventListener('click', function() {
        const codeInput1 = document.getElementById('codeInput1').value;
        if (codeInput1.length !== 4 || new Set(codeInput1).size !== 4) {
            alert('Veuillez entrer exactement 4 chiffres uniques.');
            return;
        }
        player1Code = codeInput1;
        document.getElementById('player1-setup').style.display = 'none';
        document.getElementById('player2-setup').style.display = 'block';
    });

    document.getElementById('setCodeButton2').addEventListener('click', function() {
        const codeInput2 = document.getElementById('codeInput2').value;
        if (codeInput2.length !== 4 || new Set(codeInput2).size !== 4) {
            alert('Veuillez entrer exactement 4 chiffres uniques.');
            return;
        }
        player2Code = codeInput2;
        document.getElementById('setup').style.display = 'none';
        document.getElementById('game').style.display = 'block';
    });

    document.getElementById('checkCodeButton1').addEventListener('click', function() {
        checkCode(1, player2Code);
    });
    document.getElementById('checkCodeButton2').addEventListener('click', function() {
        checkCode(2, player1Code);
    });

    function checkCode(player, generatedCode) {
        const userInput = document.getElementById('userInput' + player).value;
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
        const resultsTable = document.getElementById('resultsTable' + player);
        const newRow = resultsTable.insertRow();
        newRow.insertCell(0).innerText = userInput;
        newRow.insertCell(1).innerText = correctDigits;
        newRow.insertCell(2).innerText = correctPlaces;

        // Afficher le résultat dans le div
        document.getElementById('result' + player).innerText = "Chiffres corrects: " + correctDigits + " À la bonne place: " + correctPlaces;
    }
});
