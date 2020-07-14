// 1st button tells user how to start a meditation habit
function sitZazen() {
  let name = prompt("What's your name?");
  let room = prompt("What's your favorite room in the house?");
  room = room.toLowerCase();
  let time = prompt("How many minutes can you dedicate to zazen everyday?");

  if (time < 15) {
    alert(
      `That's not enough time. Try to start your practice with at least 15 minutes everyday.`
    );
  } else {
    alert(
      `Hi, ${name}. You can practice Zazen in your own ${room}. Just sit in silence for ${time} minutes and let thoughts pass you by. 🙏🏼`
    );
  }
}

let zazenButton = document.querySelector("#start-button");
zazenButton.addEventListener("click", sitZazen);

// 2nd button is a timer for users who already meditate.
