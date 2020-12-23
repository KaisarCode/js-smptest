// Smallest test wrapper
function smpTest(dsc, pass) {
    pass = pass || false;
    
    // Colors
    var c = {
    red: "\x1b[31m",
    auto: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    bggreen: "\x1b[42m" };
    
    // Messages
    var dsc = `${c.yellow}${dsc}${c.auto}`;
    var scc = `${c.green}PASS${c.auto} ${dsc}`;
    var dng = `${c.red}FAIL${c.auto} ${dsc}`;
    
    // Display message
    pass?
    console.log(scc):
    console.log(dng);
}
