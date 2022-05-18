function queueTime(customers, n) {
    let aisles = new Array(n).fill(0);
    customers.forEach(time => {
      let next = aisles.indexOf(Math.min(...aisles))
      aisles[next] += time
    })
    return Math.max(...aisles)
  }