import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    sucessful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
