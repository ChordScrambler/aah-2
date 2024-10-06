


function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    const menuButton = document.querySelector('.search-button');
    const menuButton2 = document.querySelector('.search-close');
    const menuButton3 = document.querySelector('.search-icon2');

        menuButton3.style.opacity = '1'
        menuButton3.style.scale = '1'    
        menuButton2.style.opacity = '1'
        menuButton2.style.scale = '1'
        menuButton.style.opacity = '0'
        menuButton.style.scale = '0'
        searchInput.style.opacity = '1';
        searchInput.style.scale = '1 1';
        searchInput.style.pointerEvents = 'all';
}


function searchDeSite() {
    const searchInput = document.getElementById('searchInput');
    const menuButton = document.querySelector('.search-button');
    const menuButton2 = document.querySelector('.search-close');
    const menuButton3 = document.querySelector('.search-icon2');

        menuButton3.style.opacity = '0'
        menuButton3.style.scale = '0'   
        menuButton.style.opacity = '1'
        menuButton.style.scale = '1'
        menuButton2.style.opacity = '0'
        menuButton2.style.scale = '0'
        searchInput.style.opacity = '0';
        searchInput.style.scale = '0 1';
        searchInput.style.pointerEvents = 'none';
}

function searchSite() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('#content section');

    let found = false;

    sections.forEach(section => {
        const sectionText = section.innerText.toLowerCase();
        
        if (sectionText.includes(searchTerm)) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            found = true;
            // Highlight the section (optional)
            section.style.backgroundColor = "#ffff99"; // Highlight with yellow
            setTimeout(() => {
                section.style.backgroundColor = ""; // Remove highlight after 2 seconds
            }, 2000);
        }
    });

    if (!found) {
        alert('No results found.');
    }
}
const menuExit = document.querySelector(".topbar");
const menuOpen = document.querySelector(".openMenu");

let t1 = gsap.timeline({paused: true });
let t2 = gsap.timeline({paused: true });
let t3 = gsap.timeline({paused: true });

t1.to(".menu1", { duration: .3, top: 0 });

t2.to(".answer", { duration: .3, opacity: 0 });

t3.to(".answer", { duration: .3, opacity: 0 });

menuOpen.addEventListener("click", () => {
    t1.play();
    t3.play();
});

menuExit.addEventListener("click", () => {
    t1.reverse();
    t2.restart();  // Restart t2 to allow it to play multiple times
});








// Placeholder texts for each h4

  // Placeholder texts for each h4
// Placeholder texts for each h4
const placeholderTexts = {
    'General Info': `
        <div class="general-info">
            <p>• Membership Requirements: Team members must be 9th – 12th graders (by age) in the fall of 2023 and reside in Travis or Williamson County. Students who participate in umbrella schools, charter schools, or cyber/virtual schools may not be eligible. (The competitions in which we compete have age/grade, residency, and other requirements for eligibility).</p>
            <p>• Meeting Time and Location: Fridays, 11:00-1:00 PM, from the end of August through the end of May. We do not meet on holidays or across the winter break. We meet at the Northwest Recreation Center, 2913 Northland Drive, near Mopac and RM 2222.</p>
            <p>• Meeting Format: Our standard meeting format includes opportunities for students to do presentations on science topics, practice for Science Bowl, and prepare for Science Olympiad. We may also have occasional guest speakers and/or field trips.</p>
            <p>• Meeting Etiquette: All participants, parents, and siblings are expected to abide by the rules of the Northwest Recreation Center, to clean up after meetings, and to behave in a civil, polite manner. Any participant who is disruptive, uncooperative, or unsportsmanlike will be asked to leave the team. A member may also be asked to leave the team if his/her family members are disruptive. During meetings, students and families should avoid congregating in the lobby of the Rec Center as it is distracting to Rec Center staff and patrons.</p>
            <p>• Drop­ Offs: Participants may be dropped off by their parents. However, parents must attend orientation at the beginning of the year and one designated informational meeting each month.</p>
            <p>• Siblings: Siblings of team members are welcome to attend meetings with parents. However, younger siblings typically do not participate or prepare for competitions. Young children must be supervised at all times and are encouraged to play outdoors as much as possible.</p>
        </div>
    `,
    'Awards': 'This section will provide information about the awards.',
    'Price/Dues':`
     <p>• Dues: Yearly membership dues are used to reimburse costs related to competitions, meeting facility fees, and insurance and are estimated to be $170 per student. There is no family discount for multiple students. Dues must be paid by the third ST meeting. </p>,
      <p>• Additional Team Expenses: Families will have to pay additional expenses for study aids, materials, building supplies, and travel (e.g., meals and hotels during competitions).  </p> `,
    'Dates': 'Important dates related to the event are listed here.',
    'Contact Us!': 'Feel free to contact us at the provided details: <a href="mailto:info@aahscienceteam.org">info@aahscienceteam.org</a>'
  };
  

  // Select all h4 elements in the sidebar
  const headings = document.querySelectorAll('.sidebar h4');

  // Add click event listeners to each h4 element
  headings.forEach(heading => {
    heading.addEventListener('click', function() {
      // Get the text content of the clicked h4
      const headingText = this.textContent;

      // Find the corresponding placeholder text
      const placeholderText = placeholderTexts[headingText];

      // Select the .answer div and update its content
      const answerDiv = document.querySelector('.answer');
      answerDiv.innerHTML = `<p>${placeholderText}</p>`;

      // Animate the .answer div with a fade-in effect using GSAP
      gsap.fromTo(answerDiv, 
        { opacity: 0, y: 20 },  // Starting values (hidden and slightly down)
        { opacity: 1, y: 0, duration: 1 }  // Ending values (visible and in place)
      );
    });
  });




  function copyText() {
    // Get the text from the h4 element
    var copyText = document.getElementById("contact").innerText;

    // Copy the text inside the h4 element
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the copied text
        alert("Copied the text: " + copyText);
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}