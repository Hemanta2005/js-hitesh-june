# Projects related to DOM

##project link 

#Solution code 

##Project 1

``` javascript

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach((button) => {
  console.log(button)
  button.addEventListener("click", function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    } else if (e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    } else if (e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    } else {
      body.style.backgroundColor = 'white'
    }
  })
})

```



# Project: 2D Space Shooter V1

``` javascript
const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.querySelector("#score")
const livesElement = document.querySelector("#lives")

canvas.width = 800;
canvas.height = 600;


const player = {
    x: 375, 
    y: 500, 
    width: 50,
    height: 50, 
    speed: 5
};

const keys = {
    left: false, 
    right: false, 

}

const bullets = [];

const enemies = [];

let score = 0;
let lives = 3;
let gameOver = false;



function drawPlayer () {
    ctx.fillStyle = "white";

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    )
}

document.addEventListener('keydown', function(event){

    console.log(event.key);

    if (event.key === "a" || event.key === "ArrowLeft"){
        keys.left = true
    }
    if (event.key === "d" || event.key === "ArrowRight"){
        keys.right = true
    }

    if (event.key === " "){
        shootBullet();
    }
    
    
})

document.addEventListener('keyup', function(event){

    if (event.key === "a" || event.key === "ArrowLeft"){
        keys.left = false
    } 
    if (event.key === "d" || event.key === "ArrowRight"){
        keys.right = false
    }

})

function movePlayer () {

    if(keys.left && player.x > 0){
        player.x = player.x - player.speed;
    }
    if (keys.right && player.x < 750){
        player.x = player.x + player.speed;
    }
}


function gameLoop() {

    if (gameOver){
        drawGameOver();
        return;
    }

    ctx.clearRect (0, 0, canvas.width, canvas.height); 
    movePlayer();
    moveBullets();
    moveEnemies();

    drawPlayer(); 
    drawBullets();
    drawEnemies();

    checkBulletEnemyCollision();
    
    requestAnimationFrame(gameLoop);
}







//BUllet making 


function shootBullet() {
    const bullet = {
        x: player.x + player.width / 2-2.5,
        y: player.y, 
        width: 5,
        height: 5, 
        speed: 7
    }; 
    bullets.push(bullet); 
    console.log(bullets);
}

function drawBullets(){
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];

        ctx.fillStyle = 'cyan'
        
        ctx.fillRect(
            bullet.x,
            bullet.y,
            bullet.width,
            bullet.height
        );
    }
}

function moveBullets() {

    for (let i = bullets.length - 1; i >= 0; i--) {

        const bullet = bullets[i];

        bullet.y = bullet.y - bullet.speed;

        if (bullet.y + bullet.height < 0) {
            bullets.splice(i, 1);
        }
    }
}





//Enemy making

function createEnemy(){

    if (gameOver){
        return;
    }

    const enemy = {
        x : Math.random() * (canvas.width - 40),
        y: -40, 
        width: 40, 
        height: 40, 
        speed: 2
    }; 

    enemies.push(enemy)
}

function drawEnemies () {

    for (let i = 0; i< enemies.length; i++){

        const enemy = enemies[i]; 

        ctx.fillStyle = "red"; 

        ctx.fillRect(
            enemy.x,
            enemy.y,
            enemy.width,
            enemy.height
        );
    }
}

function moveEnemies () {

    for (let i = enemies.length - 1; i>=0; i--){
        const enemy = enemies[i]; 

        enemy.y = enemy.y + enemy.speed;
        
        if (enemy.y > canvas.height){
            enemies.splice(i, 1);
            lives = lives - 1; 
            livesElement.textContent = lives;
            if (lives <= 0){
                gameOver = true; 
            }
        }
    }
}

setInterval(createEnemy ,1000)
gameLoop();   


//Coliding mech

function isColliding(rect1, rect2) {

    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

function checkBulletEnemyCollision () {
    for (let bulletIndex = bullets.length - 1; bulletIndex >= 0; bulletIndex--) {
        const bullet = bullets[bulletIndex];
        
        for (let enemyIndex = enemies.length - 1; enemyIndex >= 0; enemyIndex--) {
            const enemy = enemies[enemyIndex]

            if (isColliding(bullet, enemy)) {

                bullets.splice(bulletIndex, 1); 
                enemies.splice(enemyIndex, 1);
                score = score + 10;
                 scoreElement.textContent = score;

                break;
            }
        }
    }
}

function drawGameOver() {

    ctx.fillStyle = "white";

    ctx.font = "50px Orbitron";

    ctx.textAlign = "center";

    ctx.fillText(
        "GAME OVER",
        canvas.width / 2,
        canvas.height / 2
    );
}
```