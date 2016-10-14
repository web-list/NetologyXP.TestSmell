'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.download = download;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function download(uri, filename, callback) {
    _request2.default.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        (0, _request2.default)(uri).pipe(_fs2.default.createWriteStream(filename)).on('close', callback);
    });
};

//# sourceMappingURL=imageDownloader-compiled.js.map