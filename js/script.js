class Parent {
    constructor(name = "none", email = "none", number = "none", relation = "none", status = "none",) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.relation = relation;
        this.status = status;
    }

};
class User {
    constructor(name = "none", password = "none", userName = "none", age = "none", skills = [], abilities = [{ "Running": "none", "Writing": "none" }], pic = "none", gender = "none", hobbies = [], activities = [{ "Physical": [], "Speech": [], "Visual": [] }], Institution = "true", InstitutionName = "none", level = "1", IQScore = "0", PrivateSessions = "true", HowManyTimesAWeek = "0", IQFile = "none") {
        this.name = name;
        this.userName = userName;
        this.age = age;
        this.skills = skills;
        this.abilities = abilities;
        this.pic = pic;
        this.gender = gender;
        this.hobbies = hobbies;
        this.activities = activities;
        this.password = password;
        this.Institution = Institution;
        this.InstitutionName = InstitutionName;
        this.level = level;
        this.PrivateSessions = PrivateSessions;
        this.HowManyTimesAWeek = HowManyTimesAWeek;
        this.IQScore = IQScore;
        this.IQFile = IQFile;

    }
}
var IQInput = "";
var user = new User();
let fatherAndMatherData = [];
let fatherOrMather = "";
let navHeader = document.getElementById("navHeader");
let RegisterFormDesign = [];
let ParentData = [];
let RegisterForm = document.getElementById('RegisterForm');
let LastSlid = document.getElementById('LastSlid');
let NextSlid = document.getElementById('NextSlid');

let counters = document.querySelectorAll('.counter');
/////////////////////animation  functions///////////////////////
function navBar() {
    
    navbarSupportedContent.classList.toggle('nav-color-change', window.scrollY == 0);

}
function aboutScroll() {
    $("#About-Cap").slideDown(1000, function () {
        $("#About .col-lg-7").animate({ opacity: "1" }, 1000);
        $("#About .col-lg-5").animate({ opacity: "1" }, 1500);
    });

}
function teamScroll() {
    $("#Team-Cap").fadeIn(1000, function () {
        $("#Team .col-lg-3").show(1000, function () {
            $("#Team .col-md-5").show(1000, function () {
                $("#Team .btn").show(1000);

            });
        });

    });
}
function contactScroll() {
    $("#contact-Cap").slideDown(1000, function () {
        $("#Contact .row").animate({ opacity: "1" }, 1000);

    });


}

