let positionX = 0;
let positionY = 0;
let tempX = positionX;
let tempY = positionY;
document.getElementById('userPage').addEventListener("mousemove", function (e) {
  positionX = e.pageX;
  positionY = e.pageY;
})


setInterval(() => {
  if (positionY != tempY || positionX != tempX) {
    Draw();
    tempX = positionX;
    tempY = positionY;

  }



}, 500);

function Draw() {
  let Circle = document.createElement('div');
  Circle.classList.add('circle');
  document.body.appendChild(Circle);
  Circle.style.left = positionX + "px";
  Circle.style.top = positionY + "px";
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  Circle.style.backgroundColor = `rgb(${red},${green},${blue})`;
  setTimeout(() => {
    Circle.remove();
  }, 7000);
}
$(function () {
  $('.skitter-large').skitter({

  });
});


(function () {
  let userData = [];
  userData = JSON.parse(localStorage.getItem("User"));
  let skillsCartoona = "";
  for (let i = 0; i < userData[0].skills.length; i++) {
    skillsCartoona += ` <li>
      <h6 >${userData[0].skills[i]}</h6>
    </li>`
  }
  document.getElementById('userSkillsDesign').innerHTML = skillsCartoona;
  skillsCartoona = "";
  for (let i = 0; i < userData[0].hobbies.length; i++) {
    skillsCartoona += ` <li>
        <h6 >${userData[0].hobbies[i]}</h6>
      </li>`
  }
  document.getElementById('userEnterDesign').innerHTML = skillsCartoona;
  skillsCartoona = "";
  for (let i = 0; i < userData[0].activities.Physical.length; i++) {
    skillsCartoona += ` <li>
        <h6 >${userData[0].activities.Physical[i]}</h6>
      </li>`
  }
  for (let i = 0; i < userData[0].activities.Speech.length; i++) {
    skillsCartoona += ` <li>
        <h6 >${userData[0].activities.Speech[i]}</h6>
      </li>`
  }
  for (let i = 0; i < userData[0].activities.Visual.length; i++) {
    skillsCartoona += ` <li>
        <h6 >${userData[0].activities.Visual[i]}</h6>
      </li>`
  }
  document.getElementById('userActivitiesDesign').innerHTML = skillsCartoona;
  if (userData[0].pic == "none") {
    if (userData[0].gender == "Girl") {
      $('#userpicRetrive').attr("src", "images/girl.png")
    }

  } else {
    $('#userpicRetrive').attr('src',`${userData[0].pic}`)
  }
})()

///////////////////////////////////////                              animation function
$('.skitter').show(1000,function(){
  $('.user-toggle').animate({opacity:"1"},1000)
});
