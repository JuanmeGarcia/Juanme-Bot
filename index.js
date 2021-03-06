const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.commands = new Collection();


const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
}

fs.readdir("./commands/", (err, files) => {
    if(err) console.error(error)
    let jsfiles = files.filter(f => f.split(".").pop() === "js")
    if (jsfiles.length <= 0) {
        return console.log("No commands to log in FOLDER NAME")
    }
    console.log(`Loading ${jsfiles.length} commands from FOLDER NAME...`)
    jsfiles.forEach((f,i) => {
        let props = require(`./commands/${f}`)
        console.log(`${i + 1}: ${f} loaded!`)
        client.commands.set(f, props)
    })
})


client.login(config.token);