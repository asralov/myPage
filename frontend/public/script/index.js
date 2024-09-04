
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
const HEADER = "Hello fellows, glad seeing you on my page"
const AUTHOR = "I'm Abror, a student software developer"
const DESC = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non purus sit amet risus posuere egestas. Integer ut augue nec felis ultrices interdum. Nullam et fringilla nulla. Cras bibendum metus a eros feugiat, eget vehicula est gravida. Donec tincidunt, ligula vel lacinia luctus, metus dolor aliquet felis, a condimentum tortor velit eu odio. Morbi nec libero et arcu pharetra bibendum. Vivamus vitae est ac sapien vestibulum hendrerit id sed erat. Fusce vitae ligula convallis, viverra nulla et, lacinia libero."
this.document.getElementById('welcomeMessage').innerText = HEADER + '\n' + AUTHOR + '\n' + DESC;



function handleClick(socialMedia)
{
    if (links[socialMedia])
    {
        window.open(links[socialMedia], '_blank');
    }
    // else case we know we need to work on smaller windows for those showcasings
    
}
