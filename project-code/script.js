function count() {
  // when the user onclick="count()"
  let start = window.document.getElementById(`txts`) //start
  let end = window.document.getElementById(`txte`) //end
  let jump = window.document.getElementById("txtj")//jump
  let result = document.getElementById("result")

  if (start.value.length == 0 || end.value.length == 0 || jump.value.length == 0) {
    window.alert("Impossible to count. Insert a number != of 0")
  } else {
    result.innerHTML = "Counting..."
    let s = Number(start.value)
    let e = Number(end.value)
    let j = Number(jump.value)

    if (s < e) {
        //increasing count
      for (let c = s; c <= e; c += j) {
        result.innerHTML += `${c} \u{1F4A0}` //unicode formatation to JavaScript
      }
    } else {
      //countdown
      for (let c = s; c >= e; c -= j) {
        result.innerHTML += `${c} \u{1F4A0}`
      }
    }
    result.innerHTML += `\u{1F3C1}`
  }
}
