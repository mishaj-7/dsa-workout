function MyButton(name) {
  this.button = document.createElement("button");
  this.button.innerHTML = name;
  document.body.appendChild(this.button);
}

MyButton.prototype.onclick = function (fn) {
  this.button.onclick = fn;
};

function MyGreenButton(name) {
  MyButton.call(this, name);
}

//console.log(Object.create(MyButton.prototype));
MyGreenButton.prototype = Object.create(MyButton.prototype);
MyGreenButton.prototype.onclick = function (fn) {
  MyButton.prototype.onclick.call(this, () => {
    this.button.style.background = "green";
    fn();
  });
};

MyGreenButton.prototype.printme = () => {
  console.log("helo");
};

var b2 = new MyGreenButton("yo");

b2.onclick(() => {
  console.log("clicked");
});

// console.dir(MyButton);
// console.dir(b2);
