document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    const strengthBar = document.querySelector('.bar');
    const strengthText = document.getElementById('strength-text');
    
    // Requirement elements
    const lengthReq = document.getElementById('length');
    const uppercaseReq = document.getElementById('uppercase');
    const lowercaseReq = document.getElementById('lowercase');
    const numberReq = document.getElementById('number');
    const specialReq = document.getElementById('special');
    const consecutiveReq = document.getElementById('consecutive');
    const sequentialReq = document.getElementById('sequential');
    const commonWordsReq = document.getElementById('commonWords');
    const goodLengthReq = document.getElementById('goodLength');
    const multipleSpecialReq = document.getElementById('multipleSpecial');

    // Common patterns and words to avoid in passwords
    const commonPatterns = [
        'password', '123456', 'qwerty', 'admin', 'welcome',
        'letmein', 'monkey', 'sunshine', 'princess', 'football',
        'baseball', 'master', 'access', 'login', 'passw0rd'
    ];

    // Toggle password visibility
    toggleButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            passwordInput.type = 'password';
            toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });

    // Check password strength
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        let score = 0;
        
        // Reset requirements
        resetRequirements();
        
        if (password.length === 0) {
            updateStrengthMeter(0, 'Not entered');
            return;
        }
        
        // Check basic requirements
        if (password.length >= 12) {
            markRequirementMet(lengthReq);
            score += 1;
        }
        
        if (/[A-Z]/.test(password)) {
            markRequirementMet(uppercaseReq);
            score += 1;
        }
        
        if (/[a-z]/.test(password)) {
            markRequirementMet(lowercaseReq);
            score += 1;
        }
        
        if (/[0-9]/.test(password)) {
            markRequirementMet(numberReq);
            score += 0.5;
        }
        
        if (/[^A-Za-z0-9]/.test(password)) {
            markRequirementMet(specialReq);
            score += 0.5;
        }
        
        // Check advanced requirements
        if (!/(.)\1\1/.test(password)) {
            markRequirementMet(consecutiveReq);
            score += 0.5;
        }
        
        if (!hasSequentialPatterns(password)) {
            markRequirementMet(sequentialReq);
            score += 0.5;
        }
        
        if (!hasCommonWords(password)) {
            markRequirementMet(commonWordsReq);
            score += 0.5;
        }
        
        if (password.length >= 14) {
            markRequirementMet(goodLengthReq);
            score += 0.5;
        }
        
        if (hasMultipleSpecialAndNumbers(password)) {
            markRequirementMet(multipleSpecialReq);
            score += 0.5;
        }
        
        // Update strength meter
        updateStrengthMeter(score);
    });

    function resetRequirements() {
        // Reset basic requirements
        const requirements = document.querySelectorAll('.requirements p');
        requirements.forEach(req => {
            req.className = '';
            req.querySelector('i').className = 'fas fa-times-circle';
        });
    }

    function markRequirementMet(element) {
        element.className = 'met';
        element.querySelector('i').className = 'fas fa-check-circle';
    }

    function updateStrengthMeter(score, customText) {
        // Remove all classes
        strengthBar.className = 'bar';
        
        // Update text and bar based on score
        if (customText) {
            strengthText.innerText = 'Password Strength: ' + customText;
            return;
        }
        
        if (score < 1.5) {
            strengthBar.classList.add('very-weak');
            strengthText.innerText = 'Password Strength: Very Weak';
        } else if (score < 3) {
            strengthBar.classList.add('weak');
            strengthText.innerText = 'Password Strength: Weak';
        } else if (score < 4) {
            strengthBar.classList.add('medium');
            strengthText.innerText = 'Password Strength: Medium';
        } else if (score < 5) {
            strengthBar.classList.add('strong');
            strengthText.innerText = 'Password Strength: Strong';
        } else {
            strengthBar.classList.add('very-strong');
            strengthText.innerText = 'Password Strength: Very Strong';
        }
    }

    function hasSequentialPatterns(password) {
        const lowerPassword = password.toLowerCase();
        // Common sequential patterns
        const sequences = ['abcdefghijklmnopqrstuvwxyz', '01234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
        
        for (let seq of sequences) {
            for (let i = 0; i < seq.length - 2; i++) {
                const pattern = seq.substring(i, i + 3);
                if (lowerPassword.includes(pattern)) {
                    return true;
                }
            }
        }
        return false;
    }

    function hasCommonWords(password) {
        const lowerPassword = password.toLowerCase();
        for (let pattern of commonPatterns) {
            if (lowerPassword.includes(pattern)) {
                return true;
            }
        }
        return false;
    }

    function hasMultipleSpecialAndNumbers(password) {
        const specialCount = (password.match(/[^A-Za-z0-9]/g) || []).length;
        const numberCount = (password.match(/[0-9]/g) || []).length;
        
        return specialCount >= 2 && numberCount >= 2;
    }
}); 