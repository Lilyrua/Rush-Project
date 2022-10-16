var myNodelist = document.getElementById("ft_list");
function createToDo(txt) {
  var node = document.createElement("div");
  node.textContent = txt;
  node.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete: " + txt)) {
      myNodelist.removeChild(node);
      st();
    }
  });

  return node;
}
function popup() {
  let task = prompt("Enter some task...");
  if (task != null) {
    const x = createToDo(task);
    myNodelist.prepend(x);
    st();
  } else if (task == null) {
    location.reload();
  }
}

function st() {
  document.cookie =
    "Tasks" +
    "=" +
    [...myNodelist.getElementsByTagName("div")]
      .map(function (x) {
        return encodeURIComponent(x.textContent);
      })
      .join();
}

const { Tasks } = document.cookie.split(";").reduce(function (acc, pair) {
  const [key, ...vals] = pair.split("=");
  const val = vals.join("=");
  acc[key] = decodeURIComponent(val);
  return acc;
}, {});

if (Tasks) {
  Tasks.split(",").forEach(function (task) {
    const tx = decodeURIComponent(task);
    const y = createToDo(tx);
    myNodelist.append(y);
  });
}