$("a").click(function () {
    let aHref = $(this).attr("href");
    let offsetHref = $(aHref).offset().top;
    // console.log(aHref);
    $("body,html").animate({ scrollTop: offsetHref }, 1000)
});
window.addEventListener("scroll", function () {
    navHeader.classList.toggle('scrolling-active', window.scrollY > 0);
    let scroll = this.scrollY;
    if (scroll > 85) {
        aboutScroll();
    }
    if (scroll > 800) {
        counters.forEach(counter => {
            const ubdateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target * .01;
                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(ubdateCounter, 50);

                } else {
                    count.innerText = target;
                }

            }
            ubdateCounter();
        });
    }
    if (scroll > 1076) {
        teamScroll();
    }
    if (scroll > 2580) {
        contactScroll();
    }
})
RegisterFormDesign[0] = `
<div id="addOtherParent">
<button class="btn btn-outline-primary" onclick="nextFormSlid(6)"><i class="fas fa-plus "></i></button>
</div>

<h2 class="mb-5 mt-4 font-weight-bold">parent Registeration Form</h2>
<input id="ParentName" class="w-100 form-control mb-2 " type="text" placeholder="Name">

<input id="ParentEmail" class="w-100 form-control mb-2" type="email" placeholder="E-Mail">

<input id="ParentNumber" class="w-100 form-control mb-2" type="number" placeholder="number">

<div class="w-100 d-flex justify-content-between ">

<select class="col-5 form-control" name="Relation" id="Relation">
    <option value="father">
        Father
    </option>
    <option value="mather">
        Mother
    </option>
</select>

<select class="col-5 form-control" name="Status" id="Status">

    <option value="Married">
        Married
    </option>
    <option value="Single">
        Single
    </option>

    <option value="Divorced">
        Divorced
    </option>
    <option value="Widow">
        Widow
    </option>
</select>
</div>
<button id="NextSlid" class="btn btn-outline-primary w-100 my-4 "
onclick="nextFormSlid(9)">Next</button>
`;
RegisterFormDesign[1] = `

<h2 class="mb-5 mt-4 font-weight-bold">User Information</h2>
                <h3>Skills</h3>


                <div class="row w-100 mb-2">
                    <div class="col-4">
                        <div class="btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-outline-light ">
                                <input class="Checkbox" type="checkbox" name="skills" value="read1" > read1
                            </label>
                        </div>
                
                    </div>
                    <div class="col-4">
                        <div class="btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-outline-light ">
                                <input class="Checkbox" type="checkbox" name="skills" value="read2" > read2
                            </label>
                        </div>
                
                    </div>
                    <div class="col-4">
                        <div class="btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-outline-light ">
                                <input class="Checkbox" type="checkbox" name="skills" value="read3"  > read3
                            </label>
                        </div>
                
                    </div>
                
                </div>
                
                <div class="row w-100 mb-2">
                    <div class="col-4">
                        <div class="btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-outline-light ">
                                <input class="Checkbox" type="checkbox" name="skills" value="read4" > read4
                            </label>
                        </div>
                
                    </div>
                    <div class="col-4">
                        <div class="btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-outline-light ">
                                <input class="Checkbox" type="checkbox" name="skills" value="read5" >read5
                            </label>
                        </div>
                
                    </div>
                    <div class="col-4">
                        <div class="btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-outline-light ">
                                <input class="Checkbox" type="checkbox" name="skills" value="read6" > read6
                            </label>
                        </div>
                
                    </div>
                
                </div>


               
            

                <h3 class="my-4">Abilities</h3>
                <div class="row  w-100 justify-content-start align-items-center">
                    <div class="col-4">
                        <h4>Running</h4>
                    </div>
                    <div class="col-7 d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-center align-items-center ">
                            1
                            <input class="mx-1 Run" type="radio" name="Run"  value="1">
                        </div>
                        <div class="d-flex justify-content-center align-items-center ">
                            2
                            <input class="mx-1 Run" type="radio" name="Run"  value="2">
                        </div>
                        <div class="d-flex justify-content-center align-items-center ">
                            3
                            <input class="mx-1 Run" type="radio" name="Run"  value="3">
                        </div>
                        <div class="d-flex justify-content-center align-items-center ">
                            4
                            <input class="mx-1 Run" type="radio" name="Run"  value="4">
                        </div>
                        <div class="d-flex justify-content-center align-items-center ">
                            5
                            <input class="mx-1 Run" type="radio" name="Run"  value="5">
                        </div>
                    </div>

                </div>
                <div class="row  w-100 justify-content-start align-items-center">
                    <div class="col-4">
                        <h4>Writting</h4>
                    </div>
                    <div class="col-7 d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-center align-items-center ">
                            1
                            <input class="mx-1 Write" type="radio" name="Write"  value="1">
                        </div>
                        <div class="d-flex justify-content-center align-items-center ">
                            2
                            <input class="mx-1 Write" type="radio" name="Write"  value="2">
                        </div>
                        <div class="d-flex justify-content-center align-items-center ">
                            3
                            <input class="mx-1 Write" type="radio" name="Write"  value="3">
                        </div>
                        <div class="d-flex justify-content-center align-items-center ">
                            4
                            <input class="mx-1 Write" type="radio" name="Write"  value="4">
                        </div>
                        <div class="d-flex justify-content-center align-items-center ">
                            5
                            <input class="mx-1 Write" type="radio" name="Write"  value="5">
                        </div>
                    </div>

                </div>
                <div class="row w-100 justify-content-between">
                    <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
                        onclick="lastFormSlid(9)">Back</button>
                    <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
                        onclick="nextFormSlid(2)">Next</button>

                </div>

`;
RegisterFormDesign[2] = `

<h2 class="mb-5 mt-4 font-weight-bold">User Information</h2>
<div class="row justify-content-center align-items-center ">
   
     <div class="col-6  mb-5 d-flex justify-content-around flex-column">
         <input  id="UserName" class="form-control mb-3 " type="text" placeholder="Name">
         <input id="UserAge" class="form-control mt-3" type="number" placeholder="Age">
     </div>
     <div class="col-6 d-flex align-items-center justify-content-center flex-column " >
         <div class=" border border-light rounded p-1 mb-3">
             <img id="userPic" src="images/user.png"  alt="user image" class="rounded" style="height: 9rem; width: 9rem;">
         </div>
        <div class="">
         <input id="file" type="file" name="userImage" accept="image/*" onchange="retrivePic(event)" class="d-none" >
         <div class="btn btn-light mb-4" onclick="uploadPic()">Upload Picture</div>
        </div>
        
     </div>
     <div class="row w-100 justify-content-between">
         <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
             onclick="lastFormSlid(1)">Back</button>
         <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
             onclick="nextFormSlid(8)">Next</button>
     
     </div>
     
 </div>
`;
RegisterFormDesign[3] = `
<h2 class="mb-5 mt-4 font-weight-bold">User Gender</h2>
<div class="row  w-100 justify-content-center align-items-center ">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-outline-light mx-1">
            <input type="radio" name="userGender" class="userGender" value="Boy"> <img src="images/boy.png" alt="Boy"
                class="w-100">
        </label>
        <label class="btn btn-outline-light mx-1">
            <input type="radio" name="userGender" class="userGender" value="Girl" > <img src="images/girl.png" class="w-100"
                alt="Girl">
        </label>

    </div>
    <div class="row w-100 justify-content-between">
        <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
            onclick="lastFormSlid(8)">Back</button>
        <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
            onclick="nextFormSlid(4)">Next</button>

    </div>

</div>

`;
RegisterFormDesign[4] = `
<h2 class="mb-5 mt-4 font-weight-bold">Hobbies</h2>
<div class="row w-100 mb-2">
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="football" type="checkbox" > <img src="images/football-ball.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="basketball" type="checkbox" > <img src="images/basketball.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="running" type="checkbox" > <img src="images/running.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>

</div>

<div class="row w-100 mb-2">
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="cooking" type="checkbox" > <img src="images/cooking.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="painting" type="checkbox" > <img src="images/paint.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="cartoon" type="checkbox" > <img src="images/michaelangelo.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>

</div>



<div class="row w-100 mb-2">
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="singing" type="checkbox" > <img src="images/singer.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="game" type="checkbox" > <img src="images/gamepad.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>
    <div class="col-4">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="music" type="checkbox" > <img src="images/musical-notes.png" alt="football pic"
                    class="img-fluid">
            </label>
        </div>

    </div>

</div>


<div class="row w-100 justify-content-between">
    <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
        onclick="lastFormSlid(3)">Back</button>
    <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
        onclick="nextFormSlid(5)">Next</button>

</div>
`;
RegisterFormDesign[5] = `
<h2 class="mb-5 mt-3 font-weight-bold">Activities</h2>
<h3 class="mb-4">Physical</h3>
<div class="row w-100 mb-2">
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Physical1" type="checkbox" class="Physical" > Physical1
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Physical2" type="checkbox" class="Physical"> Physical2
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Physical3" type="checkbox" class="Physical"> Physical3
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Physical4" type="checkbox" class="Physical"> Physical4
            </label>
        </div>

    </div>

</div>
<h3 class="my-4">Speech</h3>
<div class="row w-100 mb-2">
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Speech1" type="checkbox" class="Speech"> Speech1
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Speech2" type="checkbox" class="Speech"> Speech2
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Speech3" type="checkbox" class="Speech"> Speech3
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Speech4" type="checkbox" class="Speech"> Speech4
            </label>
        </div>

    </div>

</div>
<h3 class="my-4">Visual</h3>
<div class="row w-100 mb-2">
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Visual1" type="checkbox" class="Visual"> Visual1
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Visual2" type="checkbox" class="Visual"> Visual2
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Visual3" type="checkbox" class="Visual"> Visual3
            </label>
        </div>

    </div>
    <div class="col-3">
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-light ">
                <input value="Visual4" type="checkbox" class="Visual"> Visual4
            </label>
        </div>

    </div>

</div>
<div class="row w-100 justify-content-between">
    <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
        onclick="lastFormSlid(4)">Back</button>
    <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
        onclick="Submit()">Submit</button>

</div>
`;

