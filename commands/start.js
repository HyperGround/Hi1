/*CMD
  command: /start
  help: Start bot interaction
  keyboard:
  aliases:
CMD*/

let keys = [
  ["XAUUSD", "EURUSD"],
  ["ETHUSD", "JPYUSD"],
  ["BTCUSD", "ETC."]
];
Bot.sendInlineKeyboard(keys, "📌 تکایە جوت‌دراوەکە هەلبژێرە:");
