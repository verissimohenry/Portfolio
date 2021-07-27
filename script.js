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
    image: "Twitter-redesign-screenshot.png",
    description: "A social media website build with Ruby on Rails, where you can create and like tweets, follow people and see their tweets on your timeline.",
    live_link: "https://glacial-gorge-49167.herokuapp.com/",
    source_link: "https://github.com/verissimohenry/Twitter-redesign",
  },
  2: {
    title: "Stay-in-Touch",
    tags: ["Ruby on Rails", "PostgreSQL", "Bootstrap"],
    image: "Stay-in-Touch-screenshot.png",
    description:
      "Stay in touch project we are about to create a simple website where users can share posts and create relationship between then. the project is still in the development process.",
    live_link: "https://peaceful-stream-34920.herokuapp.com/",
    source_link: "https://github.com/verissimohenry/Stay-in-Touch",
  },
  3: {
    title: "Newsweek",
    tags: ["Font awesome icons", "Bootstrap", "HTML/CSS"],
    image: "Newsweek-screenshot.png",
    description:
      "Recreation of the Newsweek website.",
    live_link: "https://verissimohenry.github.io/Newsweek/",
    source_link: "https://github.com/verissimohenry/Newsweek",
  },
  4: {
    title: "VSMO Photography Conference",
    tags: ["HTML/CSS3", "Bootstrap"],
    image: "VSMO Photography Conference-screenshot.png",
    description:
      "The project is to build a Conference website and I decided to build one that applies to photography. It has three pages..",
    live_link: "",
    source_link: "https://github.com/verissimohenry/capstone-project",
  },
  5: {
    title: "Library-Appv1",
    tags: ["JavaScript", "Bootstrap", "HTML"],
    image: "Library-Appv1-screenshot.png",
    description:
      "In this project, we built a basic web-based library application using JavaScript. One can add books to the library, delete the books and mark the book as read. We use local storage to store the data from the user.",
    live_link: "",
    source_link: "https://github.com/verissimohenry/Library-Appv1",
  },
  6: {
    title: "to-do-list",
    tags: ["JavaScript", "HTML/CSS", "Webpack", "Bootstrap"],
    image: "to-do-list-screenshot.png",
    description:
      "A simple vanilla JavaScript country flag guessing game that uses Firebase to store high scores.",
    live_link: "",
    source_link: "https://github.com/verissimohenry/to-do-list",
  },
  7: {
    title: "",
    tags: [""],
    image: "-app.png",
    description:
      ".",
    live_link: "",
    source_link: "",
  },
  8: {
    title: "RestaurantPage",
    tags: ["JavaScript", "Webpack", "Bootstrap"],
    image: "todo-app-screenshot.JPG",
    description:
      "In this project, I built a basic restaurant page using JavaScript and webpack. All pages are build using DOM manipulations.",
    live_link: "",
    source_link: "https://github.com/verissimohenry/RestaurantPage",
  },
  9: {
    title: "",
    tags: ["JavaScript", "Bootstrap", "HTML/CSS"],
    image: "",
    description:
      "",
    live_link: "",
    source_link: "",
  },
};