RegisterFormDesign[6] = `
<h2 class="mb-5 mt-4 font-weight-bold"> Registeration Form</h2>
<input id="ParentName" class="w-100 form-control mb-2 " type="text" placeholder="Name">

<input id="ParentEmail" class="w-100 form-control mb-2" type="email" placeholder="E-Mail">

<input id="ParentNumber" class="w-100 form-control mb-2" type="number" placeholder="number">

<div class="w-100 d-flex justify-content-between ">
<select class="col-5 form-control" name="Relation" id="Relation">
    <option value="father">
        
    </option>
   
</select>
<select class="col-5 form-control" name="Status" id="Status">

    <option value="Married">
        Married
    </option>
    <option value="Single">
        Single
    </option>

    <option value="Divorced">
        Divorced
    </option>
    <option value="Widow">
        Widow
    </option>
</select>
</div>
<div class="row w-100 justify-content-between">
    <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
        onclick="lastFormSlid(0)">Back</button>
    <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
    onclick="nextFormSlid(9)">Next</button>

</div>
`;
RegisterFormDesign[8] = `
<h2 class="mb-5 mt-4 font-weight-bold">User Information</h2>
<input id="UsernameLogIn" class="w-100 form-control mb-2 " type="text" placeholder="Username">
<input id="userPassword" class="w-100 form-control mb-2" type="password" placeholder="Password">
<input id="userPasswordConfirm" class="w-100 form-control mb-2" type="password" placeholder="Confirm password">
<div class="row w-100 justify-content-between">
    <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
        onclick="lastFormSlid(2)">Back</button>
    <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
        onclick="nextFormSlid(3)">Next</button>

</div>
`;
RegisterFormDesign[9] = `
<h2 class="mb-5 mt-4 font-weight-bold">User Information</h2>
                <div class="row align-items-center justify-content-center w-100">
                    <div class="row justify-content-center align-items-center mb-2  w-100 ">
                        <h3 class="mr-3">In an Institution</h3>

                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-outline-light mr-1 rounded ">
                                <input class="in-a-institution" type="radio" name="Institution" value="True"> T
                            </label>
                            <label class="btn btn-outline-light rounded ">
                                <input class="in-a-institution" type="radio" name="Institution" value="False"> F
                            </label>
                        </div>


                    </div>
                    <div class="row w-100  d-flex justify-content-between align-items-center ">
                        <div class="col-6 p-0 pr-1">
                            <input  class="form-control name-of-institution" type="text" placeholder="Name of institution">
                        </div>
                        <div class="col-6 p-0 pl-1">
                            <select id="level" name="institutionLevel" class="w-100 form-control">
                                <option value="1">Level:1</option>
                                <option value="2">Level:2</option>
                                <option value="3">Level:3</option>
                                <option value="4">Level:4</option>
                                <option value="5">Level:5</option>
                                <option value="more">more</option>

                            </select>

                        </div>

                    </div>
                    <div class="row w-100 mt-2">
                        <div class="col-6">
                            <div class="row w-100 justify-content-start align-items-center">
                                <h3 class="pr-3">Private Sessions</h3>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-light mr-1 rounded">
                                        <input class="private-sessions" type="radio" name="private" value="True"> T
                                    </label>
                                    <label class="btn btn-outline-light rounded">
                                        <input class="private-sessions" type="radio" name="private" value="False"> F
                                    </label>
                                </div>

                            </div>

                        </div>
                        <div class="col-6 p-0 pl-1">
                            <input class="form-control times" type="number" placeholder="How many times a week">
                        </div>
                    </div>
                    <div class="row w-100 mt-2">
                        <div class="col-6 p-0 pr-1">
                            <input class="form-control Score" type="number" placeholder="IQ Score">
                        </div>
                        <div class="col-6 p-0 pl-1">
                            <input id="IQFile" type="file" name="IQFile" accept=".pdf,.doc" onchange="confirmIQ(this)"
                                class="d-none">
                            <div id="IQBtn" class="btn btn-light w-100" onclick="uploadIQ()">Upload Certificate</div>
                        </div>

                    </div>

                </div>
                <div class="row w-100  d-flex align-items-center justify-content-center">
                    <div class="col-6 d-flex justify-content-start p-0">
                        <button id="LastSlid" class="btn btn-outline-danger col-10  my-4 "
                            onclick="lastFormSlid(0)">Back</button>
                    </div>
                    <div class="col-6  d-flex justify-content-end p-0">
                        <button id="NextSlid" class="btn btn-outline-primary my-4 col-10"
                            onclick="nextFormSlid(1)">Next</button>
                    </div>

                </div>
`;
(function () {
    document.getElementById('RegisterForm').innerHTML = RegisterFormDesign[0];
})();

