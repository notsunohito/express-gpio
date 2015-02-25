# express-gpio
- A WebAPI to turn on/off RPi's GPIO

### Install on your RPi
$`git clone http://github.com/notsunohito/express-gpio && cd express-gpio`

$`npm install --production`

### Start the server
$`npm start`

### Usage

$`curl --request GET http://{RPi's hostname}:3000/gpio/2/on`

will turn on RPi's GPIO2

$`curl --request GET http://{RPi's hostname}:3000/gpio/2/off`

will turn off RPi's GPIO2

＊only supported HIGH or LOW at the moment

If you want to use a example GUI, Open `http://{RPi's hostname}:3000/` with browser

### Develop
##### Install full packages
$`npm install`

##### Start the server with nodemon
$`gulp dev`

##### Open another terminal then
$`gulp`
