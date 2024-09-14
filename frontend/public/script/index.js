
links = {
    'linkedin': "https://www.linkedin.com/in/abrorjon-asralov/",
    'github': "https://github.com/asralov"
}


const projects = [
    {
      language: '<i class="devicon-csharp-plain"></i>',
      name: "From Bud to Bloom",
      description: `
      In "From Bud to Bloom," We co-developed a 2D game that took first place in a game jam themed "Bloom into the New." Collaborating in a team of three, we accomplished working on key gameplay mechanics using Unity and C#, bringing the plant growth simulation and interactive environments to life. I also contributed to the game's visual aesthetic by designing the plant stages and vibrant environments using Photoshop. To ensure smooth collaboration, we used version control for seamless integration of code and assets, allowing us to deliver the project on time.
      `,
      tools: ["Unity", "Unity Version Control", "Photoshop", "C#"],
      link: "https://pulyau.itch.io/from-bud-to-bloom"
    },
    {
      language: '<i class="devicon-unity-plain"></i>',
      name: "Fishing Simulator 2D",
      description: `
      We developed "Fishing Simulator 2D" as a team of three during a game jam centered around an "Ocean" theme. Our contributions included designing and coding core gameplay mechanics with Unity and C#, such as fishing dynamics and environmental interactions, to create a smooth and responsive player experience. We also designed game objects and assets using Photoshop, ensuring they were visually appealing and thematically consistent. Effective collaboration and project management were facilitated through version control, allowing us to integrate assets and code seamlessly.
      `,
      tools: ["Unity", "Unity Version Control", "Photoshop", "C#"],
      link: "https://pulyau.itch.io/fishing-simulator-2d"
    },
    {
      language: '<i class="devicon-bash-plain"></i>',
      name: "Guessing Game",
      description: `
      We developed the "Guessing Game" using Mars Simulator and Assembly, where players guess a hidden number or word based on clues provided. The project emphasized low-level programming, with Assembly offering a deep dive into hardware interaction and efficient computation. Mars Simulator provided the necessary environment for testing and simulating the Assembly code, ensuring accurate performance and engaging gameplay.
      `,
      tools: ["Mars Simulator", "Assembly"],
      link: "https://github.com/asralov/guessing_game"
    },
    {
      language: '<i class="devicon-java-plain"></i>',
      name: "Trie Data Structure",
      description: `
      As a team of four, we collaborated to implement the Trie data structure in Java, focusing on efficient storage and retrieval of string data. The Trie allows for quick search operations, making it ideal for tasks like autocomplete and dictionary implementations. We employed version control with Git, built and managed dependencies using Gradle, and ensured code quality through rigorous testing with JUnit5.
      `,
      tools: ["Java", "Git", "Gradle", "JUnit5"],
      link:"https://youtu.be/15-Ndt-nNWo"
    },
    {
        language: '<i class="devicon-git-plain"></i>',
        name: "Lose The Bias",
        description: `
        This is a group project for my CSC337 - Web Development class where we have implmented a web application that produces summaries for readers about the latest news happening worldwide. They are able to read what ChatGPT have produced as a short summary about happening situation in the world. We have run a script to make ChatGPT make summaries as JSON files so we can retireve them and show to readers. On this website, user is able to create an account, then log in. It has nice features to change user settings as well as choose favorite topics by categories. They are able to interract with other readers in the comment section under each post, and discuss what they think of an any article. They can like/dislike posts, and regarding the like/dislike ratio, we can determine what our reader is truly interested in and show them more of the liked content.
        `,
        tools: ["Python", "JavaScript", "HTML5", "CSS3", "MongoDB", "Express.js", "Digital Ocean", "Git"],
        link:"https://github.com/asralov/csc337-final-project"
    },
    {
      language: '<i class="devicon-javascript-plain"></i>',
      name: "English 108 - ePortfolio",
      description: `
      Instead of creating a simple PowerPoint presentation for an English writing class, I challenged myself to build a one-page web app to showcase my progress. The web app was deployed on the internet, allowing easy access for classmates and instructors to explore my work. This project highlighted my skills in web development, using modern technologies to create an interactive and engaging portfolio.
      `,
      tools: ["HTML5", "CSS3", "JavaScript", "Digital Ocean", "NodeJs", "ExpressJs"],
      link:"https://github.com/asralov/engl-108"
    },
    {
        language: '<i class="devicon-python-plain"></i>',
        name: "Word Search Game",
        description:`
        This Project, introduces a text-based word search game. The program engages users in a game where they decide whether to start a new word search, choose the grid size (ranging from 5 to 10), and then proceed to find words hidden within the randomly generated grid. The user repeatedly inputs words they believe exist horizontally, vertically, or diagonally in the grid. The game informs users about the number of remaining words after each guess and handles scenarios where a word has already been guessed or does not exist. Additionally, users have the option to use help tickets to reveal a random word. The game continues until the user decides to exit.
        `,
        tools: ["Python"],
        link:"#"
    },
    /*
    {
        language: '<i class="devicon-python-plain"></i>',
        name: "Quadratic Solver",
        description: "DEFAULT",
        tools: ["Python"],
        link:"#"
    },
    {
        language: '<i class="devicon-python-plain"></i>',
        name: "Password Generator",
        description: "DEFAULT",
        tools: ["Python"],
        link:"#"
    },*/
];

