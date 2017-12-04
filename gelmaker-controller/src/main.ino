unsigned long currentTime;
unsigned long targetTime;
unsigned long startTime;

String command;
String payload;

String inputString = "";
boolean dispensing = false;

void setup() {
  // Setup dispenser pin
  pinMode(7, OUTPUT);
  digitalWrite(7, LOW);
  // Setup dispenser LED
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);
  
  Serial.begin(9600);
  inputString.reserve(400);
}

void loop() {
  currentTime = millis();

  // Uses millis to time dispensing over many seconds.
  // Should find a way to use timers instead.
  if (dispensing) {
    if(currentTime-startTime >= targetTime){
      stopDispense();
    }
  }
}

// The getValue() function is the least optimized piece of code in history.
// It should use char arrays and standard C functions instead
void parseSerial(){
  command = getValue(inputString, ':', 0);
  payload = getValue(inputString, ':', 1);
  
  if(command == "ping"){
    Serial.print("pong:");
    Serial.println(payload);
  } else if(command == "dispense"){
    startDispense(payload.toInt());
  } else if(command == "dispensestop"){
    stopDispense();
  } else {
    Serial.println("error:commandunknown");
  }
  
  inputString = "";
}

void startDispense(long unsigned int dispenseTime){
  digitalWrite(LED_BUILTIN, HIGH);
  digitalWrite(7, HIGH);
  targetTime = dispenseTime;
  startTime = millis();
  dispensing = true;
  Serial.print("dispensing:");
  Serial.println(dispenseTime);
}

void stopDispense(){
  digitalWrite(LED_BUILTIN, LOW);
  digitalWrite(7, LOW);
  inputString = "";
  dispensing = false;
  Serial.println("dispensing:done");
}

void serialEvent() {
  while (Serial.available()) {
    char inChar = (char)Serial.read();
    if (inChar == '\n') {
      parseSerial();
    } else {
      inputString += inChar;
    }
  }
}

String getValue(String data, char separator, int index){
  int found = 0;
  int strIndex[] = { 0, -1 };
  int maxIndex = data.length() - 1;

  for (int i = 0; i <= maxIndex && found <= index; i++) {
    if (data.charAt(i) == separator || i == maxIndex) {
      found++;
      strIndex[0] = strIndex[1] + 1;
      strIndex[1] = (i == maxIndex) ? i+1 : i;
    }
  }
  return found > index ? data.substring(strIndex[0], strIndex[1]) : "";
}
