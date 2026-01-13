//Defines variable for music
let song1;
//AI Generated, setup for Sentiment map
let metadata = [];
let eventIndex = 0;


// --- Audio analysis --- AI Generated
let amp;                // p5.Amplitude instance
let ampLevel = 0;       // smoothed loudness value (0..1)
const AMP_SMOOTH = 0.12; // smoothing factor; higher = faster response

// NEW: sound state icons, AI augmented from my code
let soundOnImg, soundOffImg;
// The icon currently chosen to render, my code (augmented and outmoded)
// let currentSoundIcon;

// --- Control button bounds (match your draw positions/sizes) --- AI Augmented
const BTN = {
  play:       { x: 395, y: 707, w: 45, h: 45 },
  pause:      { x: 465, y: 707, w: 45, h: 45 },
  stop:       { x: 545, y: 707, w: 45, h: 45 },
  back:       { x: 615, y: 707, w: 45, h: 45 },
  fastforward:{ x: 695, y: 707, w: 45, h: 45 },
  loop:       { x: 765, y: 707, w: 55, h: 45 } // width differs per your draw()
};

//AI Generated, position edited by me
const SOUND_ICON_POS = { x: 40, y: 20, w: 125, h: 125 }; // Adjust to taste

// --- Seek step in seconds for back/forward --- AI Generated
const SEEK_STEP = 5;

// --- Loop UI state ---, part of AI code
let loopEnabled = false;

// Point-in-rectangle check, AI generated
function pointInRect(px, py, rect) {
  return px >= rect.x && px <= rect.x + rect.w &&
         py >= rect.y && py <= rect.y + rect.h;
}

//AI Generated code
// Ensure audio context is running (autoplay policy)
async function ensureAudioContextRunning() {
  const ctx = getAudioContext();
  if (ctx && ctx.state !== 'running') {
    try {
      await ctx.resume();
    } catch (e) {
      console.warn('AudioContext resume failed:', e);
    }
  }
}

//Function to sync sentiment visuals with music even when control buttons are used- AI Generated
function syncEventsToPlaybackTime() {
  //Defines t as the current time in the song
  const t = song1.currentTime();
  // Find last event whose time <= t
  let idx = 0;
  for (let i = 0; i < metadata.length; i++) {
    if (metadata[i].time <= t) idx = i;
    else break;
  }
  //Brings current visuals in line with what they should be for jumped-to point
  eventIndex = idx + 1; // next event to trigger
  const currentEvent = metadata[idx] || metadata[0];
  if (currentEvent) {
    currentVisualizationData.sentiment = currentEvent.sentiment;
    currentVisualizationData.color = currentEvent.color;
    currentVisualizationData.position = currentEvent.position;
    currentVisualizationData.sentiment2 = currentEvent.sentiment2;
    currentVisualizationData.color2 = currentEvent.color2;
  }
}

// Centralized button action handler - Primarily AI Generated, Tweaked by me
async function handleButtonClick(type) {
  if (!song1 || !song1.isLoaded()) return;

  // Make sure audio context is allowed to run
  await ensureAudioContextRunning();

  //switch statement to do different things depending on which button is clicked
  switch (type) {
    
      //play button
    case 'play': {
      if (!song1.isPlaying()) {
        //if the song isn't already playing, starts 'play' state
        song1.play();
        song1.setLoop(loopEnabled);
      } else {
        //otherwise pauses playback
        song1.pause();
      }
      break;
    }

      //pause button
    case 'pause': {
      if (song1.isPlaying()) {
        //if song is playing, pauses playback
        song1.pause();
      } else {
        //otherwise restarts playback
        song1.play();
        song1.setLoop(loopEnabled);
      }
      break;
    }

      //stop button
    case 'stop': {
      // Stop playback and reset to start
      song1.stop();
      // Reset transport position to 0 via jump (ensures next play starts at 0)
      try {
        song1.jump(0);
        syncEventsToPlaybackTime();
      } catch (e) {
        // Some versions allow jump only when loaded; ignore if not needed
      }
      break;
    }

      //back button
    case 'back': {
      //defines current time
      const t = song1.currentTime();
      //subtracts the seek from "t" value and goes back five seconds
      const newT = Math.max(0, t - SEEK_STEP);
      try {
        song1.jump(newT);
      } catch (e) {
        //warning if the seek breaks
        console.warn('Seek back failed:', e);
      }
      break;
    }

      //forward button
    case 'fastforward': {
      //defines current time
      const t = song1.currentTime();
      //adds the seek to the 't' value and goes forward five seconds
      const dur = song1.duration ? song1.duration() : null;
      const newT = dur ? Math.min(dur - 0.01, t + SEEK_STEP) : t + SEEK_STEP;
      try {
        song1.jump(newT);
      } catch (e) {
        //warning if the seek breaks
        console.warn('Seek forward failed:', e);
      }
      break;
       }

      //loop button
    case 'loop': {
      //activates music loop
      loopEnabled = !loopEnabled;
      song1.setLoop(loopEnabled);
      syncEventsToPlaybackTime();
      break;
    }
  }
}

