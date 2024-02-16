categoryColourLogic = "#42A5F5";

Blockly.Blocks["logic_boolean_random"] = {
  init: function () {
    this.appendValueInput("CHANCE").setCheck("Number").appendField("chance");
    this.appendDummyInput().appendField("%");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(categoryColourLogic);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["logic_boolean_random"] = function (
  block,
  generator
) {
  var value_chance = generator.valueToCode(
    block,
    "CHANCE",
    javascript.Order.ATOMIC
  );

  const functionName = generator.provideFunction_(
    "booleanChance",
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(chance) {
  chance = Math.min(100, Math.max(0, chance));
  var random = Math.random();
  var scale = 100 / chance;
  return random <= chance / 100;
}`
  );

  const code = functionName + `(${value_chance})`;

  return [code, javascript.Order.FUNCTION_CALL];
};

Blockly.Blocks["logic_toboolean"] = {
  init: function () {
    this.appendValueInput("VALUE").setCheck(null).appendField("to boolean");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(categoryColourLogic);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["logic_toboolean"] = function (
  block,
  generator
) {
  var value_value =
    generator.valueToCode(block, "VALUE", javascript.Order.ATOMIC) || null;

  var code = `Boolean(${value_value})`;

  return [code, javascript.Order.FUNCTION_CALL];
};
