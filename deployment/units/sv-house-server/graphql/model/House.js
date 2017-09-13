Object.defineProperty(exports,"__esModule",{value:true});

var _ObjectManager=require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);
var _PersisterElasticSearch=require('../../../urb-persister-elasticsearch/graphql/PersisterElasticSearch');var _PersisterElasticSearch2=_interopRequireDefault(_PersisterElasticSearch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


House=






function House(fields)





{_classCallCheck(this,House);
this.id=fields.id;
this.Street=fields.Street;
this.Mls=fields.Mls;
this.Price=fields.Price;
this.OfficeId=fields.OfficeId;
};exports.default=House;


_ObjectManager2.default.registerEntity('House',House,new _PersisterElasticSearch2.default());
//# sourceMappingURL=House.js.map