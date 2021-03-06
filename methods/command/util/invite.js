const CommandInterface = require('../../commandinterface.js');

module.exports = new CommandInterface({
	
	alias:["invite","link"],

	args:"",

	desc:"Want to invite this bot to another server? Use this command!",

	example:[],

	related:["owo guildlink"],

	cooldown:5000,
	half:100,
	six:500,

	execute: function(p){
		const embed = {
			"title":"OwO! Click me to invite me to your server!",
			"url":"https://discordapp.com/api/oauth2/authorize?client_id=408785106942164992&permissions=444480&scope=bot",
			"color": 4886754,
			"thumbnail":{"url":"https://cdn.discordapp.com/app-icons/408785106942164992/00d934dce5e41c9e956aca2fd3461212.png"},
		};
		p.msg.channel.send({embed})
			.catch(err => channel.send("**🚫 |** I don't have permission to send embedded links! :c")
				.catch(err => console.error(err)));
	}

})
