// Add an event listener for the form submission to calculate the updated CGPA
document.getElementById('cgpaForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the current CGPA and completed credits from input fields
    const currentCgpa = parseFloat(document.getElementById('currentCgpa').value);
    const completedCredits = parseFloat(document.getElementById('completedCredits').value);

    let totalNewCredits = 0; // Initialize total new credits
    let totalNewGradePoints = 0; // Initialize total new grade points
    const courseCredits = document.querySelectorAll('.courseCredit'); // Get all course credit input elements
    const courseGrades = document.querySelectorAll('.courseGrade'); // Get all course grade input elements

    // Calculate the total credits and grade points for new courses
    for (let i = 0; i < courseCredits.length; i++) {
        const credit = parseFloat(courseCredits[i].value); // Get the credit for each course
        const grade = parseFloat(courseGrades[i].value); // Get the grade for each course

        totalNewCredits += credit; // Add to total new credits
        totalNewGradePoints += credit * grade; // Add to total new grade points
    }

    // Update the total credits and calculate the new CGPA
    const newTotalCredits = completedCredits + totalNewCredits; // Calculate total credits including new courses
    const newCgpa = ((currentCgpa * completedCredits) + totalNewGradePoints) / newTotalCredits; // Calculate new CGPA

    // Display the updated CGPA rounded to two decimal places
    document.getElementById('updatedCgpa').textContent = newCgpa.toFixed(2);

    // Display appropriate messages based on the new CGPA
    const messageElement = document.getElementById('extraMessage');
  
    // Conditional statements to provide feedback based on the calculated CGPA
    if (newCgpa === 4.00) {
        messageElement.textContent = "Grade: A – Are you an alien or something? Btw Congratulations King! Now give treat to your friends.\n";
    } 
    else if (newCgpa >= 3.67 && newCgpa < 4.00) {
        messageElement.textContent = "Grade: A- – Almost there! What happened? Now ace it completely.\n"; 
    }
    else if (newCgpa >= 3.33 && newCgpa < 3.67) {
        messageElement.textContent = "Grade: B+ – Decent, but seriously? This close to an A and you thought ‘Eh, good enough’?\n"; 
    }   
    else if (newCgpa >= 3.00 && newCgpa < 3.33) {
        messageElement.textContent = "Grade: B – Doing good. You still have hope man.\n"; 
    }   
    else if (newCgpa >= 2.67 && newCgpa < 3.00) {
        messageElement.textContent = "Grade: B- – Good but try give more effort!\n"; 
    }   
    else if (newCgpa >= 2.33 && newCgpa < 2.67) {
        messageElement.textContent = "Grade: C+ – Are you serious? C+?! Did you even open the slides?\n"; 
    }   
    else if (newCgpa >= 2.00 && newCgpa < 2.33) {
        messageElement.textContent = "Grade: C – You're barely surviving."; 
    }    
    else if (newCgpa >= 1.67 && newCgpa < 2.00) {
        messageElement.textContent = "Grade: C- – Wow, you're practically begging for a disaster!\n"; 
    }   
    else if (newCgpa >= 1.33 && newCgpa < 1.67) {
        messageElement.textContent = "Grade: D+ – One more bad decision and you'll need to start Googling 'how to retake classes'.\n"; 
    }   
    else if (newCgpa >= 1.00 && newCgpa < 1.33) {
        messageElement.textContent = "Grade: D – Yikes! At this point, even Google can't save you!\n"; 
    }   
    else {
        messageElement.textContent = "Grade: F (Fail) – F? Fantastic! You must've worked really hard to hit rock bottom. Congrats, you're a legend. 99+ Missed calls from Tesla!\n"; 
    }
});

// Adding new courses dynamically
document.getElementById('add-course').addEventListener('click', function() {
    // Create a new div to hold the course entry
    const courseContainer = document.createElement('div');
    courseContainer.classList.add('course-entry'); // Add class for styling
    
    // Set the inner HTML to include input fields for course credit and grade
    courseContainer.innerHTML = `
        <label for="courseCredit">Enter Course Credit:</label>
        <input type="number" class="courseCredit" placeholder="Credit" min="1" step="0.5" required>
        <label for="courseGrade">Enter Grade Point:</label>
        <input type="number" class="courseGrade" placeholder="Grade Point" min="0" max="4" step="0.01" required>
    `;
    // Append the new course entry to the courses container
    document.getElementById('courses').appendChild(courseContainer);
});

// Adding retake courses dynamically
document.getElementById('add-retake-course').addEventListener('click', function() {
    // Create a new div to hold the retake course entry
    const retakeContainer = document.createElement('div');
    retakeContainer.classList.add('course-entry'); // Add class for styling
    
    // Set the inner HTML to include input fields for retake course credit and grade
    retakeContainer.innerHTML = `
        <label for="courseCredit">Enter Retake Course Credit:</label>
        <input type="number" class="courseCredit" placeholder="Credit" min="1" step="0.5" required>
        <label for="courseGrade">Enter Retake Grade Point:</label>
        <input type="number" class="courseGrade" placeholder="Grade Point" min="0" max="4" step="0.01" required>
    `;
    // Append the new retake course entry to the retakeCourses container
    document.getElementById('retakeCourses').appendChild(retakeContainer);
});