// CHANGED: Added sentiment2 and color2 to support dual sentiments - AI Generated, adapted for this project
//defines default look
let currentVisualizationData = {
  //defines sentiment and accompanying colour
  sentiment: 'neutral',
  color: '245, 245, 245',
  //unused element, defines position
  position: 'default',
  //defines a second sentiment and accompanying colour
  sentiment2: null,  // NEW: Secondary sentiment
  color2: null       // NEW: Secondary color
};

//draws sound indicator, AI generated
function drawSoundIcon() {
  // Clear just the area where the icon will be drawn
  push();
  noStroke();
  fill('#ccb6d9'); // matches background colour
  rect(SOUND_ICON_POS.x - 2, SOUND_ICON_POS.y - 2, SOUND_ICON_POS.w + 4, SOUND_ICON_POS.h + 4, 4);
  pop();

  // Decide which icon to show based on playback state
  const isPlaying = song1 && song1.isPlaying();
  const icon = isPlaying ? soundOnImg : soundOffImg;

  //draws image at desired co-ordinates
  if (icon) {
    image(icon, SOUND_ICON_POS.x, SOUND_ICON_POS.y, SOUND_ICON_POS.w, SOUND_ICON_POS.h);
  }
}

//draws 'loop state' indicator, AI generated, visuals tweaked by me
function drawLoopBadge() {
  if (!loopEnabled) return;

  //defining co-ordinates
  const bx = BTN.loop.x;
  const by = BTN.loop.y;
  const bw = BTN.loop.w;

  // Badge position: top-right corner overlapping the button, tweaked later by me
  const pad = 10;
  const badgeW = 15;
  const badgeH = 15;

  //positioning, edited to my taste
  const x = bx + bw - badgeW + pad; // shift left so it overlaps corner
  const y = by - badgeH / 3;        // slightly above
  
  //colour, edited to my taste
  const bg = color(247, 255, 249);
  
  //draws the indicator
  noStroke();
  fill(bg);
  rect(x, y, badgeW, badgeH, 16);
}


function preload() {
  //loads images, my code (images created by me)
  play = loadImage('playicon.png');
  pause = loadImage('pauseicon.png');
  stop = loadImage('stopicon.png');
  back = loadImage('reverseicon.png');
  fastforward = loadImage('fastforicon.png');
  musloop = loadImage('loopicon.png');
  
  // Load sound state icons once, my code
  soundOnImg  = loadImage('soundon.png');
  soundOffImg = loadImage('soundoff.png');

  // Start showing "sound off" until play is pressed, AI addition
  currentSoundIcon = soundOffImg;
  
  //DEFAULT SONG
  song1 = loadSound('Airship_Serenity.mp3');
  //AI addition
  loadJSON('sentiment.json', dataLoaded, jsonError);
  
  //SECOND SONG - IN THIS VERSION, COMMENT OUT FIRST SONG AND UNCOMMENT THIS TO SWAP MUSIC
  // song1 = loadSound('With-the-Sea.mp3');
  // loadJSON('sentimentWTS.json', dataLoaded, jsonError);
}

