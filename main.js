let history = {
  1: {
    // "2024-11-03": []
  },
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {}
};

// Functions
function wallsEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    wallsEnableTrig.checked = defVal;
    wallsEnabled = defVal;
  } else {
    wallsEnabled = !wallsEnabled;
    saveSettings();
  }

  if (!wallsEnabled) {
    checkWallsBtn.style.display = "none";
  } else {
    checkWallsBtn.style.display = "inline-block";
  }

  checkWallsBtn.style.animationDelay = "0s";
}

function cameraEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    cameraEnableTrig.checked = defVal;
    cameraEnabled = defVal;
  } else {
    cameraEnabled = !cameraEnabled;
    saveSettings();
  }

  if (!cameraEnabled) {
    checkCameraBtn.style.display = "none";
  } else {
    checkCameraBtn.style.display = "inline-block";
  }

  checkCameraBtn.style.animationDelay = "0s";
}

function faceEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    faceEnableTrig.checked = defVal;
    faceEnabled = defVal;
  } else {
    faceEnabled = !faceEnabled;
    saveSettings();
  }

  if (!faceEnabled) {
    checkFaceBtn.style.display = "none";
  } else {
    checkFaceBtn.style.display = "inline-block";
  }

  checkFaceBtn.style.animationDelay = "0s";
}

function positionEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    positionEnableTrig.checked = defVal;
    positionEnabled = defVal;
  } else {
    positionEnabled = !positionEnabled;
    saveSettings();
  }

  if (!positionEnabled) {
    checkPositionBtn.style.display = "none";
  } else {
    checkPositionBtn.style.display = "inline-block";
  }

  checkPositionBtn.style.animationDelay = "0s";
}

function wordEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    wordEnableTrig.checked = defVal;
    wordEnabled = defVal;
  } else {
    wordEnabled = !wordEnabled;
    saveSettings();
  }

  if (!wordEnabled) {
    checkWordBtn.style.display = "none";
  } else {
    checkWordBtn.style.display = "inline-block";
  }
  
  checkWordBtn.style.animationDelay = "0s";
}

function shapeEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    shapeEnableTrig.checked = defVal;
    shapeEnabled = defVal;
  } else {
    shapeEnabled = !shapeEnabled;
    saveSettings();
  }

  if (!shapeEnabled) {
    checkShapeBtn.style.display = "none";
  } else {
    checkShapeBtn.style.display = "inline-block";
  }

  checkShapeBtn.style.animationDelay = "0s";
}

function cornerEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    cornerEnableTrig.checked = defVal;
    cornerEnabled = defVal;
  } else {
    cornerEnabled = !cornerEnabled;
    saveSettings();
  }
  
  if (!cornerEnabled) {
    shapeEnableTrig.removeEventListener("input", shapeEnableTrigHandler);
    
    shapeEnabled = false;
    if (shapeEnableTrig.checked) {
      shapeEnableTrig.click();
    }
    shapeEnableTrig.disabled = true;
    
    innerCube.style.display = "none";
    checkCornerBtn.style.display = "none";
    checkShapeBtn.style.display = "none";
  } else {
    shapeEnableTrig.addEventListener("input", shapeEnableTrigHandler);
    shapeEnableTrig.disabled = false;
    
    innerCube.style.display = "block";
    checkCornerBtn.style.display = "inline-block";
  }
  
  innerFaceEls.forEach(face => face.style.animationDelay = "0s"),
  checkCornerBtn.style.animationDelay = "0s";
}

function soundEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    soundEnableTrig.checked = defVal;
    soundEnabled = defVal;
  } else {
    soundEnabled = !soundEnabled;
    saveSettings();
  }

  if (!soundEnabled) {
    checkSoundBtn.style.display = "none";
  } else {
    checkSoundBtn.style.display = "inline-block";
  }

  checkSoundBtn.style.animationDelay = "0s";
}

function colorEnableTrigHandler(evt, defVal) {
  if (defVal != null) {
    colorEnableTrig.checked = defVal;
    colorEnabled = defVal;
  } else {
    colorEnabled = !colorEnabled;
    saveSettings();
  }

  if (!colorEnabled) {
    checkColorBtn.style.display = "none";
  } else {
    checkColorBtn.style.display = "inline-block";
  }

  checkColorBtn.style.animationDelay = "0s"
}

function nLevelInputHandler(evt, defVal) {
  if (defVal != null) {
    nLevelInput.value = defVal;
    nLevel = defVal;
  } else {
    nLevel = Math.min(Math.max(+nLevelInput.value, 1), 9);
    saveSettings();
  }

  if (+nLevelInput.value < 1 || +nLevelInput.value > 9) {
    nLevelInput.style.borderColor = "#f00";
  } else {
    nLevelInput.style.borderColor = "#fff";
    nBackDisplay.innerHTML = nLevel;
  }
}

function sceneDimmerInputHandler(evt, defVal) {
  if (defVal) {
    sceneDimmerInput.value = defVal;
    sceneDimmer = defVal;
  } else {
    sceneDimmer = +sceneDimmerInput.value;
    saveSettings();
  }

  floors.forEach(floor =>
    setFloorBackground(
      floor,
      sceneDimmer,
      tileAHexColor,
      tileBHexColor
    )
  );
}

