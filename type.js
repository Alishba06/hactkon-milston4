// Fetch form and resume elements
var resumeForm = document.getElementById('resume-form');
var generatedResume = document.getElementById('generated-resume');
var formContainer = document.querySelector('.form-container');
var resumeContainer = document.querySelector('.resume-container');
// Create buttons for Edit and Save Changes
var editButton = document.createElement('button');
editButton.textContent = 'Edit Resume';
editButton.setAttribute('id', 'editResumeButton');
editButton.style.marginRight = '10px'; // Spacing between buttons
editButton.style.marginTop = "15px";
editButton.style.backgroundColor = 'green';
editButton.style.border = 'none';
var saveChangesButton = document.createElement('button');
saveChangesButton.textContent = 'Save Changes';
saveChangesButton.setAttribute('id', 'saveChangesButton');
saveChangesButton.style.marginTop = "15px";
saveChangesButton.style.backgroundColor = 'green';
saveChangesButton.style.border = 'none';
// Handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Fetch form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value;
    // Generate resume content with contenteditable
    var resumeHTML = "\n        <p contenteditable=\"false\"> <strong> Name : </strong>".concat(name, "</p>\n        <p contenteditable=\"false\"><strong>Email:</strong> ").concat(email, "</p>\n        <p contenteditable=\"false\"><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Education</h4>\n        <p contenteditable=\"false\"><strong>Degree:</strong> ").concat(degree, "</p>\n        <p contenteditable=\"false\"><strong>School/University:</strong> ").concat(school, "</p>\n        <h4>Work Experience</h4>\n        <p contenteditable=\"false\"><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p contenteditable=\"false\"><strong>Company:</strong> ").concat(company, "</p>\n        <h4>Skills</h4>\n        <p contenteditable=\"false\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    generatedResume.innerHTML = resumeHTML;
    // Hide form and show the resume
    formContainer.style.display = 'none';
    resumeContainer.style.display = 'block';
    // Append the Edit and Save Changes buttons
    if (!document.getElementById('editResumeButton')) {
        resumeContainer.appendChild(editButton);
        resumeContainer.appendChild(saveChangesButton);
    }
});
// Edit button functionality (to enable editing directly on the resume)
editButton.addEventListener('click', function () {
    var editableFields = generatedResume.querySelectorAll('[contenteditable="false"]');
    editableFields.forEach(function (field) {
        // Cast 'Element' to 'HTMLElement' so we can access the 'style' property
        field.setAttribute('contenteditable', 'true'); // Enable editing
        field.style.border = '1px dashed #000'; // Add border to indicate it's editable
    });
});
// Save Changes button functionality (to save the direct edits)
saveChangesButton.addEventListener('click', function () {
    var editableFields = generatedResume.querySelectorAll('[contenteditable="true"]');
    editableFields.forEach(function (field) {
        // Cast 'Element' to 'HTMLElement' so we can access the 'style' property
        field.setAttribute('contenteditable', 'false'); // Disable editing
        field.style.border = 'none'; // Remove border after editing
    });
});
