

var _process=require('process');var _process2=_interopRequireDefault(_process);

var _schema=require('../../units/urb-base-server/graphql/schema');var _schema2=_interopRequireDefault(_schema);
var _ObjectManager=require('../urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);


var _schemas2=require('../_configuration/urb-base-server/graphql/_schemas');var _schemas3=_interopRequireDefault(_schemas2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_ObjectManager2.default.initializePersisters(true,function(){
_process2.default.exit();
});
//# sourceMappingURL=setup-database.js.map