function zoomInputHandler(evt, defVal) {
  if (defVal) {
    zoomInput.value = defVal;
    zoom = defVal;
  } else {
    zoom = +zoomInput.value;
    saveSettings();
  }
  sceneWrapper.style.transform = `scale(${zoom})`;
}

function perspectiveInputHandler(evt, defVal) {
  if (defVal) {
    perspectiveInput.value = defVal;
    perspective = defVal;
  } else {
    perspective = +perspectiveInput.value;
    saveSettings();
  }
  sceneWrapper.style.perspective = `${perspective}em`;
}

function targetStimuliInputHandler(evt, defVal) {
  if (defVal) {
    targetStimuliInput.value = defVal;
    targetNumOfStimuli = defVal;
  } else {
    targetNumOfStimuli = Math.min(Math.max(+targetStimuliInput.value, 1), 30);
    saveSettings();
  }

  if (+targetStimuliInput.value < 1 || +targetStimuliInput.value > 30) {
    targetStimuliInput.style.borderColor = "#f00";
  } else {
    targetStimuliInput.style.borderColor = "#fff";
  }
}

function baseDelayInputHandler(evt, defVal) {
  if (defVal != null) {
    baseDelayInput.value = defVal;
    baseDelay = defVal;
  } else {
    baseDelay = Math.min(Math.max(+baseDelayInput.value, 2000), 20000);
    saveSettings();
  }

  if (+baseDelayInput.value < 2000 || +baseDelayInput.value > 20000) {
    baseDelayInput.style.borderColor = "#f00";
  } else {
    baseDelayInput.style.borderColor = "#fff";
  }
}

function maxAllowedMistakesInputHandler(evt, defVal) {
  if (defVal != null) {
    maxAllowedMistakesInput.value = defVal;
    maxAllowedMistakes = defVal;
  } else {
    maxAllowedMistakes = Math.min(Math.max(+maxAllowedMistakesInput.value, 0), 30);
    saveSettings();
  }

  if (+maxAllowedMistakesInput.value < 0 || +maxAllowedMistakesInput.value > 30) {
    maxAllowedMistakesInput.style.borderColor = "#f00";
  } else {
    maxAllowedMistakesInput.style.borderColor = "#fff";
  }
}

function previousLevelThresholdInputHandler(evt, defVal) {
  if (defVal != null) {
    previousLevelThresholdInput.value = defVal * 100;
    prevLevelThreshold = defVal;
  } else {
    prevLevelThreshold = +previousLevelThresholdInput.value / 100;
    saveSettings();
  }
}

function nextLevelThresholdInputHandler(evt, defVal) {
  if (defVal != null) {
    nextLevelThresholdInput.value = defVal * 100;
    nextLevelThreshold = defVal;
  } else {
    nextLevelThreshold = +nextLevelThresholdInput.value / 100;  
    saveSettings();
  }
}

function setFloorBackground(floor, dimPercent, tileAHexColor, tileBHexColor) {
  if (dimPercent > 1) {
    dimPercent = 1;
  }
  let hexSymbols = "0123456789abcdef";
  let hexBrightness = hexSymbols[
    Math.floor(dimPercent * (hexSymbols.length - 1))
  ];
  if (floor.classList.contains("floor-bottom")) {
    floor.style.backgroundImage = `linear-gradient(
  #000${hexBrightness},
  #000${hexBrightness}
),
radial-gradient(
  at 0px 0px,
  #0000,
  #0000 15%,
  20%,
  #000
),
repeating-conic-gradient(
  ${tileAHexColor} 0deg,
  ${tileAHexColor} 90deg,
  ${tileBHexColor} 90deg,
  ${tileBHexColor} 180deg
)`;
  } else if (floor.classList.contains("floor-left")) {
    floor.style.backgroundImage = `linear-gradient(
  #000${hexBrightness},
  #000${hexBrightness}
),
radial-gradient(
  at 54em 53.5em,
  #0000,
  #0000 15%,
  20%,
  #000
),
repeating-conic-gradient(
  ${tileAHexColor} 0deg,
  ${tileAHexColor} 90deg,
  ${tileBHexColor} 90deg,
  ${tileBHexColor} 180deg
)`;
  } else {
    floor.style.backgroundImage = `linear-gradient(
  #000${hexBrightness},
  #000${hexBrightness}
),
radial-gradient(
  at 0 53.5em,
  #0000,
  #0000 15%,
  20%,
  #000
),
repeating-conic-gradient(
  ${tileBHexColor} 0deg,
  ${tileBHexColor} 90deg,
  ${tileAHexColor} 90deg,
  ${tileAHexColor} 180deg
)`;
  }
}

