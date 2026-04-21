let count = 2;


const btn = document.querySelector(".add-button");
const container = document.querySelector("#container");

btn.addEventListener("click", () => {
        container.innerHTML+= `
        <form>
            <fieldset class="beverage">
        <h4 class="beverage-count">Напиток №${count}</h4>
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
      </form>
            `;
        count++;
    });