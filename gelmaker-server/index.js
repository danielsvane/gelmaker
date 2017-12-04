var io = require('socket.io').listen(3000)
var SerialPort = require('serialport')

var Readline = SerialPort.parsers.Readline;
var port = new SerialPort('/dev/ttyACM0')
var parser = new Readline()
port.pipe(parser)

parser.on('data', (data) => {
  
  let command = data.split(':')[0]
  let payload = data.split(':')[1].trim()
  
  console.log(command, payload)
  
  switch(command){
    case "dispensing":
      handleDispensing(payload)
      break
  }
})

io.on('connect', (socket) => {
  console.log('Client connected')
  
  socket.on('dispenseBuffer', (amount) => {
    amount *= 500
    port.write('dispense:'+amount+'\n')
  })
  
  socket.on('dispenseBufferStop', () => {
    port.write('dispensestop\n')
  })
})

function handleDispensing(payload){
  if(payload == 'done'){
    io.sockets.emit('dispenseDone')
  } else {
    io.sockets.emit('dispenseStarted', payload)
  }
}
