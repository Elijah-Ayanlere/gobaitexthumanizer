const header = document.getElementById('dynamic-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('fixed', 'top-0', 'left-0', 'shadow-lg');
        } else {
            header.classList.remove('fixed', 'top-0', 'left-0', 'shadow-lg');
        }
    });

const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        menuButton.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('animate-slide-down');
                mobileMenu.classList.remove('animate-slide-up');
            } else {
                mobileMenu.classList.add('animate-slide-up');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('animate-slide-up');
                }, 300); // Duration of the slide-up animation
            }
        });

         // Get all FAQ question elements and answer sections
        const faqQuestions = document.querySelectorAll('.faq-question');
        const faqAnswers = document.querySelectorAll('.faq-answer');

        // Add click event listener to each question
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                // Remove active class and reset bg color for all questions
                faqQuestions.forEach(q => q.classList.remove('bg-blue-400', 'text-black'));
                faqQuestions.forEach(q => q.classList.add('border', 'border-gray-600', 'text-gray-400'));

                // Add active class and bg color to the clicked question
                question.classList.add('bg-blue-400', 'text-black');
                question.classList.remove('border', 'border-gray-600', 'text-gray-400');

                // Hide all answers
                faqAnswers.forEach(answer => answer.classList.add('hidden'));

                // Show the answer associated with the clicked question
                const targetId = question.getAttribute('data-target');
                document.getElementById(targetId).classList.remove('hidden');
            });
        });

        // Select all toggle headers
        document.querySelectorAll(".toggle-section-header").forEach((header) => {
            header.addEventListener("click", () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector("i");

                // Toggle visibility of the content
                if (content.classList.contains("hidden")) {
                    // Show content
                    content.classList.remove("hidden");
                    content.style.maxHeight = content.scrollHeight + "px"; // Animate height
                    icon.classList.remove("fa-plus");
                    icon.classList.add("fa-minus");
                } else {
                    // Hide content
                    content.style.maxHeight = null; // Animate height
                    content.classList.add("hidden");
                    icon.classList.remove("fa-minus");
                    icon.classList.add("fa-plus");
                }
            });
        });


        const inputText = document.getElementById("input-text");
        const wordCountDisplay = document.getElementById("word-count");
        const outputArea = document.getElementById("output-area");
        const outputWordCountDisplay = document.getElementById("output-word-count");
    
        // Function to count words
        function countWords(text) {
            return text.trim().split(/\s+/).filter(Boolean).length;
        }
    
        // Limit word count to 3000 in the input textarea
        inputText.addEventListener("input", () => {
            const words = inputText.value.trim().split(/\s+/).filter(Boolean);
            if (words.length > 3000) {
                inputText.value = words.slice(0, 3000).join(" ");
            }
            wordCountDisplay.textContent = `${countWords(inputText.value)}/3000 words`;
        });
    
        // Placeholder behavior for output area
        function updateOutputPlaceholder() {
            if (outputArea.textContent.trim() === "") {
                outputArea.classList.add("text-gray-400");
                outputArea.setAttribute("data-placeholder", "Paraphrased text will appear here");
            } else {
                outputArea.classList.remove("text-gray-400");
                outputArea.removeAttribute("data-placeholder");
            }
            outputWordCountDisplay.textContent = `${countWords(outputArea.textContent)} words`;
        }
    
        // Initial setup for output placeholder
        updateOutputPlaceholder();
    
        outputArea.addEventListener("input", updateOutputPlaceholder);
        