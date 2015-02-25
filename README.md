# express-gpio
- A WebAPI to turn on/off RPi's GPIO

### Install on your RPi
$`npm install --production`

### Start the server
$`npm start`

### Usage

$`curl --request GET http://{RPi's hostname}:3000/gpio/2/on`

will turn on RPi's GPIO2

$`curl --request GET http://{RPi's hostname}:3000/gpio/2/off`

will turn off RPi's GPIO2

\＊only supported HIGH or LOW at the moment

### Develop
##### Install full packages
$`npm install`

##### Start the server with nodemon
$`gulp dev`

##### Open another terminal then
$`gulp`
