const inspire = require("../../commands/inspire");
const sadWords=['sad', 'depressed', 'unhappy', 'angry', 'crying', 'annoyed'];
require('dotenv').config();

module.exports = (client, Discord, message) => {
	const prefix = process.env.PREFIX;
	if (message.author.bot) return;
	if(sadWords.some(word=>message.content.includes(word))){
		inspire.execute(client, message);
	}
	if(!message.content.startsWith(prefix)){ 
		switch(message.author.id){
			case process.env.sima:
				if(message.channel.id === process.env.videos && message.attachments.size > 0 && Math.random() < 0.8){message.channel.send('Stop sending weirdass videos');} 
				else if(Math.random() < 0.05){message.reply('die');}
				break;
			case process.env.simaAlt:
				if(message.channel.id === process.env.videos && message.attachments.size > 0 && Math.random() < 0.8){message.channel.send('Stop sending weirdass videos');}
				else if(Math.random() < 0.05){message.reply('die');}
				break;
			case process.env.aysan:
				if(message.channel.id === process.env.pics && message.attachments.size > 0){
					Math.random() < 0.5 ? message.react('🫀') : message.react('💯');
				}
				if(Math.random()<0.05){
					if(Math.random() < 0.3){
						message.react('🇳');
						message.react('🇮');
						message.react('🇨');
						message.react('🇪');
						message.react('🇱');
						message.react('🇦');
						message.react('🇩');
						message.react('🇾');
					} else {
						message.react(`🇧`);
						message.react(`🇮`);
						message.react(`🇹`);
						message.react(`🇨`);
						message.react(`🇭`);
					}
				}
				break;
			case process.env.ard:
				if(Math.random() < 0.05){
					if(Math.random() < 0.4){
						message.react('🇵');
						message.react('🇮');
						message.react('🇰');
						message.react('🇦');
						message.react('🇨');
						message.react('🇭');
						message.react('🇺');
					}else{
						message.react('🦝');
					}
				}
				break;
			case process.env.rafi:
				if(Math.random() < 0.05){message.react('💯');}
				break;
			case process.env.rafiAlt:
				if(Math.random() < 0.05){message.react('💯');}
				break;
			default:
				if(message.content.includes('hentai') || message.content.includes('porn')){
					message.react('🍑');
				}
				if(message.content.includes('dick') || message.content.includes('pija')){
					message.react('🍆');
				} 
				if(message.content.includes('mate')){
					message.react('🧉');
				}
				if(message.content.toLowerCase().startsWith('whats') || message.content.toLowerCase().startsWith(`what is`)|| message.content.toLowerCase().startsWith(`what's`)){
					message.reply('Nothing much sugar whats the matter with you');
					message.channel.send('gottem');
				}
				break;
			}
	}else{
		const args = message.content.slice(prefix.length).split(/ +/);
		const cmd = args.shift().toLowerCase();
		const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
		try{
			command.execute(client, message, cmd, args, Discord);
		}catch(err){
			message.reply('There was an error trying to execute this command.');
			console.log(err);
		}
	}
};
