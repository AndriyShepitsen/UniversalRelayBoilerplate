Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _House=require('../model/House');var _House2=_interopRequireDefault(_House);
var _NodeInterface=require('../../../../units/urb-base-server/graphql/NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

new _graphql.GraphQLObjectType({
name:'House',

interfaces:[_NodeInterface2.default],

isTypeOf:function isTypeOf(object){return object instanceof _House2.default;},

fields:{
id:(0,_graphqlRelay.globalIdField)(function(obj){return obj.Mls;}),
Street:{
type:_graphql.GraphQLString,
resolve:function resolve(obj){
return obj.Street;
}},

Mls:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Mls;}},
Price:{type:_graphql.GraphQLInt,resolve:function resolve(obj){return obj.Price;}},
OfficeId:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.OfficeId;}}}});
//# sourceMappingURL=HouseType.js.map