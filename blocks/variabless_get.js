Blockly.Blocks['variabless_get'] = {
  json: {
    "type": "variabless_get",
    "message0": "get %1",
    "args0": [
      {
        "type": "input_value",
        "name": "VAR",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['variabless_get'] = function(block, generator) {
  var input_value = block.getFieldValue('VAR');
  var code = `${input_value}`;
  return [code, javascript.Order.NONE];
};
