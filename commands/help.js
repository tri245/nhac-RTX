/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Truyền phát bài hát từ một liên kết hoặc văn bản nhất định từ các nguồn          ' },
          { name: '⏹️ Stop', value: 'Làm cho bot ngừng phát nhạc và bỏ giọng nói' },
          { name: '📊 Queue', value: 'Làm cho bot ngừng phát nhạc và bỏ giọng nói' },
          { name: '⏭️ Skip', value: 'Bỏ qua bài hát đang phát' },
          { name: '⏸️ Pause', value: 'Tạm dừng bài hát đang phát' },
          { name: '▶️ Resume', value: 'Tiếp tục bài hát đang tạm dừng' },
          { name: '🔁 Loop', value: 'Chuyển đổi chế độ vòng lặp cho hàng đợi và bài hát hiện tại' },
          { name: '🔄 Autoplay', value: 'Bật hoặc tắt tính năng tự động phát [phát các bài hát ngẫu nhiên ]' },
          { name: '⏩ Seek', value: 'Tìm đến một thời điểm cụ thể trong bài hát hiện tại' },
          { name: '⏮️ Previous', value: 'Phát bài hát trước đó trong hàng đợi' },
          { name: '🔀 Shuffle', value: 'Trộn các bài hát trong hàng đợi' },
          { name: '📃 playlist', value: 'quản lý danh sách phát          ' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=6607c9ba&is=65f554ba&hm=2a4a1f0178b6dfa353502a471586c5acdaec0e2e1b7ab80ce44b27156b44d95e&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Kiểm tra độ trễ của bot" },
          { name: '🗑️ Clear', value: 'Xóa hàng đợi bài hát của máy chủ này' },
          { name: '⏱️ Time', value: 'Hiển thị thời gian phát bài hát hiện tại' },
          { name: '🎧 Filter', value: 'Áp dụng các bộ lọc để tăng cường âm thanh theo ý thích của bạn          ' },
           { name: '🎵 Now Playing', value: 'Hiển thị thông tin bài hát đang phát' },
          { name: '🔊 Volume', value: 'Điều chỉnh âm lượng nhạc [ nghe ở âm lượng lớn sẽ nguy hiểm ]' },
        ) 
       .setImage('https://antimatter.vn/wp-content/uploads/2022/04/hinh-nen-dong-powerpoint-chat-luong-cao.gif')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/channel/UC-xfqwctJQP3BDI060i15-w')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/bPaexxfy')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('FB')
        .setURL('https://www.facebook.com/trinhohades')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
