let counter = [];

function count() {
  counter.push("");
  document.getElementById("counter").innerText = counter.length;
}

function cleaner() {
  counter.pop();
  document.getElementById("counter").innerText = counter.length;
}

function selects() {
  var ele = document.querySelectorAll('input[type="checkbox"]');
  let li = document.getElementsByTagName("li");
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].type == "checkbox") ele[i].checked = true;
    for (let j = 0; j < li.length; j++) {
      li[j].classList.add("checked");
      cleaner();
    }
  }
}
function deSelect() {
  var ele = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].type == "checkbox") ele[i].checked = false;
    for (let j = 0; j < li.length; j++) {
      li[j].classList.remove("checked");
      count();
    }
  }
}

function myToggle() {
  selects() ? deSelect() : deSelect();
}
// dark mode
function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  let list = document.getElementById("list");
  let list2 = document.getElementById("list2");

  list.classList.toggle("dark");
  list2.classList.toggle("dark");
}

// make close icon
var myNodelist = document.getElementsByTagName("li");

var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//remove function
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.remove();
  };
}

// add item with enter key
var input = document.getElementById("myInput");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

// make new li
function newElement() {
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", function () {
    if (this.checked) {
      li.classList.add("checked");
      cleaner();
    } else if (!this.checked) {
      li.classList.remove("checked");
      count();
    }
  });

  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.append(checkBox);
  li.append(t);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    count();
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove();
      cleaner();
    };
  }
}

function all1() {
  const idd = document.querySelectorAll("li");
  idd.forEach((el) => (el.style.display = "block"));
  document.getElementById("all").classList.add("clicked");
  document.getElementById("active").classList.remove("clicked");
  document.getElementById("completed").classList.remove("clicked");
}

function active() {
  const idd = document.querySelectorAll("li");
  idd.forEach((el) => (el.style.display = "block"));
  document
    .querySelectorAll(".checked")
    .forEach((el1) => (el1.style.display = "none"));
  document.getElementById("active").classList.add("clicked");
  document.getElementById("all").classList.remove("clicked");
  document.getElementById("completed").classList.remove("clicked");
}

function complet() {
  const idd = document.querySelectorAll("li");
  idd.forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".checked")
    .forEach((el1) => (el1.style.display = "block"));

  document.getElementById("completed").classList.add("clicked");
  document.getElementById("all").classList.remove("clicked");
  document.getElementById("active").classList.remove("clicked");
}

function clearCom() {
  document.querySelectorAll(".checked").forEach((el) => el.remove());
  document.getElementById("completed").classList.remove("clicked");
  document.getElementById("all").classList.remove("clicked");
  document.getElementById("active").classList.remove("clicked");
}
