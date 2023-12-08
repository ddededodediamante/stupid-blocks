Blockly.Blocks['value_inline.js'] = {
  json: {
  "type": "value_inline",
  "message0": "%1",
  "args0": [
    {
      "type": "input_statement",
      "name": "CODE"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['value_inline'] = function(block, generator) {
  var statements_code = generator.statementToCode(block, 'CODE');
  var code = `function() {
    ${statenents_code}
  }`;
  return [code, Blockly.javascript.ORDER_NONE];
};