function nextFormSlid(index) {

    if (fristSlideCheck(index)) {
        saveData(index);
        document.getElementById('RegisterForm').innerHTML = RegisterFormDesign[index];
    } else {
        console.log('sfdfsd')
    }
}
function lastFormSlid(index) {
    document.getElementById('RegisterForm').innerHTML = RegisterFormDesign[index];
    WriteData(index);
}

function saveData(index) {
    if (index == 9 || index == 6) {
        if (Relation.value == "father") {
            let father = new Parent(ParentName.value, ParentEmail.value, ParentNumber.value, Relation.value, Status.value,);
            fatherAndMatherData.push(father);

            RegisterFormDesign[6] = `
            <h2 class="mb-5 mt-4 font-weight-bold"> Mother Registeration Form</h2>
            <input id="ParentName" class="w-100 form-control mb-2 " type="text" placeholder="Name">
            
            <input id="ParentEmail" class="w-100 form-control mb-2" type="email" placeholder="E-Mail">
            
            <input id="ParentNumber" class="w-100 form-control mb-2" type="number" placeholder="number">
            
            <div class="w-100 d-flex justify-content-between ">
            <select class="col-5 form-control" name="Relation" id="Relation">
                <option value="mather">
                    Mother
                </option>
               
            </select>
            <select class="col-5 form-control" name="Status" id="Status">
            
                <option value="Married">
                    Married
                </option>
                <option value="Single">
                    Single
                </option>
            
                <option value="Divorced">
                    Divorced
                </option>
                <option value="Widow">
                    Widow
                </option>
            </select>
            </div>
            <div class="row w-100 justify-content-between">
                <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
                    onclick="lastFormSlid(0)">Back</button>
                <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
                onclick="nextFormSlid(9,'mather')">Next</button>
            
            </div>
            `;


            console.log(fatherAndMatherData);
        } else if (Relation.value == "mather") {
            let mather = new Parent(ParentName.value, ParentEmail.value, ParentNumber.value, Relation.value, Status.value,);
            fatherAndMatherData.push(mather);
            RegisterFormDesign[6] = `
            <h2 class="mb-5 mt-4 font-weight-bold"> Father Registeration Form</h2>
            <input id="ParentName" class="w-100 form-control mb-2 " type="text" placeholder="Name">
            
            <input id="ParentEmail" class="w-100 form-control mb-2" type="email" placeholder="E-Mail">
            
            <input id="ParentNumber" class="w-100 form-control mb-2" type="number" placeholder="number">
            
            <div class="w-100 d-flex justify-content-between ">
            <select class="col-5 form-control" name="Relation" id="Relation">
                <option value="father">
                    Father
                </option>
               
            </select>
            <select class="col-5 form-control" name="Status" id="Status">
            
                <option value="Married">
                    Married
                </option>
                <option value="Single">
                    Single
                </option>
            
                <option value="Divorced">
                    Divorced
                </option>
                <option value="Widow">
                    Widow
                </option>
            </select>
            </div>
            <div class="row w-100 justify-content-between">
                <button id="LastSlid" class="btn btn-outline-danger col-5 my-4 "
                    onclick="lastFormSlid(0)">Back</button>
                <button id="NextSlid" class="btn btn-outline-primary col-5 my-4 "
                onclick="nextFormSlid(9,'mather')">Next</button>
            
            </div>
            `;
            console.log(fatherAndMatherData);
        } else {
            console.log("fuk lenda");
        }

    } else if (index == 2) {
        let userSkills = [];
        let userAbilities = { Running: "0", Writing: "0" }
        $(':checkbox:checked').each(function (i) {
            userSkills[i] = $(this).val();
        });
        user.skills = userSkills;
        $('.Run:checked').each(function (i) {
            userAbilities.Running = `${$(this).val()}`;
        });
        $('.Write:checked').each(function (i) {
            userAbilities.Writing = `${$(this).val()}`;

        });
        user.abilities = userAbilities;
        console.log(user);
    } else if (index == 3) {
        user.password = userPassword.value;
        user.userName = UsernameLogIn.value;
    }
    else if (index == 8) {
        user.name = UserName.value;
        user.age = UserAge.value;
        console.log(user);
    } else if (index == 5) {
        let userHobbies = [];
        $(':checkbox:checked').each(function (i) {
            userHobbies[i] = $(this).val();
        });
        user.hobbies = userHobbies;
        console.log(user);


    }




}
function fristSlideCheck(index) {
    let check = true;

    if (index == 9 || index == 6) {
        let ParentName = document.getElementById('ParentName');
        let ParentEmail = document.getElementById('ParentEmail');
        let ParentNumber = document.getElementById('ParentNumber');
        let Relation = document.getElementById('Relation');
        let Status = document.getElementById('Status');
        if (ParentName.value == "" || ParentEmail.value == "" || ParentNumber.value == "") {
            if (ParentName.value == "") {
                ParentName.style.border = "1px solid red";
                ParentName.style.backgroundColor = "transparent";
            } else {
                ParentName.style.border = "none";
                ParentName.style.backgroundColor = "#FFF";
            }
            if (ParentEmail.value == "") {
                ParentEmail.style.border = "1px solid red";
                ParentEmail.style.backgroundColor = "transparent";
            } else {
                ParentEmail.style.border = "none";
                ParentEmail.style.backgroundColor = "#FFF";
            }
            if (ParentNumber.value == "") {
                ParentNumber.style.border = "1px solid red";
                ParentNumber.style.backgroundColor = "transparent";
            } else {
                ParentNumber.style.border = "none";
                ParentNumber.style.backgroundColor = "#FFF";
            }
            check = false;
        } else {
            check = true;
        }
        return check;
    }
    else if (index == 1) {
        if (IQInput == "") {
            document.getElementById('IQBtn').style.border="1px solid red";
            document.getElementById('IQBtn').style.backgroundColor="transparent";
            check = false;

        } else {
            
            $('.in-a-institution:checked').each(function (i) {
               user.Institution = `${$(this).val()}`;
            });
            user.InstitutionName=document.querySelector('.name-of-institution').value;
            user.level=document.getElementById('level').value;
            $('.private-sessions:checked').each(function(i){
                user.PrivateSessions= `${$(this).val()}`;
            })
            user.HowManyTimesAWeek=document.querySelector('.times').value;
            user.IQScore=document.querySelector('.Score').value;
            console.log(user);

        }



    }


    else if (index == 3) {
        let UsernameLogIn = document.getElementById('UsernameLogIn');
        let userPassword = document.getElementById('userPassword');
        let userPasswordConfirm = document.getElementById('userPasswordConfirm');
        if (UsernameLogIn.value == "" || userPassword.value == "" || userPasswordConfirm.value == "" || (userPassword.value != userPasswordConfirm.value)) {

            if (UsernameLogIn.value == "") {
                UsernameLogIn.style.border = "1px solid red";
                UsernameLogIn.style.backgroundColor = "transparent";
            } else {
                UsernameLogIn.style.border = "none";
                UsernameLogIn.style.backgroundColor = "#FFF";
            }
            if (userPassword.value == "") {
                userPassword.style.border = "1px solid red";
                userPassword.style.backgroundColor = "transparent";
            } else {
                userPassword.style.border = "none";
                userPassword.style.backgroundColor = "#FFF";
            }
            if (userPasswordConfirm.value == "") {
                userPasswordConfirm.style.border = "1px solid red";
                userPasswordConfirm.style.backgroundColor = "transparent";
            } else {
                userPasswordConfirm.style.border = "none";
                userPasswordConfirm.style.backgroundColor = "#FFF";
            }

            if (userPassword.value != userPasswordConfirm.value) {
                userPassword.style.border = "1px solid red";
                userPassword.style.backgroundColor = "transparent";
                userPasswordConfirm.style.border = "1px solid red";
                userPasswordConfirm.style.backgroundColor = "transparent";


            } else {
                userPassword.style.border = "none";
                userPassword.style.backgroundColor = "#FFF";
                userPasswordConfirm.style.border = "none";
                userPasswordConfirm.style.backgroundColor = "#FFF";
            }
            check = false;
        }


        else {
            check = true;
        }
        return check;
    }



    else if (index == 8) {
        let UserName = document.getElementById('UserName');
        let UserAge = document.getElementById('UserAge');
        if (UserName.value == "" || UserAge.value == "") {

            if (UserName.value == "") {
                UserName.style.border = "1px solid red";
                UserName.style.backgroundColor = "transparent";
            } else {
                UserName.style.border = "none";
                UserName.style.backgroundColor = "#FFF";
            }
            if (UserAge.value == "") {
                UserAge.style.border = "1px solid red";
                UserAge.style.backgroundColor = "transparent";
            } else {
                UserAge.style.border = "none";
                UserAge.style.backgroundColor = "#FFF";
            }

            check = false
        } else {
            return true
        }


    } else if (index == 4) {
        check = false;
        $('.userGender:checked').each(function (i) {
            user.gender = `${$(this).val()}`;
            console.log(user);
            check = true;
        })

    }
    else {
        return true;
    }
    return check;
}

