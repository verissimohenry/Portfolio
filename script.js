// Get the modal
var modal = document.getElementById("project-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    resetProjectData();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetProjectData();
    }
};

function launchModal(project) {
    // When the user clicks on the button, open the modal
    current_project = project;
    console.log(current_project);
    setProjectData(project_data[project]);
    modal.style.display = "block";
    AddRemoveArrows();
}

// Next/Prev project functionality
let current_project;
const changeProject = (arrow) => {
    resetProjectData();
    if (arrow == "prev") {
        setProjectData(project_data[current_project - 1]);
        current_project = current_project - 1;
    } else {
        setProjectData(project_data[current_project + 1]);
        current_project = current_project + 1;
    }
    AddRemoveArrows();
    console.log(current_project);
};
document.getElementById("arrow-prev").onclick = () => changeProject("prev");
document.getElementById("arrow-next").onclick = () => changeProject("next");

function AddRemoveArrows() {
    // Remove prev/next element for first or last project
    if (current_project == 1) {
        document.getElementById("arrow-prev").style.visibility = "hidden";
    } else {
        document.getElementById("arrow-prev").style.visibility = "visible";
    }
    if (current_project == 9) {
        document.getElementById("arrow-next").style.visibility = "hidden";
    } else {
        document.getElementById("arrow-next").style.visibility = "visible";
    }
}

function setProjectData(data) {
    // Set project title
    document.getElementById("project-title").innerHTML = data.title;
    insertTags(data.tags, document.getElementById("project-tags"));
    document.getElementById("project-image").src = "./assets/" + data.image;
    document.getElementById("project-description").innerHTML = data.description;
    assignLinks(data.live_link, data.source_link);
}

function insertTags(arr, target) {
    arr.forEach((el) => {
        target.innerHTML += '<span class="tag">' + el + "</span>";
    });
}

function resetProjectData() {
    document.getElementById("project-title").innerHTML = "";
    document.getElementById("project-tags").innerHTML = "";
    document.getElementById("project-image").src = "";
    document.getElementById("project-description").innerHTML = "";
    document.getElementById("project-links").innerHTML = "";
}

function assignLinks(live_link, source_link) {
    let links = [];
    if (live_link != "") {
        links.push(
            '<span class="link-with-icon"><a href="' +
            live_link +
            '" target="_blank" id="project-live-link">See live<i class="fas fa-external-link-alt"></i></a></span>'
        );
    }
    if (source_link != "") {
        links.push(
            '<span class="link-with-icon"><a href="' +
            source_link +
            '" target="_blank" id="project-source-link">Check source<i class="fab fa-github-square"></i></a></span>'
        );
    }
    links.forEach((el) => {
        document.getElementById("project-links").innerHTML += el;
    });
}

function sendEmail() {
    let subject =
        "Portfolio Contact Form Email from " +
        document.getElementById("name").value +
        " (email: " +
        document.getElementById("email").value +
        ")";
    let body = document.getElementById("body").value;
    window.open(
        "mailto:zil.norvilis@gmail.com" + "?subject=" + subject + "&body=" + body,
        "Sending email",
        "width = 200, height = 200"
    );
}

let project_data = {
    1: {
        title: "Twitter-redesign",
        tags: ["Ruby on Rails", "Bootstrap", "Active Record", "Rspec gem"],
        image: "Twitter-redesign.png",
        description: "A social media website build with Ruby on Rails, where you can create and like tweets, follow people and see their tweets on your timeline.",
        live_link: "https://glacial-gorge-49167.herokuapp.com/",
        source_link: "https://github.com/verissimohenry/Twitter-redesign",
    },
    2: {
        title: "Stay-in-Touch",
        tags: ["Ruby on Rails", "PostgreSQL", "Bootstrap"],
        image: "stayintouch.png",
        description: "Stay in touch project we are about to create a simple website where users can share posts and create relationship between then. the project is still in the development process.",
        live_link: "https://peaceful-stream-34920.herokuapp.com/",
        source_link: "https://github.com/verissimohenry/Stay-in-Touch",
    },
    3: {
        title: "Newsweek",
        tags: ["Font awesome icons", "Bootstrap", "HTML/CSS"],
        image: "Newsweek.png",
        description: "Recreation of the Newsweek website.",
        live_link: "https://verissimohenry.github.io/Newsweek/",
        source_link: "https://github.com/verissimohenry/Newsweek",
    },
    4: {
        title: "Shooter-game",
        tags: ["JavaScript", "Bootstrap", "HTML/CSS"],
        image: "Shooter-game.png",
        description: "This is a never-ending game. User faces different alien ships at random times. User uses laser (Space) to shoot and explode enemy ships. Every different enemy ship shot adds a differnet point to the user's score. When the user's ship is shot by an enemy laser, or an enemy ship touches the user's ship, the game ends. The user can restart the game. Also, users' high scores are stored in an API, and users can display the highest ten scores in the scoreboard scene.",
        live_link: "https://hungry-hopper-15f02b.netlify.app/https://hungry-hopper-15f02b.netlify.app/",
        source_link: "https://github.com/verissimohenry/Shooter-game/tree/Shooter-game",
    },
    5: {
        title: "New-York-Time",
        tags: ["Bootstrap", "HTML/CSS"],
        image: "newyork.png",
        description: "New York Times Article Clone, Displaying the use of FlexBox, Grid etc. It is a responsive website and can be viewed live at visit the siteThis project is a replicate version of a New York Times article using HTML/CSS.",
        live_link: "https://verissimohenry.github.io/newyorktime/",
        source_link: "https://github.com/verissimohenry/newyorktime",
    },
    6: {
        title: "to-do-list",
        tags: ["JavaScript", "HTML/CSS", "Webpack", "Bootstrap"],
        image: "todo.png",
        description: "A simple Todo app where a user can: Create Projects ,Create Todos for each project, Edit Todos Remove Projects or Todos.",
        live_link: "https://practical-leavitt-55a2fc.netlify.app/",
        source_link: "https://github.com/verissimohenry/to-do-list",
    },
    7: {
        title: "WeatherApp",
        tags: ["JavaScript", "Webpack", "API", "Html", "Bootstrap"],
        image: "image1.png",
        description: "In this project, I built a basic weather application using JavaScript, Webpack and API. You can write the name of the city and click on search, to get all the weather information about the city.",
        live_link: "https://youthful-swirles-73a081.netlify.app/",
        source_link: "https://github.com/verissimohenry/WeatherApp",
    },
    8: {
        title: "RestaurantPage",
        tags: ["JavaScript", "Webpack", "Bootstrap"],
        image: "rest.png",
        description: "In this project, I built a basic restaurant page using JavaScript and webpack. All pages are build using DOM manipulations.",
        live_link: "https://keen-dijkstra-7b7370.netlify.app/",
        source_link: "https://github.com/verissimohenry/RestaurantPage",
    },
    9: {
        title: "VSMO Photography Conference",
        tags: ["HTML/CSS3", "Bootstrap"],
        image: "VSMO Photography Conference Page.png",
        description: "The project is to build a Conference website and I decided to build one that applies to photography. It has three pages..",
        live_link: "https://verissimohenry.github.io/capstone-project/",
        source_link: "https://github.com/verissimohenry/capstone-project",
    },
};
