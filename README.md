# Express-GPIO
- A WebAPI to turn on/off RPi's [GPIO](http://www.raspberrypi.org/documentation/usage/gpio/)

# Install on your RPi
$`git clone http://github.com/notsunohito/express-gpio && cd express-gpio`

$`npm install --production`

# Start the server
$`npm start`

# Usage

$`curl --request GET http://{RPi's hostname}:3000/gpio/2/high`

will turn on GPIO2

$`curl --request GET http://{RPi's hostname}:3000/gpio/2/low`

will turn off GPIO2

If you want to use a example GUI, Open `http://{RPi's hostname}:3000/` with browser


＊only supported for Rpi >= Rev2 at the moment

＊only supported for HIGH or LOW at the moment

# Develop
##### Install full packages:
$`npm install`

##### Install gulp globally:
$`npm install --global gulp`

##### Start the server using nodemon:
$`gulp dev`

##### Open another terminal then:
$`gulp`

##### will enable [BrowserSync](http://www.browsersync.io/)
