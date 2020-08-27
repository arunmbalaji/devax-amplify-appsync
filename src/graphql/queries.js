/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVoting = /* GraphQL */ `
  query GetVoting($id: ID!) {
    getVoting(id: $id) {
      id
      choice
      comment
      tcount
      createdAt
      updatedAt
    }
  }
`;
export const listVotings = /* GraphQL */ `
  query ListVotings(
    $filter: ModelvotingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        choice
        comment
        tcount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
