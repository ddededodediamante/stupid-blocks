Blockly.Blocks['variabless_get'] = {
  json: {
    "type": "variabless_get",
    "message0": "get %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['variabless_get'] = function(block, generator) {
  var text_var = block.getFieldValue('VAR');
  var code = `${text_var}`;
  return [code, javascript.Order.NONE];
};
