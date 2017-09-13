Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactImageGallery=require('react-image-gallery');var _reactImageGallery2=_interopRequireDefault(_reactImageGallery);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
galleryRoot:{
maxWidth:'100%'}};};var



ImagesGallery=function(_React$Component){_inherits(ImagesGallery,_React$Component);function ImagesGallery(){_classCallCheck(this,ImagesGallery);return _possibleConstructorReturn(this,(ImagesGallery.__proto__||Object.getPrototypeOf(ImagesGallery)).apply(this,arguments));}_createClass(ImagesGallery,[{key:'render',value:function render()




{var
classes=this.props.classes;
var images=[
{
original:'http://lorempixel.com/1000/600/nature/1/',
thumbnail:'http://lorempixel.com/250/150/nature/1/',
originalTitle:
_react2.default.createElement('h3',null,'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'),




thumbnailTitle:'thumb 1',
description:
_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.')},









{
original:'http://lorempixel.com/1000/600/nature/2/',
thumbnail:'http://lorempixel.com/250/150/nature/2/',
originalTitle:'Title 2',
thumbnailTitle:'thumb 2',
description:'Description 2'},

{
original:'http://lorempixel.com/1000/600/nature/3/',
thumbnail:'http://lorempixel.com/250/150/nature/3/',
originalTitle:'Title 3',
thumbnailTitle:'thumb 3',
description:'Description 3'}];



return(
_react2.default.createElement('div',{className:classes.galleryRoot},
_react2.default.createElement(_reactImageGallery2.default,{
thumbnailPosition:'right',
useBrowserFullscreen:false,
showFullscreenButton:true,
items:images,
lazyLoad:true,
showIndex:true,
slideOnThumbnailHover:false,
slideInterval:2000})));



}}]);return ImagesGallery;}(_react2.default.Component);ImagesGallery.contextTypes={rbCtx:_propTypes2.default.object};exports.default=


(0,_styles.withStyles)(styles)(ImagesGallery);
//# sourceMappingURL=ImagesGallery.js.map