var listElement = document.getElementById('list');
var listCheckbox = document.querySelector('.list-checkbox');
var list = [
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
// ! Render List ==============
var renderList = function (el, index) {
    var listIndex = (index + 1);
    var elStateTrue = el.state === true;
    var stateSpan = elStateTrue ? 'has-text-success' : 'has-text-danger';
    var stateIcon = elStateTrue ? 'fa-check-square' : 'fa-ban';
    var stateText = elStateTrue ? 'Разобрался' : 'Не разобрался';
    if (listElement) {
        listElement.insertAdjacentHTML('beforeend', "<div class=\"card p-5 mt-3 has-text-link has-background-white\">\n                    ".concat(listIndex, ". ").concat(el.question, "\n                      <span class=\"icon-text ").concat(stateSpan, "\">\n                        <span class=\"icon\">\n                          <i class=\"fas ").concat(stateIcon, "\"></i>\n                        </span>\n                        <span>").concat(stateText, "</span>\n                      </span>\n                      <div class=\"buttons mt-3\">\n                        <button class=\"button is-link is-outlined\" data-id=\"").concat(index, "\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441</button>\n                      </div>\n                </div>\n                "));
    }
    else {
        console.log('NO Catd');
    }
};
// ! Checkbox ==============
var checkBoxUnderstood = document.getElementById('check-understood');
var checkBoxDidntUnderstand = document.getElementById('check-didntUnderstand');
listCheckbox.addEventListener('change', function (e) {
    var _a;
    var targetCheckbox = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('input');
    if (targetCheckbox === checkBoxUnderstood) {
        checkBoxFilterTrue();
        checkBoxDidntUnderstand.checked = false;
    }
    else if (targetCheckbox === checkBoxDidntUnderstand) {
        checkBoxFilterFalse();
        checkBoxUnderstood.checked = false;
    }
    if (!checkBoxDidntUnderstand.checked && !checkBoxUnderstood.checked) {
        showAllQuestinon();
    }
});
// ! Textarea ===============
function submitQueastion() {
    var textareaValue = document.getElementById('add-question').value;
    var newObject = { question: textareaValue, state: false };
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
var clearList = (function () { return document.getElementById('list').innerHTML = ''; });
function checkBoxFilterTrue() {
    clearList();
    var questionStatusTrue = list.filter(function (el) { return el.state; });
    questionStatusTrue.forEach(renderList);
}
function checkBoxFilterFalse() {
    clearList();
    var questionStatusFalse = list.filter(function (el) { return el.state === false; });
    questionStatusFalse.forEach(renderList);
}
function showAllQuestinon() {
    clearList();
    list.forEach(renderList);
}
showAllQuestinon();
// ! Change status button and style bg-color =============
if (listElement) {
    listElement
        .addEventListener('click', function (e) {
        var _a, _b;
        var targetButton = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('button');
        var idButton = (_b = e.target) === null || _b === void 0 ? void 0 : _b.dataset.id;
        if (targetButton) {
            if (idButton) {
                var currentStatus = list[idButton];
                currentStatus.state = !currentStatus.state;
                checkBoxDidntUnderstand.checked = false;
                checkBoxUnderstood.checked = false;
                showAllQuestinon();
            }
        }
    });
    listElement.addEventListener('mouseover', function (e) {
        var _a;
        var targetButton = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('button');
        if (!targetButton)
            return;
        targetButton.style.cssText = 'background-color: #764d9d; transition: all .3s linear;';
    });
    listElement.addEventListener('mouseout', function (e) {
        var _a;
        var targetButton = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('button');
        if (!targetButton)
            return;
        targetButton.style.cssText = 'transition: all .5s linear;';
    });
}
