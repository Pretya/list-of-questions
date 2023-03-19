const listElement = document.getElementById('list');
const listCheckbox = document.querySelector('list-checkbox');

// ! Render List ==============
const renderList = (el, index) => {
  const listIndex = (index + 1);
  const elStateTrue = el.state == true;
  const stateSpan = elStateTrue ? 'has-text-success' : 'has-text-danger';
  const stateIcon = elStateTrue ? 'fa-check-square' : 'fa-ban';
  const stateText = elStateTrue ? 'Разобрался' : 'Не разобрался';
  listElement.insertAdjacentHTML('beforeend', 
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
                `
    );
}

// ! Checkbox ==============
const checkBoxUnderstood = document.getElementById('check-understood');
const checkBoxDidntUnderstand = document.getElementById('check-didntUnderstand');

document.querySelectorAll('.input-checkbox')
  .forEach((el) => {
    el.addEventListener('change', function(e){
      let targetCheckbox = e.target.closest('input');
        if(targetCheckbox === checkBoxUnderstood) {
          checkBoxFilterTrue();
          checkBoxDidntUnderstand.checked = false;
        }
        else if(targetCheckbox === checkBoxDidntUnderstand) {
          checkBoxFilterFalse();
          checkBoxUnderstood.checked = false;
        } 
        if (!checkBoxDidntUnderstand.checked && !checkBoxUnderstood.checked){
          showAllQuestinon();
        }
          subscribe ()
    })
  })

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
  subscribe ()
}
showAllQuestinon();

// ! Change status button =============
function changeStatus(id) {
 const currentStatus = list[id];
 currentStatus.state = !currentStatus.state;
 checkBoxDidntUnderstand.checked = false;
 checkBoxUnderstood.checked = false;
 showAllQuestinon();
}
function subscribe () {
  document.querySelectorAll('#list > div .button')
  .forEach((el,) => {
      const idButton = el.dataset.id;
        el.addEventListener('click', function(){
        changeStatus(idButton);
        });

        el.addEventListener('mouseover', function(e) {
          let targetButton = e.target.closest('button');
          if(!targetButton) return;
          targetButton.style.cssText = `background-color: #764d9d; transition: all .3s linear;`
        })

        el.addEventListener('mouseout', function(e) {
          let targetButton = e.target.closest('button');
          if(!targetButton) return;
          targetButton.style.cssText = `transition: all .3s linear;`
        })
})
}