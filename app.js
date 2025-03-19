const {Client, Events, EmbedBuilder, SlashCommandBuilder} = require('discord.js');
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
        .setDescription("greets user")
        .addUserOption(option => 
            option
            .setName('user')
            .setDescription('dootbot greets a specific user')
            .setRequired(false)
        );
    
    const embed = new SlashCommandBuilder()
        .setName("embed")
        .setDescription("Shows embed")


    client.application.commands.create(ping);
    client.application.commands.create(hello);
    client.application.commands.create(embed);
})

client.on(Events.InteractionCreate, interaction => {
    if (interaction.commandName === "doot") {
        interaction.reply("bot :3");
    }
    if (interaction.commandName === "hello") {
        const userOption = interaction.options.getUser(`user`);
        console.log(userOption.id);
        const rjInteractions = [
            `Hey there ${userOption.toString()}! dootbot ready to report!`,
            `Hey ${userOption.toString()}! Ready to play some more pool?`,
            `Perchance, ${userOption.toString()}`,
            `${userOption.toString()} stop bothering me.`
        ];
        const hoseaInteractions = [
            `Hey there ${userOption.toString()}! dootbot ready to report!`,
            `Ah, the one and only ${userOption.toString()}. Legendary music producer`,
            `I MIGHT say hello, ${userOption.toString()}`,
            `Don't put off assignments until June again! ${userOption.toString()}`
        ];
        const jadenInteractions = [
            `Hey there ${userOption.toString()}! dootbot ready to report!`,
            `Hello Mr. Full Timer ${userOption.toString()}`,
            `Dead By Daylight? ${userOption.toString()}`,
            `Hey ${userOption.toString()}! Did the Mariners win today?`
        ];
        const daelanInteractions = [
            `Hey there ${userOption.toString()}! dootbot ready to report!`,
            `Hiya ${userOption.toString()}! Hows the job search going?`,
            `Time to play some Valorant? ${userOption.toString()}`,
            `Hey ${userOption.toString()}, I forgot how to set up powershell, could you teach me?`
        ];
        if(userOption) {
            //RJ lines
            if (userOption.id === "786791421331505173") {
                interaction.reply(rjInteractions[Math.floor(Math.random() * 4)]);
            }
            // Hosea lines
            if(userOption.id === "364634982204964866") {
                interaction.reply(hoseaInteractions[Math.floor(Math.random() * 4)]);
            }
            //Jaden lines
            if(userOption.id === "1087225944508465202") {
                interaction.reply(jadenInteractions[Math.floor(Math.random() * 4)]);
            }
            //Daelan lines
            if(userOption.id === "416015336207286282") {
                interaction.reply(daelanInteractions[Math.floor(Math.random() * 4)]);
            }
        }
        else {
            interaction.reply("Hello good person! dootbot is woke and ready to go!");
        }
    }
    if (interaction.commandName === "embed") {
        const embed = new EmbedBuilder()
            .setTitle(`A picture`)
            .setDescription('RJ sucks ass at bowling')
            .setAuthor({name: "RJ"})
            .setImage('https://photos.fife.usercontent.google.com/pw/AP1GczP191QS7NrRGwfyHTp_9a537p28Pe5Sp8yAit75LG67iiUO0nkk378umw=w689-h919-s-no-gm?authuser=0');
        interaction.reply({embeds: [embed]})
    }
});

client.login(token);