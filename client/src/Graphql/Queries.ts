import { gql } from "@apollo/client";

export const GET_ALL_TASKS = gql`
  query getAllTasks {
    getAllTasks {
      id
      info
    }
  }
`;