function WriteData(index) {

    if (index == 0) {
        ParentName.value = fatherAndMatherData[0].name;
        ParentEmail.value = fatherAndMatherData[0].email;
        ParentNumber.value = fatherAndMatherData[0].number;
        Relation.value = fatherAndMatherData[0].relation;
        Status.value = fatherAndMatherData[0].status;
        fatherAndMatherData.pop()
    } else if (index == 2) {
        UserName.value = user.name;
        UserAge.value = user.age;
        if (user.pic != "none") {
            document.getElementById('userPic').src = user.pic;

        }
    }
    // else if (index==1) {

    //     $('.Checkbox').each(function(i){
    //       if ($(this).attr("value")==user.skills[i]) {
    //         $(this).prop('checked', true);
    //           console.log(i);
    //       }
    //     })
    //    console.log("uhh");


    // }

    console.log(fatherAndMatherData);
}
function uploadPic() {
    document.getElementById('file').click();
}
function retrivePic(event) {
    console.log(URL.createObjectURL(event.target.files[0]));
    document.getElementById('userPic').src = URL.createObjectURL(event.target.files[0]);
    user.pic = document.getElementById('userPic').src;

}
function uploadIQ() {
    document.getElementById('IQFile').click();
}
function confirmIQ(e) {
   
    IQInput = e.value;
    user.IQFile = IQInput;
}

