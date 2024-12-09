function verificaLogare() {
  const userCorect = "admin";
  const parolaCorecta = "1234";

  const user = document.getElementById("username").value;
  const parola = document.getElementById("password").value;

  if (user === userCorect && parola === parolaCorecta) {
    document.getElementById("mesaj").innerText = "Logare reușită!";
  } else {
    document.getElementById("mesaj").innerText = "Utilizator sau parolă greșită!";
  }

  return false;
}