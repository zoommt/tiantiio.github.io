// https://pac.itzmx.com

//var proxy = "PROXY 108.61.217.240:25;";   //us
var proxy = "PROXY 45.32.86.248:25;";   //us

var domains = {
  "zyzc9.com": 1
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    while(1) {
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        if (pos <= 0) {
            break;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
    return proxy;
}
