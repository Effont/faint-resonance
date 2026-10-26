const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const playerImage = document.getElementById("player");
const keys = {};

window.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;


// =====================================================
// PLAYER
// =====================================================

const player = {
    x: 180,
    y: 425,
    width: 180,
    height: 120
};


// =====================================================
// BACKGROUND SETTINGS
// =====================================================

let time = 0;


// =====================================================
// MAIN BACKGROUND
// =====================================================

function drawBackground() {

    drawSky();

    drawStars();

    drawClouds();

    drawFarMountains();

    drawDistantRuins();

    drawMainCitadel();

    drawMiddleGround();

    drawFog();

    drawCrystals();

    drawForegroundTerrain();

    drawPlatform();

    drawBanner();
}


// =====================================================
// SKY
// =====================================================

function drawSky() {

    const gradient = ctx.createLinearGradient(
        0,
        0,
        0,
        GAME_HEIGHT
    );

    gradient.addColorStop(0, "#050914");
    gradient.addColorStop(0.35, "#0b1428");
    gradient.addColorStop(0.65, "#101e38");
    gradient.addColorStop(1, "#17253b");

    ctx.fillStyle = gradient;

    ctx.fillRect(
        0,
        0,
        GAME_WIDTH,
        GAME_HEIGHT
    );


    // Subtle blue atmospheric glow

    const glow = ctx.createRadialGradient(
        580,
        350,
        20,
        580,
        350,
        500
    );

    glow.addColorStop(
        0,
        "rgba(54, 102, 165, 0.20)"
    );

    glow.addColorStop(
        1,
        "rgba(20, 40, 70, 0)"
    );

    ctx.fillStyle = glow;

    ctx.fillRect(
        0,
        0,
        GAME_WIDTH,
        GAME_HEIGHT
    );
}


// =====================================================
// STARS / DISTANT LIGHTS
// =====================================================

function drawStars() {

    const stars = [
        [80, 90, 1],
        [190, 130, 1],
        [310, 75, 2],
        [450, 115, 1],
        [610, 65, 1],
        [770, 120, 1],
        [930, 80, 2],
        [1080, 130, 1],
        [1210, 70, 1],

        [150, 180, 1],
        [380, 170, 1],
        [720, 175, 1],
        [850, 90, 1],
        [1150, 190, 1]
    ];

    ctx.fillStyle = "rgba(120, 170, 220, 0.5)";

    stars.forEach(star => {

        ctx.beginPath();

        ctx.arc(
            star[0],
            star[1],
            star[2],
            0,
            Math.PI * 2
        );

        ctx.fill();
    });
}


// =====================================================
// CLOUDS
// =====================================================

function drawClouds() {

    drawCloud(
        120,
        120,
        1.5
    );

    drawCloud(
        460,
        80,
        1.1
    );

    drawCloud(
        820,
        135,
        1.5
    );

    drawCloud(
        1120,
        95,
        1.3
    );
}


function drawCloud(x, y, scale) {

    ctx.save();

    ctx.translate(x, y);

    ctx.scale(
        scale,
        scale
    );

    ctx.fillStyle =
        "rgba(3, 8, 18, 0.65)";

    ctx.beginPath();

    ctx.arc(
        0,
        20,
        45,
        0,
        Math.PI * 2
    );

    ctx.arc(
        45,
        5,
        60,
        0,
        Math.PI * 2
    );

    ctx.arc(
        100,
        20,
        45,
        0,
        Math.PI * 2
    );

    ctx.fill();

    ctx.restore();
}


// =====================================================
// FAR MOUNTAINS
// =====================================================

function drawFarMountains() {

    ctx.fillStyle = "#121d30";

    ctx.beginPath();

    ctx.moveTo(
        0,
        430
    );

    for (
        let x = 0;
        x <= GAME_WIDTH;
        x += 80
    ) {

        const height =
            100 +
            Math.sin(x * 0.015) * 50 +
            Math.sin(x * 0.04) * 25;

        ctx.lineTo(
            x,
            430 - height
        );
    }

    ctx.lineTo(
        GAME_WIDTH,
        GAME_HEIGHT
    );

    ctx.lineTo(
        0,
        GAME_HEIGHT
    );

    ctx.closePath();

    ctx.fill();
}


// =====================================================
// DISTANT FUTURISTIC RUINS
// =====================================================

