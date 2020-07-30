# JS_tasks

<strong>Task 1.1</strong><br>
Написать программу, которая проделывает следующие операции. Запрашивает у пользователя число, потом последовательно задает вопрос “Сколько отнять/прибавить/умножить/разделить от предыдущего результата?. По окончании вывести пользователю алерт, содержащий формулу и результат (напр., (((6 + 10) - 5) * 20) / 2 = 110)

<strong>Task 1.2</strong><br>
Создать 3 переменные разных типов и вывести в консоль для каждой из них содержание следующего типа - Переменная <имя_переменной> имеет тип - <тип_переменной>

<strong>Task 1.3</strong><br>
Создать две переменных числовых, сложить их и вывести их сумму в консоль в виде как будто это были строки. Пример а = 2 в = 4 вывод в консоль: 24.  Почитайте про метод toString()

<strong>Task 2.1</strong><br>
При открытии страницы поприветствовать пользователя и спросить его имя, далее обратившись по имени, спросить как дела, далее надо спросить, что он кушал на обед, после его ответа, надо ему вывести сообщение о том, что "К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки", далее попрощаться с пользователем и пользователь также должен попрощаться. В консоль вывести диалог формата:<br>
-R<br>
-Василий<br>
-Как Василий Ваши дела?<br>
-Пока не родила<br>
-Чем потчевал сегодня барин?<br>
-Котлетки с пюрешкой<br>
-"К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....<br>
-Пока бездушная машина<br>

<strong>Task 2.2</strong><br>
Написать цикл-перебор (for), в котором будут выводится все числа кратные 5 или 2 в заданном диапазоне, запрошенном у пользователя.

<strong>Task 3.1</strong><br>
Создать валидатор, запросить у пользователя логин и пароль. Далее попросить юзера залогиниться поочередно запросив, ввести данные. Если неверно введен логин, сообщить, что такого пользователя нет и заново попросить ввести данные, если неверно введён пароль, попросить ввести заново. При успешном вводе вывести сообщение об успехе.

<strong>Task 3.2</strong><br>
К предыдущей задаче добавить разного рода валидации с сообщениями. Проверка регистра, можно длину строки, можно сделать чтобы пароль был только числовым и так далее. Какие придумаете такие и реализовывайте.

<strong>Task 3.3</strong><br>
Есть массив объектов<br>
var persons = [<br>
    {id: 10, name: 'Vasya', age: 28},<br>
    {id: 11, name: 'Kolya', age: 16, parentId: 14},<br>
    {id: 12, name: 'Anna', age: 37},<br>
    {id: 13, name: 'Zoya', age: 9, parentId: 12},<br>
    {id: 14, name: 'Arkadiy', age: 45},<br>
];<br>
Разделить его на совершеннолетних и несовершеннолетних. Для совершеннолетних людей узнать профессию у пользователя, обратившись к нему по имени и добавить соответствующего ребенка из несовершеннолетних.

<strong>Task 4.1</strong><br>
let personList = [<br>
    {id: 10, name: 'Vasya', age: 28, child: {name: 'Valera'}},<br>
    {id: 11, name: 'Kolya', age: 78, child: {}},<br>
    {id: 12, name: 'Anna', age: 37, child: {name: 'Sveta'}},<br>
    {id: 13, name: 'Zoya', age: 22, child: {name: 'Sergey'}},<br>
    {id: 14, name: 'Arkadiy', age: 45, child: {}},<br>
];<br>
Написать функцию isPersonHasNoChild(), которая возвращает true, если нет ребёнка и false если есть.

<strong>Task 4.2</strong><br>
Если ребёнка нет, то вызвать функцию, которая добавляет его сооттветствующему персону, данные ребёнка, запрашиваются у пользователя.

<strong>Task 4.3</strong><br>
Проверить все объекты в массиве personList и в конце вывести в консоль.

<strong>Task 5.1</strong><br>
Написать функцию, которая принимает в виде параметров число и коэффициент, в зависимости от значения первого параметра вы столько раз добавите числа в массив с помощью пользовательского ввода. С помощью коэффициента увеличите или уменьшите значения в массиве.(Узнать у пользователя) В консоль вывести 2 массива, до и после применения коэффициента.

<strong>Task 5.2</strong><br>
Написать функцию которая возвращает строку обрезанную в зависимости от 
переданных в нее значений от и до, здесь Вам нужно почитать про работу slice() или substring() для строк

<strong>Task 5.3</strong><br>
Создать функцию, при вызове которой, будет формироваться объект PERSON с помощью пользовательского ввода, она должна запросить имя, фамилию, возраст, спросить есть ли супруг, если да, то сформировать свойство "супруг (перевод посмотрите)", в котором будет лежать объект с переданными от пользователя именем и возрастом. Далее мы спрашиваем у пользователя, есть ли дети, если есть, то узнаем их количество, при наличии детей, создается свойство children в котором вызывается функция, которая возвращает массив объектов с информацией о детях(имя, возраст), в конце узнать профессию и вывести в консоль сформированный объект

<strong>Task 5.4</strong><br>
Есть массив данных var data= [<br>
    'молоко', 
    34, 
    717, 
    false, 
    'копы', 
    true, 
    74, 
    108, 
    'погроммист', 
    'котик', 
    'мемчик', 
    true, 
    true, 
    666, 
    false 
];<br>
Надо написать функцию, которая сортирует массив на другие в зависимости от типа данных. Для числового массива написать функцию, которая  увеличит все числа в два раза. Для булиновского массива написать функцию, которая значения поменяет на обратные. Для строкового, написать функцию, которая меняет все буквы О на Л, посмотрите работу split() и join() для массивов. Функции должны быть универсальными.

<strong>Task 5.5</strong><br>
let family = {<br>
    amount: 5,<br>
    familyMembers: [<br>
        {name: 'Borya', age: 15},<br>
        {name: 'Tolya', age: 54},<br>
        {name: 'Anjela', age: 45},<br>
        {name: 'Snejana', age: 14},<br>
        {name: 'Gavriil', age: 24},<br>
],<br>
}<br>
Написать метод для объекта family который вернёт самого старого члена семьи и добавит его в объект в качестве нового свойства.

<strong>Task 6.1</strong><br>
Создать функцию, которая является свойством объекта и генерирует новые свойства. В конце вывести объект с этими свойствами. Пример:
object.generator = [{propertyTitle: 'name', propertyValue: 'Sasha'}, {propertyTitle: 'age', propertyValue: 17}, {propertyTitle: 'hobbies', propertyValue: ['reading', 'PS4']}]; console.log(object) => { name: 'Sasha', age: 17} Подсказка - функция генератор делается через дескриптор с помощью сеттера, геттер ей не нужен.<br>
<br>
<strong>Task 6.1</strong><br>
Создать метод объекта, при вызове которого будут меняться свойства нашего объекта или создаваться новый с такими же свойствами, в новом объекте этого метода быть не должно. Код для изменения и создания будет одинаковый.
