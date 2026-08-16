setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  // 1. Pegar os valores numéricos puros primeiro
  let date = new Date();
  let raw_h = date.getHours();
  let raw_m = date.getMinutes();
  let raw_s = date.getSeconds();

  let am = raw_h >= 12 ? "PM" : "AM";

  // Converter para formato 12 horas (numérico)
  let display_h = raw_h;
  if (display_h > 12) {
    display_h = display_h - 12;
  }
  if (display_h === 0) {
    display_h = 12; // Garante que meia-noite/meio-dia mostre 12 e não 00
  }

  // 2. Fazer os cálculos matemáticos com os números puros
  hh.style.strokeDashoffset = 440 - (440 * display_h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * raw_m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * raw_s) / 60;

  hr_dot.style.transform = `rotate(${display_h * 30}deg)`;
  min_dot.style.transform = `rotate(${raw_m * 6}deg)`;
  sec_dot.style.transform = `rotate(${raw_s * 6}deg)`;

  // 3. Formatar com zero à esquerda apenas para exibição do texto
  let h = display_h < 10 ? "0" + display_h : display_h;
  let m = raw_m < 10 ? "0" + raw_m : raw_m;
  let s = raw_s < 10 ? "0" + raw_s : raw_s;

  // Atualizar o HTML
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;
}, 1000);
