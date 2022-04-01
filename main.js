function setup()
{
 canvas = createCanvas(600, 500);
 canvas.center();

 video = createCapture(VIDEO);
 video.hide();
}

function draw()
{
image(video,0,0,600,500);
}

function preload()
{
    song = loadSound("Master - Kutti Story Video _ Thalapathy Vijay _ Anirudh Ravichander _ Lokesh Kanagaraj.mp3");

    song = loadSound("DARBAR (Tamil) - Chumma Kizhi (Lyric Video) _ Rajinikanth _ AR Murugadoss _ Anirudh _ Subaskaran.mp3");
}