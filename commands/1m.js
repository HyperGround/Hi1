/*CMD
  command: 1m
  help: TF 1m
  keyboard:
  aliases:
CMD*/

let p = User.getProperty("pair");
Bot.sendMessage("📈 سیگنالی " + p + " / تایم: 1m
Entry: 2010.20
SL: 2009.80
TP: 2011.40");
