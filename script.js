
   

        let currentExam = null;
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let wrongAnswers = 0;
        let examStarted = false;
        let startTime = null;

        function startExam(examType) {
            currentExam = examData[examType];
            currentQuestionIndex = 0;
            userAnswers = [];
            wrongAnswers = 0;
            examStarted = true;
            startTime = new Date();

            document.getElementById('examSelection').style.display = 'none';
            document.getElementById('quizContainer').style.display = 'block';
            document.getElementById('resultsContainer').style.display = 'none';

            document.getElementById('examTitle').textContent = currentExam.title;
            document.getElementById('totalQuestions').textContent = currentExam.questions.length;
            
            loadQuestion();
            updateProgress();
            updateErrorIndicator();
        }

        function loadQuestion() {
            const question = currentExam.questions[currentQuestionIndex];
            const questionText = document.getElementById('questionText');
            const questionImage = document.getElementById('questionImage');
            const optionsContainer = document.getElementById('optionsContainer');

            questionText.textContent = question.question;
            
            // Handle question image if exists
            if (question.image) {
                questionImage.textContent = `[${question.image}]`;
                questionImage.style.display = 'flex';
            } else {
                questionImage.style.display = 'none';
            }

            // Clear previous options
            optionsContainer.innerHTML = '';

            // Create options
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.onclick = () => selectOption(index, optionDiv);

                const optionLetter = document.createElement('span');
                optionLetter.className = 'option-letter';
                optionLetter.textContent = String.fromCharCode(65 + index); // A, B, C, D

                const optionText = document.createElement('span');
                optionText.textContent = option;

                optionDiv.appendChild(optionLetter);
                optionDiv.appendChild(optionText);
                optionsContainer.appendChild(optionDiv);

                // Restore previous selection if exists
                if (userAnswers[currentQuestionIndex] === index) {
                    optionDiv.classList.add('selected');
                }
            });

            // Update question counter
            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;

            // Update navigation buttons
            document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
            document.getElementById('nextBtn').disabled = userAnswers[currentQuestionIndex] === undefined;
            
            // Show finish button on last question
            if (currentQuestionIndex === currentExam.questions.length - 1) {
                document.getElementById('nextBtn').style.display = 'none';
                document.getElementById('finishBtn').style.display = userAnswers[currentQuestionIndex] !== undefined ? 'inline-block' : 'none';
            } else {
                document.getElementById('nextBtn').style.display = 'inline-block';
                document.getElementById('finishBtn').style.display = 'none';
            }
        }

        function selectOption(optionIndex, optionElement) {
            // Remove previous selection
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to clicked option
            optionElement.classList.add('selected');
            
            // Store answer
            userAnswers[currentQuestionIndex] = optionIndex;
            
            // Enable next/finish button
            document.getElementById('nextBtn').disabled = false;
            if (currentQuestionIndex === currentExam.questions.length - 1) {
                document.getElementById('finishBtn').style.display = 'inline-block';
            }
        }

        function nextQuestion() {
            if (currentQuestionIndex < currentExam.questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
                updateProgress();
            }
        }

        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion();
                updateProgress();
            }
        }

        function updateProgress() {
            const progress = ((currentQuestionIndex + 1) / currentExam.questions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
        }

        function updateErrorIndicator() {
            const errorCountElement = document.getElementById('errorCount');
            const errorIndicator = document.getElementById('errorIndicator');
            
            errorCountElement.textContent = wrongAnswers;
            
            errorIndicator.className = 'error-indicator ';
            if (wrongAnswers === 0) {
                errorIndicator.className += 'safe';
            } else if (wrongAnswers <= 2) {
                errorIndicator.className += 'warning';
            } else {
                errorIndicator.className += 'danger';
            }
        }

        function finishExam() {
            if (userAnswers.length !== currentExam.questions.length) {
                alert('Por favor, responde todas las preguntas antes de finalizar.');
                return;
            }

            // Calculate results
            let correctAnswers = 0;
            wrongAnswers = 0;

            userAnswers.forEach((answer, index) => {
                if (answer === currentExam.questions[index].correct) {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            });

            const percentage = Math.round((correctAnswers / currentExam.questions.length) * 100);
            const passed = wrongAnswers <= 3;
            const endTime = new Date();
            const timeSpent = Math.round((endTime - startTime) / 60000); // minutes

            // Show results
            showResults(correctAnswers, wrongAnswers, percentage, passed, timeSpent);
        }

        function showResults(correct, incorrect, percentage, passed, timeSpent) {
            document.getElementById('quizContainer').style.display = 'none';
            document.getElementById('resultsContainer').style.display = 'block';

            const resultsContainer = document.getElementById('resultsContainer');
            const resultTitle = document.getElementById('resultTitle');
            const scoreDisplay = document.getElementById('scoreDisplay');

            if (passed) {
                resultsContainer.className = 'results passed';
                resultTitle.textContent = '🎉 ¡APROBADO!';
                scoreDisplay.textContent = '✅ APTO';
                document.getElementById('resultMessage').textContent = 
                    `¡Enhorabuena! Has aprobado el examen teórico del carnet B1 con ${correct} respuestas correctas de ${currentExam.questions.length}.`;
                document.getElementById('officialMessage').textContent = 
                    'Resultado: APTO - Puedes continuar con las clases prácticas de conducción.';
            } else {
                resultsContainer.className = 'results failed';
                resultTitle.textContent = '❌ NO APTO';
                scoreDisplay.textContent = '🚫 SUSPENSO';
                document.getElementById('resultMessage').textContent = 
                    `Has cometido ${incorrect} errores. Necesitas estudiar más antes de repetir el examen.`;
                document.getElementById('officialMessage').textContent = 
                    'Resultado: NO APTO - Máximo 3 errores permitidos. Debes volver a presentarte.';
            }

            // Update statistics
            document.getElementById('correctAnswers').textContent = correct;
            document.getElementById('incorrectAnswers').textContent = incorrect;
            document.getElementById('percentage').textContent = percentage + '%';
            document.getElementById('timeSpent').textContent = timeSpent + ' min';
        }

        function restartExam() {
            currentExam = null;
            currentQuestionIndex = 0;
            userAnswers = [];
            wrongAnswers = 0;
            examStarted = false;
            startTime = null;

            document.getElementById('examSelection').style.display = 'block';
            document.getElementById('quizContainer').style.display = 'none';
            document.getElementById('resultsContainer').style.display = 'none';
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Aplicación de Examen DGT B1 cargada correctamente');
        });