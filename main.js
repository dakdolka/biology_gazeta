const questions = [
    {
      question: "Что такое бесполое размножение?",
      optionA: "Размножение, при котором участвуют два родителя",
      optionB: "Размножение, при котором потомство образуется от одного родителя",
      optionC: "Размножение через половое слияние",
      correctOption: "optionB"
    },
    {
      question: "Какой из следующих способов размножения является типичным для звездочек (эхиноидов)?",
      optionA: "Почкование",
      optionB: "Деление",
      optionC: "Фрагментация",
      correctOption: "optionC"
    },
    {
      question: "Как называется процесс, при котором у животных, таких как аксолотли, происходит восстановление утраченных частей тела?",
      optionA: "Мутация",
      optionB: "Регенерация",
      optionC: "Митоз",
      correctOption: "optionB"
    },
    {
      question: "Как называется способность организма оставаться в личиночной стадии на протяжении всей жизни?",
      optionA: "Метаморфоз",
      optionB: "Неотения",
      optionC: "Регенерация",
      correctOption: "optionB"
    },
    {
      question: "Какое из следующих животных размножается с помощью партеногенеза?",
      optionA: "Африканская клонообразная рыба",
      optionB: "Лягушка",
      optionC: "Человек",
      correctOption: "optionA"
    },
    {
      question: "Что характерно для вегетативного размножения у растений?",
      optionA: "Размножение семенами",
      optionB: "Размножение частями растения, такими как клубни, корневища или побеги",
      optionC: "Образование зиготы после оплодотворения",
      correctOption: "optionB"
    },
    {
      question: "Какую уникальную способность имеют морские огурцы, помимо бесполого размножения?",
      optionA: "Способность к фотосинтезу",
      optionB: "Способность выбрасывать свои внутренности в случае угрозы",
      optionC: "Способность к миграции на большие расстояния",
      correctOption: "optionB"
    },
    {
      question: "Каким способом размножаются кораллы?",
      optionA: "С помощью семян",
      optionB: "Через почкование и вегетативное размножение",
      optionC: "Путём партеногенеза",
      correctOption: "optionB"
    },
    {
      question: "Какая особенность аксолотлей делает их важным объектом для исследований в области регенерации?",
      optionA: "Способность жить в кислородной среде",
      optionB: "Способность восстанавливать не только конечности, но и органы",
      optionC: "Способность к миграции",
      correctOption: "optionB"
    },
    {
      question: "Какие из следующих животных способны к фрагментации?",
      optionA: "Планарии",
      optionB: "Пчёлы",
      optionC: "Лошади",
      correctOption: "optionA"
    }
  ];

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