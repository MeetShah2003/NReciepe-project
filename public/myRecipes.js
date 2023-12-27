const displayReciepe = (data) => {
  document.getElementById("reciepe").innerHTML = "";
  data.map((ele) => {
    let img = document.createElement("img");
    img.src = ele.img;
    let reciepename = document.createElement("h3");
    reciepename.innerHTML = ele.reciepename;
    let time = document.createElement("h5");
    time.innerHTML = ele.time;
    let author = document.createElement("h2");
    author.innerHTML = ele.author;
    let description = document.createElement("p");
    description.innerHTML = ele.description;
    let btn1 = document.createElement("button");
    btn1.innerHTML = `Delete <i class="fa-solid fa-trash fa-bounce"></i>`;
    btn1.setAttribute("id", "btnDelete");
    btn1.addEventListener("click", () => {
      dltReciepe(ele._id);
    });
    let div = document.createElement("div");
    div.append(img, reciepename, time, author, description, btn1);
    document.getElementById("reciepe").append(div);
  });
};

const dltReciepe = (id) => {
  fetch(`http://127.0.0.1:8090/reciepe/dlt/${id}`, {
    method: "DELETE",
  })
    .then(() => getReciepe())
    .catch((err) => console.log(err.message));
};

const getReciepe = () => {
  fetch("/reciepe/singleReciepe")
    .then((res) => res.json())
    .then((data) => displayReciepe(data))
    .catch((err) => console.log(err));
};

getReciepe();
