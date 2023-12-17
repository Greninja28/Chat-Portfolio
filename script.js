let audio = new Audio("assets/jarvis_message_sent.mp3");

let contactString =
  "<div class='social'> <a href='mailto:jainsahej07@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Greninja28'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a href='https://www.linkedin.com/in/sahej-jain-175aa7217/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";

let resumeString =
  "<div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Sahej Jain Resume.pdf</label></div><a href='assets/Sahej Jain.pdf' download='SahejJainResume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

let addressString =
  "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0474582998504!2d72.85392077423924!3d19.236763346907843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d96bd8f475%3A0xabe501c9ec1d12ea!2sNakshatra%20Apartment!5e0!3m2!1sen!2sin!4v1702792432761!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>Mumbai, Maharashtra, INDIA 400092</address>";

function startFunction() {
  setLastSeen();
  waitAndResponce("intro");
}

function setLastSeen() {
  let date = new Date();
  let lastSeen = document.getElementById("lastseen");
  let hours = date.getHours();
  let minutes = date.getMinutes();
  lastSeen.innerText = "last seen today at " + (hours < 10 ? `0${hours}` : hours) + ":" + (minutes < 10 ? `0${minutes}` : minutes);
}

function closeFullDP() {
  let x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openFullScreenDP() {
  let x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isEnter(event) {
  if (event.keyCode == 13) {
    sendMsg();
  }
}

function sendMsg() {
  let input = document.getElementById("inputMSG");
  let ti = input.value;
  if (input.value == "") {
    return;
  }
  let date = new Date();
  let myLI = document.createElement("li");
  let myDiv = document.createElement("div");
  let greendiv = document.createElement("div");
  let dateLabel = document.createElement("label");
  let hours = date.getHours();
  let minutes = date.getMinutes();
  dateLabel.innerText = (hours < 10 ? `0${hours}` : hours) + ":" + (minutes < 10 ? `0${minutes}` : minutes);
  myDiv.setAttribute("class", "sent");
  greendiv.setAttribute("class", "green");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = input.value;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  let s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  setTimeout(function () {
    waitAndResponce(ti);
  }, 1500);
  input.value = "";
  playSound();
}

function waitAndResponce(inputText) {
  let lastSeen = document.getElementById("lastseen");
  lastSeen.innerText = "typing...";
  switch (inputText.toLowerCase().trim()) {
    case "intro":
      setTimeout(() => {
        sendTextMessage(
          "Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Sahej Jain😊</a>.</span><br><br>I am a  <span class='bold'>aspiring Software Engineer 💻</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere. 🚀<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>"
        );
      }, 2000);
      break;
    case "help":
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'experiences'</span> - to know my experiences<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'achievements'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>"
      );
      break;
    case "resume":
      sendTextMessage(resumeString);
      break;
    case "skills":
      sendTextMessage(
        "<span class='sk'>I am currently pursuing BE in Computer Engineering<br><br>I can comfortably write code in following languages :<br><span class='bold'>Javascript<br>C/C++<br>CSS<br>HTML<br>TypeScript<br>MongoDB<br></span><br>I've experiance with following frameworks :<span class='bold'><br>NodeJs<br>ReactJs<br>Bootstrap<br>TailwindCss<br>Material UI<br>Shadcn<br>ExpressJs</span><br><br>I have experience with <br><span class='bold'>Figma<br></span><br>Favourite IDE: <span class='bold'>VSCode</span></span>"
      );
      break;
    case "experiences":
      sendTextMessage(
        "<span class='sk'><span id='new'>👨‍💻Metavian Technologies | Frontend developer | Intern from September 2022 to Feb 2023👨‍💻</span><br><br> Build the company's main website page using HTML5, CSS3 and JS.Developed Home, About, Blog pages using HTML5, CSS3, JS.</span><br><br><span class='sk'><span id='new'>👨‍💻VENQ Technologies | MERN developer: Intern from May 2023 to July 2023👨‍💻</span><br><br>Developed the main page of a real estate website with email verification, user authentication and dashboard functionalities.Used the technologies: ReactJs, NodeJs, ExpressJs, MongoDB, Material UI, and Redux</span><br><br><span class='sk'><span id='new'>Vighnesh Simulations | MERN developer: Intern from November 2023👨‍💻</span><br><br>Developing a system for Universitites to automate the Enquiry, Admission and Fees process for smooth process. Currently using technologies: ReaactJs, Typescript, Shadcn</span>"
      );
      break;
    case "achievements":
      sendTextMessage(
        "I emerged victorious (Best Pitch) 🥇 in the esteemed <span class='bold' 'sk'>LOC 5.0</span> of 2023! 🎉✨ My team and I put our minds to work, solving complex challenge and crafting innovative solutions. 💪💡"
      );
      break;

    case "address":
      sendTextMessage(addressString);
      break;
    case "clear":
      sendTextMessage("Your visit is truly valued. Please, come again!")
      setTimeout(() => {
        clearChat();
      }, 2000)
      break;
    case "about":
      sendTextMessage(
        "🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.linkedin.com/in/sahej-jain-175aa7217/'><span class='bold'>Sahej Jain</a> with ❤️</span>"
      );
      break;
    case "contact":
      sendTextMessage(contactString);
      break;
    case "projects":
      sendTextMessage(
        "You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Greninja28'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>"
      );
      break;
    case "new":
      sendTextMessage(addressString);
      break;
    case "hello":
    case "hey":
      sendTextMessage("Hey, What's up! Ready to see what I'm all about?<br>Come on in and have a look!!<br>Type <b>'help'</b> to know more about me.")
      break;
    default:
      setTimeout(() => {
        sendTextMessage(
          "Hey I couldn't catch you...😢<br>Send 'help' to know more about usage."
        );
      }, 2000);
      break;
  }
}

function clearChat() {
  document.getElementById("listUL").innerHTML = "";
  waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
  setTimeout(setLastSeen, 1000);
  let date = new Date();
  let myLI = document.createElement("li");
  let myDiv = document.createElement("div");
  let greendiv = document.createElement("div");
  let dateLabel = document.createElement("label");
  dateLabel.setAttribute("id", "sentlabel");
  dateLabel.id = "sentlabel";
  let hours = date.getHours();
  let minutes = date.getMinutes();
  dateLabel.innerText = (hours < 10 ? `0${hours}` : hours) + ":" + (minutes < 10 ? `0${minutes}` : minutes);
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  greendiv.innerHTML = textToSend;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  let s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function sendResponse() {
  setTimeout(setLastSeen, 1000);
  let date = new Date();
  let myLI = document.createElement("li");
  let myDiv = document.createElement("div");
  let greendiv = document.createElement("div");
  let dateLabel = document.createElement("label");
  let hours = date.getHours();
  let minutes = date.getMinutes();
  dateLabel.innerText = (hours < 10 ? `0${hours}` : hours) + ":" + (minutes < 10 ? `0${minutes}` : minutes);
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  let s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function playSound() {
  audio.play();
}