function drawDistantRuins() {

    const ruins = [
        [80, 370, 35, 150],
        [180, 390, 50, 130],
        [310, 350, 35, 170],
        [440, 390, 45, 120],
        [550, 345, 40, 175],
        [680, 390, 50, 130],
        [800, 350, 45, 170],
        [930, 390, 40, 140],
        [1070, 350, 45, 180],
        [1200, 370, 40, 160]
    ];

    ruins.forEach(ruin => {

        drawRuin(
            ruin[0],
            ruin[1],
            ruin[2],
            ruin[3]
        );
    });
}


function drawRuin(
    x,
    y,
    width,
    height
) {

    ctx.fillStyle = "#182438";

    ctx.fillRect(
        x,
        y - height,
        width,
        height
    );


    // Glowing blue windows

    ctx.fillStyle =
        "rgba(40, 140, 230, 0.65)";

    for (
        let windowY = y - height + 30;
        windowY < y - 20;
        windowY += 35
    ) {

        ctx.fillRect(
            x + width * 0.4,
            windowY,
            4,
            12
        );
    }


    // Antenna

    ctx.fillStyle = "#0d1625";

    ctx.fillRect(
        x + width / 2 - 2,
        y - height - 25,
        4,
        25
    );
}


// =====================================================
// MAIN CITADEL
// =====================================================

function drawMainCitadel() {

    const x = 930;
    const baseY = 405;


    // Atmospheric glow behind citadel

    const glow = ctx.createRadialGradient(
        x,
        300,
        20,
        x,
        300,
        300
    );

    glow.addColorStop(
        0,
        "rgba(30, 105, 180, 0.20)"
    );

    glow.addColorStop(
        1,
        "rgba(10, 30, 60, 0)"
    );

    ctx.fillStyle = glow;

    ctx.fillRect(
        x - 300,
        50,
        600,
        400
    );


    // Main tower

    ctx.fillStyle = "#101a2b";

    ctx.fillRect(
        x - 80,
        130,
        160,
        275
    );


    // Central tower

    ctx.fillStyle = "#0c1525";

    ctx.fillRect(
        x - 25,
        70,
        50,
        335
    );


    // Side towers

    ctx.fillRect(
        x - 155,
        190,
        55,
        215
    );

    ctx.fillRect(
        x + 100,
        170,
        55,
        235
    );


    // Tower tips

    ctx.fillStyle = "#080e19";

    ctx.beginPath();

    ctx.moveTo(
        x - 35,
        70
    );

    ctx.lineTo(
        x,
        20
    );

    ctx.lineTo(
        x + 35,
        70
    );

    ctx.closePath();

    ctx.fill();


    // Blue energy lines

    drawEnergyLine(
        x,
        95,
        x,
        385
    );

    drawEnergyLine(
        x - 55,
        160,
        x - 55,
        385
    );

    drawEnergyLine(
        x + 55,
        140,
        x + 55,
        385
    );


    // Small red lights

    ctx.fillStyle = "#ff4058";

    ctx.shadowColor = "#ff304d";
    ctx.shadowBlur = 10;

    ctx.beginPath();

    ctx.arc(
        x,
        20,
        3,
        0,
        Math.PI * 2
    );

    ctx.arc(
        x - 155,
        185,
        3,
        0,
        Math.PI * 2
    );

    ctx.arc(
        x + 155,
        165,
        3,
        0,
        Math.PI * 2
    );

    ctx.fill();

    ctx.shadowBlur = 0;
}


function drawEnergyLine(
    x1,
    y1,
    x2,
    y2
) {

    ctx.strokeStyle =
        "rgba(40, 155, 255, 0.75)";

    ctx.lineWidth = 3;

    ctx.shadowColor =
        "#168cff";

    ctx.shadowBlur = 12;

    ctx.beginPath();

    ctx.moveTo(
        x1,
        y1
    );

    ctx.lineTo(
        x2,
        y2
    );

    ctx.stroke();

    ctx.shadowBlur = 0;
}


// =====================================================
// MIDGROUND
// =====================================================

