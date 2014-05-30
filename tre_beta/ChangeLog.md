# Arduino TRE Beta Log

## Contents
* May 2014
* Glossary

## May 2014

## Tue, 29 May 2014
* Sitara Examples - Ported and tested the Blink sketch. Added to git and notes added to shared doc. Hope to wrap up the last of the Basic section tomorrow.

## Tue, 27 May 2014
* RPI Network Bridge: More success with the work rpi. However, there may be a voltage issue with the micro USB power cable I use at home vs. the one for work, the one with the IG and the one shipped with the AT. I have noticed a more stable system switching the cables with the rpi here at home. It appears bridging will work. However, I am considering moving all networking equipment into the bedroom, thus negating the need for the bridge. I've lost too much time testing Sitara code mucking with a perfect wireless solution. 

* AT Wireless: As per the forums, I tried to use the wireless dongle with the AT using the GUI app to manage it - No success, but that may be due to the SSID not being published, which is sometimes a problem with wicd.

## Sun, 25 May 2014
* RPI Network Bridge: Attempted bridging with seperately powered dongle and ethernet connection to AT failed. The board powers down the wifi dongle once the ethernet port establishes a link. Need to test this with rpi at work. Will take AT setup to work on Tuesday to test.

### Sat, 24 May 2014
* Reinstalled the development laptop with Ubuntu 4.14
* Updated bbb to latest Debian image
* BBB Network Bridge: Arduino-supplied rtl dongle works no better on updated bbb with 3.8.13 kernel
* RPI Network Bridge: Too much instability with power on this board when using rtl wifi dongle and 
	USB or ethernet connection to a fully-powered AT.

### Wed, 23 May 2014
* Reported unexpected TRESetup.html on LXWM desktop. Took picture and uploaded it

### Wed, 22 May 2014
* TRE Arrives!
* Got access to the Basecamp beta test project
* Flashed to new image and installed new TRESetup file
* New setup tested and successful. Reported to team.
* Arduino-supplied rtl wifi highly-unstable. Will need different wireless solution in interim.
* Expressed interest in porting examples from AVR to Sitara
* Expressed interest in testing LibArduino on the Sitara. Might influence examples.

## Glossary
* AT  - Arduino TRE
* bbb - BeagleBone Black
* rpi - Raspberry Pi
* rtl - Realtek
* IG  - Intel Galileo
