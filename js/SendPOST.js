const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const image = document.getElementById("image").files[0];

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image);

  // ENVIAR POST
  fetch("http://10.92.198.38:8080/feed/post", {
    method: "POST",
    body: formData,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthd2Fud2Fnbm5lcjdAZ21haWwuY29tIiwidXNlcklkIjoiNjY0MjVlZDllZmVlZjgwZTgyNTY0ZTc1IiwiaWF0IjoxNzE1NzA1NjkxLCJleHAiOjE3MTU3MjAwOTF9.VNBT96PMa16Lz7vc1p6WFBWpBcugvha55WQ5N8fcwyg",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
      alert(err);
    });
});

// const title = document.getElementById("title").value;
// const content = document.getElementById("content").value;
// const image = document.getElementById("image").files[0];

// const formData = new FormData();
// formData.append("title", title);
// formData.append("content", content);
// formData.append("image", image);

// console.log(image);

// // ENVIAR POST
// fetch("http://10.92.198.38:8080/feed/post", {
//   method: "POST",
//   body: formData,
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthd2Fud2Fnbm5lcjdAZ21haWwuY29tIiwidXNlcklkIjoiNjY0MjVlZDllZmVlZjgwZTgyNTY0ZTc1IiwiaWF0IjoxNzE1NjI1NzI5LCJleHAiOjE3MTU2NDAxMjl9.YGd3bhkQky_1CZdLkqkCusJxcV-yoN9wmtmBSGdmKGE",
//   },
// })
