var io = require('socket.io').listen(3000)
var SerialPort = require('serialport')

var Readline = SerialPort.parsers.Readline;
var port = new SerialPort('/dev/ttyACM0')
var parser = new Readline()
port.pipe(parser)

parser.on('data', (data) => {
  
  //console.log(data)
  
  let command = data.split(':')[0]
  let payload = data.split(':')[1].trim()
  
  //console.log(command, payload)
  
  switch(command){
    case "dispensing":
      handleDispensing(payload)
      break
    case "status":
      handleStatus(payload)
      break
  }
})

io.on('connect', (socket) => {
  console.log('Client connected')
  
  socket.on('dispenseBuffer', (amount) => {
    // Convert ml to ms. Pump runs 1375 ms/ml
    amount *= 1375
    port.write('dispense:'+amount+'\n')
  })
  
  socket.on('dispenseBufferStop', () => {
    port.write('dispensestop\n')
  })
})

function handleStatus(status){
  let statii = status.split(';')
  //console.log(statii[1])
  let bufferStatus = statii[0]
  let weightStatus = statii[1]
  
  io.sockets.emit('bufferStatus', bufferStatus)
  io.sockets.emit('weightStatus', weightStatus)
}

function handleDispensing(payload){
  if(payload == 'done'){
    io.sockets.emit('dispenseDone')
  } else {
    io.sockets.emit('dispenseStarted', payload)
  }
}
