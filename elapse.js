function duration(timestamps) {
    var last = timestamps.pop();
    var durations = [];
    while (timestamps.length) {
        durations.push(last - (last = timestamps.pop()));
    }
    return durations.reverse();
}

function display(mills) {
    if (mills > 1000)
        return (mills / 1000) + ' s';
    return mills + ' ms';
}

var durations = [];

$('#in').keydown(function(e) {
    durations.push($.now());
}).keyup(function(e) {
    var current = durations;
    current.push($.now());
    durations = [];
    var timeElapsed = current[current.length - 1] - current[0];

    console.log([
        ['time elapsed:', display(timeElapsed)].join(' '), ['keys duration:', duration(current).map(display)].join(' ')
    ].join(' --- '));
});