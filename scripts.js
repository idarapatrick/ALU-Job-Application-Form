$(document).ready(function() {
    $('#jobApplicationForm').on('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });

    function validateForm() {
        const fullName = $('#fullName').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const linkedin = $('#linkedin').val().trim();
        const coverLetter = $('#coverLetter').val().trim();
        const expectedSalary = $('#expectedSalary').val().trim();

        // Regular expressions for validation
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[^\s@]+@(alustudent\.com|alueduaction\.com)$/;
        const phoneRegex = /^\+\d+$/;
        const urlRegex = /^https:\/\/www\.linkedin\.com\/.+$/;
        const coverLetterRegex = /^[A-Za-z0-9\s.,'"\-?!()]*$/;
        const salaryRegex = /^\d+(\.\d{1,2})?$/;

        if (!nameRegex.test(fullName)) {
            alert('Invalid full name. Only letters and spaces are allowed.');
            return false;
        }

        if (!emailRegex.test(email)) {
            alert('Invalid email format. Email must end with @alustudent.com or @alueduaction.com');
            return false;
        }

        if (!phoneRegex.test(phone)) {
            alert('Invalid phone number format. Must start with + followed by digits.');
            return false;
        }

        if (!urlRegex.test(linkedin)) {
            alert('Invalid LinkedIn URL. Expected format: https://www.linkedin.com/username');
            return false;
        }

        if (!coverLetterRegex.test(coverLetter)) {
            alert('Invalid cover letter. No special characters are allowed.');
            return false;
        }

        if (!salaryRegex.test(expectedSalary)) {
            alert('Invalid expected salary. Only numbers with up to two decimal places are allowed.');
            return false;
        }

        return true;
    }
});
