let domainsUsingProxy = [
    "google",
    "youtube",
    "discord",
    "github",
    "chatgpt",
    "microsoft",
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
    "zhihu.com",
    "aliyun.com",
    "doubao.com",
    "taobao.com",
    "weibo.com",
    "youku.com"
];


function FindProxyForURL(url, host) {
    
    for (let i = 0; i < domainsCN.length; i++) {
        let domain = domainsCN[i];
        if (host.includes(domain)) {
            return "DIRECT";
        }
    }


    for (let i = 0; i < domainsUsingProxy.length; i++) {
        let domain = domainsUsingProxy[i];
        if (host.includes(domain)) {
            return "PROXY 192.168.2.2:1080; DIRECT";
            return "SOCKS5 192.168.2.2:1080";
        }
    }

    // return "PROXY 192.168.2.2:1081; DIRECT";
    // return "SOCKS5 192.168.2.2:1080";
    return "DIRECT";
}



// google.cn
// googleapis.cn