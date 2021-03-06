Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactSlick=require('react-slick');var _reactSlick2=_interopRequireDefault(_reactSlick);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
galleryRoot:{
maxWidth:'100%'}};};var



ProductsGallery=function(_React$Component){_inherits(ProductsGallery,_React$Component);function ProductsGallery(){_classCallCheck(this,ProductsGallery);return _possibleConstructorReturn(this,(ProductsGallery.__proto__||Object.getPrototypeOf(ProductsGallery)).apply(this,arguments));}_createClass(ProductsGallery,[{key:'render',value:function render()




{var
classes=this.props.classes;

var settings={
dots:false,
slidesToShow:1,
infinite:true,
arrows:true,
speed:1200,
autoplay:true,
autoplaySpeed:5000};


return(
_react2.default.createElement('div',{className:classes.galleryRoot},
_react2.default.createElement(_reactSlick2.default,settings,
_react2.default.createElement('div',null,
_react2.default.createElement('img',{
alt:'',
src:'http://res.cloudinary.com/df0hinrzw/image/upload/c_scale,h_600/v1490916716/backgrounds/tianjin-2185510_1920.jpg'})),


_react2.default.createElement('div',null,
_react2.default.createElement('img',{
alt:'',
src:'http://res.cloudinary.com/df0hinrzw/image/upload/c_scale,h_600/v1490916716/backgrounds/tianjin-2185510_1920.jpg'})),


_react2.default.createElement('div',null,
_react2.default.createElement('img',{
alt:'',
src:'http://res.cloudinary.com/df0hinrzw/image/upload/c_scale,h_600/v1490916716/backgrounds/tianjin-2185510_1920.jpg'})))));





}}]);return ProductsGallery;}(_react2.default.Component);ProductsGallery.contextTypes={rbCtx:_propTypes2.default.object};exports.default=


(0,_styles.withStyles)(styles)(ProductsGallery);
//# sourceMappingURL=ProductsGallery.js.map