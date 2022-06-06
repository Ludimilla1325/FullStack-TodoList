import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { TodoList } from "./Entities/TodoList";
import "dotenv/config";
const main = async () => {
  await createConnection({
    type: "postgres",
    database: process.env.DATABASE,
    username: "postgres",
    password: process.env.PASSWORD,
    logging: true,
    synchronize: false,
    entities: [TodoList],
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3005, () => {
    console.log("Server running!");
  });
};

main().catch((err) => {
  console.log(err);
});
