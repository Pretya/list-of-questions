const listElement = document.getElementById('list') as HTMLElement;
const listCheckbox = document.querySelector('.list-checkbox') as HTMLInputElement;
const list = [
  {
    question: 'Объясните делегирование событий.',
    state: true,
  },
  {
    question: 'Объясните, как this работает в JavaScript.Можете ли вы привести пример одного из способов, которым работа с этим изменилась в ES6',
    state: true,
  },
  {
    question: 'Объясните, как работает прототипное наследование.',
    state: false,
  },
  {
    question: 'В чем разница между переменной, которая является нулевой, неопределенной или необъявленной? Как бы вы проверили любое из этих состояний?',
    state: true,
  },
  {
    question: 'Что такое замыкание и как/почему вы его используете?',
    state: true,
  },
  {
    question: 'Какие языковые конструкции вы используете для перебора свойств объекта и элементов массива?',
    state: false,
  },
  {
    question: 'Можете ли вы описать основную разницу между циклом Array.forEach() и методами Array.map() и почему вы должны выбрать один, а не другой?',
    state: false,
  },
  {
    question: 'Каков типичный вариант использования анонимных функций?',
    state: false,
  },
  {
    question: 'В чем разница между хост-объектами и собственными объектами?',
    state: false,
  },
  {
    question: 'Объясните разницу между: function Person(){}, var person = Person() и var person = new Person()?',
    state: false,
  },
  {
    question: 'Объясните разницу в использовании foo между function foo() {} и var foo = function() {}',
    state: false,
  },
  {
    question: 'Можете ли вы объяснить, что делают Function.call и Function.apply? В чем заметная разница между ними?',
    state: false,
  },
  {
    question: 'Объясните Function.prototype.bind.',
    state: false,
  },
  {
    question: 'В чем разница между обнаружением функций, выводом функций и использованием строки UA?',
    state: false,
  },
  {
    question: 'Объясните "hoisting".',
    state: false,
  },
  {
    question: 'Опишите всплытие событий.',
    state: false,
  },
  {
    question: 'Опишите захват событий.',
    state: false,
  },
  {
    question: 'В чем разница между «атрибутом» и «свойством»?',
    state: true,
  },
  {
    question: 'Каковы плюсы и минусы расширения встроенных объектов JavaScript?',
    state: false,
  },
  {
    question: 'В чем разница между == и ===?',
    state: true,
  },
  {
    question: 'Объясните политику того же происхождения в отношении JavaScript.',
    state: false,
  },
  {
    question: 'Почему он называется Тернарным оператором, что означает слово «Тернарный»?',
    state: true,
  },
  {
    question: 'Что такое строгий режим? Каковы некоторые преимущества / недостатки его использования?',
    state: false,
  },
  {
    question: 'Каковы некоторые преимущества/недостатки написания кода JavaScript на языке, который компилируется в JavaScript?',
    state: false,
  },
  {
    question: 'Какие инструменты и методы вы используете для отладки кода JavaScript?',
    state: false,
  },
  {
    question: 'Объясните разницу между изменяемым и неизменяемым объектом.Что является примером неизменяемого объекта в JavaScript? Каковы плюсы и минусы неизменности? Как добиться неизменности в собственном коде?',
    state: false,
  },
  {
    question: 'Объясните разницу между синхронными и асинхронными функциями.',
    state: true,
  },
  {
    question: 'Что такое цикл событий? В чем разница между стеком вызовов и очередью задач?',
    state: false,
  },
  {
    question: 'В чем разница между переменными, созданными с помощью let, var или const?',
    state: true,
  },
  {
    question: 'В чем разница между классом ES6 и конструкторами функций ES5?',
    state: false,
  },
  {
    question: 'Можете ли вы предложить вариант использования нового синтаксиса функции стрелка =>? Чем этот новый синтаксис отличается от других функций?',
    state: false,
  },
  {
    question: 'В чем преимущество использования синтаксиса стрелки для метода в конструкторе?',
    state: false,
  },
  {
    question: 'Как определяется функция высшего порядка?',
    state: false,
  },
  {
    question: 'Можете ли вы привести пример деструктуризации объекта или массива?',
    state: false,
  },
  {
    question: 'Можете ли вы привести пример создания строки с помощью шаблонных литералов ES6?',
    state: false,
  },
  {
    question: 'Можете ли вы привести пример функции карри и почему этот синтаксис дает преимущество?',
    state: false,
  },
  {
    question: 'Каковы преимущества использования синтаксиса распространения и чем он отличается от синтаксиса остальных?',
    state: false,
  },
  {
    question: 'Как вы можете разделить код между файлами?',
    state: false,
  },
  {
    question: 'Почему вы можете захотеть создать статические члены класса?',
    state: false,
  },
  {
    question: 'В чем разница между циклами while и do-while в JavaScript?',
    state: false,
  },
  {
    question: 'Что такое promise? Где и как вы бы использовали promise?',
    state: false,
  },
  {
    question: 'Обсудите, как вы можете использовать принципы объектно-ориентированного программирования при кодировании с помощью JavaScript.',
    state: false,
  },
];
interface ICard {
  question: string;
  state: Boolean
}
// ! Render List ==============
const renderList = (el: ICard, index: number) => {
  const listIndex = (index + 1);
  const elStateTrue = el.state === true;
  const stateSpan = elStateTrue ? 'has-text-success' : 'has-text-danger';
  const stateIcon = elStateTrue ? 'fa-check-square' : 'fa-ban';
  const stateText = elStateTrue ? 'Разобрался' : 'Не разобрался';
  
  if(listElement) {
    listElement.insertAdjacentHTML(
    'beforeend',
    `<div class="card p-5 mt-3 has-text-link has-background-white">
                    ${listIndex}. ${el.question}
                      <span class="icon-text ${stateSpan}">
                        <span class="icon">
                          <i class="fas ${stateIcon}"></i>
                        </span>
                        <span>${stateText}</span>
                      </span>
                      <div class="buttons mt-3">
                        <button class="button is-link is-outlined" data-id="${index}">Изменить статус</button>
                      </div>
                </div>
                `,
    );
  }else {
    console.log('NO Catd');
    
  }
  
};

