// ─── 1. Selecting elements — all 5 ways ──────────────────────
// getElementById — single element, by id (no '#')
const title = document.getElementById("title");
console.log("getElementById:", title);

// querySelector — FIRST match using any CSS selector
const firstInfo = document.querySelector(".info");
console.log("querySelector .info:", firstInfo.innerText);

// querySelectorAll — EVERY match, returns a NodeList (has forEach)
const allInfos = document.querySelectorAll(".info");
console.log("querySelectorAll .info:", allInfos.length);

// getElementsByClassName — LIVE HTMLCollection (no forEach —
// convert with Array.from first)
const byClass = document.getElementsByClassName("info");
console.log("getElementsByClassName:", byClass.length);

// getElementsByTagName — live collection, by tag name
const byTag = document.getElementsByTagName("li");
console.log("getElementsByTagName li:", byTag.length);

// ─── 2. Changing content — innerText vs textContent vs innerHTML
const content = document.getElementById("content");

// innerText — visible text only (respects CSS, triggers layout)
console.log("innerText:", content.innerText);
// textContent — ALL text, even hidden; faster
console.log("textContent:", content.textContent);

// Writing plain text — tags are NOT parsed, shown literally:
content.innerText = "innerText wrote this";
// innerHTML — the string IS parsed as HTML (trusted content only!)
content.innerHTML = "innerHTML wrote <strong>this bold part</strong>";

title.innerText = "WELCOME!";
title.style.color = "red";

// Loop a NodeList and change each one
allInfos.forEach((el, index) => {
  el.innerText = `Info paragraph #${index + 1}`;
  el.style.color = "red";
});

// ─── 3. Attributes — get / set / remove / has / dataset ──────
const photo = document.getElementById("photo");

console.log("getAttribute alt:", photo.getAttribute("alt"));
console.log("hasAttribute title:", photo.hasAttribute("title"));

// setAttribute — change any HTML attribute
// (data-URI for a tiny green square — works without internet)
photo.setAttribute(
  "src",
  "data:image/svg+xml;utf8," +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'>" +
        "<rect width='80' height='80' fill='#4caf50'/>" +
        "<text x='40' y='46' text-anchor='middle' fill='white' " +
        "font-family='Arial' font-size='14'>OK</text></svg>",
    ),
);

// removeAttribute — delete an attribute entirely
photo.removeAttribute("title");
console.log("hasAttribute title after remove:", photo.hasAttribute("title"));

// dataset — custom data-* attributes (data-animal → dataset.animal)
console.log("dataset.animal:", photo.dataset.animal);
photo.dataset.animal = "cat"; // writes data-animal="cat" — check DevTools!

// ─── 4. Styles — element.style and classList ─────────────────
const box = document.getElementById("box");

// element.style — inline styles; CSS names become camelCase
// (background-color → backgroundColor)
box.style.borderRadius = "8px";

// classList — add / remove / toggle / contains
title.classList.add("highlight");
console.log("contains highlight?", title.classList.contains("highlight"));
title.classList.remove("highlight");
// toggle: adds if missing, removes if present (used in section 12)

// ─── 5. Traversing the DOM tree ──────────────────────────────
// Every element knows its parent, children and siblings.
const middle = document.getElementById("middle");

console.log("parentElement:", middle.parentElement.id);
console.log("previousElementSibling:", middle.previousElementSibling.innerText);
console.log("nextElementSibling:", middle.nextElementSibling.innerText);

const family = document.getElementById("family");
console.log("children:", family.children.length);
console.log("firstElementChild:", family.firstElementChild.innerText);
console.log("lastElementChild:", family.lastElementChild.innerText);

// ─── 6. Creating & inserting elements — all the ways ─────────
const fruits = document.getElementById("fruits");
const banana = document.getElementById("banana");

// createElement + appendChild — new element at the END
const apple = document.createElement("li");
apple.innerText = "Apple (appendChild → end)";
fruits.appendChild(apple);

// prepend — new element at the START
const mango = document.createElement("li");
mango.innerText = "Mango (prepend → start)";
fruits.prepend(mango);

// insertBefore(newNode, referenceNode) — before a specific child
const grape = document.createElement("li");
grape.innerText = "Grape (insertBefore banana)";
fruits.insertBefore(grape, banana);

// insertAdjacentHTML — HTML string at a position:
// 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'
fruits.insertAdjacentHTML(
  "beforeend",
  "<li><em>Kiwi (insertAdjacentHTML)</em></li>",
);

