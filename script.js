class Stack {

  constructor(size) {
    this.items = new Array(size)
    this.top = 0
    this.empty = []
  }

  push(element) {
    var pushed = false
    for (var i = this.items.length - 1; i >= 0; i--) {
      if ((this.items[i] == this.empty[0]) && (pushed == false)) {
        this.items[i] = element
        this.top = element
        pushed = true
      }
    }
    console.log(pushed)
  }

  pop() {
    var popped = false
    for (var i = 0; i < this.items.length; i++) {
      if ((this.items[i] != this.empty[0]) && (popped == false)) {
        var poppedNum = this.items[i]
        this.items[i] = this.empty[0]
        this.top = this.items[i + 1]
        popped = true
      }
    }
    console.log(poppedNum)
  }

  peek() {
    var topDone = false
    for (var i = 0; i < this.items.length; i++) {
      if ((this.items[i] != this.empty[0]) && (topDone = false)) {
        this.top = this.items[i]
        topDone = true
      }
    }
    console.log(this.top)

  }

  isEmpty() {
    var empty = true
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] != this.empty[0]) {
        empty = false
      }
    }
    console.log(empty)
  }

  isFull() {
    var full = true
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] == this.empty[0]) {
        full = false
      }
    }
    console.log(full)
  }

  size() {
    var size = 0
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] != this.empty[0]) {
        size += 1
      }
    }
    console.log(size)
  }
}

var s = new Stack(5)

