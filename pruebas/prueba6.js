function makeArrayConsecutive2(statues) {
    var sorted = statues.sort((a, b) => a - b)
    var full = sorted[sorted.length - 1] - sorted[0] + 1;
    console.log(full - sorted.length)
    return full - sorted.length
}

makeArrayConsecutive2([6, 2, 3, 8])

acaramanamaraca
acaramanamaraca