function resetSettings() {
  const confirmed = confirm("Are you sure you want to reset all settings?\nThis operation is irreversible.");
  if (!confirmed) {
    return;
  }

  wallsEnabled = defVal_wallsEnabled;
  cameraEnabled = defVal_cameraEnabled;
  faceEnabled = defVal_faceEnabled;
  positionEnabled = defVal_positionEnabled;
  wordEnabled = defVal_wordEnabled;
  shapeEnabled = defVal_shapeEnabled;
  cornerEnabled = defVal_cornerEnabled;
  soundEnabled = defVal_soundEnabled;
  colorEnabled = defVal_colorEnabled;
  tileAHexColor = defVal_tileAHexColor;
  tileBHexColor = defVal_tileBHexColor;
  nLevel = defVal_nLevel;
  sceneDimmer = defVal_sceneDimmer;
  zoom = defVal_zoom;
  perspective = defVal_perspective;
  targetNumOfStimuli = defVal_targetNumOfStimuli;
  baseDelay = defVal_baseDelay;
  maxAllowedMistakes = defVal_maxAllowedMistakes;
  prevLevelThreshold = defVal_prevLevelThreshold;
  nextLevelThreshold = defVal_nextLevelThreshold;

  saveSettings();
  location.reload();
};

function saveSettings() {
  const stringifiedSettings = JSON.stringify({
    wallsEnabled,
    cameraEnabled,
    faceEnabled,
    positionEnabled,
    wordEnabled,
    shapeEnabled,
    cornerEnabled,
    soundEnabled,
    colorEnabled,
    //
    nLevel,
    sceneDimmer,
    zoom,
    perspective,
    targetNumOfStimuli,
    baseDelay,
    maxAllowedMistakes,
    prevLevelThreshold,
    nextLevelThreshold
  });
  localStorage.setItem(LS_SETTINGS_KEY, stringifiedSettings);
}

function loadSettings() {
  const settings = JSON.parse(localStorage.getItem(LS_SETTINGS_KEY));
  if (settings) {
    wallsEnableTrigHandler(null, settings.wallsEnabled);
    cameraEnableTrigHandler(null, settings.cameraEnabled);
    faceEnableTrigHandler(null, settings.faceEnabled);
    positionEnableTrigHandler(null, settings.positionEnabled);
    wordEnableTrigHandler(null, settings.wordEnabled);
    shapeEnableTrigHandler(null, settings.shapeEnabled);
    cornerEnableTrigHandler(null, settings.cornerEnabled);
    soundEnableTrigHandler(null, settings.soundEnabled);
    colorEnableTrigHandler(null, settings.colorEnabled);
    //
    nLevelInputHandler(null, settings.nLevel);
    sceneDimmerInputHandler(null, settings.sceneDimmer);
    zoomInputHandler(null, settings.zoom);
    perspectiveInputHandler(null, settings.perspective);
    targetStimuliInputHandler(null, settings.targetNumOfStimuli);
    baseDelayInputHandler(null, settings.baseDelay);
    maxAllowedMistakesInputHandler(null, settings.maxAllowedMistakes);
    previousLevelThresholdInputHandler(null, settings.prevLevelThreshold);
    nextLevelThresholdInputHandler(null, settings.nextLevelThreshold);
  }
}

function openStats() {
  statsDialogContent.parentElement.show();
}

function random(iterable) {
  return iterable[
    Math.floor(
      Math.random() * iterable.length
    )
  ];
}

// Create the blocks
function createBlocks(symbols, n) {
  
  // I don't know how many matching stimuli will be generated in the end
  // But I'm sure they are more than stimuli
  let blocks = Array(
    targetNumOfStimuli * (n + 2) + targetNumOfStimuli
  ).fill(null);
  // Place stimuli
  for (let i = 0; i < targetNumOfStimuli; i++) {
    // Pick a letter
    let symbol = random(symbols);
    // Pick a spot
    let rnd = Math.floor(Math.random() * (blocks.length - n));
    while (blocks[rnd] || blocks[rnd - n] || blocks[rnd + n]) {
      rnd = Math.floor(Math.random() * (blocks.length - n - 1));
    }
    // Put the signal
    blocks[rnd] = {
      isMatching: undefined, // I'll have to figure out if it's matching
      symbol: symbol
    };
    blocks[rnd + n] = {
      isMatching: true,
      symbol: symbol
    };
    matchingStimuli++;
  }
  // Place noise
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] && blocks[i].isMatching) {
      continue;
    }
    let prev = blocks[i - n];
    let next = blocks[i + n];
    if (blocks[i] && blocks[i].isMatching === undefined) {
      if (prev && prev.symbol === blocks[i].symbol) {
        blocks[i].isMatching = true;
        matchingStimuli++;
      } else {
        blocks[i].isMatching = false;
      }
      continue;
    }
    // Pick noise
    let noise = random(symbols);
    // Place noise
    if (prev && prev.symbol === noise) {
      blocks[i] = {
        isMatching: true,
        symbol: noise
      };
      matchingStimuli++;
    } else {
      blocks[i] = {
        isMatching: false,
        symbol: noise
      };
    }
    if (next && next.symbol === noise) {
      next.isMatching = true;
      matchingStimuli++;
    }
  }
  console.log("Matching stimuli", matchingStimuli);
  return blocks;
}

