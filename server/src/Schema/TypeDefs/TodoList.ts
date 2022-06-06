import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const TaskType = new GraphQLObjectType({
  name: "TODOList",
  fields: () => ({
    id: { type: GraphQLID },
    info: { type: GraphQLString },
  }),
});
