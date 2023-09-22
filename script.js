let myRand;
let points = 0;
let hitPoints = 3;

window.addEventListener("load", sidenVises);

function sidenVises() {
  myRand = Math.floor(Math.random() * 2) + 3;
  console.log("sidenVises");
  console.log(myRand);

  //skjul skærme
  document.querySelector("#game_over").classList.add("hide_screen");
  document.querySelector("#you_win").classList.add("hide_screen");
  document.querySelector("#start").classList.remove("hide_screen");

  document.querySelector("#start_knap").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");

  //reset liv, point og fjerne "hide" fra liv så de kan ses
  hitPoints = 3;
  points = 0;
  document.querySelector("#hp" + 1).classList.remove("hide");
  document.querySelector("#hp" + 2).classList.remove("hide");
  document.querySelector("#hp" + 3).classList.remove("hide");

  //skjuler skærme
  document.querySelector("#game_over").classList.add("hide_screen");
  document.querySelector("#you_win").classList.add("hide_screen");
  document.querySelector("#start").classList.add("hide_screen");

  //skjuler damer
  document.querySelector("#dame_neutral").classList.remove("dame_hide");
  document.querySelector("#dame_glad").classList.add("dame_hide");
  document.querySelector("#dame_ked").classList.add("dame_hide");

  //loader pointsystem og displayer en startsscore på "0 points"
  document.querySelector("#points").textContent = 0 + " points";
  console.log("mine points:", points);

  document.querySelector("#timer_sprite").classList.add("timer");
  document
    .querySelector("#timer_sprite")
    .addEventListener("animationend", gameOver);

  //random number 1-2 og 3-4
  myRand = Math.floor(Math.random() * 2) + 1;
  document
    .querySelector("#spil_sushi_container_1")
    .classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 2) + 3;
  document
    .querySelector("#spil_sushi_container_2")
    .classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 2) + 1;
  document
    .querySelector("#spil_sushi_container_3")
    .classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 2) + 3;
  document
    .querySelector("#spil_sushi_container_4")
    .classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 2) + 3;
  document
    .querySelector("#spil_sushi_container_5")
    .classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 2) + 1;
  document
    .querySelector("#spil_sushi_container_6")
    .classList.add("pos" + myRand);

  //start rulle-bånds animationerne
  document.querySelector("#spil_sushi_container_1").classList.add("rulle1");
  document.querySelector("#spil_sushi_container_2").classList.add("rulle2");
  document.querySelector("#spil_sushi_container_3").classList.add("rulle1");
  document.querySelector("#spil_sushi_container_4").classList.add("rulle2");
  document.querySelector("#spil_sushi_container_5").classList.add("rulle2");
  document.querySelector("#spil_sushi_container_6").classList.add("rulle1");

  //delay
  document.querySelector("#spil_sushi_container_3").classList.add("delay1");
  document.querySelector("#spil_sushi_container_4").classList.add("delay1");
  document.querySelector("#spil_sushi_container_5").classList.add("delay2");
  document.querySelector("#spil_sushi_container_6").classList.add("delay2");

  //lyt efter klik sushi
  document
    .querySelector("#spil_sushi_container_1")
    .addEventListener("click", clickSushi1);
  // lyt efter klik lort
  document
    .querySelector("#spil_sushi_container_2")
    .addEventListener("click", clickLort2);
  document
    .querySelector("#spil_sushi_container_3")
    .addEventListener("click", clickSushi3);
  document
    .querySelector("#spil_sushi_container_4")
    .addEventListener("click", clickSushi4);
  document
    .querySelector("#spil_sushi_container_5")
    .addEventListener("click", clickSushi5);
  document
    .querySelector("#spil_sushi_container_6")
    .addEventListener("click", clickLort6);
}

//_____________________________________________________KLIK OG RESTART FUNKTIONER_________________________________________________________//

function clickSushi1() {
  console.log("mine points:", points);
  points++;
  document.querySelector("#points").textContent = points + " points";
  //registrere i loggen om funktionen virker
  console.log("du har klikket");
  //fjerner muligheden for spam for flere point
  document
    .querySelector("#spil_sushi_container_1")
    .removeEventListener("click", clickSushi1);
  //sætter containerens rulle-animation på pause
  document.querySelector("#spil_sushi_container_1").classList.add("pause");
  //sætter spritens scale(0)-aniation i gang
  document.querySelector("#spil_sushi_sprite_1").classList.add("remove");
  //ved ikke helt
  document
    .querySelector("#spil_sushi_container_1")
    .addEventListener("animationend", restartSushi1);
  if (points >= 15) {
    youWin();
  }
  document.querySelector("#dame_glad").classList.remove("dame_hide");
}