function resetPoints() {
  matchingStimuli = 0;
  
  rightWalls = 0;
  rightCamera = 0;
  rightFace = 0;
  rightPosition = 0;
  
  rightWord = 0;
  rightShape = 0;
  rightCorner = 0;
  rightSound = 0;
  rightColor = 0;
  
  wrongWalls = 0;
  wrongCamera = 0;
  wrongFace = 0;
  wrongPosition = 0;
  
  wrongWord = 0;
  wrongShape = 0;
  wrongCorner = 0;
  wrongSound = 0;
  wrongColor = 0;
  
  move(cube, initialCubePosition);
  move(innerCube, initialInnerCubePosition);
  rotateCamera(-40, -45);
  floors.forEach(floor =>
    setFloorBackground(
      floor,
      sceneDimmer,
      tileAHexColor,
      tileBHexColor
    )
  );
}

function resetBlock() {
  enableWallsCheck = true;
  enableCameraCheck = true;
  enableFaceCheck = true;
  enablePositionCheck = true;
  
  enableWordCheck = true;
  enableShapeCheck = true;
  enableCornerCheck = true;
  enableSoundCheck = true;
  enableColorCheck = true;
  
  currWalls = null;
  currCamera = null;
  currFace = null;
  currPosition = null;
  
  currWord = null;
  currShape = null;
  currCorner = null;
  currSound = null;
  currColor = null;
  
  checkWallsBtn.classList.remove("right", "wrong");
  checkCameraBtn.classList.remove("right", "wrong");
  checkFaceBtn.classList.remove("right", "wrong");
  checkPositionBtn.classList.remove("right", "wrong");
  
  checkWordBtn.classList.remove("right", "wrong");
  checkShapeBtn.classList.remove("right", "wrong");
  checkCornerBtn.classList.remove("right", "wrong");
  checkSoundBtn.classList.remove("right", "wrong");
  checkColorBtn.classList.remove("right", "wrong");
}

function resetIntervals() {
  intervals.forEach(interval => 
    clearInterval(interval)
  );
}

function rotateCamera(cx, cy) {
  scene.style.transform = `rotateX(${cx}deg) rotateY(${cy}deg)`;
  shape.style.transform = `translate(-50%, -50%) rotateY(${-cy}deg) rotateX(${-cx}deg)`;
}

function move(el, currPosString) {
  el.style.transform = `translate3d(${currPosString})`;
}

function wow(htmlElement, cssClass, delay) {
  htmlElement.classList.add(cssClass);
  setTimeout(() => 
    htmlElement.classList.remove(cssClass)
  , delay);
}

function speak(text) {
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'en-US';
  utter.text = text;
  speechSynthesis.speak(utter);
  return utter;
}

function writeWord(word) {
  wallWords.forEach(wall => {
    wall.innerText = word;
    wow(wall, "text-white", baseDelay - 300);
  });
}