function Submit() {
    let userActivities = { Physical: [], Speech: [], Visual: [] };
    $('.Physical:checked').each(function (i) {
        userActivities.Physical[i] = $(this).val();
    });
    $('.Speech:checked').each(function (i) {
        userActivities.Speech[i] = $(this).val();
    });
    $('.Visual:checked').each(function (i) {
        userActivities.Visual[i] = $(this).val();
    });
    user.activities = userActivities;
    console.log(user);
    let userContainer = [];
    userContainer.push(user);
    localStorage.setItem("User", JSON.stringify(userContainer));
    window.location.href = "user.html";


}


function LogIn() {
    let LogInInputEmail = document.getElementById('LogInInputEmail');
    let LogInInputPass = document.getElementById('LogInInputPass');
    let userCartona = [];
    userCartona = JSON.parse(localStorage.getItem("User"));
    if (LogInInputEmail.value == userCartona[0].userName && LogInInputPass.value == userCartona[0].password) {
        window.location.href = "user.html";
    } else {
        LogInInputEmail.style.border = "1px solid red";
        LogInInputEmail.style.backgroundColor = "transparent";
        LogInInputEmail.style.border = "1px solid red";
        LogInInputEmail.style.backgroundColor = "transparent";

        LogInInputPass.style.border = "1px solid red";
        LogInInputPass.style.backgroundColor = "transparent";
        LogInInputPass.style.border = "1px solid red";
        LogInInputPass.style.backgroundColor = "transparent";
    }


}