function drawMiddleGround() {

    ctx.fillStyle = "#111a28";

    ctx.beginPath();

    ctx.moveTo(
        0,
        450
    );

    ctx.lineTo(
        140,
        405
    );

    ctx.lineTo(
        260,
        455
    );

    ctx.lineTo(
        390,
        420
    );

    ctx.lineTo(
        520,
        465
    );

    ctx.lineTo(
        650,
        410
    );

    ctx.lineTo(
        780,
        455
    );

    ctx.lineTo(
        920,
        400
    );

    ctx.lineTo(
        1050,
        455
    );

    ctx.lineTo(
        1160,
        420
    );

    ctx.lineTo(
        1280,
        450
    );

    ctx.lineTo(
        1280,
        720
    );

    ctx.lineTo(
        0,
        720
    );

    ctx.closePath();

    ctx.fill();


    // Destroyed futuristic structure

    drawDestroyedTower(
        260,
        470,
        100,
        150
    );


    // Broken machinery

    drawBrokenMachine(
        570,
        500
    );


    // Monster nest

    drawMonsterNest(
        1040,
        500
    );


    // Energy crystals

    drawCrystal(
        170,
        480,
        30
    );

    drawCrystal(
        470,
        455,
        20
    );

    drawCrystal(
        790,
        490,
        28
    );

    drawCrystal(
        1110,
        460,
        25
    );
}


// =====================================================
// DESTROYED TOWER
// =====================================================

function drawDestroyedTower(
    x,
    y,
    width,
    height
) {

    ctx.save();

    // Main ruined structure

    ctx.fillStyle = "#0b121e";

    ctx.fillRect(
        x,
        y - height,
        width * 0.65,
        height
    );


    // Broken upper section

    ctx.beginPath();

    ctx.moveTo(
        x,
        y - height
    );

    ctx.lineTo(
        x + 30,
        y - height - 35
    );

    ctx.lineTo(
        x + 55,
        y - height - 10
    );

    ctx.lineTo(
        x + 70,
        y - height - 45
    );

    ctx.lineTo(
        x + width * 0.65,
        y - height
    );

    ctx.closePath();

    ctx.fill();


    // Damaged side wall

    ctx.fillStyle = "#141f30";

    ctx.fillRect(
        x + width * 0.65,
        y - height + 35,
        width * 0.35,
        height - 35
    );


    // Broken windows

    ctx.fillStyle =
        "rgba(35, 125, 210, 0.55)";

    ctx.fillRect(
        x + 25,
        y - height + 35,
        7,
        25
    );

    ctx.fillRect(
        x + 55,
        y - height + 80,
        7,
        20
    );

    ctx.fillRect(
        x + 90,
        y - height + 55,
        6,
        18
    );


    // Exposed energy cable

    ctx.strokeStyle =
        "rgba(25, 145, 240, 0.7)";

    ctx.lineWidth = 3;

    ctx.beginPath();

    ctx.moveTo(
        x + 35,
        y - 30
    );

    ctx.lineTo(
        x + 60,
        y - 70
    );

    ctx.lineTo(
        x + 45,
        y - 110
    );

    ctx.stroke();


    ctx.restore();
}


// =====================================================
// BROKEN MACHINERY
// =====================================================

function drawBrokenMachine(
    x,
    y
) {

    ctx.save();

    // Main machine body

    ctx.fillStyle = "#151f2d";

    ctx.fillRect(
        x,
        y - 50,
        100,
        50
    );


    // Tilted upper panel

    ctx.fillStyle = "#202d3e";

    ctx.beginPath();

    ctx.moveTo(
        x + 15,
        y - 50
    );

    ctx.lineTo(
        x + 80,
        y - 75
    );

    ctx.lineTo(
        x + 100,
        y - 50
    );

    ctx.closePath();

    ctx.fill();


    // Broken antenna

    ctx.strokeStyle = "#111923";

    ctx.lineWidth = 5;

    ctx.beginPath();

    ctx.moveTo(
        x + 70,
        y - 65
    );

    ctx.lineTo(
        x + 115,
        y - 100
    );

    ctx.lineTo(
        x + 130,
        y - 85
    );

    ctx.stroke();


    // Energy leak

    ctx.strokeStyle =
        "rgba(20, 150, 255, 0.8)";

    ctx.lineWidth = 2;

    ctx.shadowColor =
        "#168cff";

    ctx.shadowBlur = 8;

    ctx.beginPath();

    ctx.moveTo(
        x + 30,
        y - 25
    );

    ctx.lineTo(
        x + 45,
        y - 10
    );

    ctx.lineTo(
        x + 38,
        y
    );

    ctx.stroke();

    ctx.shadowBlur = 0;


    // Ground shadow

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.45)";

    ctx.beginPath();

    ctx.ellipse(
        x + 50,
        y + 5,
        70,
        12,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.restore();
}


