require('dotenv').config({ path: '.env' })
const { startMessage } = require('./constants/defaultMessages')
const { Telegraf } = require('telegraf')
const axios = require('axios')
const moment = require('moment')
const telegrafGetChatMembers = require('telegraf-getchatmembers')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(telegrafGetChatMembers)
bot.start(async (ctx) => {
    try {
        
        const chat = await ctx.getChat();
        const newUser = await axios.post('http://localhost:4000/api/users', {
            status: 'ACTIVE',
            authDate: moment().format('YYYY MM DD HH:mm'),
            ...chat
        })
        
        await ctx.replyWithHTML(startMessage(chat.first_name))
        if (newUser.data.latecomer) {
            await axios.post('http://localhost:4000/api/latecomer', {
                chat_id: newUser.data.id
            })
        }
    } catch (err) {
        console.error(err)
    }

})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))