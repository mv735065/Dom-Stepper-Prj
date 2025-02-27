document.documentElement.style.cssText = "padding: 0; margin: 0;";
document.body.style.cssText = `padding: 0; margin: 0;`;

let header = document.createElement("header");
header.innerHTML = `<h1>Stepper</h1>`;
document.body.append(header);
header.style.textAlign = "center";
header.style.borderBottom = "2px solid lightgrey";

let container = createDiv("container");
document.body.append(container);
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.marginTop = "50px";

let div1 = createCircle("cirle div1", 1, "Contact Details");
let div3 = createCircle("cirle div3", 2, "Shipping Address");
let div5 = createCircle("cirle div5", 3, "Payment");
let div7 = createCircle("cirle div7", 4, "Deliveryed");

let div2 = createLine("line div2");
let div4 = createLine("line div4");
let div6 = createLine("line div6");

container.append(div1, div2, div3, div4, div5, div6, div7);

let conatinerChilds = container.querySelectorAll("div");
let count = 0;

let butonsContainer = createDiv("butonsContainer");

document.body.append(butonsContainer);
butonsContainer.style.display = "flex";
butonsContainer.style.gap = "10%";
butonsContainer.style.justifyContent = "center";

let prev = createButton("Previous");
let next = createButton("Next");

butonsContainer.append(prev, next);
prev.disabled = true;

next.addEventListener("click", (eve) => {
  count += 2;
  if (count >= conatinerChilds.length) {
    count = conatinerChilds.length + 1;
  }
  changeStatus(count);
});

prev.addEventListener("click", (eve) => {
  count -= 2;
  if (count < 0) {
    count = 0;
  }
  changeStatus(count);
});

let statusContent = document.createElement("h2");
document.body.insertBefore(statusContent, butonsContainer);
statusContent.style.marginTop = "70px";
statusContent.style.textAlign = "center";
statusContent.innerText = "Add account details for further communication.";

function changeStatus(count) {
  for (let i = 0; i < conatinerChilds.length; i++) {
    console.log(count);

    if (i < count) {
      if (conatinerChilds[i].firstElementChild) {
        conatinerChilds[i].firstElementChild.innerText = "";
        conatinerChilds[i].firstElementChild.classList.add(
          "fa",
          "fa-solid",
          "fa-check"
        );
        conatinerChilds[i].firstElementChild.style.color = "white";
      }
      conatinerChilds[i].style.backgroundColor = "green";
    } else if (i == count) {
      if (conatinerChilds[i].firstElementChild) {
        conatinerChilds[i].firstElementChild.innerText = Math.floor(i / 2) + 1;
        conatinerChilds[i].firstElementChild.classList.remove(
          "fa",
          "fa-solid",
          "fa-check"
        );
        conatinerChilds[i].firstElementChild.style.color = "white";
      }

      conatinerChilds[i].style.backgroundColor = "blue";
    } else {
      if (conatinerChilds[i].firstElementChild) {
        conatinerChilds[i].firstElementChild.innerText = Math.floor(i / 2) + 1;
        conatinerChilds[i].firstElementChild.style.color = "black";
        conatinerChilds[i].firstElementChild.classList.remove(
          "fa",
          "fa-solid",
          "fa-check"
        );
      }
      conatinerChilds[i].style.backgroundColor = "#dddddd";
    }
  }
  changeContentInforamtion(count);
  prev.disabled = count === 0;
  next.disabled = count >= conatinerChilds.length ;
}

function changeContentInforamtion(count) {
  statusContent.innerText = "";

  if (count == 0) {
    statusContent.innerText = "Add account details for further communication.";
  } else if (count == 2) {
    statusContent.innerText = "Add shipping address for successfull delivery.";
  } else if (count == 4) {
    statusContent.innerText = "Complete Payment to complete the order.";
  } else if (count == 6) {
    statusContent.innerText = "Ready to get deliverd!";
  } else if (count == 8) {
    statusContent.innerText = "Ordered deliverd successfully!🎉";
  }
}

function createCircle(name, number, text) {
  let cirle = document.createElement("div");
  cirle.className = name;
  cirle.style.position = "relative";
  //   cirle.style.padding = "8px 10px";
  cirle.style.borderRadius = "50%";
  cirle.style.border = "2px solid black";
  cirle.style.width = "30px";
  cirle.style.height = "30px";
  cirle.style.display = "flex";
  cirle.style.justifyContent = "center";
  cirle.style.alignItems = "center";
  cirle.style.backgroundColor = "#dddddd";

  let span1 = document.createElement("span");
  span1.innerText = number;

  let span2 = document.createElement("span");
  span2.innerText = text;
  span2.style.position = "absolute";
  span2.style.minWidth = "200px";
  span2.style.textAlign = "center";

  span2.style.bottom = "-30px";

  cirle.append(span1, span2);

  if (number == 1) {
    cirle.style.backgroundColor = "blue";
    span1.style.color = "#dddddd";
  }

  return cirle;
}

function createLine(name) {
  let line = document.createElement("div");
  line.className = name;
  line.style.width = "20%";
  line.style.height = "3px";
  line.style.borderTop = "1px solid #dddddd";
  line.style.borderBottom = "1px solid #dddddd";
  line.style.backgroundColor = "#dddddd";

  return line;
}

function createDiv(name) {
  let div = document.createElement("div");
  div.className = name;
  return div;
}

function createButton(name) {
  let btn = document.createElement("button");
  btn.classList.add(name);
  btn.innerText = name;
  btn.style.padding = "10px 40px";
  btn.style.border = "1px solid";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = "#dddddd";

  return btn;
}