function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}



window.addEventListener('load', function() {
    console.log(isSafari());
    if (isSafari()) {
        document.querySelectorAll('.animate').forEach(function(element) {
            element.style.animationDelay = '0s !important'; // Remove animation delay for Safari
        });
    }
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
    // attaching click events to buttons for phones
    document.querySelectorAll('#menu button').forEach(button => {
        button.addEventListener('click', () => {
            const socialMedia = button.innerText.toLowerCase();
            handleClick(socialMedia);
        });


    });



    document.getElementById('burger').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        if (!menu)
        {
            menu = document.getElementById('menu-drop')
        }
        if (menu.id === 'menu') {
            menu.id = 'menu-drop'; // Change to menu-drop
        } else {
            menu.id = 'menu'; // Change back to menu
        }
    });

    document.getElementById('spinner-overlay').style.display = 'none';
    this.generateProjectCards();
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
        var mediaQuery = window.matchMedia('(max-width: 700px)');
        if (mediaQuery.matches)
        {
            document.querySelector('#burger').click();
        }
    } else if (socialMedia === 'projects') {
        // Show the modal
        modal.style.display = 'flex';
        var mediaQuery = window.matchMedia('(max-width: 700px)');
        if (mediaQuery.matches)
        {
            document.querySelector('#burger').click();
        }
        
    }
}
/**
 * 
 */
function generateProjectCards()
{
    const cardBar = document.getElementById('cardBar');
    
    // Clear existing content if any
    cardBar.innerHTML = '';
    
    // Loop through the projects array and create cards dynamically
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('box'); // Add the 'box' class to each card

        // Create language icon
        const languageIcon = document.createElement('div');
        languageIcon.innerHTML = project.language;
        
        // Create project title
        const title = document.createElement('h5');
        title.textContent = project.name;


        
        // Create project description
        const description = document.createElement('p');
        description.innerHTML = project.description + '<br><br>' + '<strong>Tools Used</strong>' + ": " + project.tools.join(", ");
        description.classList.add('desc')
        
        // Create link to project
        const link = document.createElement('a');
        link.href = project.link;
        link.target = "_blank";
        link.innerHTML = 'GitHub <i class="devicon-github-original"></i>';

        // Append elements to the card
        card.appendChild(languageIcon);
        
        const space = document.createElement('br');
        card.appendChild(space);
        
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        // Append the card to cardBar
        cardBar.appendChild(card);
    });
}
/**
 * This is a function that handles when user clicks on resume button
 * that will create a temporary link object to download the resume
 * then it gets removed.
 */
async function downloadResume() {
    const currentPath = window.location.pathname;
    console.log("Current location:", currentPath);
    // Construct the path to the resume file
    const url = '../documents/Asralov, Abror.pdf'; 
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'Asralov, Abror.pdf'; // You can change the filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error('Error downloading the file', error);
    }
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