function restartSushi1() {
  console.log("genstartSushi");
  //fjerner alt på container og sprite
  document.querySelector("#spil_sushi_container_1").classList = "";
  document.querySelector("#spil_sushi_sprite_1").classList = "";

  //ved ikke helt noget med at force et redraw
  document.querySelector("#spil_sushi_container_1").offsetLeft;

  //random number 1-2      igen
  myRand = Math.floor(Math.random() * 2) + 1;
  //giv container en random pos         igen
  document
    .querySelector("#spil_sushi_container_1")
    .classList.add("pos" + myRand);

  //rulle animation     igen
  document.querySelector("#spil_sushi_container_1").classList.add("rulle1");
  //click funktion       igen
  document
    .querySelector("#spil_sushi_container_1")
    .addEventListener("click", clickSushi1);

  document.querySelector("#dame_glad").classList.add("dame_hide");
}

function clickLort2() {
  console.log("clickLort");
  document.querySelector("#hp" + hitPoints).classList.add("hide");
  hitPoints--;
  document
    .querySelector("#spil_sushi_container_2")
    .removeEventListener("click", clickLort2);
  document.querySelector("#spil_sushi_container_2").classList.add("pause");
  document.querySelector("#spil_sushi_sprite_2").classList.add("remove");
  document
    .querySelector("#spil_sushi_container_2")
    .addEventListener("animationend", restartLort2);

  if (hitPoints <= 0) {
    gameOver();
  }
  document.querySelector("#dame_ked").classList.remove("dame_hide");
}

function restartLort2() {
  console.log("genstartLort");
  document.querySelector("#spil_sushi_container_2").classList = "";
  document.querySelector("#spil_sushi_sprite_2").classList = "";
  document.querySelector("#spil_sushi_container_2").offsetLeft;
  myRand = Math.floor(Math.random() * 2) + 3;
  document
    .querySelector("#spil_sushi_container_2")
    .classList.add("pos" + myRand);
  document.querySelector("#spil_sushi_container_2").classList.add("rulle2");
  document
    .querySelector("#spil_sushi_container_2")
    .addEventListener("click", clickLort2);
  document.querySelector("#dame_ked").classList.add("dame_hide");
}

function clickSushi3() {
  console.log("mine points:", points);
  points++;
  document.querySelector("#points").textContent = points + " points";
  console.log("du har klikket");
  document
    .querySelector("#spil_sushi_container_3")
    .removeEventListener("click", clickSushi3);
  document.querySelector("#spil_sushi_container_3").classList.add("pause");
  document.querySelector("#spil_sushi_sprite_3").classList.add("remove");
  document
    .querySelector("#spil_sushi_container_3")
    .addEventListener("animationend", restartSushi3);
  if (points >= 15) {
    youWin();
  }
  document.querySelector("#dame_glad").classList.remove("dame_hide");
}

function restartSushi3() {
  console.log("genstartSushi");
  document.querySelector("#spil_sushi_container_3").classList = "";
  document.querySelector("#spil_sushi_sprite_3").classList = "";
  document.querySelector("#spil_sushi_container_3").offsetLeft;
  myRand = Math.floor(Math.random() * 2) + 1;
  document
    .querySelector("#spil_sushi_container_3")
    .classList.add("pos" + myRand);
  document.querySelector("#spil_sushi_container_3").classList.add("rulle1");
  document
    .querySelector("#spil_sushi_container_3")
    .addEventListener("click", clickSushi3);
  document.querySelector("#dame_glad").classList.add("dame_hide");
}

function clickSushi4() {
  console.log("mine points:", points);
  points++;
  document.querySelector("#points").textContent = points + " points";
  console.log("du har klikket");
  document
    .querySelector("#spil_sushi_container_4")
    .removeEventListener("click", clickSushi4);
  document.querySelector("#spil_sushi_container_4").classList.add("pause");
  document.querySelector("#spil_sushi_sprite_4").classList.add("remove");
  document
    .querySelector("#spil_sushi_container_4")
    .addEventListener("animationend", restartSushi4);
  if (points >= 15) {
    youWin();
  }
  document.querySelector("#dame_glad").classList.remove("dame_hide");
}

