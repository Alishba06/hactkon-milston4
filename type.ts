// Fetch form and resume elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const generatedResume = document.getElementById('generated-resume') as HTMLDivElement;
const formContainer = document.querySelector('.form-container') as HTMLDivElement;
const resumeContainer = document.querySelector('.resume-container') as HTMLDivElement;

// Create buttons for Edit and Save Changes
const editButton = document.createElement('button');
editButton.textContent = 'Edit Resume';
editButton.setAttribute('id', 'editResumeButton');
editButton.style.marginRight = '10px'; // Spacing between buttons
editButton.style.marginTop = "15px"
editButton.style.backgroundColor = 'green'
editButton.style.border = 'none'





const saveChangesButton = document.createElement('button');
saveChangesButton.textContent = 'Save Changes';
saveChangesButton.setAttribute('id', 'saveChangesButton');
saveChangesButton.style.marginTop = "15px"
saveChangesButton.style.backgroundColor = 'green'
saveChangesButton.style.border = 'none'


// Handle form submission
resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent form submission

    // Fetch form input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Generate resume content with contenteditable
    const resumeHTML = `
        <p contenteditable="false"> <strong> Name : </strong>${name}</p>
        <p contenteditable="false"><strong>Email:</strong> ${email}</p>
        <p contenteditable="false"><strong>Phone:</strong> ${phone}</p>
        <h4>Education</h4>
        <p contenteditable="false"><strong>Degree:</strong> ${degree}</p>
        <p contenteditable="false"><strong>School/University:</strong> ${school}</p>
        <h4>Work Experience</h4>
        <p contenteditable="false"><strong>Job Title:</strong> ${jobTitle}</p>
        <p contenteditable="false"><strong>Company:</strong> ${company}</p>
        <h4>Skills</h4>
        <p contenteditable="false">${skills}</p>
    `;

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
editButton.addEventListener('click', () => {
    const editableFields = generatedResume.querySelectorAll('[contenteditable="false"]');
    editableFields.forEach((field) => {
        // Cast 'Element' to 'HTMLElement' so we can access the 'style' property
        (field as HTMLElement).setAttribute('contenteditable', 'true'); // Enable editing
        (field as HTMLElement).style.border = '1px dashed #000'; // Add border to indicate it's editable
    });
});

// Save Changes button functionality (to save the direct edits)
saveChangesButton.addEventListener('click', () => {
    const editableFields = generatedResume.querySelectorAll('[contenteditable="true"]');
    editableFields.forEach((field) => {
        // Cast 'Element' to 'HTMLElement' so we can access the 'style' property
        (field as HTMLElement).setAttribute('contenteditable', 'false'); // Disable editing
        (field as HTMLElement).style.border = 'none'; // Remove border after editing
    });
});