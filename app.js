const {Client, Events, SlashCommandBuilder} = require('discord.js');
const {token} = require('./config.json');
const client = new Client({ intents: [] });

client.once(Events.ClientReady, c => {
    console.log(`dootbot is awake!`);
    client.user.setActivity('dootbot is awake!')
    const ping = new SlashCommandBuilder()
        .setName("doot")
        .setDescription("responds bot :3");
    const hello = new SlashCommandBuilder()
        .setName("hello")
        .setDescription("greets user");
    client.application.commands.create(ping);
})

client.on(Events.InteractionCreate, interaction => {
    if (interaction.commandName === "doot") {
        interaction.reply("bot :3");
    }
    if (interaction.commandName === "hello") {
        const userOption = interaction.options.getUser(`user`);
        if(userOption) {
            interaction.reply(`Hello ${userOption.toString()}`);
        }
        else {
            interaction.reply("Hello!");
        }
    }
});

client.login(token);