// console.log(document.forms[0])
// console.log(document.forms.registration)

// let form = document.forms.registration

// let elem = form.elements.email

// console.log(elem.form)

// console.log(form.elements[2])
// console.log(form.elements[2].value)

// console.log(form.elements[5].checked)

// // вытащить класс элемента
// console.log(form.elements[5].classList[0])


// console.log(form.elements[3].options)

// console.log(form.elements[3].selectedIndex)

// //значение value у элемента
// console.log(form.elements[3].value)

// // Так можно выбрать город по умолчанию
// console.log(form.elements[3].options[1].selected=true)

// // пишем в переменную form = изем regitation
// let form = document.forms.registration
// // затем в нем выбираем 3 эелемент
// let select = form.elements[3];
// // пишем что хотим добавить
// let option = new Option("Челябинск", "Chelyabinsk")
// // добавляем в конец 3 элемента
// select[select.options.length] = option


// let form = document.forms.registration
// let email = form.elements[1]

// email.onblur = () => {
//     if(!email.value.includes('@') || !email.value.
//     includes('.')){
//         let error = document.querySelector('.error')
//         error.innerHTML = "Email error"

//     }
// }

// email.onfocus = () => {
//     let error = document.querySelector('.error');
//     error.innerHTML = ''
// }


// Проверить наводку на элелемент
// email.addEventListener('focus', () => console.log('focus'));
// email.addEventListener('blur', () => console.log('blur'));

// // наводка на объект учитывая родителя
// email.addEventListener('focusin', () => console.log('focusin'));
// email.addEventListener('focusout', () => console.log('focusout'));


// // при вводе в поле email и нажали enter = выводим что там было
// email.addEventListener('change', () => console.log(email.value))

// // при вводе в поле email = выводим кажджый символ
// email.addEventListener('input', () => console.log(email.value))



// function subm(event){
//     event.preventDefault();
//     console.log('sadasd')
// }



// // 1 задание
// // пишем в переменную form = изем regitation
// let form = document.forms.registration
// // затем в нем выбираем 3 эелемент
// let select = form.elements[0];
// // пишем что хотим добавить
// let option = new Option("Классика", "классика")
// // добавляем в конец 3 элемента
// select[select.options.length] = option

// form.elements[0].options[select.options.length-1].selected=true



// // Задание на редактор
// function createTextarea() {
//     let div = document.querySelector('.textarea-div');
    
//     let textarea = document.createElement('textarea');
//     textarea.value = div.innerText;
    
//     div.innerHTML = '';
//     div.appendChild(textarea);
    
//     textarea.focus();
    
//     textarea.addEventListener("blur", function() {
//         // Создаем div с обновленным текстом
//         let div = document.createElement("div");
//         div.innerHTML = this.value;

//         // Заменяем textarea на div
//         this.parentNode.replaceChild(div, this);
//     });

//   }


// 3 

// let data = fetch('https://jsonplaceholder.typicode.com/')

// consolelog(data.ok)


// // вынимать с сайта todoшки
// let elem = document.querySelector(".wrap")
// async function getData(){
//   let data = await fetch('https://jsonplaceholder.typicode.com/todos');
//   if (data.ok){
//     let todos = await data.json()
//     todos.forEach(todo => {
//       return elem.insertAdjacentHTML('beforeend',
//       `<h2> ${todo.title} </h2>`)
//     });
//   }
// }

// getData()



// let elem = document.querySelector(".wrap")
// async function getData(){
//   let data = await fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     headers:{
//       'Content-Type': "application/json",
//       'Authorization': `Barer ${token}`
//     },
//     body: JSON.stringify(newPost)
//   });
//   if (data.ok){
//     console.log(data.headers.get('Content-Type'))
//     let todo = await data.json();
//     printInfo(todo)
//     console.log(todo)
//   }
// }

// getData()


// function getDATA(){
//   fetch('https://jsonplaceholder.typicode.com/todos');
//     .then(data => data.json())
//     .then(todos => printInfo(todos))
// }


// function printIngo(todos){
//   todos.forEach(todo => {
//     return Element.insertAdjacentHTML('beforeens',
//     `<h2>${todo.title} </h2>`)
//   });
// }




// Редактирование TD по клику 


// function textareafunc() {
//     let div = document.querySelector('.divchik');
    
//     let textarea = document.createElement('textarea');
//     textarea.value = div.innerText;
    
//     div.innerHTML = '';
//     div.appendChild(textarea);
    
//     textarea.focus();
    
//     textarea.addEventListener("blur", function() {
//         // Создаем div с обновленным текстом
//         let div = document.createElement("table");
//         div.innerHTML = this.value;

//         // Заменяем textarea на div
//         this.parentNode.replaceChild(div, this);
//     });

//   }



// Редактирование TD по клику
// document.querySelector('table').addEventListener('click', function(event) {
//   let td = event.target;
//   if (!td.classList.contains('edit')) return;

//   let textarea = document.createElement('textarea');
//   textarea.value = td.innerText;

//   td.innerHTML = '';
//   td.appendChild(textarea);

//   td.classList.add('edit-mode');
//   td.querySelector('textarea').focus();
// });

// document.querySelector('table').addEventListener('blur', function(event) {
//   let textarea = event.target;
//   if (!textarea.tagName === 'TEXTAREA') return;

//   let td = textarea.parentNode;
//    div = document.createElement('div');
//   div.innerText = textarea.value;

//   td.innerHTML = '';
//   td.appendChild(div);

//   td.classList.remove('edit-mode');
// });




// Депозитный калькулятор сложно

// document.getElementById("calculator").addEventListener("submit", function(event){
//   event.preventDefault();
  
//   let depositAmount = parseFloat(document.getElementById("deposit").value);
//   let interestRate = parseFloat(document.getElementById("interes").value);
//   let timePeriod = parseFloat(document.getElementById("time").value);
    
//   let futureAmount = depositAmount * Math.pow((1 + interestRate / 100), timePeriod);

//   document.getElementById("result").innerHTML = "Сумма вклада через " + timePeriod + " года(лет) будет составлять " + futureAmount.toFixed(2) + " рублей.";
// });