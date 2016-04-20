// http://tianti.io/a.pac

var proxy = "PROXY pac.tianti.io:25; PROXY 45.32.72.75:25; PROXY 45.32.8.226:25;";  

var domains = {
  "localhost": 1
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
