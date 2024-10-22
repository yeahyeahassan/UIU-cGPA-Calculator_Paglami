document.getElementById('cgpaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const currentCgpa = parseFloat(document.getElementById('currentCgpa').value);
    const completedCredits = parseFloat(document.getElementById('completedCredits').value);

    let totalNewCredits = 0;
    let totalNewGradePoints = 0;
    const courseCredits = document.querySelectorAll('.courseCredit');
    const courseGrades = document.querySelectorAll('.courseGrade');

    // Calculate new courses GPA
    for (let i = 0; i < courseCredits.length; i++) {
        const credit = parseFloat(courseCredits[i].value);
        const grade = parseFloat(courseGrades[i].value);

        totalNewCredits += credit;
        totalNewGradePoints += credit * grade;
    }

    // Update CGPA calculation with new courses
    const newTotalCredits = completedCredits + totalNewCredits;
    const newCgpa = ((currentCgpa * completedCredits) + totalNewGradePoints) / newTotalCredits;

    // Display updated CGPA
    document.getElementById('updatedCgpa').textContent = newCgpa.toFixed(2);

    // Display "You are a failure" if CGPA is above 2.90
    const messageElement = document.getElementById('extraMessage');
  
    if (newCgpa >= 3.67 && newCgpa <= 4.00) {
        messageElement.textContent = "Grade: A\n";
    } 
    else if (newCgpa >= 3.33 && newCgpa < 3.67) {
        messageElement.textContent = "Grade: A-\n"; 
    }
    else if (newCgpa >= 3.00 && newCgpa < 3.33) {
        messageElement.textContent = "Grade: B+\n"; 
    }   
    else if (newCgpa >= 2.67 && newCgpa < 3.00) {
        messageElement.textContent = "Grade: B\n"; 
    }   
    else if (newCgpa >= 2.33 && newCgpa < 2.67) {
        messageElement.textContent = "Grade: B-\n"; 
    }   
    else if (newCgpa >= 2.00 && newCgpa < 2.33) {
        messageElement.textContent = "Grade: C+\n"; 
    }   
    else if (newCgpa >= 1.67 && newCgpa < 2.00) {
        messageElement.textContent = "Grade: C\n"; 
    }    
    else if (newCgpa >= 1.33 && newCgpa < 1.67) {
        messageElement.textContent = "Grade: C-\n"; 
    }   
    else if (newCgpa >= 1.00 && newCgpa < 1.33) {
        messageElement.textContent = "Grade: D+\n"; 
    }   
    else if (newCgpa >= 0.55 && newCgpa < 1.00) {
        messageElement.textContent = "Grade: D\n"; 
    }   

        
    else {
        messageElement.textContent = "Grade: F (Fail)\n"; 
    }
});

// Adding new courses dynamically
document.getElementById('add-course').addEventListener('click', function() {
    const courseContainer = document.createElement('div');
    courseContainer.classList.add('course-entry');
    
    courseContainer.innerHTML = `
        <label for="courseCredit">Enter Course Credit:</label>
        <input type="number" class="courseCredit" placeholder="Credit" min="1" step="0.5" required>
        <label for="courseGrade">Enter Grade Point:</label>
        <input type="number" class="courseGrade" placeholder="Grade Point" min="0" max="4" step="0.01" required>
    `;
    document.getElementById('courses').appendChild(courseContainer);
});

// Adding retake courses dynamically
document.getElementById('add-retake-course').addEventListener('click', function() {
    const retakeContainer = document.createElement('div');
    retakeContainer.classList.add('course-entry');
    
    retakeContainer.innerHTML = `
        <label for="courseCredit">Enter Retake Course Credit:</label>
        <input type="number" class="courseCredit" placeholder="Credit" min="1" step="0.5" required>
        <label for="courseGrade">Enter Retake Grade Point:</label>
        <input type="number" class="courseGrade" placeholder="Grade Point" min="0" max="4" step="0.01" required>
    `;
    document.getElementById('retakeCourses').appendChild(retakeContainer);
});
