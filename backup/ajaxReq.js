IncomingMessage {
    _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: true,
        endEmitted: true,
        reading: false,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null,
        resumeScheduled: false
    },
    readable: false,
    domain: null,
    _events: {},
    _eventsCount: 0,
    _maxListeners: undefined,
    socket: Socket {
        _connecting: false,
        _hadError: false,
        _handle: TCP {
            _externalStream: {},
            fd: 24,
            reading: true,
            owner: [Circular],
            onread: [Function: onread],
            onconnection: null,
            writeQueueSize: 0
        },
        _parent: null,
        _host: null,
        _readableState: ReadableState {
            objectMode: false,
            highWaterMark: 16384,
            buffer: [],
            length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: true,
            ended: false,
            endEmitted: false,
            reading: true,
            sync: false,
            needReadable: true,
            emittedReadable: false,
            readableListening: false,
            defaultEncoding: 'utf8',
            ranOut: false,
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null,
            resumeScheduled: false
        },
        readable: true,
        domain: null,
        _events: {
            end: [Object],
            finish: [Function: onSocketFinish],
            _socketEnd: [Function: onSocketEnd],
            drain: [Object],
            timeout: [Function],
            error: [Object],
            close: [Object],
            data: [Function: socketOnData],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause]
        },
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: WritableState {
            objectMode: false,
            highWaterMark: 16384,
            needDrain: false,
            ending: false,
            ended: false,
            finished: false,
            decodeStrings: false,
            defaultEncoding: 'utf8',
            length: 0,
            writing: false,
            corked: 0,
            sync: false,
            bufferProcessing: false,
            onwrite: [Function],
            writecb: null,
            writelen: 0,
            bufferedRequest: null,
            lastBufferedRequest: null,
            pendingcb: 0,
            prefinished: false,
            errorEmitted: false
        },
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        bytesRead: 0,
        _bytesDispatched: 3404,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: Server {
            domain: null,
            _events: [Object],
            _eventsCount: 5,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [Object],
            _usingSlaves: false,
            _slaves: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            _pendingResponseData: 0,
            _connectionKey: '6::::3000'
        },
        _idleTimeout: 120000,
        _idleNext: Socket {
            _connecting: false,
            _hadError: false,
            _handle: [Object],
            _parent: null,
            _host: null,
            _readableState: [Object],
            readable: true,
            domain: null,
            _events: [Object],
            _eventsCount: 10,
            _maxListeners: undefined,
            _writableState: [Object],
            writable: true,
            allowHalfOpen: true,
            destroyed: false,
            bytesRead: 0,
            _bytesDispatched: 244,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: [Object],
            _idleTimeout: 120000,
            _idleNext: [Object],
            _idlePrev: [Circular],
            _idleStart: 2993,
            parser: [Object],
            on: [Function: socketOnWrap],
            _paused: false,
            read: [Function],
            _consuming: true,
            _httpMessage: null,
            _peername: [Object]
        },
        _idlePrev: {
            _idleNext: [Circular],
            _idlePrev: [Object]
        },
        _idleStart: 5771,
        parser: HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: onParserExecute],
            _headers: [],
            _url: '',
            socket: [Circular],
            incoming: [Circular],
            maxHeaderPairs: 2000,
            onIncoming: [Function: parserOnIncoming]
        },
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: ServerResponse {
            domain: null,
            _events: [Object],
            _eventsCount: 2,
            _maxListeners: undefined,
            output: [],
            outputEncodings: [],
            outputCallbacks: [],
            outputSize: 0,
            writable: true,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: true,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedHeader: {},
            _contentLength: null,
            _hasBody: true,
            _trailer: '',
            finished: false,
            _headerSent: false,
            socket: [Circular],
            connection: [Circular],
            _header: null,
            _headers: [Object],
            _headerNames: [Object],
            _onPendingData: [Function: updateOutgoingData],
            req: [Circular],
            locals: {},
            _startAt: undefined,
            _startTime: undefined,
            writeHead: [Function: writeHead],
            __onFinished: [Object],
            end: [Function: end]
        },
        _peername: {
            address: '::ffff:192.168.0.101',
            family: 'IPv6',
            port: 64465
        }
    },
    connection: Socket {
        _connecting: false,
        _hadError: false,
        _handle: TCP {
            _externalStream: {},
            fd: 24,
            reading: true,
            owner: [Circular],
            onread: [Function: onread],
            onconnection: null,
            writeQueueSize: 0
        },
        _parent: null,
        _host: null,
        _readableState: ReadableState {
            objectMode: false,
            highWaterMark: 16384,
            buffer: [],
            length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: true,
            ended: false,
            endEmitted: false,
            reading: true,
            sync: false,
            needReadable: true,
            emittedReadable: false,
            readableListening: false,
            defaultEncoding: 'utf8',
            ranOut: false,
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null,
            resumeScheduled: false
        },
        readable: true,
        domain: null,
        _events: {
            end: [Object],
            finish: [Function: onSocketFinish],
            _socketEnd: [Function: onSocketEnd],
            drain: [Object],
            timeout: [Function],
            error: [Object],
            close: [Object],
            data: [Function: socketOnData],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause]
        },
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: WritableState {
            objectMode: false,
            highWaterMark: 16384,
            needDrain: false,
            ending: false,
            ended: false,
            finished: false,
            decodeStrings: false,
            defaultEncoding: 'utf8',
            length: 0,
            writing: false,
            corked: 0,
            sync: false,
            bufferProcessing: false,
            onwrite: [Function],
            writecb: null,
            writelen: 0,
            bufferedRequest: null,
            lastBufferedRequest: null,
            pendingcb: 0,
            prefinished: false,
            errorEmitted: false
        },
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        bytesRead: 0,
        _bytesDispatched: 3404,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: Server {
            domain: null,
            _events: [Object],
            _eventsCount: 5,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [Object],
            _usingSlaves: false,
            _slaves: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            _pendingResponseData: 0,
            _connectionKey: '6::::3000'
        },
        _idleTimeout: 120000,
        _idleNext: Socket {
            _connecting: false,
            _hadError: false,
            _handle: [Object],
            _parent: null,
            _host: null,
            _readableState: [Object],
            readable: true,
            domain: null,
            _events: [Object],
            _eventsCount: 10,
            _maxListeners: undefined,
            _writableState: [Object],
            writable: true,
            allowHalfOpen: true,
            destroyed: false,
            bytesRead: 0,
            _bytesDispatched: 244,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: [Object],
            _idleTimeout: 120000,
            _idleNext: [Object],
            _idlePrev: [Circular],
            _idleStart: 2993,
            parser: [Object],
            on: [Function: socketOnWrap],
            _paused: false,
            read: [Function],
            _consuming: true,
            _httpMessage: null,
            _peername: [Object]
        },
        _idlePrev: {
            _idleNext: [Circular],
            _idlePrev: [Object]
        },
        _idleStart: 5771,
        parser: HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: onParserExecute],
            _headers: [],
            _url: '',
            socket: [Circular],
            incoming: [Circular],
            maxHeaderPairs: 2000,
            onIncoming: [Function: parserOnIncoming]
        },
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: ServerResponse {
            domain: null,
            _events: [Object],
            _eventsCount: 2,
            _maxListeners: undefined,
            output: [],
            outputEncodings: [],
            outputCallbacks: [],
            outputSize: 0,
            writable: true,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: true,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedHeader: {},
            _contentLength: null,
            _hasBody: true,
            _trailer: '',
            finished: false,
            _headerSent: false,
            socket: [Circular],
            connection: [Circular],
            _header: null,
            _headers: [Object],
            _headerNames: [Object],
            _onPendingData: [Function: updateOutgoingData],
            req: [Circular],
            locals: {},
            _startAt: undefined,
            _startTime: undefined,
            writeHead: [Function: writeHead],
            __onFinished: [Object],
            end: [Function: end]
        },
        _peername: {
            address: '::ffff:192.168.0.101',
            family: 'IPv6',
            port: 64465
        }
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    headers: {
        host: '192.168.0.101:3000',
        connection: 'keep-alive',
        'content-length': '10',
        accept: '*/*',
        origin: 'http://192.168.0.101:3000',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        dnt: '1',
        referer: 'http://192.168.0.101:3000/articles/561b7b70d88a3eea9c049d81',
        'accept-encoding': 'gzip, deflate, sdch',
        'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4,und;q=0.2,ja;q=0.2,fr;q=0.2,cs;q=0.2,de;q=0.2',
        cookie: 'sessionid=s%3AdgfAGxdn1UFJjIul2yIr44DjxzjiEyNW.3CfdRs1xI%2BLHce%2Bv9qNa%2Fs%2BPOqq7YFIEn3s8m13h3w0'
    },
    rawHeaders: ['Host',
        '192.168.0.101:3000',
        'Connection',
        'keep-alive',
        'Content-Length',
        '10',
        'Accept',
        '*/*',
        'Origin',
        'http://192.168.0.101:3000',
        'X-Requested-With',
        'XMLHttpRequest',
        'User-Agent',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36',
        'Content-Type',
        'application/x-www-form-urlencoded; charset=UTF-8',
        'DNT',
        '1',
        'Referer',
        'http://192.168.0.101:3000/articles/561b7b70d88a3eea9c049d81',
        'Accept-Encoding',
        'gzip, deflate, sdch',
        'Accept-Language',
        'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4,und;q=0.2,ja;q=0.2,fr;q=0.2,cs;q=0.2,de;q=0.2',
        'Cookie',
        'sessionid=s%3AdgfAGxdn1UFJjIul2yIr44DjxzjiEyNW.3CfdRs1xI%2BLHce%2Bv9qNa%2Fs%2BPOqq7YFIEn3s8m13h3w0'
    ],
    trailers: {},
    rawTrailers: [],
    upgrade: false,
    url: '/561b7b70d88a3eea9c049d81/like',
    method: 'PUT',
    statusCode: null,
    statusMessage: null,
    client: Socket {
        _connecting: false,
        _hadError: false,
        _handle: TCP {
            _externalStream: {},
            fd: 24,
            reading: true,
            owner: [Circular],
            onread: [Function: onread],
            onconnection: null,
            writeQueueSize: 0
        },
        _parent: null,
        _host: null,
        _readableState: ReadableState {
            objectMode: false,
            highWaterMark: 16384,
            buffer: [],
            length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: true,
            ended: false,
            endEmitted: false,
            reading: true,
            sync: false,
            needReadable: true,
            emittedReadable: false,
            readableListening: false,
            defaultEncoding: 'utf8',
            ranOut: false,
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null,
            resumeScheduled: false
        },
        readable: true,
        domain: null,
        _events: {
            end: [Object],
            finish: [Function: onSocketFinish],
            _socketEnd: [Function: onSocketEnd],
            drain: [Object],
            timeout: [Function],
            error: [Object],
            close: [Object],
            data: [Function: socketOnData],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause]
        },
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: WritableState {
            objectMode: false,
            highWaterMark: 16384,
            needDrain: false,
            ending: false,
            ended: false,
            finished: false,
            decodeStrings: false,
            defaultEncoding: 'utf8',
            length: 0,
            writing: false,
            corked: 0,
            sync: false,
            bufferProcessing: false,
            onwrite: [Function],
            writecb: null,
            writelen: 0,
            bufferedRequest: null,
            lastBufferedRequest: null,
            pendingcb: 0,
            prefinished: false,
            errorEmitted: false
        },
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        bytesRead: 0,
        _bytesDispatched: 3404,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: Server {
            domain: null,
            _events: [Object],
            _eventsCount: 5,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [Object],
            _usingSlaves: false,
            _slaves: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            _pendingResponseData: 0,
            _connectionKey: '6::::3000'
        },
        _idleTimeout: 120000,
        _idleNext: Socket {
            _connecting: false,
            _hadError: false,
            _handle: [Object],
            _parent: null,
            _host: null,
            _readableState: [Object],
            readable: true,
            domain: null,
            _events: [Object],
            _eventsCount: 10,
            _maxListeners: undefined,
            _writableState: [Object],
            writable: true,
            allowHalfOpen: true,
            destroyed: false,
            bytesRead: 0,
            _bytesDispatched: 244,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: [Object],
            _idleTimeout: 120000,
            _idleNext: [Object],
            _idlePrev: [Circular],
            _idleStart: 2993,
            parser: [Object],
            on: [Function: socketOnWrap],
            _paused: false,
            read: [Function],
            _consuming: true,
            _httpMessage: null,
            _peername: [Object]
        },
        _idlePrev: {
            _idleNext: [Circular],
            _idlePrev: [Object]
        },
        _idleStart: 5771,
        parser: HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: onParserExecute],
            _headers: [],
            _url: '',
            socket: [Circular],
            incoming: [Circular],
            maxHeaderPairs: 2000,
            onIncoming: [Function: parserOnIncoming]
        },
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: ServerResponse {
            domain: null,
            _events: [Object],
            _eventsCount: 2,
            _maxListeners: undefined,
            output: [],
            outputEncodings: [],
            outputCallbacks: [],
            outputSize: 0,
            writable: true,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: true,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedHeader: {},
            _contentLength: null,
            _hasBody: true,
            _trailer: '',
            finished: false,
            _headerSent: false,
            socket: [Circular],
            connection: [Circular],
            _header: null,
            _headers: [Object],
            _headerNames: [Object],
            _onPendingData: [Function: updateOutgoingData],
            req: [Circular],
            locals: {},
            _startAt: undefined,
            _startTime: undefined,
            writeHead: [Function: writeHead],
            __onFinished: [Object],
            end: [Function: end]
        },
        _peername: {
            address: '::ffff:192.168.0.101',
            family: 'IPv6',
            port: 64465
        }
    },
    _consuming: true,
    _dumped: false,
    next: [Function: next],
    baseUrl: '/articles',
    originalUrl: '/articles/561b7b70d88a3eea9c049d81/like',
    _parsedUrl: Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
        query: null,
        pathname: '/561b7b70d88a3eea9c049d81/like',
        path: '/561b7b70d88a3eea9c049d81/like',
        href: '/561b7b70d88a3eea9c049d81/like',
        _raw: '/561b7b70d88a3eea9c049d81/like'
    },
    params: {
        id: '561b7b70d88a3eea9c049d81'
    },
    query: {},
    res: ServerResponse {
        domain: null,
        _events: {
            finish: [Object],
            end: [Function: onevent]
        },
        _eventsCount: 2,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: Socket {
            _connecting: false,
            _hadError: false,
            _handle: [Object],
            _parent: null,
            _host: null,
            _readableState: [Object],
            readable: true,
            domain: null,
            _events: [Object],
            _eventsCount: 10,
            _maxListeners: undefined,
            _writableState: [Object],
            writable: true,
            allowHalfOpen: true,
            destroyed: false,
            bytesRead: 0,
            _bytesDispatched: 3404,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: [Object],
            _idleTimeout: 120000,
            _idleNext: [Object],
            _idlePrev: [Object],
            _idleStart: 5771,
            parser: [Object],
            on: [Function: socketOnWrap],
            _paused: false,
            read: [Function],
            _consuming: true,
            _httpMessage: [Circular],
            _peername: [Object]
        },
        connection: Socket {
            _connecting: false,
            _hadError: false,
            _handle: [Object],
            _parent: null,
            _host: null,
            _readableState: [Object],
            readable: true,
            domain: null,
            _events: [Object],
            _eventsCount: 10,
            _maxListeners: undefined,
            _writableState: [Object],
            writable: true,
            allowHalfOpen: true,
            destroyed: false,
            bytesRead: 0,
            _bytesDispatched: 3404,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: [Object],
            _idleTimeout: 120000,
            _idleNext: [Object],
            _idlePrev: [Object],
            _idleStart: 5771,
            parser: [Object],
            on: [Function: socketOnWrap],
            _paused: false,
            read: [Function],
            _consuming: true,
            _httpMessage: [Circular],
            _peername: [Object]
        },
        _header: null,
        _headers: {
            'x-powered-by': 'Express'
        },
        _headerNames: {
            'x-powered-by': 'X-Powered-By'
        },
        _onPendingData: [Function: updateOutgoingData],
        req: [Circular],
        locals: {},
        _startAt: undefined,
        _startTime: undefined,
        writeHead: [Function: writeHead],
        __onFinished: {
            [Function: listener] queue: [Object]
        },
        end: [Function: end]
    },
    _startAt: [163644, 404917604],
    _startTime: Sat Oct 17 2015 17: 38: 55 GMT + 0800(CST),
    _remoteAddress: '::ffff:192.168.0.101',
    body: {
        value: 'like'
    },
    _body: true,
    length: undefined,
    read: [Function],
    secret: undefined,
    cookies: {
        sessionid: 's:dgfAGxdn1UFJjIul2yIr44DjxzjiEyNW.3CfdRs1xI+LHce+v9qNa/s+POqq7YFIEn3s8m13h3w0'
    },
    signedCookies: {},
    _parsedOriginalUrl: Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
        query: null,
        pathname: '/articles/561b7b70d88a3eea9c049d81/like',
        path: '/articles/561b7b70d88a3eea9c049d81/like',
        href: '/articles/561b7b70d88a3eea9c049d81/like',
        _raw: '/articles/561b7b70d88a3eea9c049d81/like'
    },
    sessionStore: MemoryStore {
        sessions: {
            dgfAGxdn1UFJjIul2yIr44DjxzjiEyNW: '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'
        },
        generate: [Function],
        _events: {
            disconnect: [Function],
            connect: [Function]
        },
        _eventsCount: 2
    },
    sessionID: 'dgfAGxdn1UFJjIul2yIr44DjxzjiEyNW',
    session: Session {
        cookie: {
            path: '/',
            _expires: null,
            originalMaxAge: null,
            httpOnly: true
        }
    },
    originalMethod: 'PUT',
    route: Route {
        path: '/:id/like',
        stack: [
            [Object]
        ],
        methods: {
            put: true
        }
    }
}