// var navItem = document.querySelector('NAV')
// var register = document.getElementById("register");

// var layer = document.getElementById("layer");
// var close = document.getElementById("close");
// var next = document.getElementById("next");
// var next = document.getElementById("next");
// var Buttons = document.getElementById("Buttons");
// var back = document.getElementById("back");
// var nav = document.getElementById("nav");
// let counter = 0;






// parentDesign[0] = `
// <div class="row  w-75 justify-content-center align-items-center p-2 mt-3">

// <div class="col-2 d-flex justify-content-center align-items-center">
//     <i class="fas fa-user-alt fa-2x"></i>
// </div>
// <div class=" col-5 pr-2">
//     <input type="text" placeholder="Frist Name" id="fristName" class="form-control">
// </div>

// <div class="col-5   ">
//     <input type="text" placeholder="Last Name" id="lastName" class="form-control">
// </div>
// </div>



// <div class="row w-75 justify-content-center align-items-center  p-2 mt-2">
// <div class="col-2 d-flex justify-content-center align-items-center">
//     <i class="fas fa-envelope fa-2x"></i>
// </div>

// <div class="col-10 ">
//     <input type="email" placeholder="E-Mail" id="mail" class="form-control">
// </div>
// </div>

// <div class="row w-75 justify-content-center align-items-center  p-2 mt-2">
// <div class="col-2 d-flex justify-content-center align-items-center">
//     <i class="fas fa-phone-alt fa-2x"></i>
// </div>


