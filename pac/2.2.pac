let domainsUsingProxy = [
    "google",
    "youtube",
    "discord",
    "github",
    "chatgpt.com",
    "microsoft.com",
    "ggpht.com",
    "doubleclick.net",
    // "gstatic.com",
    "openai.com",
    "oaistatic.com",
    "ent.com",
    "ytimg.com",
    "bing.com",
    "bing.net",
    "bingapis.com",
    "live.com",
    "stackoverflow.com",
    "wikipedia.org",
    "godaddy.com",
    "cloudflare",
    "twitter",
    "x.com",
    "twimg.com",
    "docker.com",
    "facebook",
    "fbcdn.net",
    "segment.io",
    "unpkg.com",
    "jsdelivr.com",
    "apple.com",
    "instagram",
    "cdninstagram.com",
    "reddit",
    "whatsapp",
    "azureedge.net"
];

let domainsCN = [
    ".cn",
    "qq.com",
    "baidu.com",
    "tencent.com",
    "zhihu.com",
    "aliyun.com",
    "doubao.com",
    "taobao.com",
    "weibo.com",
    "youku.com"
];

 // IP地址段列表 cloudflare
 var ipRanges = [
        "103.21.244.0", "255.255.252.0",
        "103.22.200.0", "255.255.252.0",
        "103.31.4.0", "255.255.252.0",
        "104.16.0.0", "255.248.0.0",
        "104.24.0.0", "255.252.0.0",
        "108.162.192.0", "255.255.192.0",
        "131.0.72.0", "255.255.252.0",
        "141.101.64.0", "255.255.192.0",
        "162.158.0.0", "255.255.0.0",
        "172.64.0.0", "255.248.0.0",
        "173.245.48.0", "255.255.240.0",
        "188.114.96.0", "255.255.240.0",
        "190.93.240.0", "255.255.240.0",
        "197.234.240.0", "255.255.252.0",
        "198.41.128.0", "255.128.0.0"
];


function FindProxyForURL(url, host) {

    //for (let i = 0; i < domainsCN.length; i++) {
        //if (host.includes(domainsCN[i])) {
            //return "DIRECT";
        //}
    //}

// 检查目标IP是否在指定的IP地址段内
    for (let i = 0; i < ipRanges.length; i += 2) {
        if (isInNet(host, ipRanges[i], ipRanges[i + 1])) {
            return "PROXY 192.168.2.2:1080; DIRECT";
        }
    }

    for (let i = 0; i < domainsUsingProxy.length; i++) {
        if (host.includes(domainsUsingProxy[i])) {
            return "PROXY 192.168.2.2:1080; DIRECT";
            return "SOCKS5 192.168.2.2:1080";
        }
    }

    //return "PROXY 192.168.2.2:1080; DIRECT";
    //return "SOCKS5 192.168.2.2:1080";
    return "DIRECT";
}


// google.cn
// googleapis.cn
