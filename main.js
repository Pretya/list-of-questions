
// ! Render List ==============
const renderList = (el, index) => {
  const listIndex = (index + 1);
  const elStateTrue = el.state == true;
  const stateSpan = elStateTrue ? 'has-text-success' : 'has-text-danger';
  const stateIcon = elStateTrue ? 'fa-check-square' : 'fa-ban';
  const stateText = elStateTrue ? 'Разобрался' : 'Не разобрался';
    document.getElementById('list').insertAdjacentHTML('beforeend', 
              `<div class="card p-5 mt-3 has-text-link has-background-white">
                    ${listIndex}. ${el.question}
                      <span class="icon-text ${stateSpan}">
                        <span class="icon">
                          <i class="fas ${stateIcon}"></i>
                        </span>
                        <span>${stateText}</span>
                      </span>
                </div>`
    );
}

// ! Checkbox ==============
const checkBoxUnderstood = document.getElementById('check-understood');
const checkBoxDidntUnderstand = document.getElementById('check-didntUnderstand');

const checkboxAllUncheck = () => {
  if(checkBoxDidntUnderstand.checked == false && checkBoxUnderstood.checked == false) {
    showAllQuestinon();
  }
}

function checkBoxStateTrue() {
    if(checkBoxUnderstood.checked){
      checkBoxDidntUnderstand.checked = false;
    } 
    if(checkBoxDidntUnderstand.checked){
      checkBoxUnderstood.checked = false;
    }
    checkboxAllUncheck();
}


function checkBoxStateFalse() {
    if(checkBoxDidntUnderstand.checked){
      checkBoxUnderstood.checked = false;
    }
    checkboxAllUncheck();
}

// ! Textarea ===============
  function submitQueastion() {
    const textareaValue = document.getElementById('add-question').value;
    const newObject = {question: textareaValue, state: false};

      if(textareaValue !== ''){
        list.unshift(newObject);
        clearList();
        list.forEach(renderList);
        document.getElementById('add-question').value = "";
      }
      if(checkBoxDidntUnderstand.checked == true || checkBoxUnderstood.checked == true) {
        checkBoxDidntUnderstand.checked = false;
        checkBoxUnderstood.checked = false;
      }
  }
  
// ! Filter List ================
const clearList = (() => document.getElementById('list').innerHTML = '');

function checkBoxFilterTrue() {
  clearList();
  const questionStatusTrue = list.filter(el => el.state == true);
  questionStatusTrue.forEach(renderList);
}

function checkBoxFilterFalse() {
  clearList();
  const questionStatusFalse = list.filter(el => el.state == false);
  questionStatusFalse.forEach(renderList);
}

function showAllQuestinon() {
  clearList();
  list.forEach(renderList);
}
showAllQuestinon();



