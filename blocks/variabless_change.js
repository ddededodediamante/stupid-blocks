Blockly.Blocks['variabless_change'] = {
  json: {
  "type": "variabless_change",
  "message0": "change %1 by %2",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['variabless_change'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
  var code = `${value_name} += ${value_value};\n`;
  return code;
};
