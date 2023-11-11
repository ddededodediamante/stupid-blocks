Blockly.Blocks['custom_addition'] = {
  json: {
    "type": "custom_addition",
    "message0": "add %1 and %2",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM1",
        "value": 1
      },
      {
        "type": "field_number",
        "name": "NUM2",
        "value": 1
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

Blockly.JavaScript['custom_addition'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_num1 + ' + ' + value_num2;
  return [code, Blockly.JavaScript.ORDER_ADDITION];
};
