categoryColourWindow = '#78909C';

Blockly.Blocks["window_alert"] = {
  init: function () {
    this.appendValueInput("VALUE").setCheck(null).appendField("alert");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(categoryColourWindow);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["window_alert"] = function (
  block,
  generator
) {
  var value_value =
    generator.valueToCode(block, "VALUE", javascript.Order.ATOMIC) || "null";
  var code = `window.alert(${value_value});\n`;
  return code;
};

Blockly.Blocks["window_confirm"] = {
  init: function () {
    this.appendValueInput("VALUE").setCheck(null).appendField("confirm");
    this.setOutput(true, "Boolean");
    this.setColour(categoryColourWindow);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["window_confirm"] = function (
  block,
  generator
) {
  var value_value =
    generator.valueToCode(block, "VALUE", javascript.Order.ATOMIC) || "null";
  var code = `window.confirm(${value_value})`;
  return [code, javascript.Order.NONE];
};

Blockly.Blocks["window_prompt"] = {
  init: function () {
    this.appendValueInput("VALUE").setCheck(null).appendField("prompt");
    this.setOutput(true, "String");
    this.setColour(categoryColourWindow);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock["window_prompt"] = function (
  block,
  generator
) {
  var value_value =
    generator.valueToCode(block, "VALUE", javascript.Order.ATOMIC) || "''";
  var code = `window.prompt(${value_value})`;
  return [code, javascript.Order.NONE];
};

Blockly.Blocks["window_console"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck(null)
      .appendField("console")
      .appendField(
        new Blockly.FieldDropdown([
          ["log", "log"],
          ["warn", "warn"],
          ["error", "error"],
        ]),
        "ACTION"
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(categoryColourWindow);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock["window_console"] = function (
  block,
  generator
) {
  var dropdown_console = block.getFieldValue("ACTION");
  var value_text =
    generator.valueToCode(block, "TEXT", javascript.Order.ATOMIC) || "''";
  if (dropdown_console == "log") {
    var code = `console.log(${value_text});\n`;
  } else if (dropdown_console == "warn") {
    var code = `console.warn(${value_text});\n`;
  } else if (dropdown_console == "error") {
    var code = `console.error(${value_text});\n`;
  }
  return code;
};
