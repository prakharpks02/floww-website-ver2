const Teammembers = [
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Anish Profile.jpg",
        name: "Anish",
        role: "Co-Founder<br>",
        emailLink: "mailto:anish@gofloww.co",
        linkedinLink: "https://www.linkedin.com/in/anish509/",
        igLink: "#",
        fbinLink: "#",
    },
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Prakhar Profile.jpg",
        name: "Prakhar",
        role: "Co-Founder<br>",
        emailLink: "mailto:prakhar@gofloww.co",
        linkedinLink: "https://www.linkedin.com/in/prakharpks02/",
        igLink: "#",
        fbinLink: "#",
    },
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Sandeep Sir Profile.jpg",
        name: "Prof. Sandeep Kumar",
        role: "Mentor<br><span style='color:grey'>IIT Bombay Professor<span>",
        emailLink: "mailto:sandeep@gofloww.co",
        linkedinLink: "#",
        igLink: "#",
        fbinLink: "#",
    },
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Ashirwaad Sir Profile.jpg",
        name: "Mr. Ashirwad Tillu",
        role: "Mentor<br><span style='color:grey'>VP Reliance Jio<span>",
        emailLink: "mailto:ashirwad@gofloww.co",
        linkedinLink: "#",
        igLink: "#",
        fbinLink: "#",
    },
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Love Sir Profile.jpg",
        name: "Dr. Love Sarin",
        role: "Mentor<br><span style='color:grey'>IIT Bombay Alumni<span>",
        emailLink: "mailto:love@gofloww.co",
        linkedinLink: "#",
        igLink: "#",
        fbinLink: "#",
    },
    // {
    //     profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Snehal Profile.jpg",
    //     name: "Snehal",
    //     role: "Marketing, Bengaluru<br>",
    //     emailLink: "mailto:snehal.p@gofloww.co",
    //     linkedinLink: "#",
    //     igLink: "#",
    //     fbinLink: "#",
    // },
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Sumon Profile.jpg",
        name: "Sumon",
        role: "Operations, Guwahati<br>",
        emailLink: "mailto:sumon.b@gofloww.co",
        linkedinLink: "#",
        igLink: "#",
        fbinLink: "#",
    },
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Abhishek Profile.jpg",
        name: "Abhishek",
        role: "Frontend, Pune<br>",
        emailLink: "mailto:abhishek.u@gofloww.co",
        linkedinLink: "#",
        igLink: "#",
        fbinLink: "#",
    },
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Adesh Profile.jpg",
        name: "Adesh",
        role: "Flutter, Pune<br>",
        emailLink: "mailto:adesh.m@gofloww.co",
        linkedinLink: "#",
        igLink: "#",
        fbinLink: "#",
    },
    {
        profileLink: "https://floww0.blob.core.windows.net/websitegraphics/website/floww/profile/Prakhar G Profile.jpeg",
        name: "Prakhar G.",
        role: "Flutter, Pune<br>",
        emailLink: "mailto:prakhar.g@gofloww.co",
        linkedinLink: "#",
        igLink: "#",
        fbinLink: "#",
    },
];
let currentIndex = 0;
let boxes = 4;
let activeResize = false;

function flowwCustom_handleNext() {
    currentIndex = (currentIndex + 1) % Teammembers.length;
    flowwCustom_displayDivs(boxes, "next");
}

function flowwCustom_handlePrevious() {
    currentIndex = (currentIndex - 1 + Teammembers.length) % Teammembers.length;
    flowwCustom_displayDivs(boxes, "prev");
}

function flowwCustom_updateBoxesBasedOnScreenSize() {
    const desktopBreakpoint = 1200;
    const tabletBreakpoint = 992;
    const mobileLandscapeBreakpoint = 576;
    const mobilePortraitBreakpoint = 0;

    let screenWidth = window.innerWidth;

    if (screenWidth > desktopBreakpoint && !activeResize) {
        boxes = 4; // Value for desktop screens
        flowwCustom_displayDivs(boxes, "4.0");
        activeResize = true;
    } else if (screenWidth > desktopBreakpoint && boxes !== 4) {
        boxes = 4; // Value for tablet screens
        flowwCustom_displayDivs(boxes, "4.1");
    } else if (screenWidth < desktopBreakpoint && screenWidth > tabletBreakpoint && boxes !== 3) {
        boxes = 3; // Value for tablet screens
        flowwCustom_displayDivs(boxes, "3");
    } else if (screenWidth < tabletBreakpoint && screenWidth > mobileLandscapeBreakpoint && boxes !== 2) {
        boxes = 2; // Value for mobile landscape screens
        flowwCustom_displayDivs(boxes, "2");
    } else if (screenWidth < mobileLandscapeBreakpoint && screenWidth > mobilePortraitBreakpoint && boxes !== 1) {
        boxes = 1; // Value for mobile portrait screens
        flowwCustom_displayDivs(boxes, "1");
    }
}

function flowwCustom_displayDivs(boxes, num) {
    console.log("display", num);
    let container = document.getElementById("floww-custom-container");
    container.innerHTML = ""; // Clear previous divs

    for (let i = currentIndex; i < currentIndex + boxes; i++) {
        let index = i % Teammembers.length;
        let imageLink = Teammembers[index];
        let div = document.createElement("div");
        div.classList.add("floww-custom-div-item");
        div.innerHTML = `
      <div class="floww-aboutus-profilediv">
        <img src="${Teammembers[index].profileLink}" alt="image${index + 1}" />
      </div>
      <div class="floww-aboutus-aboutdiv">
        <h2>${Teammembers[index].name}</h2>
        <h3>${Teammembers[index].role}</h3>
      </div>
      <div class="floww-aboutus-sociallinkdiv">
        <a href="${Teammembers[index].emailLink}" target="_blank">
          <img src="img/website/email.svg" class="floww-aboutus-socialdiv-image floww-aboutus-email" alt="Floww Team" />
        </a>
        <a href="${Teammembers[index].linkedinLink}" target="_blank">
          <img src="img/website/white-linkedin.svg" class="floww-aboutus-socialdiv-image floww-aboutus-ld" alt="Floww Team" />   
        </a>
      </div>
      `;
        container.appendChild(div);
    }
}

//<a href="${Teammembers[index].fbinLink}" target="_blank">
//<img src="img/website/white-facebook.svg" class="floww-aboutus-socialdiv-image floww-aboutus-fb" alt="Floww Team" />
//</a>
//<a href="${Teammembers[index].igLink}" target="_blank">
//  <img src="img/website/white-instagram.svg" class="floww-aboutus-socialdiv-image floww-aboutus-ig" alt="Floww Team" />
//</a>

// Initial display
if (boxes == 4 && !activeResize) {
    flowwCustom_updateBoxesBasedOnScreenSize();
}

// Add resize event listener
window.addEventListener("resize", flowwCustom_updateBoxesBasedOnScreenSize);