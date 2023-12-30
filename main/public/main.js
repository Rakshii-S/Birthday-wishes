// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//import all the functions from firebase database 
import {getDatabase, ref, child, get, set, remove, update} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5jJyoCi1xWm30fR7CanAZAqzm-uAFSqk",
    authDomain: "birthday-16d18.firebaseapp.com",
    databaseURL: "https://birthday-16d18-default-rtdb.firebaseio.com",
    projectId: "birthday-16d18",
    storageBucket: "birthday-16d18.appspot.com",
    messagingSenderId: "272701632979",
    appId: "1:272701632979:web:9e59a4d2d6b6635422bf26",
    measurementId: "G-385672RNRD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

// to display the entries that are already taken
var countt = document.getElementById("count2");
var carr = ["Used Entry numbers: "];
for(var i=1 ; i<=20 ;i++)
{
    var user_ref = ref(database)
    get(child(user_ref,'users/' +i)).then((snapshot) => {
        var data = snapshot.val();
        carr.push(data.number)
        countt.innerHTML = carr
    })
}
//set data to database
export function save() 
{
        var ent = document.getElementById('en').value;
        var Name = document.getElementById('name').value;
        var dob = document.getElementById('dob').value;
        var email = document.getElementById('email').value;
        var note = document.getElementById('note').value;
        set(ref(database,'users/' + ent),{
            number: ent,
            Name: Name,
            dob: dob,
            email: email,
            note: note
        })
}

//retrieve data from database
export function getinfo() 
{
        document.write("<title>Birthday Alarm</title>")
        document.write("<body id='main'>")
        document.write("<table align=center border=1 id='t'>")
        document.write("<tr>\
                    <th>Entry No</th>\
                    <th>Name</th>\
                    <th>Date of birth</th>\
                    <th>Email</th>\
                    <th>Note</th>\
        ");
        var Table = document.getElementById("t");
        Table.style.width = "60%";
        Table.style.height = "50px";
        Table.style.backgroundColor = "#0f0e17"
        Table.style.color = "white";
        Table.style.fontSize = "20px";
        Table.style.marginTop = "100px";

        // to get the count of items present in the users\
        // get(child(user_ref,'users/')).then((snapshot) => {
        // var countDb = snapshot.size;
        for (var i = 1; i <= 20; i++) 
        {
            var user_ref = ref(database)
            get(child(user_ref,'users/' +i)).then((snapshot) => {
                var data = snapshot.val();
                document.write("<tr>\
                <td style='padding:30px; text-align:center'>"+ data.number + "</td>\
                <td style='text-align:center'>"+ data.Name + "</td>\
                <td style='text-align:center'>"+ data.dob + "</td>\
                <td style='text-align:center'>"+ data.email + "</td>\
                <td style='text-align:center'>"+ data.note + "</td>\
                </tr>\
            ");
            // css styling for table tag
            var Table = document.getElementById("t");
            Table.style.width = "60%";
            Table.style.height = "50px";
            Table.style.backgroundColor = "#0f0e17"
            Table.style.color = "white";
            Table.style.fontSize = "20px";
            Table.style.marginTop = "100px";
            })
        }
        // });
        document.write("</body>")
        // css styling for body tag
        var MainB = document.getElementById("main");
        MainB.style.overflowX = "hidden"
        MainB.style.alignItems = "center";
        MainB.style.height = "100vh";
        MainB.style.width = "100%";
        MainB.style.backgroundImage = "radial-gradient(circle, #2ecc71 0%, #000000 100%)";
        MainB.style.backgroundSize = "cover";
        MainB.style.backgroundPosition = "center";
        MainB.style.backgroundRepeat = "repeat";
        MainB.style.fontFamily = "";
        MainB.style.color = "#fff";

        //div
        const div = document.createElement("div");
        div.id = "div";
        div.style.display = "flex";
        document.body.appendChild(div);

        //Remove
        //background
        const box = document.createElement("div");
        box.id = "box";
        box.style.width = "25%";
        box.style.height = "300px";
        box.style.backgroundColor = "#0f0e17"
        box.style.color = "white";
        box.style.fontSize = "20px";
        box.style.marginTop = "100px";
        box.style.marginLeft = "450px";
        div.appendChild(box);

        //heading
        const p = document.createElement('p');
        p.innerText = "Delete Entry";
        p.id = "p";
        p.style.textAlign = "center";
        p.style.fontSize = "20px";
        p.style.padding = "30px";
        box.appendChild(p);

        //input name
        const inp = document.createElement('input');
        inp.id = "inp";
        inp.type = "text";
        inp.style.marginTop = "20px";
        inp.style.marginLeft = "100px";
        inp.style.width = "150px"
        inp.style.height = "40px"
        inp.style.fontSize = "20px";
        box.appendChild(inp);

        //reload page
        const a= document.createElement('a');
        a.id = "a";
        a.href = "display.html";
        a.style.textDecoration = "none";
        a.style.color = "white";
        a.style.fontSize = "20px";
        box.appendChild(a); 

        //button
        const b = document.createElement("button");
        b.innerText = "Remove";
        b.id = "b";
        b.style.margin = "40px";
        b.style.width = "100px"
        b.style.height = "60px"
        b.style.backgroundColor = "#0f0e17"
        b.style.color = "white";
        b.style.fontSize = "15px";
        b.onclick = function rem() 
            {
                var r = Number(document.getElementById("inp").value);
                remove(ref(database, 'users/' + r))
            }
        a.appendChild(b);

        // back button
        //background
        const box1 = document.createElement("div");
        box1.id = "box";
        box1.style.width = "25%";
        box1.style.height = "180px";
        box1.style.backgroundColor = "#0f0e17"
        box1.style.color = "white";
        box1.style.fontSize = "20px";
        box1.style.marginTop = "100px";
        box1.style.marginLeft = "150px";
        div.appendChild(box1);

        //link to main page
        const an = document.createElement('a');
        an.id = "an ";
        an.href = "index.html";
        an.style.textDecoration = "none";
        an.style.color = "white";
        an.style.fontSize = "20px";
        box1.appendChild(an);

        //button
        const b1 = document.createElement("button");
        b1.innerText = "Back";
        b1.id = "b";
        b1.style.margin = "60px";
        b1.style.width = "100px"
        b1.style.height = "60px"
        b1.style.backgroundColor = "#0f0e17"
        b1.style.color = "white";
        b1.style.fontSize = "20px";
        an.appendChild(b1);
}

//to retrieve email and send email using smtpjs
function backgroundCheck() 
{
        for (var i = 1; i <= 20; i++) 
        {
            var date = new Date().toJSON().slice(5, 10);
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();
            var user_ref = ref(database)
            get(child(user_ref,'users/' +i)).then((snapshot) => {
                var data = snapshot.val();
                var ddob = data.dob.slice(5, 10);
                iterate:if (date == ddob && h == 0 && m == 10) 
                {
                    var UserEmail = data.email;
                    Email.send({
                        Host : "smtp.elasticemail.com",
                        Username : "projects2125@gmail.com",
                        Password : "6E457171AF816A53398920C26CEDD3828E9D",
                        SecureToken : "10b58895-9fb9-44b0-bde8-efc9a30bb47a",
                        To : UserEmail,
                        From : "projects2125@gmail.com",
                        Subject : "Happy Birthday!!!",
                        Body : "https://birthdaywishes-d29c6.web.app"
                    }).then(
                      message => alert(message)
                    );
                break iterate;
                } 
            });
        }
    // })
}
backgroundCheck()