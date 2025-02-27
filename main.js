const questions = [
  {
    question: "Что такое бесполое размножение?",
    a: "Размножение, при котором участвуют два родителя",
    b: "Размножение, при котором потомство образуется от одного родителя",
    c: "Размножение через половое слияние",
    correct: "b"
  },
  {
    question: "Какой из следующих способов размножения является типичным для звездочек (эхиноидов)?",
    a: "Почкование",
    b: "Деление",
    c: "Фрагментация",
    correct: "c"
  },
  {
    question: "Как называется процесс, при котором у животных, таких как аксолотли, происходит восстановление утраченных частей тела?",
    a: "Мутация",
    b: "Регенерация",
    c: "Митоз",
    correct: "b"
  },
  {
    question: "Как называется способность организма оставаться в личиночной стадии на протяжении всей жизни?",
    a: "Метаморфоз",
    b: "Неотения",
    c: "Регенерация",
    correct: "b"
  },
  {
    question: "Какое из следующих животных размножается с помощью партеногенеза?",
    a: "Африканская клонообразная рыба",
    b: "Лягушка",
    c: "Человек",
    correct: "a"
  },
  {
    question: "Что характерно для вегетативного размножения у растений?",
    a: "Размножение семенами",
    b: "Размножение частями растения, такими как клубни, корневища или побеги",
    c: "Образование зиготы после оплодотворения",
    correct: "b"
  },
  {
    question: "Какую уникальную способность имеют морские огурцы, помимо бесполого размножения?",
    a: "Способность к фотосинтезу",
    b: "Способность выбрасывать свои внутренности в случае угрозы",
    c: "Способность к миграции на большие расстояния",
    correct: "b"
  },
  {
    question: "Каким способом размножаются кораллы?",
    a: "С помощью семян",
    b: "Через почкование и вегетативное размножение",
    c: "Путём партеногенеза",
    correct: "b"
  },
  {
    question: "Какая особенность аксолотлей делает их важным объектом для исследований в области регенерации?",
    a: "Способность жить в кислородной среде",
    b: "Способность восстанавливать не только конечности, но и органы",
    c: "Способность к миграции",
    correct: "b"
  },
  {
    question: "Какие из следующих животных способны к фрагментации?",
    a: "Планарии",
    b: "Пчёлы",
    c: "Лошади",
    correct: "a"
  }
];


function checkAnswer(qnum, qans){
  elements = [
    document.getElementById(`${qnum}a`),
    document.getElementById(`${qnum}b`),
    document.getElementById(`${qnum}c`)
  ]
  for (let i = 0; i < elements.length; i++) {
    elements[i].disabled = true
    console.log(questions[qnum-1]['correct'], qans)
    if(`${qnum}${questions[qnum-1]['correct']}` === elements[i].id) {
      elements[i].style.backgroundColor = '#4caf50'
    } else {
      elements[i].style.backgroundColor = '#f44336'
    }
  }
}

const button = document.getElementById('subscribe_button');
const button2 = document.getElementById('subscribe_to_mailing');

button.addEventListener('click', function() {
  if (button.style.backgroundColor === 'white') {
    button.style.backgroundColor = 'red';
    button.style.color = "white";
    this.textContent = "Подписаться";
  }
  else {
    button.style.backgroundColor = 'white';
    button.style.color = "red";
    this.textContent = "Отписаться";
  }
});

button2.addEventListener('click', function() {
    if (button2.style.backgroundColor === 'grey') {
      button2.style.backgroundColor = '#fff';
      button2.style.color = "#2c6e49";
      this.textContent = "Подписаться на рассылку";
    }
    else {
      button2.style.backgroundColor = 'grey';
      button2.style.color = "#fff";
      this.textContent = "Отписаться от рассылки  ";
    }
});