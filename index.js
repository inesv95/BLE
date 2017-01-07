var bleno = require('bleno');
var SystemInformationService = require('./systeminformationservice');
var systemInformationService = new SystemInformationService();

bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);
  if (state === 'poweredOn') {
    bleno.startAdvertising(bleno.name, [systemInformationService.uuid]);
  }
  else {
    bleno.stopAdvertising();
  }
});
