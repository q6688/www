let domainsUsingProxy = [
    ".google.com",
    ".googleapis.com",
    ".chatgpt.com",
    ".openai.com",
    ".microsoft.com",
    ".ggpht.com",
    ".youtube.com",
    ".twitter.com",
    ".facebook.com",
    ".doubleclick.net",
    ".cloudflare.com",
    ".github.com",
    ".github.io",
    ".discord.com"
    ".oaistatic.com",
    ".ytimg.com",
    ".bing.com",
    ".bing.net",
    ".bingapis.com",
    ".live.com",
    ".x.com",
    ".twimg.com",
    ".docker.com",
    ".fbcdn.net",
    ".segment.io",
    ".unpkg.com",
    ".jsdelivr.com",
    ".apple.com",
    ".instagram",
    ".cdninstagram.com",
    ".whatsapp.com",
    ".azureedge.net",
    "gstatic.com"
];

let keyword = [
    
]


let domainsCN = [
    ".cn",
    ".qq.com",
    ".baidu.com",
    ".tencent.com",
    ".zhihu.com",
    ".aliyun.com",
    ".doubao.com",
    ".taobao.com",
    ".weibo.com",
    ".youku.com"
];



function FindProxyForURL(url, host) {


    for (let i = 0; i < domainsCN.length; i++) {
        if (dnsDomainIs(host,domainsCN[i])) {
            return "DIRECT";
        }
    }

    for (let i = 0; i < domainsUsingProxy.length; i++) {
        if (dnsDomainIs(host,domainsUsingProxy[i])) {
            return "PROXY 192.168.2.2:1080; DIRECT";
            return "SOCKS5 192.168.2.2:1080";
        }
    }

   // for (let i = 0; i < keyword.length; i++) {
   //    if (host.includes(keyword[i])) {
    //        return "PROXY 192.168.2.2:1080; DIRECT";
   //         return "SOCKS5 192.168.2.2:1080";
   //     }
   // }

    return "DIRECT";
}


// google.cn
// googleapis.cn
