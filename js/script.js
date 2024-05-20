const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  //   const array = [nome, email, tel, city, estado, password];
  //   array.map((item) => {
  //     console.log(item);
  //   });

  // Trasformar os dados em JSON
  const userDataSignUp = JSON.stringify({
    name: nome.value,
    email: email.value,
    password: password.value,
  });

  // Enviar para o server!! FETCH (POST) - Cadastro.
  fetch("http://10.92.198.38:8080/auth/signup", {
    method: "Post",
    body: userDataSignUp,
    headers: { "Content-type": "application/json; charset=utf-8" },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
});
