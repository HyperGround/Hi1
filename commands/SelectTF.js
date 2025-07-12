/*CMD
  command: SelectTF
  help: choose timeframe
  keyboard:
  aliases:
CMD*/

let timeframes = ["1m", "5m", "15m", "1h", "4h", "1d", "1w"];
let tf_keyboard = timeframes.map(tf => [tf]);
Bot.sendInlineKeyboard(tf_keyboard, "📊 تایمفرەیمەکە هەلبژێرە:");
