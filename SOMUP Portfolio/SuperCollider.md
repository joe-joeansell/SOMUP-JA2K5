Wow! Code imminent!!

``` SmallTalk
(
{
	
	var fund = 100;
	var mode = MouseX.kr(1, 8).round(1).lag(0.5).poll;
	var pitch = fund*mode;
	
	SinOsc.ar(pitch!2, 0, 0.5)
}.play
)
```