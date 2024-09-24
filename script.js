// Sample job data in JSON format
const jobs = [
    {
        "jobTitle": "Web Developer",
        "company": "TechSolutions",
        "location": "New York",
        "description": "Seeking a skilled web developer proficient in HTML, CSS, and JavaScript.",
        "salary": 60000,
        "jobType": "Full Time"
    },
    {
        "jobTitle": "Graphic Designer",
        "company": "DesignWorks",
        "location": "San Francisco",
        "description": "Looking for a creative graphic designer with experience in Adobe Creative Suite.",
        "salary": 50000,
        "jobType": "Part Time"
    },
    {
        "jobTitle": "Software Engineer",
        "company": "CodeCrafters",
        "location": "Seattle",
        "description": "Experienced software engineer needed to develop scalable software solutions.",
        "salary": 70000,
        "jobType": "Full Time"
    }
];

// Function to display jobs
// Function to display jobs
function displayJobs(jobs) {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';

    jobs.forEach((job, index) => {
        if (index % 2 === 0) {
            // Create a new row
            const jobRow = document.createElement('div');
            jobRow.classList.add('job-row');
            jobList.appendChild(jobRow);
        }

        // Get the last row
        const jobRows = document.querySelectorAll('.job-row');
        const currentRow = jobRows[jobRows.length - 1];

        // Create job card
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h2>${job.jobTitle}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Description:</strong> ${job.description}</p>
            <p><strong>Salary:</strong> $${job.salary}</p>
            <p><strong>Job Type:</strong> ${job.jobType}</p>
        `;

        currentRow.appendChild(jobCard);
    });
}


// Function to filter jobs
function filterJobs() {
    const filterSalary = document.getElementById('filterSalary').value;
    const filterLocation = document.getElementById('filterLocation').value.toLowerCase();
    const filterJobType = document.getElementById('filterJobType').value.toLowerCase();

    const filteredJobs = jobs.filter(job => {
        return (job.salary >= filterSalary) &&
               (job.location.toLowerCase().includes(filterLocation)) &&
               (filterJobType === '' || job.jobType.toLowerCase() === filterJobType);
    });

    displayJobs(filteredJobs);
}

// Display initial list of jobs
displayJobs(jobs);

// Event listeners for filtering
document.getElementById('filterSalary').addEventListener('input', filterJobs);
document.getElementById('filterLocation').addEventListener('input', filterJobs);
document.getElementById('filterJobType').addEventListener('change', filterJobs);

// Event listener for job submission
document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const salary = document.getElementById('salary').value;
    const jobType = document.getElementById('jobType').value;

    // Add the new job to the jobs array
    jobs.push({
        jobTitle: jobTitle,
        company: company,
        location: location,
        description: description,
        salary: parseInt(salary),
        jobType: jobType
    });

    // Redisplay the updated job list
    displayJobs(jobs);

    // Clear the form fields
    document.getElementById('jobForm').reset();
});