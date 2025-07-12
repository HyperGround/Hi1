/*CMD
  command: EURUSD
  help: Signal for EURUSD
  keyboard:
  aliases:
CMD*/

User.setProperty("pair", "EURUSD", "string");
Bot.runCommand("SelectTF");