function getGameCycle(n) {
  
  let walls;
  if (wallsEnabled) {
    walls = createBlocks(wallColorsList, n);
  }
  let cameras;
  if (cameraEnabled) {
    cameras = createBlocks(points, n);
  }
  let faces;
  if (faceEnabled) {
    faces = createBlocks(numbers, n);
  }
  let positions;
  if (positionEnabled) {
    positions = createBlocks(moves, n);
  }
  
  let words;
  if (wordEnabled) {
    words = createBlocks(wordsList, n);
  }
  let shapes;
  if (shapeEnabled) {
    shapes = createBlocks(shapeClasses, n);
  }
  let corners;
  if (cornerEnabled) {
    corners = createBlocks(cornersList, n);
  }
  let sounds;
  if (soundEnabled) {
    sounds = createBlocks(letters, n);
  }
  let colors;
  if (colorEnabled) {
    colors = createBlocks(colorClasses, n);
  }
  
  console.log(
    walls, cameras, faces, positions, words, shapes, corners, sounds, colors
  );
  
  let i = 0;
  return function() {
    
    resetBlock();
    
    if (!isRunning) {
      return;
    }
    
    let length = targetNumOfStimuli * (n + 2) + targetNumOfStimuli;
    let dimensions = 0;
    
    // End game
    if (i > length - 1) {
      
      let correctStimuli = 0;
      dimensions++;
      if (wallsEnabled) {
        dimensions++;
        correctStimuli += rightWalls;
      }
      if (cameraEnabled) {
        dimensions++;
        correctStimuli += rightCamera;
      }
      if (faceEnabled) {
        dimensions++;
        correctStimuli += rightFace;
      }
      if (positionEnabled) {
        dimensions++;
        correctStimuli += rightPosition;
      }
      
      if (wordEnabled) {
        dimensions++;
        correctStimuli += rightWord;
      }
      if (cornerEnabled) {
        dimensions++;
        correctStimuli += rightCorner;
        if (shapeEnabled) {
          dimensions++;
          correctStimuli += rightShape;
        }
      }
      if (soundEnabled) {
        dimensions++;
        correctStimuli += rightSound;
      }
      if (colorEnabled) {
        dimensions++;
        correctStimuli += rightColor;
      }
      let percentage = correctStimuli / matchingStimuli;
      
      let mistakes = 0;
      if (wallsEnabled) {
        mistakes += wrongWalls;
      }
      if (cameraEnabled) {
        mistakes += wrongCamera;
      }
      if (faceEnabled) {
        mistakes += wrongFace;
      }
      if (positionEnabled) {
        mistakes += wrongPosition;
      }
      
      if (wordEnabled) {
        mistakes += wrongWord;
      }
      if (cornerEnabled) {
        mistakes += wrongCorner;
        if (shapeEnabled) {
          mistakes += wrongShape;
        }
      }
      if (soundEnabled) {
        mistakes += wrongSound;
      }
      if (colorEnabled) {
        mistakes += wrongColor;
      };
      
      const missed = matchingStimuli - correctStimuli;
      
      console.log("matchingStimuli", matchingStimuli);
      console.log("correctStimuli", correctStimuli);
      console.log("missed", missed);
      console.log("mistakes", mistakes);
      console.log("dimensions", dimensions);
      
      stop(); // This resets stuff (matchingStimuli etc...)

      const resDim = document.querySelector("#res-dim");
      const resRight = document.querySelector("#sc-res-right");
      const resMissed = document.querySelector("#sc-res-missed");
      const resWrong = document.querySelector("#sc-res-wrong");
      const lvlRes = document.querySelectorAll("[class^='lvl-res']");
      [...lvlRes].forEach(el => el.style.display = "none");

      resDim.innerHTML = dimensions + "D";
      resRight.innerHTML = correctStimuli;
      resMissed.innerHTML = missed;
      resWrong.innerHTML = mistakes;

      const levelUpCond = (percentage >= nextLevelThreshold) && (mistakes <= maxAllowedMistakes) && nLevel < 9;
      const levelDownCond = ((percentage < prevLevelThreshold) || (mistakes > maxAllowedMistakes)) && nLevel > 1;

      localStorage.setItem("last-n", nLevel);
      const historyPoint = {
        nLevel,
        right: correctStimuli,
        missed,
        wrong: mistakes, 
        outcome: 0
      };

      if (levelUpCond) {
        historyPoint.outcome = 1;
        nLevelInputHandler(null, nLevel + 1);
        document.querySelector(".lvl-res-move").style.display = "block";
        document.querySelector(".lvl-before").innerHTML = nLevel - 1;
        document.querySelector(".lvl-after").innerHTML = nLevel;
      } else if (levelDownCond) {
        historyPoint.outcome = -1;
        nLevelInputHandler(null, nLevel - 1);
        document.querySelector(".lvl-res-move").style.display = "block";
        document.querySelector(".lvl-before").innerHTML = nLevel + 1;
        document.querySelector(".lvl-after").innerHTML = nLevel;
      } else {
        document.querySelector(".lvl-res-stay").style.display = "block";
        document.querySelector(".lvl-stays").innerHTML = nLevel;
      }
      recapDialogContent.parentElement.show();
      
      const datestamp = new Date().toLocaleDateString("sv");
      history[dimensions][datestamp] = history[dimensions][datestamp] || [];
      history[dimensions][datestamp].push(historyPoint);
      console.log("history", history);
      
      saveSettings();
      return;
    }
    
    // Count stimulus
    stimuliCount++;
    
    // Animating stimuli
    if (wallsEnabled) {
      currWalls = walls[i];
      floors.forEach(floor =>
        setFloorBackground(
          floor,
          sceneDimmer,
          tileAHexColor,
          currWalls.symbol
        )
      );
    }
    if (cameraEnabled) {
      currCamera = cameras[i];
      let [cx, cy] = currCamera.symbol.split("&");
      rotateCamera(cx, cy);
    }
    if (faceEnabled) {
      currFace = faces[i];
      if (colorEnabled) {
        currColor = colors[i];
        wow(faceEls[currFace.symbol - 1], currColor.symbol, baseDelay - 500);
      } else {
        wow(faceEls[currFace.symbol - 1], "col-a", baseDelay - 500);
      }
    } else if (colorEnabled) {
      currColor = colors[i];
      wow(faceEls[0], currColor.symbol, baseDelay - 500);
    }
    if (positionEnabled) {
      currPosition = positions[i];
      move(cube, currPosition.symbol);
    }
    
    if (wordEnabled) {
      currWord = words[i];
      writeWord(currWord.symbol);
    }
    if (cornerEnabled) {
      currCorner = corners[i];
      move(innerCube, currCorner.symbol);
      
      if (shapeEnabled) {
        currShape = shapes[i];
        wow(shape, currShape.symbol, baseDelay - 700);
      }
    }
    if (soundEnabled) {
      currSound = sounds[i];
      speak(currSound.symbol);
    }
    
    // Increase block index
    i++;
    
  }
}

function play() {
  if (isRunning) {
    return;
  }
  
  isRunning = true;
  
  speak("Start.");
  document.querySelector(".stop").classList.remove("active");
  document.querySelector(".play").classList.add("active");

  intervals.push(
    setInterval(getGameCycle(nLevel), baseDelay)
  );
}