// cloneNode(true) — deep copy, children included (ids must stay unique!)
const bananaCopy = banana.cloneNode(true);
bananaCopy.removeAttribute("id");
bananaCopy.innerText = "Banana clone (cloneNode)";
fruits.appendChild(bananaCopy);

// ─── 7. Removing & replacing ─────────────────────────────────
// remove() — modern: the element removes itself
bananaCopy.remove();

// removeChild — older: the PARENT removes a child
fruits.removeChild(mango);

// replaceChild(newNode, oldNode)
const cherry = document.createElement("li");
cherry.innerText = "Cherry (replaced Grape)";
fruits.replaceChild(cherry, grape);

// ─── 8. Events — the event object tells you everything ───────
const clickBtn = document.getElementById("click-btn");

// click + dblclick on the same element
clickBtn.addEventListener("click", (e) => {
  // e.target = element that fired; e.clientX/Y = mouse position
  console.log(`click at (${e.clientX}, ${e.clientY}) on <${e.target.tagName}>`);
});
clickBtn.addEventListener("dblclick", () => {
  console.log("dblclick — double click detected!");
});

// mouseover / mouseout
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "khaki";
});
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "lightgray";
});

// 'input' fires every keystroke; e.target.value = current text
const nameInput = document.getElementById("name-input");
const livePreview = document.getElementById("live-preview");

nameInput.addEventListener("input", (e) => {
  livePreview.innerText = "You typed: " + e.target.value;
});

// 'keydown' tells you WHICH key via e.key
nameInput.addEventListener("keydown", (e) => {
  console.log("keydown:", e.key);
});

// 'change' — fires when a select (or finished input) changes value
document.getElementById("lang-select").addEventListener("change", (e) => {
  console.log("change: you picked", e.target.value);
});

// removeEventListener — needs a NAMED function (same reference!)
const onceBtn = document.getElementById("once-btn");
function handleOnce() {
  console.log("This listener removed itself — clicking again does nothing.");
  onceBtn.removeEventListener("click", handleOnce);
}
onceBtn.addEventListener("click", handleOnce);
// shortcut for the same idea: addEventListener("click", fn, { once: true })

// ─── 9. Bubbling & event delegation ──────────────────────────
// Events BUBBLE up from the clicked element to its ancestors.
// Delegation: ONE listener on the parent handles ALL child buttons
// — even buttons added later.
const colors = document.getElementById("colors");

colors.addEventListener("click", (e) => {
  // e.target = actually clicked; e.currentTarget = listener's owner
  if (e.target.tagName !== "BUTTON") return; // ignore clicks on the div
  colors.style.borderColor = e.target.dataset.color;
  console.log(
    `bubbled: target=<${e.target.tagName}>, currentTarget=#${e.currentTarget.id}`,
  );
});

// ─── 10. Form submit + preventDefault + validation ───────────
const form = document.getElementById("login");
const loginMsg = document.getElementById("login-msg");
const userInput = document.getElementById("user");

form.addEventListener("submit", (e) => {
  // Stop the page from reloading (default form behavior)
  e.preventDefault();

  const user = userInput.value.trim();

  if (!user) {
    loginMsg.style.color = "red";
    loginMsg.innerText = "Name required";
    return; // stop here on error
  }

  loginMsg.style.color = "green";
  loginMsg.innerText = `Welcome, ${user}!`;
});

// ─── 11. Mini project: to-do list (everything combined) ──────
// Uses: create/insert (6), remove (7), delegation (9),
// preventDefault (10), classList (4), dataset (3), traversal (5).
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");

function updateCount() {
  todoCount.innerText = `${todoList.children.length} tasks`;
}

// submit on the FORM → the Enter key works too, not just the button
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerText = text + " ";

  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.dataset.action = "delete";
  li.appendChild(delBtn);

  todoList.appendChild(li);
  todoInput.value = "";
  updateCount();
});

// ONE delegated listener for every task — even future ones
todoList.addEventListener("click", (e) => {
  const li = e.target.closest("li"); // walk UP to the nearest <li>
  if (!li) return;

  if (e.target.dataset.action === "delete") {
    li.remove();
  } else {
    li.classList.toggle("done"); // click the text → strike through
  }
  updateCount();
});

// ─── 12. Theme toggle with classList.toggle ──────────────────
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Bonus: keyboard shortcut — press "d" anywhere to toggle theme
document.addEventListener("keydown", (e) => {
  if (e.key === "d" && e.target.tagName !== "INPUT") {
    document.body.classList.toggle("dark");
  }
});

console.log("Demo loaded. Try the page!");
