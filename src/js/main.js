//дожидаемся полной загрузки страницы
window.onload = function () {
    // список фильмов и фильтр
    const lists = ['Лакричная пицца', 'Трагедия Макбета', 'Аллея кошмаров', 'Морбиус','Kimi','Смерть на Ниле','Большой баг','Бэтмен','Я краснею']

    const searchFilm__btn = films.searchFilm__btn; //получаем button "поиск" из html
    searchFilm__btn.addEventListener("click", searchFilm); // добавляем слушателя на событие клика

    const throwOff = films.throwOff; //получаем button "сбросить" из html
    throwOff.addEventListener("click", throwOffFilms); // добавляем слушателя на событие клика

    // const listbtn = typeCatalog.typelist; //получаем button "list" из html
    const typelist = document.getElementsByName("typelist")[0];
    typelist.addEventListener("click", showList); // добавляем слушателя на событие клика
    
    const typegrid = document.getElementsByName("typegrid")[0];
    typegrid.addEventListener("click", showGrid); // добавляем слушателя на событие клика

    const showFormAddCatalog = document.getElementById("addCatalog__button");
    showFormAddCatalog.addEventListener("click", showFormCreateCatalog); // добавляем слушателя на событие клика

    const closeFormAddCatalog = document.getElementById("addCatalog__back");
    closeFormAddCatalog.addEventListener("click", closeFormCreateCatalog); // добавляем слушателя на событие клика

    const createFormAddCatalog = document.getElementById("addCatalog__create");
    createFormAddCatalog.addEventListener("click", addCatalog); // добавляем слушателя на событие клика

    const faq1 = document.getElementById("FAQ__quest1");
    faq1.addEventListener("click", showAnswer1); // добавляем слушателя на событие клика

    const faq2 = document.getElementById("FAQ__quest2");
    faq2.addEventListener("click", showAnswer2); // добавляем слушателя на событие клика
    
    const faq3 = document.getElementById("FAQ__quest3");
    faq3.addEventListener("click", showAnswer3); // добавляем слушателя на событие клика

    addAllFilms(lists); // первоначальное добавление всего списка фильмов

    function showAnswer1(){
        const container1 = document.getElementById('FAQ__containerShow1');
        if (container1.className.includes("FAQ__containerShow")){
            container1.classList.remove('FAQ__containerShow');
        }
        else{
            container1.classList.add('FAQ__containerShow');
        }
    }
    function showAnswer2(){
        const container2 = document.getElementById('FAQ__containerShow2');
        if (container2.className.includes("FAQ__containerShow")){
            container2.classList.remove('FAQ__containerShow');
        }
        else{
            container2.classList.add('FAQ__containerShow');
        }
    }
    function showAnswer3(){
        const container3 = document.getElementById('FAQ__containerShow3');
        if (container3.className.includes("FAQ__containerShow")){
            container3.classList.remove('FAQ__containerShow');
        }
        else{
            container3.classList.add('FAQ__containerShow');
        }
    }

    function addAllFilms(lists){ //добавляем все фильмы в список
        document.getElementById('advantages').innerHTML = ""; // очищаем список на экране

        lists.forEach(function(item, i, arr) { //добавляем все фильмы в список
            const li = document.createElement('li');
            li.setAttribute("class", "advantages__el main-page--size-xl");
            li.innerText = item;
            document.getElementById('advantages').appendChild(li);
        });
        return false;
    }
    
    function searchFilm(e){ // фильтр фильмов по названию
        e.preventDefault();
        console.log(e);
        const textfilmsInput = document.getElementById("filmsInput").value; // получаем данные из input
        const foundItems = lists.filter(item => (item.toLowerCase()).includes(textfilmsInput.toLowerCase()));
        if (foundItems.length > 0) {
            addAllFilms(foundItems);
        }
        else{
            addAllFilms(["Ничего не найдено."]);
        }
        return false;
    }

    function throwOffFilms(e){
        e.preventDefault();
        addAllFilms(lists);
    }

    function showList(e){
        e.preventDefault();
        document.getElementById("typelist").src="/assets/images/redlist.png";
        document.getElementById("typegrid").src="/assets/images/blackgrid.png";
        document.getElementsByClassName("articles")[0].classList.add('change-display');
    }
    function showGrid(e){
        e.preventDefault();
        document.getElementById("typegrid").src="/assets/images/redgrid.png";
        document.getElementById("typelist").src="/assets/images/blacklist.png";
        document.getElementsByClassName("articles")[0].classList.remove('change-display');
    }
    
    function showFormCreateCatalog(e){
        e.preventDefault();
        document.getElementById("addCatalog").classList.add('openform');
    }
    function closeFormCreateCatalog(e){
        e.preventDefault(e);
        document.getElementById("addCatalog").classList.remove('openform');
    }
    function addCatalog(e){
        e.preventDefault(e);

        const catalog__item = document.createElement("div");
        catalog__item.setAttribute('class', 'catalog__item');

        const catalog__img = document.createElement("img");
        catalog__img.setAttribute('class', 'catalog__img');
        catalog__img.setAttribute('alt', 'img');
        catalog__img.src= document.getElementById("addCatalog__ref").value;
        catalog__item.appendChild(catalog__img);

        const catalog__container = document.createElement("div");
        catalog__container.setAttribute('class', 'catalog__container');

        const catalog__title = document.createElement("h3");
        catalog__title.setAttribute('class', 'catalog__title');

        const catalog__strong = document.createElement("strong");
        catalog__strong.setAttribute('class', 'catalog__strong');
        catalog__strong.innerText = document.getElementById("addCatalog__title").value;
        catalog__title.appendChild(catalog__strong);

        catalog__container.appendChild(catalog__title);

        const catalog__text = document.createElement("p");
        catalog__text.setAttribute('class', 'catalog__text');
        catalog__text.innerText = document.getElementById("addCatalog__text").value;
        
        catalog__container.appendChild(catalog__text);

        
        const now = new Date().toLocaleDateString();;
        const date = document.createElement("date");
        date.setAttribute('class', 'catalog__date');
        var euro_date = now.split('.');
        var us_date = euro_date.reverse().join('-');
        date.setAttribute('datetime', us_date);
        date.innerText = now;

        catalog__container.appendChild(date);

        catalog__item.appendChild(catalog__container);

        document.getElementById("articles__catalog").appendChild(catalog__item);
    }
}
