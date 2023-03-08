  const questionUnderstand = `<span class="icon-text has-text-success">
                                <span class="icon">
                                  <i class="fas fa-check-square"></i>
                                </span>
                                <span>Разобрался</span>
                              </span>`;

const questionDontUnderstand = `<span class="icon-text has-text-danger">
                                  <span class="icon">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  <span>Не разобрался</span>
                                </span>`;

list.forEach((el, index) => { 
  const listIndex = (index + 1);
  const stateToggle = el.state == true ? questionUnderstand : questionDontUnderstand;
  document.getElementById('list').insertAdjacentHTML('beforebegin', 
            `<div class="card p-5 m-3 has-text-link has-background-white">
                  ${listIndex}. ${el.question}
                  ${stateToggle}
              </div>`
);
  })


