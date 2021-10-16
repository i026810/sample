// DOMがロードされたとき(初期化)
window.onload = function () {
    // ローディングの処理
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        document.getElementById("wrapper").style.display = "block";
    }, 1000);

    // CANVASの処理(初期化)
    let SW = 640;
    let SH = 360;
    let CSVs = document.getElementById("stage");
    CSVs.width = SW;
    CSVs.height = SH;
    CSVs.style.border = "1px solid white";
    let CTXs = CSVs.getContext("2d");
    CTXs.fillStyle = "white";
    CTXs.fillRect(0, 0, SW, SH);
    // バッファ用のCANVAS
    let CSVb = document.createElement("canvas");
    CSVb.width = SW;
    CSVb.height = SH;
    let CTXb = CSVb.getContext("2d");
    CTXb.fillStyle = "white";
    CTXb.fillRect(0, 0, SW, SH);

    // playerオブジェクト設定
    let player = new Object();
    player.img = new Image();
    player.img.src = "img/player/player00.png";

    player.img.onload = function () {
        CTXb.drawImage(player.img, 0, 0);
        let imageData = CTXb.getImageData(20, 32, 20, 32);
        CTXs.putImageData(imageData, 0, 0);
    };
};
