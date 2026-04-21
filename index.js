let count = 2;


const btn = document.querySelector(".add-button");
const container = document.querySelector("#container");
const deleteBtn = document.querySelector('.krest');


btn.addEventListener("click", () => {
    const newForm = createForm(count);
    container.appendChild(newForm);
    count++;
})

function createForm (count) {
    const form = document.createElement("form");
        form.innerHTML = `
        <fieldset class="beverage">
        <div class="krest-div">
          <h4 class="beverage-count">Напиток №${count}</h4>
          <button class="krest">❌</button>
        </div>
        <label class="field">
          <span class="label-text">Я буду</span>
          <select>
            <option value="espresso">Эспрессо</option>
            <option value="capuccino" selected>Капучино</option>
            <option value="cacao">Какао</option>
          </select>
        </label>
        <div class="field">
          <span class="checkbox-label">Сделайте напиток на</span>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="usual" checked />
            <span>обычном молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="no-fat" />
            <span>обезжиренном молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="soy" />
            <span>соевом молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="coconut" />
            <span>кокосовом молоке</span>
          </label>
        </div>
        <div class="field">
          <span class="checkbox-label">Добавьте к напитку:</span>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="whipped cream" />
            <span>взбитых сливок</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="marshmallow" />
            <span>зефирок</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="chocolate" />
            <span>шоколад</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="cinnamon" />
            <span>корицу</span>
          </label>
        </div>
      </fieldset>
            `;
        const newDeleteBtn = form.querySelector('.krest');
        addDeleteHandler(newDeleteBtn);
        return form;
}

function addDeleteHandler(deleteBtn) {
    deleteBtn.addEventListener("click", (e) => {
        const forms = document.querySelectorAll("form");
        if (forms.length === 1) {
            return;
        }
        const deletee = e.target.closest("form");
        deletee.remove();
        count--;
    });
}

