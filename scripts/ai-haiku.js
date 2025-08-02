function generateHaiku() {
  const haikus = [
    "Mist curls on the ridge\nTime forgets the breath it took\nStill, we echo here.",
    "Lanterns float through dusk\nMemories in violet winds\nAnemora wakes.",
    "Stone and shadow speak\nAncient names the moon once knew\nBorne on silent wings."
  ];
  const random = haikus[Math.floor(Math.random() * haikus.length)];
  document.getElementById("haiku").innerHTML = random.replace(/\n/g, "<br>");
}