// ! Checkbox ==============
const checkBoxUnderstood = document.getElementById('check-understood') as HTMLInputElement;
const checkBoxDidntUnderstand = document.getElementById('check-didntUnderstand') as HTMLInputElement;

listCheckbox.addEventListener('change', (e) => {
  const targetCheckbox = e.target?.closest('input');
  if (targetCheckbox === checkBoxUnderstood) {
    checkBoxFilterTrue();
    checkBoxDidntUnderstand.checked = false;
  } else if (targetCheckbox === checkBoxDidntUnderstand) {
    checkBoxFilterFalse();
    checkBoxUnderstood.checked = false;
  }
  if (!checkBoxDidntUnderstand.checked && !checkBoxUnderstood.checked) {
    showAllQuestinon();
  }
});

// ! Textarea ===============
function submitQueastion() {
  const textareaValue = document.getElementById('add-question').value ;
  const newObject = { question: textareaValue, state: false };

  if (textareaValue !== '') {
    list.unshift(newObject);
    clearList();
    list.forEach(renderList);
    document.getElementById('add-question').value = '';
  }
  if (checkBoxDidntUnderstand.checked || checkBoxUnderstood.checked) {
    checkBoxDidntUnderstand.checked = false;
    checkBoxUnderstood.checked = false;
  }
}

// ! Filter List ================
const clearList = (() => document.getElementById('list').innerHTML = '') ;

function checkBoxFilterTrue() {
  clearList();
  const questionStatusTrue = list.filter((el) => el.state);
  questionStatusTrue.forEach(renderList);
}

function checkBoxFilterFalse() {
  clearList();
  const questionStatusFalse = list.filter((el) => el.state === false);
  questionStatusFalse.forEach(renderList);
}

function showAllQuestinon() {
  clearList();
  list.forEach(renderList);
}
showAllQuestinon();

// ! Change status button and style bg-color =============
if(listElement) {
    listElement
    .addEventListener('click', (e) => {
      const targetButton = e.target?.closest('button') as HTMLElement;
      const idButton = e.target?.dataset.id;
      if (targetButton) {
        if (idButton) {
          const currentStatus = list[idButton];
          currentStatus.state = !currentStatus.state;
          checkBoxDidntUnderstand.checked = false;
          checkBoxUnderstood.checked = false;
          showAllQuestinon();
        }
      }
    });
  listElement.addEventListener('mouseover', (e) => {
    const targetButton = e.target?.closest('button');
    if (!targetButton) return;
    targetButton.style.cssText = 'background-color: #764d9d; transition: all .3s linear;';
  });
  listElement.addEventListener('mouseout', (e) => {
    const targetButton = e.target?.closest('button');
    if (!targetButton) return;
    targetButton.style.cssText = 'transition: all .5s linear;';
  });
}
