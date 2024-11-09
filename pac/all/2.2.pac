function FindProxyForURL(url, host) {

    return "PROXY 192.168.2.2:1080; DIRECT";
    // return "SOCKS5 192.168.2.2:1080";
    // return "DIRECT";
}
