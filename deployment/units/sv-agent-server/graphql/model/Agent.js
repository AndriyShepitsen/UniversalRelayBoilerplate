Object.defineProperty(exports,"__esModule",{value:true});

var _ObjectManager=require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);
var _PersisterElasticSearch=require('../../../urb-persister-elasticsearch/graphql/PersisterElasticSearch');var _PersisterElasticSearch2=_interopRequireDefault(_PersisterElasticSearch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Agent=





function Agent(fields)




{_classCallCheck(this,Agent);
this.id=fields.id;
this.FirstName=fields.FirstName;
this.LastName=fields.LastName;
this.UserId=fields.UserId;
};exports.default=Agent;


_ObjectManager2.default.registerEntity('Agent',Agent,new _PersisterElasticSearch2.default());
//# sourceMappingURL=Agent.js.map