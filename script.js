document.querySelector(".accept").addEventListener("click", function (e) {
  let value = document.querySelector("input").value;

  if (value === "") {
    alert("Please Enter Your Question");
  } else {
    alert("Question Submits Successfully");
    document.querySelector("input").value = "";
  }
});

document.querySelector(".Delete").addEventListener("click", function (e) {
  document.querySelector("input").value = "";
});
