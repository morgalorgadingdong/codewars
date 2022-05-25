function humanReadable (seconds) {
    let hours = Math.floor(seconds / 60 / 60)
    let minutes = Math.floor((seconds - (hours*60*60)) / 60)
    seconds = seconds - (hours* 60*60) - (minutes*60)
    let zero = '0'
    let hoursReadable = String(hours)
    let minutesReadable = String(minutes)
    let secondsReadable = String(seconds)
    hours < 10 ? hoursReadable = zero.concat(hoursReadable) : null
    minutes < 10 ? minutesReadable = zero.concat(minutesReadable) : null
    seconds < 10 ? secondsReadable = zero.concat(secondsReadable) : null
    
    return `${hoursReadable}:${minutesReadable}:${secondsReadable}`;
  }