function stop() {
  if (!isRunning) {
    return;
  }
  
  resetPoints();
  resetBlock();
  resetIntervals();
  
  isRunning = false;
  
  speak("Stop.");
  document.querySelector(".stop").classList.add("active");
  document.querySelector(".play").classList.remove("active");
}

function checkHandler(sense) {
  let curr;
  let button;
  let enable;
  
  // This part is garbage but hey I've used single vars xD
  if (sense === "walls") {
    curr = currWalls;
    button = checkWallsBtn;
    enable = enableWallsCheck;
  } else if (sense === "camera") {
    curr = currCamera;
    button = checkCameraBtn;
    enable = enableCameraCheck;
  } else if (sense === "face") {
    curr = currFace;
    button = checkFaceBtn;
    enable = enableFaceCheck;
  } else if (sense === "position") {
    curr = currPosition;
    button = checkPositionBtn;
    enable = enablePositionCheck;
  } else if (sense === "word") {
    curr = currWord;
    button = checkWordBtn;
    enable = enableWordCheck;
  } else if (sense === "shape") {
    curr = currShape;
    button = checkShapeBtn;
    enable = enableShapeCheck;
  } else if (sense === "corner") {
    curr = currCorner;
    button = checkCornerBtn;
    enable = enableCornerCheck;
  } else if (sense === "sound") {
    curr = currSound;
    button = checkSoundBtn;
    enable = enableSoundCheck;
  } else if (sense === "color") {
    curr = currColor;
    button = checkColorBtn;
    enable = enableColorCheck;
  }
  
  if (!curr || !enable) {
    return;
  }
  
  if (sense === "walls") {
    enableWallsCheck = false;
  } else if (sense === "camera") {
    enableCameraCheck = false;
  } else if (sense === "face") {
    enableFaceCheck = false;
  } else if (sense === "position") {
    enablePositionCheck = false;
  } else if (sense === "word") {
    enableWordCheck = false;
  } else if (sense === "shape") {
    enableShapeCheck = false;
  } else if (sense === "corner") {
    enableCornerCheck = false;
  } else if (sense === "sound") {
    enableSoundCheck = false;
  } else if (sense === "color") {
    enableColorCheck = false;
  }
  
  console.log(sense, curr, button, enable);
  
  if (curr.isMatching) {
    
    if (sense === "walls") {
      rightWalls++;
    } else if (sense === "camera") {
      rightCamera++;
    } else if (sense === "face") {
      rightFace++;
    } else if (sense === "position") {
      rightPosition++;
    } else if (sense === "word") {
      rightWord++;
    } else if (sense === "shape") {
      rightShape++;
    } else if (sense === "corner") {
      rightCorner++;
    } else if (sense === "sound") {
      rightSound++;
    } else if (sense === "color") {
      rightColor++;
    }
    
    button.classList.add("right");
  } else {
    
    if (sense === "walls") {
      wrongWalls++;
    } else if (sense === "camera") {
      wrongCamera++;
    } else if (sense === "face") {
      wrongFace++;
    } else if (sense === "position") {
      wrongPosition++;
    } else if (sense === "word") {
      wrongWord++;
    } if (sense === "shape") {
      wrongShape++;
    } else if (sense === "corner") {
      wrongCorner++;
    } else if (sense === "sound") {
      wrongSound++;
    } else if (sense === "color") {
      wrongColor++;
    }
    
    button.classList.add("wrong");
  }
}

const LS_SETTINGS_KEY = "hyper-n-back";

// DOM elements
const sceneWrapper = document.querySelector(".scene-wrapper");
const scene = document.querySelector(".scene");

const floors = [...document.querySelectorAll(".floor")];
const wallColors = [...document.querySelectorAll('[class^="wall"][class$="color"]')];
const wallWords = [...document.querySelectorAll('[class^="wall"][class$="word"]')];

const cube = document.querySelector(".cube");
const faceEls = [...document.querySelectorAll(".cube > .face")];

const innerCube = document.querySelector(".inner-cube");
const innerFaceEls = [...document.querySelectorAll(".inner-cube > .face")];
const shape = document.querySelector(".shape");

const checkWallsBtn = document.querySelector(".check-walls");
const checkCameraBtn = document.querySelector(".check-camera");
const checkFaceBtn = document.querySelector(".check-face");
const checkPositionBtn = document.querySelector(".check-position");

const checkWordBtn = document.querySelector(".check-word");
const checkShapeBtn = document.querySelector(".check-shape");
const checkCornerBtn = document.querySelector(".check-corner");
const checkSoundBtn = document.querySelector(".check-sound");
const checkColorBtn = document.querySelector(".check-color");

const nBackDisplay = document.querySelector("#n-back-display");
const recapDialogContent = document.querySelector("#recap-dialog .dialog-content");
const statsDialogContent = document.querySelector("#stats-dialog .dialog-content");

const nLevelInput = document.querySelector("#n-level");
const sceneDimmerInput = document.querySelector("#scene-dimmer");
const zoomInput = document.querySelector("#zoom");
const perspectiveInput = document.querySelector("#perspective");

