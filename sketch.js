const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
//{"abbreviation":"IST","client_ip":"117.192.35.84","datetime":"2021-07-03T15:33:09.246565+05:30","day_of_week":6,"day_of_year":184,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,"raw_offset":19800,"timezone":"Asia/Kolkata","unixtime":1625306589,"utc_datetime":"2021-07-03T10:03:09.246565+00:00","utc_offset":"+05:30","week_number":26}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);


    // write code to fetch time from API
    if(hour>=04 && hour<=06){
        bg = "sprites/sunrise1.png";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise2.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise3.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise4.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise5.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise6.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise7.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise8.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise9.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise10.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise11.jpg";
    }
    else if (hour>=04 && hour<=06){
        bg = "sprites/sunrise12.jpg";
    }
    backgroundImg = loadImage(bg);
    

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
