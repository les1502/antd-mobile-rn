'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobileRn = require('antd-mobile-rn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function showToast() {
    _antdMobileRn.Toast.info('This is a toast tips !!!');
} /* tslint:disable:no-console */

function successToast() {
    _antdMobileRn.Toast.success('Load success !!!', 1);
}
function showToastNoMask() {
    _antdMobileRn.Toast.info('Toast without mask !!!', 1, null, false);
}
function failToast() {
    _antdMobileRn.Toast.fail('Load failed !!!');
}
function offline() {
    _antdMobileRn.Toast.offline('Network connection failed !!!');
}
function loadingToast() {
    _antdMobileRn.Toast.loading('Loading...', 1, function () {
        console.log('Load complete !!!');
    });
}

var ToastExample = function (_React$Component) {
    (0, _inherits3['default'])(ToastExample, _React$Component);

    function ToastExample() {
        (0, _classCallCheck3['default'])(this, ToastExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ToastExample.__proto__ || Object.getPrototypeOf(ToastExample)).apply(this, arguments));

        _this.alwaysShowToast = function () {
            _antdMobileRn.Toast.info('A toast width duration = 0 !!!', 0);
            _this.timer = setTimeout(function () {
                _antdMobileRn.Toast.hide();
            }, 5000);
        };
        return _this;
    }

    (0, _createClass3['default'])(ToastExample, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _reactNative.DeviceEventEmitter.addListener('navigatorBack', function () {
                _antdMobileRn.Toast.hide();
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _reactNative.DeviceEventEmitter.removeAllListeners('navigatorBack');
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _antdMobileRn.WingBlank,
                { style: { marginTop: 80 } },
                _react2['default'].createElement(_antdMobileRn.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobileRn.Button,
                    { onClick: showToastNoMask },
                    'Without mask'
                ),
                _react2['default'].createElement(_antdMobileRn.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobileRn.Button,
                    { onClick: showToast },
                    'Text toast'
                ),
                _react2['default'].createElement(_antdMobileRn.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobileRn.Button,
                    { onClick: successToast },
                    'Success toast'
                ),
                _react2['default'].createElement(_antdMobileRn.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobileRn.Button,
                    { onClick: failToast },
                    'Failed toast'
                ),
                _react2['default'].createElement(_antdMobileRn.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobileRn.Button,
                    { onClick: offline },
                    'Network failure toast'
                ),
                _react2['default'].createElement(_antdMobileRn.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobileRn.Button,
                    { onClick: loadingToast },
                    'Loading toast'
                ),
                _react2['default'].createElement(_antdMobileRn.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobileRn.Button,
                    { onClick: this.alwaysShowToast },
                    'Toast width duration = 0'
                ),
                _react2['default'].createElement(_antdMobileRn.WhiteSpace, null)
            );
        }
    }]);
    return ToastExample;
}(_react2['default'].Component);

exports['default'] = ToastExample;
module.exports = exports['default'];