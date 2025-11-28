import netP5.*;
import oscP5.*;

void setup(){
size(1200, 900);
background(#cdc7d4);
noStroke();
}

void draw(){
fill(#e1f4fa);
circle(width/2,height/3, 400);
fill(#ffffff);
rect(125, 650, 950, 100); //this rect will represent the volume
}