//AI generated, function for catching JSON errors
function jsonError(err) {
  console.error('JSON load error:', err);
}

//Loads metadata, AI generated 
function dataLoaded(data){
  metadata = data;
  
  // Reconnect amplitude to the song in case setup ran before the sound was ready
  if (amp && song1) {
    amp.setInput(song1);
  }
  
  // CHANGED: Initialize with both primary and secondary sentiment data
  //initialises the sentiment data
  if (metadata.length > 0) {
    currentVisualizationData.sentiment = metadata[0].sentiment;
    currentVisualizationData.color = metadata[0].color;
    currentVisualizationData.position = metadata[0].position;
    currentVisualizationData.sentiment2 = metadata[0].sentiment2;  // NEW
    currentVisualizationData.color2 = metadata[0].color2;          // NEW
  }
}

function setup() {
  createCanvas(1200, 800);
  background('#ccb6d9');
  noStroke();

  // --- Amplitude analyzer setup --- AI generated
  amp = new p5.Amplitude();
  amp.smooth(0.85); // internal RMS smoothing; complements AMP_SMOOTH

  // Connect the song to the amplitude analyzer
  // (If song1 isn’t loaded yet, setInput again after it loads.)
  amp.setInput(song1);

  //commented out so users can play the song when they want to
  // song1.play();
  
  //Sound bar background, my code
  fill(111, 114, 130, 90);
  rect(375, 700, 465, 60, 5);
  
  // Emotion key visuals, my code
  textFont('Verdana');
  textSize(22);
  fill(164, 245, 160);
  text('Happy', 370, 650);
  rect(365, 660, 80, 30, 2);
  
  fill(255, 183, 237);
  text('Calm', 475, 650);
  rect(465, 660, 80, 30, 2);
  
  fill(158, 154, 255);
  text('Sad', 585, 650);
  rect(565, 660, 80, 30, 2);
  
  textSize(20);
  fill(255, 233, 40);
  text('Exciting', 665, 650);
  rect(665, 660, 80, 30, 2);
  
  fill(255, 145, 112);
  text('Aggressive', 755, 650);
  rect(765, 660, 80, 30, 2);
}

