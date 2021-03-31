exports.startMessage = (name) => {
    return `
Привет ${name}, 
Через пару дней мы начнём
А пока:
✨ сделай вход в свой личный кабинет на сайте https://www.bezmakeupa.com/ 
логин: твоя почта, 
пароль: номер телефона (380…)
✨ добавляйся в чат всех участников https://t.me/joinchat/whSaZZQ1Z6owN2My
✨ подпишись на страницу https://www.instagram.com/bezmakeupa.marafon/ (для прямых эфиров)

Ниже ты найдешь перечень косметики, которая нам понадобится с ссылками, где можно приобрести бюджетные варианты на случай, если у тебя чего-то не хватает

Каждый продукт советую проверять на сайтах и сравнивать, где выгоднее по цене, так как могут быть скидки. В некоторых пунктах есть варианты на выбор. Все средства максимально бюджетные, если хочется что-то более “дорогое” обязательно пиши мне, подберем индивидуально. Если посылки не успеют прийти к 1-2 дню марафона, не страшно, они нам понадобятся немного позже)

✨тон https://makeup.com.ua/product/72859/ 
✨консиллер https://kodi-professional.ua/dekorativnaya-kosmetika/lico/konsiler/konsiler-kodi-professional_-kolir-dark-beige_-6-ml/ 
✨скульптор https://makeup.com.ua/product/746145/ Rouge 
✨румяна https://makeup.com.ua/product/761896/ светло-розовые 
✨хайлайтер https://makeup.com.ua/product/738829/ 01
✨гель для бровей https://makeup.com.ua/product/921771/ 
✨карандаш для бровей https://makeup.com.ua/product/403681/ 
✨коричневый карандаш https://makeup.com.ua/product/663757/ и https://makeup.com.ua/product/598197/ 
✨черная подводка https://makeup.com.ua/product/761061/ и https://makeup.com.ua/product/374697/ 
✨тушь https://makeup.com.ua/product/145825/ 
✨тени коричневые https://makeup.com.ua/product/648085/ 410/430 
✨карандаш для губ нюд https://makeup.com.ua/product/398069/ 01 
✨карандаш для губ красный https://makeup.com.ua/product/663787/ #14 

✨спонж https://makeup.com.ua/product/240621/ 
✨кисть универсальная https://kodi-professional.ua/kisti-dlya-makiyazha/kisti-dlya-rumyan/kist_dlya_105/ и https://makeup.com.ua/product/492385/ 
✨для глаз 1 https://kodi-professional.ua/kisti-dlya-makiyazha/kisti-dlya-teney/kist_dlya_113/ 
✨для глаз 2 https://makeup.com.ua/product/458611/ 
✨скошенная https://kodi-professional.ua/kisti-dlya-makiyazha/kist-dlya-brovey/kist_dlya_115/ 

В этой палетке есть румяна, скульптор и абсолютно все тени https://makeup.com.ua/product/753583/ 
    `
}

const listOfCosmetics = ['хз шо', 'что-то другое']

const getListOfCosmetics = () => {
 return listOfCosmetics.map(item=>{
     return `- ${item}`
 }).join('\n')
}