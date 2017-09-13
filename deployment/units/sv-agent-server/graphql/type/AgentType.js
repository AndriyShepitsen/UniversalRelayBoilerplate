Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _Agent=require('../model/Agent');var _Agent2=_interopRequireDefault(_Agent);
var _NodeInterface=require('../../../../units/urb-base-server/graphql/NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

new _graphql.GraphQLObjectType({
name:'Agent',

interfaces:[_NodeInterface2.default],

isTypeOf:function isTypeOf(object){return object instanceof _Agent2.default;},

fields:{
id:(0,_graphqlRelay.globalIdField)(function(obj){return obj.UserId;}),
FirstName:{
type:_graphql.GraphQLString,
resolve:function resolve(obj){
return obj.FirstName;
}},

LastName:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.LastName;}},
UserId:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.UserId;}}}});
//# sourceMappingURL=AgentType.js.map