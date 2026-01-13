//AI Generated
function visuals(){
  // Helper function to check if a sentiment is active (primary or secondary)
  function isActive(sentiment) {
    return currentVisualizationData.sentiment === sentiment || 
           currentVisualizationData.sentiment2 === sentiment;
  }
  
  //AI Generated
  // Helper function to get color for a sentiment
  function getColor(sentiment) {
    if (currentVisualizationData.sentiment === sentiment) {
      //provides current sentiment colours
      return currentVisualizationData.color;
    } else if (currentVisualizationData.sentiment2 === sentiment) {
      return currentVisualizationData.color2;
    }
    return null;
  }
  
  //AI Generated
  // Helper function to get opacity based on primary/secondary status
  function getOpacity(sentiment) {
    if (currentVisualizationData.sentiment === sentiment) {
      return 255; // Primary sentiment - full opacity
    } else if (currentVisualizationData.sentiment2 === sentiment) {
      return 145; // Secondary sentiment - slightly transparent
    }
    return 255;
  }
  
  //AI generated edits to code that I originally wrote
  // Neutral
  if (currentVisualizationData.sentiment === 'neutral') {
    fill(currentVisualizationData.color);
    ellipse(640, 350, 200);
  }
  
  //AI generated edits to code that I originally wrote
  // Happy
  if (isActive('happy')) {
    //changes to corresponding colour
    let col = color(getColor('happy'));
    col.setAlpha(getOpacity('happy'));
    fill(col);
    ellipse(640, 350, 200 + sin(frameCount * 0.1) * 20);
  } else {
    //changes back to default when not in use
    fill(245, 245, 245);
    ellipse(640, 350, 200 - sin(frameCount * 0.1) * 20);
  }
  
  //AI generated edits to code that I originally wrote
  // Excitement
  if (isActive('excitement')) {
    //changes to corresponding colour
    let col = color(getColor('excitement'));
    col.setAlpha(getOpacity('excitement'));
    fill(col);
    ellipse(590, 200, 320 + sin(frameCount * 0.1) * 20);
  } else {
    //changes back to default when not in use
    fill(255, 252, 252);
    ellipse(590, 200, 320 - sin(frameCount * 0.1) * 20);
  }
  
  //AI generated edits to code that I originally wrote
  // Sad
  if (isActive('sad')) {
    //changes to corresponding colour
    let col = color(getColor('sad'));
    col.setAlpha(getOpacity('sad'));
    fill(col);
    ellipse(500, 360, 220 + sin(frameCount * 0.1) * 20);
  } else {
    //changes back to default when not in use
    fill(222, 217, 217);
    ellipse(500, 360, 220 - sin(frameCount * 0.1) * 20);
  }
  
  //AI generated edits to code that I originally wrote
  // Calm
  if (isActive('calm')) {
    //changes to corresponding colour
    let col = color(getColor('calm'));
    col.setAlpha(getOpacity('calm'));
    fill(col);
    ellipse(390, 250, 250 + sin(frameCount * 0.1) * 20);
  } else {
    //changes back to default when not in use
    fill(237, 235, 235);
    ellipse(390, 250, 250 - sin(frameCount * 0.1) * 20);
  }
  
  //AI generated edits to code that I originally wrote
  // Aggressive
  if (isActive('aggressive')) {
    //changes to corresponding colour
    let col = color(getColor('aggressive'));
    col.setAlpha(getOpacity('aggressive'));
    fill(col);
    ellipse(790, 300, 190 + sin(frameCount * 0.1) * 20);
  } else {
    //changes back to default when not in use
    fill(245, 245, 245);
    ellipse(790, 300, 190 - sin(frameCount * 0.1) * 20);
  }
}