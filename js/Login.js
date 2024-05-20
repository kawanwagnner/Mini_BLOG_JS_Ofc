const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  //   const array = [nome, email, tel, city, estado, password];
  //   array.map((item) => {
  //     console.log(item);
  //   });

  const userDataSignIn = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  // Login
  fetch("http://10.92.198.38:8080/auth/signin", {
    method: "Post",
    body: userDataSignIn,
    headers: { "Content-type": "application/json; charset=utf-8" },
  })
    .then((result) => result.json())
    .then((data) => {
      if (data.token) {
        alert(
          `Token ativado com sucesso! [LOGADO] - Seu token é: ${data.token}`
        );
        console.log(data);
      }
    })
    .then((err) => console.log(err));
});