const targetStimuliInput = document.querySelector("#targetStimuli");

const baseDelayInput = document.querySelector("#baseDelay");

const maxAllowedMistakesInput = document.querySelector("#maxAllowedMistakes");
const previousLevelThresholdInput = document.querySelector("#previousLevelThreshold");
const nextLevelThresholdInput = document.querySelector("#nextLevelThreshold");

const resetSettingsButton = document.querySelector("#reset-settings");
const openStatsButton = document.querySelector("#open-stats");

const [
  wallsEnableTrig,
  cameraEnableTrig,
  faceEnableTrig,
  positionEnableTrig,
  wordEnableTrig,
  shapeEnableTrig,
  cornerEnableTrig,
  soundEnableTrig,
  colorEnableTrig
] = [...document.querySelectorAll(".toggle-trigger")];

// Game settings
const wallColorsList = [
  "#00b894",
  "#0984e3",
  "#6c5ce7",
  "#fecb22",
  "#d63031",
  "#a92276"
];
const points = [
  "-60&0", "-60&-45", "-60&-90",
  "-20&0", "-20&-45", "-20&-90"
];
const numbers = "123456";
const initialCubePosition = "-.5em, -3em, .5em";
const moves = [
  "-3.5em, 0, -2.5em", "-.5em, 0, -2.5em", "2.5em, 0, -2.5em",
  "-3.5em, 0, .5em", "-.5em, 0, .5em", "2.5em, 0, .5em",
  "-3.5em, 0, 3.5em", "-.5em, 0, 3.5em", "2.5em, 0, 3.5em",
  
  "-3.5em, -3em, -2.5em", "-.5em, -3em, -2.5em", "2.5em, -3em, -2.5em",
  "-3.5em, -3em, .5em", "2.5em, -3em, .5em",
  "-3.5em, -3em, 3.5em", "-.5em, -3em, 3.5em", "2.5em, -3em, 3.5em",
  
  "-3.5em, -6em, -2.5em", "-.5em, -6em, -2.5em", "2.5em, -6em, -2.5em",
  "-3.5em, -6em, .5em", "-.5em, -6em, .5em", "2.5em, -6em, .5em",
  "-3.5em, -6em, 3.5em", "-.5em, -6em, 3.5em", "2.5em, -6em, 3.5em"
];

const wordsList = [
  "forest",
  "desert",
  "island",
  "jungle",
  "road",
  "city",
  "river",
  "park",
  "sea",
  "fog",
  "rain",
  "snow"
];
const shapeClasses = ["triangle", "square", "circle"];
const initialInnerCubePosition = ".5em, .5em, 0";
const cornersList = [
  "2px, 2px, calc(.5em - 2px)",
  "2px, 2px, calc(-.5em + 2px)",
  "calc(1em - 2px), 2px, calc(-.5em + 2px)",
  "calc(1em - 2px), 2px, calc(.5em - 2px)",
  
  "0, calc(1em - 2px), calc(.5em - 2px)",
  "0, calc(1em - 2px), calc(-.5em + 2px)",
  "calc(1em - 2px), calc(1em - 2px), calc(-.5em + 2px)",
  "calc(1em - 2px), calc(1em - 2px), calc(.5em - 2px)"
];
const letters = "abflqy";
const colorClasses = [
  "col-a", "col-b", "col-c", "col-d", "col-e", "col-f"
];

// Default settings
const defVal_wallsEnabled = true;
const defVal_cameraEnabled = true;
const defVal_faceEnabled = true;
const defVal_positionEnabled = true;
const defVal_wordEnabled = true;
const defVal_shapeEnabled = true;
const defVal_cornerEnabled = true;
const defVal_soundEnabled = true;
const defVal_colorEnabled = true;
const defVal_tileAHexColor = "#111";
const defVal_tileBHexColor = "#888";
const defVal_nLevel = 1;
const defVal_sceneDimmer = 0.5;
const defVal_zoom = 0.7;
const defVal_perspective = 15;
const defVal_targetNumOfStimuli = 5;
const defVal_baseDelay = 5000;
const defVal_maxAllowedMistakes = 3;
const defVal_prevLevelThreshold = 0.5;
const defVal_nextLevelThreshold = 0.8;

// Editable settings
let wallsEnabled = defVal_wallsEnabled;
let cameraEnabled = defVal_cameraEnabled;
let faceEnabled = defVal_faceEnabled;
let positionEnabled = defVal_positionEnabled;
let wordEnabled = defVal_wordEnabled;
let shapeEnabled = defVal_shapeEnabled;
let cornerEnabled = defVal_cornerEnabled;
let soundEnabled = defVal_soundEnabled;
let colorEnabled = defVal_colorEnabled;
let tileAHexColor = defVal_tileAHexColor;
let tileBHexColor = defVal_tileBHexColor;
let nLevel = defVal_nLevel;
let sceneDimmer = defVal_sceneDimmer;
let zoom = defVal_zoom;
let perspective = defVal_perspective;
let targetNumOfStimuli = defVal_targetNumOfStimuli;
let baseDelay = defVal_baseDelay;
let maxAllowedMistakes = defVal_maxAllowedMistakes;
let prevLevelThreshold = defVal_prevLevelThreshold;
let nextLevelThreshold = defVal_nextLevelThreshold;

