
links = {
    'linkedin': "https://www.linkedin.com/in/abrorjon-asralov/",
    'github': "https://github.com/asralov"
}

window.addEventListener('load', function() {
    const buttons = document.querySelectorAll('#sidebar button');
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('animate');
        }, index * 200); // Delay of 200ms for each button
    });

    // Attach click event to buttons
    document.querySelectorAll('#sidebar button').forEach(button => {
        button.addEventListener('click', () => {
            const socialMedia = button.innerText.toLowerCase();
            handleClick(socialMedia);
        });
    });

    document.getElementById('spinner-overlay').style.display = 'none';
});


// to work on hello message
const DESC = `I’m a passionate software developer with a love for solving problems and writing clean, efficient code. With expertise in multiple programming languages such as Java, JavaScript, Python, C, and C#. I enjoy working with frameworks like React.js, Node.js, and MongoDB to create and maintain MERN stack based web applications. My experience spans web development, game design, and working across diverse technologies including Unity and AWS.
<br><br>
Always eager to learn and grow, I’m continuously honing my skills and exploring innovative ways to build and optimize applications. Whether working on backend systems or designing user-friendly interfaces, coding is where I find my flow. I’m always open to new tech learning opportunities and excited to take on fresh challenges.`
this.document.getElementById('welcomeMessage').innerHTML  += `<p id="desc">${DESC}</p>`;




// Modal handling
const modal = document.getElementById('projects-modal');
const closeModalBtn = document.querySelector('.close-btn');


/**
 * This is a function that handles clicks on sidebar and depending on the button's
 * context, we will decide either to redirect the user to other social media links
 * or let them download the resume or let the pop up window appear to see the projects
 * in short descrition
 * @param {String} socialMedia 
 */
function handleClick(socialMedia) {
    if (links[socialMedia]) {
        window.open(links[socialMedia], '_blank');
    } else if (socialMedia === 'resume') {
        // Handle resume download
        this.downloadResume();
    } else if (socialMedia === 'projects') {
        // Show the modal
        modal.style.display = 'flex';
    }
}

/**
 * This is a function that handles when user clicks on resume button
 * that will create a temporary link object to download the resume
 * then it gets removed.
 */
function downloadResume() {
    // Construct the path to the resume file
    const resumePath = '/public/documents/"Asralov, Abror.pdf"'; 
    
    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = "Asralov, Abror.pdf";  
    
    // Append the anchor to the body
    document.body.appendChild(link);
    
    // Programmatically trigger the click event
    link.click();
    
    // Remove the anchor from the document
    document.body.removeChild(link);
}

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Close the modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