// <div class="col-10 ">
//     <input type="number" placeholder="Phone Number" id="number" class="form-control">
// </div>
// </div>

// <div class="row w-75 justify-content-center align-items-center  p-2 mt-2">
// <div class="col-2 d-flex justify-content-center align-items-center">
//     <p class="font-weight-bold">Status</p>
// </div>


// <div class="col-10 d-flex justify-content-between align-items-center">
//     <div>

//         <input type="radio" name="Status" id="Status" value="Single">
//         <label for="">Single</label>
//     </div>

//     <div>

//         <input type="radio" name="Status" id="Status" value="married">
//         <label>Married</label>
//     </div>

//     <div>

//         <input type="radio" name="Status" id="Status" value="Divorced">
//         <label class="ml-1">Divorced</label>
//     </div>

//     <div>

//         <input type="radio" name="Status" id="Status" value="Widow">
//         <label for="">Widow</label>
//     </div>
// </div>
// </div>

// <div class="row w-75 justify-content-center align-items-center p-2 mt-2 mb-3">
// <div class="col-6 d-flex justify-content-end align-items-center ">
//     <p class="font-weight-bold">Relation to user</p>
// </div>


// <div class="col-6 d-flex justify-content-start align-items-center pl-2 ">
//     <select name="Relation" id="">
//         <option value="father">
//             Father
//         </option>
//         <option value="mather">
//             Mather
//         </option>
//     </select>


// </div>

// </div>
// `;
// parentDesign[1] = ` <div class="row my-5">
// <div class="col-4 d-flex justify-content-center align-items-center ">
//     <p class="font-weight-bold px-2">Siblings</p>
//     <input type="checkbox" name="Siblings">

// </div>
// <div class="col-4 px-2">
//    <input type="text" placeholder="Name" id="siblingName" class="form-control">

// </div>
// <div class="col-4 px-2">
//     <input type="number" placeholder="Age" id="siblingAge" class="form-control">

// </div>

// </div>
// `;
// close.addEventListener("click", function (e) {
//     layer.style.display = "none";
//     counter = 0;
//     document.getElementById("parentsForm").innerHTML = parentDesign[counter];
//     back.style.display = "none";
// });
// register.addEventListener("click", function (e) {
//     layer.style.display = "flex";

// });
// next.addEventListener("click", function () {
//     if (counter == 1) {

//     }
//     else {
//         counter++;
//     }

//     document.getElementById("parentsForm").innerHTML = parentDesign[counter];
//     back.style.display = "flex";




// });
// back.addEventListener("click", function (e) {
//     if (counter == 0) {
//         back.style.display = "none";

//     }
//     else {
//         counter--;
//     }

//     document.getElementById("parentsForm").innerHTML = parentDesign[counter];
//     if (counter == 0) {
//         back.style.display = "none";
//     }

// });

// document.addEventListener("scroll",function(e){
//     if(){

//     }else{
//         nav.style.backgroundColor="black"

//     }
// console.log(e);
// });