function restartSushi4() {
  console.log("genstartSushi");
  document.querySelector("#spil_sushi_container_4").classList = "";
  document.querySelector("#spil_sushi_sprite_4").classList = "";
  document.querySelector("#spil_sushi_container_4").offsetLeft;
  myRand = Math.floor(Math.random() * 2) + 3;
  document
    .querySelector("#spil_sushi_container_4")
    .classList.add("pos" + myRand);
  document.querySelector("#spil_sushi_container_4").classList.add("rulle2");
  document
    .querySelector("#spil_sushi_container_4")
    .addEventListener("click", clickSushi4);
  document.querySelector("#dame_glad").classList.add("dame_hide");
}

function clickSushi5() {
  console.log("mine points:", points);
  points++;
  document.querySelector("#points").textContent = points + " points";
  console.log("du har klikket");
  document
    .querySelector("#spil_sushi_container_5")
    .removeEventListener("click", clickSushi5);
  document.querySelector("#spil_sushi_container_5").classList.add("pause");
  document.querySelector("#spil_sushi_sprite_5").classList.add("remove");
  document
    .querySelector("#spil_sushi_container_5")
    .addEventListener("animationend", restartSushi5);
  if (points >= 15) {
    youWin();
  }
  document.querySelector("#dame_glad").classList.remove("dame_hide");
}

function restartSushi5() {
  console.log("genstartSushi");
  document.querySelector("#spil_sushi_container_5").classList = "";
  document.querySelector("#spil_sushi_sprite_5").classList = "";
  document.querySelector("#spil_sushi_container_5").offsetLeft;
  myRand = Math.floor(Math.random() * 2) + 3;
  document
    .querySelector("#spil_sushi_container_5")
    .classList.add("pos" + myRand);
  document.querySelector("#spil_sushi_container_5").classList.add("rulle2");
  document
    .querySelector("#spil_sushi_container_5")
    .addEventListener("click", clickSushi5);
  document.querySelector("#dame_glad").classList.add("dame_hide");
}

function clickLort6() {
  console.log("clickLort");
  document.querySelector("#hp" + hitPoints).classList.add("hide");
  hitPoints--;
  document
    .querySelector("#spil_sushi_container_6")
    .removeEventListener("click", clickLort2);
  document.querySelector("#spil_sushi_container_6").classList.add("pause");
  document.querySelector("#spil_sushi_sprite_6").classList.add("remove");
  document
    .querySelector("#spil_sushi_container_6")
    .addEventListener("animationend", restartLort6);

  if (hitPoints <= 0) {
    gameOver();
  }
  document.querySelector("#dame_ked").classList.remove("dame_hide");
}

function restartLort6() {
  console.log("genstartLort");
  document.querySelector("#spil_sushi_container_6").classList = "";
  document.querySelector("#spil_sushi_sprite_6").classList = "";
  document.querySelector("#spil_sushi_container_6").offsetLeft;
  myRand = Math.floor(Math.random() * 2) + 1;
  document
    .querySelector("#spil_sushi_container_6")
    .classList.add("pos" + myRand);
  document.querySelector("#spil_sushi_container_6").classList.add("rulle1");
  document
    .querySelector("#spil_sushi_container_6")
    .addEventListener("click", clickLort6);
  document.querySelector("#dame_ked").classList.add("dame_hide");
}

