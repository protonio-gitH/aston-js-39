//1. 
// Принцип KISS (Keep It Simple, Stupid) предлагает, что решение должно быть 
// максимально простым. Это применимо к разработке программного обеспечения, где 
// простота является ключом к понятности и поддерживаемости. 
// Его проявление в программировании может включать в себя избегание излишней сложности в архитектуре, 
// коде и функциональности, а также упрощение интерфейсов и проектирование понятного пользовательского опыта.
// 
// Принцип DRY (Don't Repeat Yourself) утверждает, что каждая часть 
// знания или логики должна иметь единственное, несомненное представление в системе. 
// Это означает, что повторяющиеся участки кода или логики должны быть вынесены в отдельные места для повторного использования. 
// Повторения приводят к увеличению сложности изменения и обслуживания кода.
//
// YAGNI (You Aren't Gonna Need It) - это принцип, призывающий избегать реализации функциональности, 
// которая не требуется в настоящий момент.
// Этот принцип подталкивает разработчиков к избежанию излишней сложности и возможным проблемам, 
// обусловленным реализацией функциональности, которая никогда не будет использоваться.
// 
// Антипаттерны
// 1. Spaghetti code (Код-шпагетти): Беспорядочный и сложночитаемый код с запутанной структурой. 
// 2. Big Ball of Mud (Большой комок грязи): Неструктурированный, плохо организованный код, 
// в котором трудно разобраться и проводить изменения. 
// 3. God object (Объект-бог): Класс или объект, который слишком много знает и делает, нарушая принцип единственной ответственности. 
// 4. Copy-Paste Programming (Программирование методом копирования-вставки): Повторное использование кода путем 
// копирования и вставки вместо выделения общей логики в отдельные функции или модули. 


//2.LocalStorage:
// LocalStorage представляет собой механизм хранения данных, который позволяет сохранять данные в виде пар ключ-значение в браузере.
// Данные в LocalStorage сохраняются даже после закрытия браузера и перезапуска компьютера, пока их не удалить явным образом или не произойдет очистка кеша.
// Данные в LocalStorage доступны для всех вкладок и окон в рамках одного домена.
// Данные в LocalStorage хранятся на неограниченное время, пока их не удалить.
// SessionStorage:
// SessionStorage - это механизм хранения данных, аналогичный LocalStorage, но с одним ключевым отличием: данные в SessionStorage хранятся только в течение сеанса браузера.
// Данные в SessionStorage доступны только для текущего сеанса браузера, и они удаляются после закрытия вкладки или окна браузера.
// SessionStorage также использует пары ключ-значение и доступен для всех вкладок и окон в рамках одного домена.
// Cookie:
// Cookie - это небольшие фрагменты данных, которые веб-сайт отправляет браузеру и хранит на компьютере пользователя в виде текстового файла.
// Cookie используются для хранения информации о сеансе, настроек пользователя и других данных, которые могут быть полезны для веб-сайта.
// Cookie имеют определенное время жизни, которое можно указать при их создании. Они могут быть установлены на определенное количество дней, после чего истекает их срок действия.
// Cookie доступны для всех вкладок и окон в рамках одного домена, и они отправляются с каждым запросом к серверу в этом домене.

//3.Элемент <!DOCTYPE> предназначен для указания типа текущего документа — DTD (document type definition, описание типа документа).							
// Открывающий и закрывающий тег <html>: обрамляет весь контент документа.							
// Тег <head>: содержит метаинформацию о документе, такую как заголовок страницы, ссылки на стили и скрипты.							
// "Тег <title>: устанавливает заголовок страницы, который отображается во вкладке браузера.
// (находится внутри <head>)"							
// Тег <body>: содержит всю видимую часть документа, такую как текст, изображения, ссылки и другие элементы.	

// BEM
// BEM (Block Element Modifier) - это методология нейминга классов в CSS, которая позволяет структурировать код, делать его понятным и удобным для изменений. BEM состоит из трех основных составляющих:							
// 1. Блок (block) - независимый компонент страницы, который может содержать другие элементы или модификаторы. Например, кнопка, форма, меню и т.д.							
// 2. Элемент (element) - часть блока, которая не может использоваться вне контекста блока. Названия элементов должны отображаться в структуре классов в формате ""block__element"". Например, input внутри формы.				
// 3. Модификатор (modifier) - свойство блока или элемента, меняющее внешний вид или поведение. Модификаторы используются для создания различных вариаций блоков и элементов. Названия модификаторов должны отображаться в структуре классов в формате ""block__element_mod-value"". Например, кнопка с модификатором disabled.			


//4.Композиция функций. Объединение нескольких функций в одну для создания более сложной функции.							
// Каррирование. Превращение функции с несколькими аргументами в функцию с одним аргументом, которая возвращает функцию с оставшимися аргументами.							
// Ленивые вычисления. Откладывание вычислений до тех пор, пока не потребуется результат.							
// Рекурсия. Использование рекурсии для решения задач, которые можно разбить на более простые подзадачи.							
// Хвостовая рекурсия. Оптимизация рекурсии путём переноса вычислений в конец функции.							
// Свёртка. Применение функции к каждому элементу коллекции и объединение результатов.							
// Фильтр. Создание новой коллекции, состоящей только из элементов, удовлетворяющих определённому условию.							
// Отображение. Применение функции к каждому элементу коллекции и получение новой коллекции с результатами.							
// Разделение. Разделение коллекции на две части на основе определённого условия.							
// Слияние. Объединение двух коллекций в одну.			

//5.static — значение по умолчанию. Элемент располагается в обычном потоке документа.							
// relative — элемент позиционируется относительно своего обычного положения.							
// absolute — элемент позиционируется относительно ближайшего позиционированного предка или окна браузера.							
// fixed — элемент позиционируется относительно окна браузера.							
// sticky — элемент ведёт себя как относительный элемент до тех пор, пока не достигнет определённой точки прокрутки, после чего он ведёт себя как фиксированный элемент.	


//6. Вес = 0 :							
// Комбинаторы +, >, ~, универсальный селектор * и псевдокласс :not() веса не имеют.							
// Вес = 1:							
// селекторы типов элементов (например, h1) и псевдоэлементов (например, ::before).							
// Вес = 10:							
// селекторы классов (например, .example), селекторы атрибутов (например, [type="radio"]) и псевдоклассов (например, :hover).							
// Вес = 100:							
// селекторы идентификаторов (например, #example).							
// Вес = 1000:							
// Стили заданные через аттрибут style							
// !important							
// Когда при объявлении стиля используется модификатор !important, это объявление получает наивысший приоритет среди всех прочих объявлений							