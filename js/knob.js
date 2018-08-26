$(function() {
  const ruler = document.getElementById('ruler');
  const krutilka = document.getElementById('krutilka');
  const temp = document.getElementById('temp');
  ruler.setAttribute('stroke-dasharray', `${(87*502)/100}, 500%`)
  krutilka.style.transform = `rotateZ(${(87*290/100) - 145}deg)`;
  temp.innerHTML = `+${Math.floor((87*15/100)+10)}`

  $(".dial").knob({
    height: 220,
    width: 220,
    angleArc: 290,
    angleOffset: -145,
    displayInput: false,
    change: function (v) {
      ruler.setAttribute('stroke-dasharray', `${(v*502)/100}, 500%`)
      krutilka.style.transform = `rotateZ(${(v*290/100) - 145}deg)`;
      temp.innerHTML = `+${Math.floor((v*15/100)+10)}`
    }
  });

});