// =====================================================
// MONSTER NEST
// =====================================================

function drawMonsterNest(
    x,
    y
) {

    ctx.save();

    // Dark organic mass

    ctx.fillStyle = "#0b1018";

    ctx.beginPath();

    ctx.ellipse(
        x,
        y,
        75,
        35,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Outer spikes

    ctx.fillStyle = "#101a25";

    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const angle =
            (Math.PI * 2 / 7) * i;

        const spikeX =
            x + Math.cos(angle) * 55;

        const spikeY =
            y + Math.sin(angle) * 28;

        ctx.beginPath();

        ctx.moveTo(
            spikeX,
            spikeY
        );

        ctx.lineTo(
            spikeX +
            Math.cos(angle) * 30,

            spikeY +
            Math.sin(angle) * 30
        );

        ctx.lineTo(
            spikeX +
            Math.cos(angle + 0.4) * 15,

            spikeY +
            Math.sin(angle + 0.4) * 15
        );

        ctx.closePath();

        ctx.fill();
    }


    // Inner glow

    const glow =
        ctx.createRadialGradient(
            x,
            y,
            2,
            x,
            y,
            45
        );

    glow.addColorStop(
        0,
        "rgba(35, 125, 220, 0.35)"
    );

    glow.addColorStop(
        1,
        "rgba(35, 125, 220, 0)"
    );

    ctx.fillStyle = glow;

    ctx.fillRect(
        x - 50,
        y - 40,
        100,
        80
    );


    // Core

    ctx.fillStyle =
        "rgba(30, 115, 210, 0.65)";

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        8,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.restore();
}


// =====================================================
// CRYSTALS
// =====================================================

function drawCrystals() {

    // Existing crystals are already
    // drawn in the middle ground.
}


// =====================================================
// CRYSTAL
// =====================================================

function drawCrystal(
    x,
    y,
    size
) {

    ctx.save();

    ctx.translate(
        x,
        y
    );


    const glow = ctx.createRadialGradient(
        0,
        0,
        2,
        0,
        0,
        size * 2
    );

    glow.addColorStop(
        0,
        "rgba(30, 130, 255, 0.35)"
    );

    glow.addColorStop(
        1,
        "rgba(30, 130, 255, 0)"
    );

    ctx.fillStyle = glow;

    ctx.fillRect(
        -size * 2,
        -size * 2,
        size * 4,
        size * 4
    );


    ctx.fillStyle = "#102b4c";

    ctx.beginPath();

    ctx.moveTo(
        0,
        -size
    );

    ctx.lineTo(
        size * 0.45,
        0
    );

    ctx.lineTo(
        size * 0.25,
        size
    );

    ctx.lineTo(
        -size * 0.35,
        size * 0.5
    );

    ctx.closePath();

    ctx.fill();


    ctx.strokeStyle =
        "#187dca";

    ctx.lineWidth = 2;

    ctx.stroke();

    ctx.restore();
}


// =====================================================
// FOG
// =====================================================

function drawFog() {

    const fog = ctx.createLinearGradient(
        0,
        350,
        0,
        590
    );

    fog.addColorStop(
        0,
        "rgba(50, 80, 110, 0)"
    );

    fog.addColorStop(
        0.5,
        "rgba(50, 75, 105, 0.16)"
    );

    fog.addColorStop(
        1,
        "rgba(15, 25, 40, 0.55)"
    );

    ctx.fillStyle = fog;

    ctx.fillRect(
        0,
        340,
        GAME_WIDTH,
        250
    );
}


// =====================================================
// FOREGROUND TERRAIN
// =====================================================

