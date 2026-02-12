inputs.forEach(input => {
    input.addEventListener('input', () => {
        const val = parseFloat(input.value);
        
        // --- THE "NOT MORE THAN 20" SHIELD ---
        if(val > 20 || val < 0) { 
            input.classList.add('invalid'); // Visually flag it
            document.getElementById('toast').style.display='block'; 
            // We stop here so the average doesn't calculate junk data
            return; 
        } else {
            input.classList.remove('invalid');
            
            // Check if ANY other input still has an error before hiding toast
            const remainingErrors = document.querySelectorAll('input.invalid').length;
            if(remainingErrors === 0) document.getElementById('toast').style.display='none';
        }

        // Only save and calculate if the data is valid
        localStorage.setItem(input.id, input.value);
        calculate();
    });
});
