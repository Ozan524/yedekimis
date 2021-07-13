const Discord = require('discord.js');

exports.run = async(client, message) => {

  var ata = [
      
    "Atamızı Anıyoruz",
    "En büyük savaş, cahilliğe karşı yapılan savaştır",
    "Vatana ihanetin nedeni olmaz. Er yada geç bedeli olur",
    "Beni görmek demek, mutlaka yüzümü görmek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kafidir",
    "Biz Türkler, bütün tarihimiz boyunca hürriyet ve istiklale timsal olmuş bir milletiz",
    "Cehalet yenilmesi gereken en büyük düşmandır",
    "Beni olağanüstü bir kişi olarak yorumlamayınız. Doğuşumdaki tek olağanüstülük Türk olarak dünyaya gelmemdir",
    "Din gibi temiz bir duygu, politika gibi kirli oyunlar alet edilemez. Din ait olduğu yerde, temiz vicdan sahnesinde yaşanmalıdır",
    "Bir millet zenginliğiyle değil, ahlak değeriyle ölçülür",
    "Şayet ölecek olursam, memlekete ait söyleyecek hiçbir şeyim yoktur. Çünkü yürürlükteki Cumhuriyet yasaları bu işleri temine yeterlidir",
    "Medeni olmayan insanlar, medeni olanların ayakları altında kalmaya mahkumdurlar",
    "Ben icap ettiği zaman en büyük hediyem olmak üzere, Türk Milletine canımı vereceğim",
    "Hiçbir şeye ihtiyacımız yok, yalnız bir şeye ihtiyacımız vardır; çalışkan olmak!",
    "Öğretmen bir kandile benzer, kendini tüketerek başkalarına ışık verir",
    "Milletimiz her güçlük ve zorluk karşısında, durmadan ilerlemekte ve yükselmektedir",
    "Cumhuriyet, fikir serbestliği taraftarıdır. Samimi ve meşru olmak şartıyla her fikre hürmet ederiz",
    "Türkiye Cumhuriyeti mesut, muvaffak ve muzaffer olacaktır. 29 Ekim 1923",
    "Başarı tüm ulusun azim ve inancıyla çabasını birleştirmesi sonucu kazanabilir",
    "Beni ne zaman görmek isterseniz aynaya bakın. Siz Türk çocukları benim bir parçamsınız ve bende sizin",
    "Bir ulus, sımsıkı birbirine bağlı olmayı bildikçe yeryüzünde onu dağıtabilecek bir güç düşünülemez",
    "Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçin",
    "Tehdide dayanan ahlak, bir erdemlilik olmadığından başka, güvenilmeye de layık değildir",
    "Asıl uğraşmaya mecbur olduğumuz şey, yüksek kültürde ve fazilette dünya birinciliğini tutmaktır"
       
  ] 
   var atam = ata[Math.floor(Math.random() * (ata.length))]  
  
   var ataturk = [
      
     "https://cdn.discordapp.com/attachments/818519362565570621/824005481172697118/Ekran_goruntusu_2021-03-23_224105.png",
     "https://cdn.discordapp.com/attachments/818519362565570621/824005481751379978/89e5342461362e39c7a0ba57faa4929b.jpg",
     "https://cdn.discordapp.com/attachments/818519362565570621/824005484935643146/D5PVYZBW0AIOs3N.jpg",
     "https://cdn.discordapp.com/attachments/818519362565570621/824005513099476992/aabb0ab7c1aa473b2425dcb36c738ebe.jpg",
     "https://cdn.discordapp.com/attachments/818519362565570621/824005516056330241/29989331183_1c5601f40c_b.jpg",
     "https://cdn.discordapp.com/attachments/818519362565570621/824005516346130522/13fd152485e3d791bcb95fd5b755406f.jpg",
     "https://cdn.discordapp.com/attachments/818519362565570621/824005520633364490/scale_1200.png"

     
     ] 
   var atamm = ataturk[Math.floor(Math.random() * (ataturk.length))]  

      const vatan = new Discord.MessageEmbed()
    .setDescription(`[${atam}](https://discord.gg/ZDfUWKbr92)`)

    .setColor(3447003)
    .setImage(atamm)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};