// Game states
let matchingStimuli = 0;
let stimuliCount = 0;
let intervals = [];

let isRunning = false;

let enableWallsCheck = true;
let enableCameraCheck = true;
let enableFaceCheck = true;
let enablePositionCheck = true;

let enableWordCheck = true;
let enableShapeCheck = true;
let enableCornerCheck = true;
let enableSoundCheck = true;
let enableColorCheck = true;

let currWalls;
let currCamera;
let currFace;
let currPosition;

let currWord;
let currShape;
let currCorner;
let currSound;
let currColor;

let rightWalls = 0;
let rightCamera = 0;
let rightFace = 0;
let rightPosition = 0;

let rightWord = 0;
let rightShape = 0;
let rightCorner = 0;
let rightSound = 0;
let rightColor = 0;

let wrongWalls = 0;
let wrongCamera = 0;
let wrongFace = 0;
let wrongPosition = 0;

let wrongWord = 0;
let wrongShape = 0;
let wrongCorner = 0;
let wrongSound = 0;
let wrongColor = 0;

// Events
wallsEnableTrigHandler(null, wallsEnabled);
wallsEnableTrig.addEventListener("input", wallsEnableTrigHandler);

cameraEnableTrigHandler(null, cameraEnabled);
cameraEnableTrig.addEventListener("input", cameraEnableTrigHandler);

faceEnableTrigHandler(null, faceEnabled);
faceEnableTrig.addEventListener("input", faceEnableTrigHandler);

positionEnableTrigHandler(null, positionEnabled);
positionEnableTrig.addEventListener("input", positionEnableTrigHandler);

wordEnableTrigHandler(null, wordEnabled);
wordEnableTrig.addEventListener("input", wordEnableTrigHandler);

shapeEnableTrigHandler(null, shapeEnabled);
shapeEnableTrig.addEventListener("input", shapeEnableTrigHandler);

cornerEnableTrigHandler(null, cornerEnabled);
cornerEnableTrig.addEventListener("input", cornerEnableTrigHandler);

soundEnableTrigHandler(null, faceEnabled);
soundEnableTrig.addEventListener("input", soundEnableTrigHandler);

colorEnableTrigHandler(null, colorEnabled);
colorEnableTrig.addEventListener("input", colorEnableTrigHandler);

nLevelInputHandler(null, nLevel);
nLevelInput.addEventListener("input", nLevelInputHandler);

sceneDimmerInputHandler(null, sceneDimmer);
sceneDimmerInput.addEventListener("input", sceneDimmerInputHandler);

zoomInputHandler(null, zoom);
zoomInput.addEventListener("input", zoomInputHandler);

perspectiveInputHandler(null, perspective);
perspectiveInput.addEventListener("input", perspectiveInputHandler);

targetStimuliInputHandler(null, targetNumOfStimuli);
targetStimuliInput.addEventListener("input", targetStimuliInputHandler);

baseDelayInputHandler(null, baseDelay);
baseDelayInput.addEventListener("input", baseDelayInputHandler);

maxAllowedMistakesInputHandler(null, maxAllowedMistakes);
maxAllowedMistakesInput.addEventListener("input", maxAllowedMistakesInputHandler);

previousLevelThresholdInputHandler(null, prevLevelThreshold);
previousLevelThresholdInput.addEventListener("input", previousLevelThresholdInputHandler);

nextLevelThresholdInputHandler(null, nextLevelThreshold);
nextLevelThresholdInput.addEventListener("input", nextLevelThresholdInputHandler);

resetSettingsButton.addEventListener("click", resetSettings);
openStatsButton.addEventListener("click", openStats);

["walls", "camera", "face", "position", "word", "shape", "corner", "sound", "color"]
  .forEach(sense => {
    document.querySelector(".check-" + sense)
      .addEventListener(
        "click",
        () => checkHandler(sense)
      );
    document.querySelector(".check-" + sense)
      .addEventListener(
        "touchstart",
        () => checkHandler(sense)
      );
  });

document.addEventListener(
  "keypress",
  evt => {
    if (evt.code === "KeyA") {
      checkHandler("walls");
    } else if (evt.code === "KeyS") {
      checkHandler("camera");
    } else if (evt.code === "KeyD") {
      checkHandler("face");
    } else if (evt.code === "KeyF") {
      checkHandler("position");
    } else if (evt.code === "KeyG") {
      checkHandler("word");
    } else if (evt.code === "KeyH") {
      checkHandler("shape");
    } else if (evt.code === "KeyJ") {
      checkHandler("corner");
    } else if (evt.code === "KeyK") {
      checkHandler("sound");
    } else if (evt.code === "KeyL") {
      checkHandler("color");
    } else if (evt.code === "KeyQ") {
      play();
    } else if (evt.code === "KeyP") {
      stop();
    }
  }
);

loadSettings();
