exports.startMessage = (name) => {
    return `Привет, ${name}\nЧерез пару дней мы начнём\nА пока\n✨ сделай вход в свой личный кабинет <a href='https://telegraf.js.org/classes/context.html#replywithhtml'>ссылка</a>\n✨ добавляйся в чат всех участников <a href='https://telegraf.js.org/classes/context.html#replywithhtml'>ссылка</a>\n\nНиже ты найдёшь перечень косметики, которая нам понадобиться с ссылками, где можно приобрести бюджетные варианты на случай, если у тебя чего-то не хватает\n\n${getListOfCosmetics()}`
}

const listOfCosmetics = ['хз шо', 'что-то другое']

const getListOfCosmetics = () => {
 return listOfCosmetics.map(item=>{
     return `- ${item}`
 }).join('\n')
}