function draw() {
  // --- Loudness (amplitude) sampling and smoothing --- AI generated
  const rawLevel = amp.getLevel(); // ~0.0..~0.3 typical; depends on the track
  ampLevel = ampLevel + (rawLevel - ampLevel) * AMP_SMOOTH;

  //clearing the area behind the ellipses to stop overlap effects, tweaked from AI generated code
  push();
  noStroke();
  fill('#ccb6d9');
  rect(0, 0, width, 620); // area behind visuals
  pop();
  
  //runs helper function to check if sentiments are active (AI generated)
  visuals();

  //AI generated, parameters changed by me
// --- Loudness-reactive status bar above controls ---
  // Base geometry
  const barX = 80;
  const barY = 525;
  const baseW = 900; // minimum width when quiet
  const baseH = 30;

  // Map loudness to visual parameters
  // Scale width between baseW and baseW + 50% (adjust to taste)
  const maxExtraW = 0.7 * baseW;              // growth range
  const widthBoost = ampLevel * maxExtraW;    // 0..maxExtraW
  const barW = baseW + widthBoost;

  //AI generated, parameters changed by me
  // Opacity: go from 10 (quiet) to 255 (loud)
  const minAlpha = 10;
  const maxAlpha = 255;
  const alpha = minAlpha + (maxAlpha - minAlpha) * constrain(ampLevel / 0.3, 0, 1);

  //AI generated, parameters changed by me
  // Optional: height can also subtly grow with loudness
  const maxExtraH = 200;                        // pixels to add at loudest
  const barH = baseH + ampLevel * maxExtraH;

  //AI generated based on code I wrote, parameters changed by me. 
  // Draw
  const barColor = color(138, 255, 238);    
  barColor.setAlpha(alpha);
  noStroke();
  fill(barColor);
  rect(barX, barY, barW, barH, 35);
  
  //Code relating to a previous version of sound indicator code, AI generated
// if (currentSoundIcon) {
//   image(currentSoundIcon, SOUND_ICON_POS.x, SOUND_ICON_POS.y, SOUND_ICON_POS.w, SOUND_ICON_POS.h);
// }
  
  //My code, sound control bar and icons
  fill('#000000');
  textSize(18);
  text('5', 665, 716);
  text('5', 730, 716);
  image(play, 395, 707, 45, 45);
  image(pause, 465, 707, 45, 45);
  image(stop, 545, 707, 45, 45);
  image(back, 615, 707, 45, 45);
  image(fastforward, 695, 707, 45, 45);
  image(musloop, 765, 707, 55, 45);
  
  //AI generated, draws loop indicator
  drawLoopBadge();
  
  //AI generated, draws sound indicator
  drawSoundIcon();
  //AI generated, update the 'event' and related sentiment visuals
  if (eventIndex < metadata.length) {
    let nextEvent = metadata[eventIndex];
    let playbackPosition = song1.currentTime();
    
    //prints change to log
    if (playbackPosition >= nextEvent.time) {
      // CHANGED: Console log now shows both primary and secondary sentiments
      console.log(`TIME: ${playbackPosition.toFixed(2)}s | PRIMARY: ${nextEvent.sentiment} | SECONDARY: ${nextEvent.sentiment2 || 'none'}`);
      
      //Moves sentiments along
      // CHANGED: Update both primary and secondary visualization data
      currentVisualizationData.sentiment = nextEvent.sentiment;
      currentVisualizationData.color = nextEvent.color;
      currentVisualizationData.position = nextEvent.position;
      currentVisualizationData.sentiment2 = nextEvent.sentiment2;  // NEW
      currentVisualizationData.color2 = nextEvent.color2;          // NEW
      
      eventIndex++;
    }
  }
}


// Utility: check if a point is inside a rectangle, AI generated
function pointInRect(px, py, rect) {
  return px >= rect.x && px <= rect.x + rect.w &&
         py >= rect.y && py <= rect.y + rect.h;
}

// Handle mouse clicks, AI generated

function mouseClicked() {
  // Determine which (if any) button was clicked
  if (pointInRect(mouseX, mouseY, BTN.play)) {
    //if within play button's bounds run associated function
    handleButtonClick('play');
    return false;
  }
  if (pointInRect(mouseX, mouseY, BTN.pause)) {
    //if within pause button's bounds run associated function
    handleButtonClick('pause');
    return false;
  }
  if (pointInRect(mouseX, mouseY, BTN.stop)) {
    //if within stop button's bounds run associated function
    handleButtonClick('stop');
    //respect visuals
    syncEventsToPlaybackTime();
    return false;
  }
  if (pointInRect(mouseX, mouseY, BTN.back)) {
    //if within back button's bounds run associated function
    handleButtonClick('back');
    //respect visuals
    syncEventsToPlaybackTime();
    return false;
  }
  if (pointInRect(mouseX, mouseY, BTN.fastforward)) {
    //if within forward button's bounds run associated function
    handleButtonClick('fastforward');
    //respect visuals
    syncEventsToPlaybackTime();
    return false;
  }
  if (pointInRect(mouseX, mouseY, BTN.loop)) {
    //if within loop button's bounds run associated function
    handleButtonClick('loop');
    //respect visuals
    syncEventsToPlaybackTime();
    return false;
  }
}

//AI Generated
// Change cursor to pointer when hovering over any control
function mouseMoved() {
  const overAny =
    pointInRect(mouseX, mouseY, BTN.play) ||
    pointInRect(mouseX, mouseY, BTN.pause) ||
    pointInRect(mouseX, mouseY, BTN.stop) ||
    pointInRect(mouseX, mouseY, BTN.back) ||
    pointInRect(mouseX, mouseY, BTN.fastforward) ||
    pointInRect(mouseX, mouseY, BTN.loop);

  cursor(overAny ? 'pointer' : 'default');
}