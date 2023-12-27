// const displayReciepe = (data) => {
//   console.log(data);
//   document.getElementById("reciepe").innerHTML = "";
//   data.map((ele) => {
//     let img = document.createElement("img");
//     img.src = ele.img;
//     let name = document.createElement("h3");
//     name.innerHTML = ele.name;
//     let time = document.createElement("h5");
//     time.innerHTML = ele.time;
//     let author = document.createElement("h2");
//     author.innerHTML = ele.author;
//     let description = document.createElement("p");
//     description.innerHTML = ele.description;
//     let div = document.createElement("div");
//     div.append(img, name, time, author, description);
//     document.getElementById("reciepe").append(div);
//   });
// };

// const getReciepe = () => {
//   fetch("/reciepe/allReciepe")
//     .then((res) => res.json())
//     .then((data) => displayReciepe(data))
//     .catch((err) => console.log(err));
// };

// getReciepe();

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
    let div = document.createElement("div");
    div.append(img, reciepename, time, author, description);
    document.getElementById("reciepe").append(div);
  });
};

const getReciepe = () => {
  fetch("/reciepe/allReciepe")
    .then((res) => res.json())
    .then((data) => displayReciepe(data))
    .catch((err) => console.log(err));
};

getReciepe();
