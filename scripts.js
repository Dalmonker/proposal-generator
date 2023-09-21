const subjects = ["Я", "Ты", "Он", "Она", "Мы", "Вы", "Они"];
const verbs = ["гуляю", "читаю", "еду", "пишу", "смотрю", "работаю"];
const objects = ["книгу", "фильм", "пиццу", "газету", "дом", "собаку"];

const addProp = document.getElementById("addProp");
const block = document.getElementById("block");

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let tmp = arr[i];
    let rnd = Math.floor(Math.random() * (i + 1));

    arr[i] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
}

addProp.addEventListener("click", function () {
  const shuffleArrayObjects = shuffle(objects).join(",");
  const shuffleArrayVerbs = shuffle(verbs).join(",");
  const shuffleArraySubjects = shuffle(subjects).join(",");

  block.innerHTML = "";

  const p3 = document.createElement("p");
  p3.appendChild(document.createTextNode(shuffleArraySubjects));
  block.appendChild(p3);

  const p2 = document.createElement("p");
  p2.appendChild(document.createTextNode(shuffleArrayVerbs));
  block.appendChild(p2);

  const p1 = document.createElement("p");
  p1.appendChild(document.createTextNode(shuffleArrayObjects));
  block.appendChild(p1);
});
