Blockly.Blocks['window_alert'] = {
  json: {
  "type": "window_alert",
  "message0": "alert %1",
  "args0": [

 {


"type": "input_value",


"name": "VALUE"

 }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['window_alert'] = function(block, generator) {
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `window.alert(${value_value});`;
  return code;
};