function drawForegroundTerrain() {

    const ground = ctx.createLinearGradient(
        0,
        520,
        0,
        720
    );

    ground.addColorStop(
        0,
        "#171c27"
    );

    ground.addColorStop(
        0.45,
        "#0c111a"
    );

    ground.addColorStop(
        1,
        "#05080e"
    );

    ctx.fillStyle = ground;

    ctx.fillRect(
        0,
        520,
        GAME_WIDTH,
        200
    );


    // Uneven rocks along horizon

    ctx.fillStyle = "#080d15";

    for (
        let x = 0;
        x < GAME_WIDTH;
        x += 70
    ) {

        const height =
            20 +
            Math.sin(x * 0.08) * 15;

        ctx.beginPath();

        ctx.moveTo(
            x,
            530
        );

        ctx.lineTo(
            x + 25,
            530 - height
        );

        ctx.lineTo(
            x + 55,
            530
        );

        ctx.closePath();

        ctx.fill();
    }


    // Monster claw marks

    drawMonsterClawMarks(
        380,
        545
    );

    drawMonsterClawMarks(
        900,
        545
    );
}


// =====================================================
// MONSTER CLAW MARKS
// =====================================================

function drawMonsterClawMarks(
    x,
    y
) {

    ctx.save();

    ctx.strokeStyle =
        "rgba(3, 6, 10, 0.9)";

    ctx.lineWidth = 6;

    ctx.lineCap = "round";

    for (
        let i = 0;
        i < 3;
        i++
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x + i * 15,
            y
        );

        ctx.lineTo(
            x + i * 15 + 18,
            y - 28
        );

        ctx.stroke();
    }

    ctx.restore();
}


// =====================================================
// PLAYABLE TECHNOLOGY PLATFORM
// =====================================================

function drawPlatform() {

    // Top surface

    const platform = ctx.createLinearGradient(
        0,
        545,
        0,
        610
    );

    platform.addColorStop(
        0,
        "#29313b"
    );

    platform.addColorStop(
        1,
        "#111820"
    );

    ctx.fillStyle = platform;

    ctx.fillRect(
        0,
        545,
        GAME_WIDTH,
        70
    );


    // Platform edge

    ctx.fillStyle = "#080c12";

    ctx.fillRect(
        0,
        605,
        GAME_WIDTH,
        20
    );


    // Cyan technology strips

    for (
        let x = 40;
        x < GAME_WIDTH;
        x += 150
    ) {

        ctx.fillStyle =
            "rgba(20, 130, 220, 0.7)";

        ctx.fillRect(
            x,
            565,
            55,
            3
        );
    }


    // Seams

    ctx.strokeStyle =
        "rgba(90, 110, 130, 0.25)";

    ctx.lineWidth = 2;

    for (
        let x = 0;
        x < GAME_WIDTH;
        x += 100
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x,
            545
        );

        ctx.lineTo(
            x + 25,
            605
        );

        ctx.stroke();
    }
}


// =====================================================
// BANNER
// =====================================================

function drawBanner() {

    const x = 95;
    const y = 520;


    // Pole

    ctx.fillStyle = "#11151c";

    ctx.fillRect(
        x,
        y - 180,
        7,
        180
    );


    // Banner

    ctx.fillStyle = "#080c14";

    ctx.beginPath();

    ctx.moveTo(
        x + 7,
        y - 170
    );

    ctx.lineTo(
        x + 95,
        y - 155
    );

    ctx.lineTo(
        x + 70,
        y - 90
    );

    ctx.lineTo(
        x + 7,
        y - 105
    );

    ctx.closePath();

    ctx.fill();


    // Blue emblem

    ctx.strokeStyle =
        "rgba(40, 130, 220, 0.65)";

    ctx.lineWidth = 3;

    ctx.beginPath();

    ctx.arc(
        x + 45,
        y - 130,
        20,
        0,
        Math.PI * 2
    );

    ctx.stroke();
}


// =====================================================
// PLAYER
// =====================================================

function drawPlayer() {

    if (!playerImage.complete) {
        return;
    }

    ctx.drawImage(
        playerImage,
        player.x,
        player.y,
        player.width,
        player.height
    );
}

function updatePlayer() {

    if (keys["a"]) {
        player.x -= 5;
    }

    if (keys["d"]) {
        player.x += 5;
    }
}


// =====================================================
// GAME LOOP
// =====================================================

function gameLoop() {

    time += 0.016;

    ctx.clearRect(
        0,
        0,
        GAME_WIDTH,
        GAME_HEIGHT
    );

    drawBackground();

    updatePlayer();
    drawPlayer();

    requestAnimationFrame(gameLoop);
}


gameLoop();