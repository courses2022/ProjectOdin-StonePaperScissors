console.log(document.querySelector('body'));
const body = document.querySelector('body');
const container = document.querySelector('#container');

const RedP = document.createElement('p');
RedP.style.color='red';
RedP.innerHTML="Hey im red!";
container.appendChild(RedP);

const BlueH3 = document.createElement('h3');
BlueH3.style.color = 'blue';
BlueH3.innerHTML = "I'm a blue h3!";
container.appendChild(BlueH3);

const content = document.createElement('div');
content.setAttribute('style', 'border: 3px solid black; background-color:pink');
content.innerHTML="<h2>Im in a div</h2><p>ME TOO!</p>";
container.appendChild(content);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World 2");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
  });

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    alert(button.id);
  });
});