function gameOver() {
  console.log("gameOver");

  //fjerner alle classes på diverse sprites og containers
  document.querySelector("#spil_sushi_container_1").classList = "";
  document.querySelector("#spil_sushi_sprite_1").classList = "";
  document.querySelector("#spil_sushi_container_2").classList = "";
  document.querySelector("#spil_sushi_sprite_2").classList = "";
  document.querySelector("#spil_sushi_container_3").classList = "";
  document.querySelector("#spil_sushi_sprite_3").classList = "";
  document.querySelector("#spil_sushi_container_4").classList = "";
  document.querySelector("#spil_sushi_sprite_4").classList = "";
  document.querySelector("#spil_sushi_container_5").classList = "";
  document.querySelector("#spil_sushi_sprite_5").classList = "";
  document.querySelector("#spil_sushi_container_6").classList = "";
  document.querySelector("#spil_sushi_sprite_6").classList = "";
  document.querySelector("#timer_sprite").classList = "";

  //fjerner alle eventlisteners på diverse containers
  document
    .querySelector("#spil_sushi_container_1")
    .removeEventListener("click", clickSushi1);
  document
    .querySelector("#spil_sushi_container_1")
    .removeEventListener("animationend", restartSushi1);
  document
    .querySelector("#spil_sushi_container_2")
    .removeEventListener("click", clickLort2);
  document
    .querySelector("#spil_sushi_container_2")
    .removeEventListener("animationend", restartLort2);
  document
    .querySelector("#spil_sushi_container_3")
    .removeEventListener("click", clickSushi3);
  document
    .querySelector("#spil_sushi_container_3")
    .removeEventListener("animationend", restartSushi3);
  document
    .querySelector("#spil_sushi_container_4")
    .removeEventListener("click", clickSushi4);
  document
    .querySelector("#spil_sushi_container_4")
    .removeEventListener("animationend", restartSushi4);
  document
    .querySelector("#spil_sushi_container_5")
    .removeEventListener("click", clickSushi5);
  document
    .querySelector("#spil_sushi_container_5")
    .removeEventListener("animationend", restartSushi5);
  document
    .querySelector("#spil_sushi_container_6")
    .removeEventListener("click", clickLort6);
  document
    .querySelector("#spil_sushi_container_6")
    .removeEventListener("animationend", restartLort6);
  document
    .querySelector("#timer_sprite")
    .removeEventListener("animationend", gameOver);

  document.querySelector("#you_win").classList.add("hide_screen");
  document.querySelector("#start").classList.add("hide_screen");
  document.querySelector("#game_over").classList.remove("hide_screen");

  document
    .querySelector("#play_again_knap_go")
    .addEventListener("click", startGame);
}

function youWin() {
  console.log("youWin");

  //fjerner alle classes på diverse sprites og containers
  document.querySelector("#spil_sushi_container_1").classList = "";
  document.querySelector("#spil_sushi_sprite_1").classList = "";
  document.querySelector("#spil_sushi_container_2").classList = "";
  document.querySelector("#spil_sushi_sprite_2").classList = "";
  document.querySelector("#spil_sushi_container_3").classList = "";
  document.querySelector("#spil_sushi_sprite_3").classList = "";
  document.querySelector("#spil_sushi_container_4").classList = "";
  document.querySelector("#spil_sushi_sprite_4").classList = "";
  document.querySelector("#spil_sushi_container_5").classList = "";
  document.querySelector("#spil_sushi_sprite_5").classList = "";
  document.querySelector("#spil_sushi_container_6").classList = "";
  document.querySelector("#spil_sushi_sprite_6").classList = "";
  document.querySelector("#timer_sprite").classList = "";

  //fjerner alle eventlisteners på diverse containers
  document
    .querySelector("#spil_sushi_container_1")
    .removeEventListener("click", clickSushi1);
  document
    .querySelector("#spil_sushi_container_1")
    .removeEventListener("animationend", restartSushi1);
  document
    .querySelector("#spil_sushi_container_2")
    .removeEventListener("click", clickLort2);
  document
    .querySelector("#spil_sushi_container_2")
    .removeEventListener("animationend", restartLort2);
  document
    .querySelector("#spil_sushi_container_3")
    .removeEventListener("click", clickSushi3);
  document
    .querySelector("#spil_sushi_container_3")
    .removeEventListener("animationend", restartSushi3);
  document
    .querySelector("#spil_sushi_container_4")
    .removeEventListener("click", clickSushi4);
  document
    .querySelector("#spil_sushi_container_4")
    .removeEventListener("animationend", restartSushi4);
  document
    .querySelector("#spil_sushi_container_5")
    .removeEventListener("click", clickSushi5);
  document
    .querySelector("#spil_sushi_container_5")
    .removeEventListener("animationend", restartSushi5);
  document
    .querySelector("#spil_sushi_container_6")
    .removeEventListener("click", clickLort6);
  document
    .querySelector("#spil_sushi_container_6")
    .removeEventListener("animationend", restartLort6);
  document
    .querySelector("#timer_sprite")
    .removeEventListener("animationend", gameOver);

  document.querySelector("#game_over").classList.add("hide_screen");
  document.querySelector("#start").classList.add("hide_screen");
  document.querySelector("#you_win").classList.remove("hide_screen");

  document
    .querySelector("#play_again_knap_yw")
    .addEventListener("click", startGame);
}

// ui scaler ikke
// HTML scaler ikke???
// chrome timer er fucked og billeder også
//

// random spawn points efter animationEnd
// print points
// info skærm
// flere levels
// liv på samlebåndet
// reje med flere point (mere sjælden)
