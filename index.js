let count = 1;

const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const btn = document.querySelector(".add-button");
const container = document.querySelector("#container");
const deleteBtn = document.querySelector('.krest');

btn.addEventListener("click", () => {
    count++;
    const newForm = createForm(count);
    container.appendChild(newForm);
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

const readyBtn = document.querySelector(".submit-button");
readyBtn.addEventListener("click", (event) => {
        event.preventDefault()
        const ready = document.querySelector("#popup");
        ready.innerHTML = `
            <div class="krest-div">
                <button class="krest-modal" id="krestik">❌</button>
                <h2>Вы заказали ${count} ${sklonenieSlov(count)}</h2>
                ${buildTables()}
            </div>
        `;
        const closeBtn = document.querySelector(".krest-modal");
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault()
            popup.style.display = "none";
            overlay.classList.remove("show");});
        popup.style.display = "block";
        overlay.classList.add("show");});


function sklonenieSlov(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return "напиток";
    } else if (
        count % 10 >= 2 &&
        count % 10 <= 4 &&
        (count % 100 < 10 || count % 100 >= 20)
    ) {
        return "напитка";
    } else {
        return "напитков";
    }
}

function buildTables() {
    const drinks = getAllDrinks();
    let result = `
       <table>
        <tr>
            <th> Напиток </th>
            <th> Молоко </th>
            <th> Дополнительно </th>
        </tr>    
    `;
    drinks.forEach(drink => {
        const row =
            `
            <tr>
                <td> ${drink.select}</td>
                <td> ${drink.milk ? drink.milk : ''}</td>
                <td> ${drink.options ? drink.options.join(',') : ''}</td>
            </tr>    
            `;
        result += row;
    })
    result += "</table>";
    return result;
}

function getAllDrinks(){
    const forms = document.querySelectorAll("form");
    const result = [];
    forms.forEach((form) => {
        const drink = {};
        const select = form.querySelector("select").value;

        drink.select = select;
        const milk = form.querySelector('input[type="radio"]:checked');
        drink.milk = milk ? milk.value : null;

        const options = form.querySelectorAll('input[type="checkbox"]:checked');
        drink.options = Array.from(options).map(opt => opt.value);
        result.push(drink);
    })
    return result;
}
