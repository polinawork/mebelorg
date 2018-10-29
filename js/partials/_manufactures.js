ymaps.ready(init);

function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [59.939521, 30.314930],
        zoom: 12
    }); 
    
    var myPlacemark = new ymaps.Placemark([59.958963, 30.405865], {
        hintContent: 'Магазин',
        balloonContent: '<a href="#">БЦ Бенуа</a><br>Пискарёвский пр., 2 <br>Тел. 336-42-54 <br>Время работы 10:00 - 18:00'
    },{
        iconLayout: 'default#image',
        iconImageHref: './img/marker.svg'
    });
    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.behaviors.disable(['scrollZoom']);

    // Создадим собственный макет выпадающего списка.
    var ListBoxLayout = ymaps.templateLayoutFactory.createClass(
        "<div class='my-class'>" + "<button id='my-listbox-header' class='company-shops__choose-city' data-toggle='dropdown'>" +
            "{{data.title}} <span></span>" +
        "</button>" +
        "<ul id='my-listbox'" +
            " class='dropdown-menu company-shops__list' role='menu' aria-labelledby='dropdownMenu'" +
            " style='display: {% if state.expanded %}block{% else %}none{% endif %};'></ul>", {

        build: function() {
            ListBoxLayout.superclass.build.call(this);

            this.childContainerElement = $('#my-listbox').get(0);
            this.events.fire('childcontainerchange', {
                newChildContainerElement: this.childContainerElement,
                oldChildContainerElement: null
            });
        },
        getChildContainerElement: function () {
            return this.childContainerElement;
        },

        clear: function () {
            this.events.fire('childcontainerchange', {
                newChildContainerElement: null,
                oldChildContainerElement: this.childContainerElement
            });
            this.childContainerElement = null;
            ListBoxLayout.superclass.clear.call(this);
        }
    }),

    ListBoxItemLayout = ymaps.templateLayoutFactory.createClass(
        "<li><a>{{data.content}}</a></li>" + "</div>"
    ),


        listBoxItems = [
        new ymaps.control.ListBoxItem({
            data: {
                content: 'Санкт-Петербург',
                center: [59.939521, 30.314930],
                zoom: 12
            }
        }),

        new ymaps.control.ListBoxItem({
            data: {
                content: 'Москва',
                center: [55.751574, 37.573856],
                zoom: 12
            }
        }),
        new ymaps.control.ListBoxItem({
            data: {
                content: 'Омск',
                center: [54.990215, 73.365535],
                zoom: 12
            }
        })
    ],

    listBox = new ymaps.control.ListBox({
            items: listBoxItems,
            data: {
                title: 'Выберите город'
            },
            options: {

                layout: ListBoxLayout,

                itemLayout: ListBoxItemLayout
            }
    });

    listBox.events.add('click', function (e) {

        var item = e.get('target');

        if (item != listBox) {
            myMap.setCenter(
                item.data.get('center'),
                item.data.get('zoom')
            );
        }
    });

    myMap.controls.add(listBox, {float: 'left'});


}
