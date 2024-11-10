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

function FindProxyForURL(url, host) {
    //for (let i = 0; i < domainsCN.length; i++) {
        //if (host.includes(domainsCN[i])) {
            //return "DIRECT";
        //}
    //}

    for (let i = 0; i < domainsUsingProxy.length; i++) {
        if (host.includes(domainsUsingProxy[i])) {
            return "PROXY 192.168.2.2:1080; DIRECT";
            return "SOCKS5 192.168.2.2:1080";
        }
    }

    return "DIRECT";
}


//return "PROXY 192.168.2.2:1080; DIRECT";
//return "SOCKS5 192.168.2.2:1080";

// google.cn
// googleapis.cn
