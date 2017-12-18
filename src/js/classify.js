export default {
    name: 'Classify',
    data () {
      return {
        msg: '分类',
        showBox:false,
        bookList: [
            {
                name: 'JavaScript高级程序设计',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51CaeL3lLtL._SX260_.jpg',
                price: '￥65.30',
                author: "Nicholas C. Zakas",
            },
            {
                name: 'Web前端开发修炼之道',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/41OO8kdSuUL._SX260_.jpg',
                price: '￥41.00',
                author: "周志明"
            },
            {
                name: '深入理解ES6',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51kEnK%2BWQ-L._SX365_BO1,204,203,200_.jpg',
                price: '￥68.30',
                author: "David Flanagan",
            },
            {
                name: 'JavaScript权威指南',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/516BsgBkUpL.jpg',
                price: '￥96.50',
                author: "David Flanagan",
            },
            {
                name: '高性能JavaScript',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51T4tGqPRaL._SX396_BO1,204,203,200_.jpg',
                price: '￥51.30',
                author: "秦小波",
            },
            {
                name: '码农·JavaScript',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/41ciPk2DBTL.jpg',
                price: '￥78.90',
                author: "秦小波",
            },
            {
                name: '局外人',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51kKGTD9xCL._AC_SR300,300_.jpg',
                price: '￥32.28',
                author: "秦小波",
            },
            {
                name: '解忧杂货铺',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51VNBGrPxVL._AC_SR300,300_.jpg',
                price: '￥35.10',
                author: "秦小波",
            },
            {
                name: '瓦尔登湖',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51fSVKt36KL._AC_SR300,300_.jpg',
                price: '￥68.30',
                author: "秦小波",
            },
            {
                name: '这么慢那么美',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/510im9j53mL._AC_SR300,300_.jpg',
                price: '￥96.50',
                author: "秦小波",
            },
            {
                name: '时间停止的那天',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51CVi5j14rL._AC_SR300,300_.jpg',
                price: '￥51.30',
                author: "秦小波",
            },
            {
                name: '芳华',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/515Gb0FbIZL._AC_SR300,300_.jpg',
                price: '￥25.50',
                author: "秦小波",
            }
          ],

        detailData:[
            {
                "name": "JavaScript高级程序设计",
                "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
                "author": "Nicholas C. Zakas",
                "price":"44.50",
                "photo":"https://images-cn.ssl-images-amazon.com/images/I/51CaeL3lLtL._SX260_.jpg",
                "pageNum":"300",
                "bookNum":"2",
                "date":"2010.2.3"
            },
            {
                "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
                "describe": "第1版两年内印刷近10次，4家网上书店的评论近4?000条，98%以上的评论全部为5星级的好评，是整个Java图书领域公认的经典著作和超级畅销书，繁体版在台湾也十分受欢迎。第2版在第1版的基础上做了很大的改进：根据最新的JDK 1.7对全书内容进行了全面的升级和补充；增加了大量处理各种常见JVM问题的技巧和实践；增加了若干与生产环境相结合的实战案例；对第1版中的错误和不足之处的修正；等等。第2版不仅技术更新、内容更丰富，而且实战性更强。",
                "author": "周志明",
                "price":"44.50",
                "photo":"https://images-cn.ssl-images-amazon.com/images/I/41OO8kdSuUL._SX260_.jpg",
                "pageNum":"300",
                "bookNum":"2",
                "date":"2010.2.3"
            },
            {
                "name": "JavaScript权威指南（第6版）",
                "describe": "本书要讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScript API。本书更适合有一定编程经验的人阅读。对于那些希望学习JavaScript和已经开始使用JavaScript的程序员来说，如果想让自己对JavaScript语言和Web平台的理解和掌握再上一个台阶，本书最适合不过了",
                "author": "David Flanagan",
                "price":"44.50",
                "photo":"https://images-cn.ssl-images-amazon.com/images/I/51kEnK%2BWQ-L._SX365_BO1,204,203,200_.jpg",
                "pageNum":"300",
                "bookNum":"2",
                "date":"2010.2.3"
            },
            {
                "name": "编写高质量代码：改善Java程序的151个建议",
                "describe": "在通往“Java技术殿堂”的路上，本书将为你指点迷津！内容全部由Java编码的最佳实践组成，从语法、程序设计和架构、工具和框架、编码风格和编程思想五大方面，对Java程序员遇到的各种棘手的疑难问题给出了经验性的解决方案，为Java程序员如何编写高质量的Java代码提出了151条极为宝贵的建议。",
                "author": "秦小波",
                "price":"44.50",
                "photo":"https://images-cn.ssl-images-amazon.com/images/I/516BsgBkUpL.jpg",
                "pageNum":"300",
                "bookNum":"2",
                "date":"2010.2.3"
            }
        ]      
        
        }  
    },
    methods: {
        showDetial(){
            this.showBox=true;
        }
    }
  }