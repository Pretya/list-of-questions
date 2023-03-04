const list = [
    {
      question: '1. Объясните делегирование событий.',
      state: false,
    }, 
    {
      question: '2. Объясните, как это работает в JavaScript.Можете ли вы привести пример одного из способов, которым работа с этим изменилась в ES6',
      state: false,
    },
    {
      question: '3. Объясните, как работает прототипное наследование.',
      state: false,
    }, 
    {
      question: '4. В чем разница между переменной, которая является нулевой, неопределенной или необъявленной? Как бы вы проверили любое из этих состояний?',
      state: true,
    }, 
    {
      question: '5. Что такое замыкание и как/почему вы его используете?',
      state: true,
    },
    {
      question: '6. Какие языковые конструкции вы используете для перебора свойств объекта и элементов массива?',
      state: false,
    },
    {
      question: '7. Можете ли вы описать основную разницу между циклом Array.forEach() и методами Array.map() и почему вы должны выбрать один, а не другой?',
      state: false,
    },
    {
      question: '8. Каков типичный вариант использования анонимных функций?',
      state: false,
    },
    {
      question: '9. В чем разница между хост-объектами и собственными объектами?',
      state: false,
    },
    {
      question: '10. Объясните разницу между: function Person(){}, var person = Person() и var person = new Person()?',
      state: false,
    },
    {
      question: '11. Объясните разницу в использовании foo между function foo() {} и var foo = function() {}',
      state: false,
    },
    {
      question: '12. Можете ли вы объяснить, что делают Function.call и Function.apply? В чем заметная разница между ними?',
      state: false,
    },
    {
      question: '13. Объясните Function.prototype.bind.',
      state: false,
    },
    {
      question: '14. В чем разница между обнаружением функций, выводом функций и использованием строки UA?',
      state: false,
    },
    {
      question: '15. Объясните "hoisting".',
      state: false,
    },
    {
      question: '16. Опишите всплытие событий.',
      state: false,
    },
    {
      question: '17. Опишите захват событий.',
      state: false,
    },
    {
      question: '18. В чем разница между «атрибутом» и «свойством»?',
      state: true,
    },
    {
      question: '19. Каковы плюсы и минусы расширения встроенных объектов JavaScript?',
      state: false,
    },
    {
      question: '20. В чем разница между == и ===?',
      state: true,
    },
    {
      question: '21. Объясните политику того же происхождения в отношении JavaScript.',
      state: false,
    },
    {
      question: '22. Почему он называется Тернарным оператором, что означает слово «Тернарный»?',
      state: true,
    },
    {
      question: '23. Что такое строгий режим? Каковы некоторые преимущества / недостатки его использования?',
      state: false,
    },
    {
      question: '24. Каковы некоторые преимущества/недостатки написания кода JavaScript на языке, который компилируется в JavaScript?',
      state: false,
    },
    {
      question: '25. Какие инструменты и методы вы используете для отладки кода JavaScript?',
      state: false,
    },
    {
      question: '26. Объясните разницу между изменяемым и неизменяемым объектом.Что является примером неизменяемого объекта в JavaScript? Каковы плюсы и минусы неизменности? Как добиться неизменности в собственном коде?',
      state: false,
    },
    {
      question: '27. Объясните разницу между синхронными и асинхронными функциями.',
      state: true,
    },
    {
      question: '28. Что такое цикл событий? В чем разница между стеком вызовов и очередью задач?',
      state: false,
    },
    {
      question: '29. В чем разница между переменными, созданными с помощью let, var или const?',
      state: true,
    },
    {
      question: '30. В чем разница между классом ES6 и конструкторами функций ES5?',
      state: false,
    },
    {
      question: '31. Можете ли вы предложить вариант использования нового синтаксиса функции стрелка =>? Чем этот новый синтаксис отличается от других функций?',
      state: false,
    },
    {
      question: '32. В чем преимущество использования синтаксиса стрелки для метода в конструкторе?',
      state: false,
    },
    {
      question: '33. Как определяется функция высшего порядка?',
      state: false,
    },
    {
      question: '34. Можете ли вы привести пример деструктуризации объекта или массива?',
      state: false,
    },
    {
      question: '35. Можете ли вы привести пример создания строки с помощью шаблонных литералов ES6?',
      state: false,
    },
    {
      question: '36. Можете ли вы привести пример функции карри и почему этот синтаксис дает преимущество?',
      state: false,
    },
    {
      question: '37. Каковы преимущества использования синтаксиса распространения и чем он отличается от синтаксиса остальных?',
      state: false,
    },
    {
      question: '38. Как вы можете разделить код между файлами?',
      state: false,
    },
    {
      question: '39. Почему вы можете захотеть создать статические члены класса?',
      state: false,
    },
    {
      question: '40. В чем разница между циклами while и do-while в JavaScript?',
      state: false,
    },
    {
      question: '41. Что такое promise? Где и как вы бы использовали promise?',
      state: false,
    },
    {
      question: '42. Обсудите, как вы можете использовать принципы объектно-ориентированного программирования при кодировании с помощью JavaScript.',
      state: false,
    },
  ];

list.forEach(el => { 

if(el.state == true) {
  document.getElementById('list').insertAdjacentHTML('beforebegin', 
    `<div class="card p-5 m-3 has-text-link has-background-white ">
          ${el.question} 
          <span class="icon-text has-text-success">
              <span class="icon">
                <i class="fas fa-check-square"></i>
              </span>
              <span>Разобрался</span>
          </span>
      </div>`
  );
  } else if (el.state == false) {
    document.getElementById('list').insertAdjacentHTML('beforebegin', 
    `<div class="card p-5 m-3 has-text-link has-background-white">
          ${el.question} 
          <span class="icon-text has-text-danger">
            <span class="icon">
              <i class="fas fa-ban"></i>
            </span>
            <span>Не разобрался</span>
          </span>
      </div>`
  );
  }
  })
 