/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVoting = /* GraphQL */ `
  mutation CreateVoting(
    $input: CreateVotingInput!
    $condition: ModelvotingConditionInput
  ) {
    createVoting(input: $input, condition: $condition) {
      id
      choice
      comment
      tcount
      createdAt
      updatedAt
    }
  }
`;
export const updateVoting = /* GraphQL */ `
  mutation UpdateVoting(
    $input: UpdateVotingInput!
    $condition: ModelvotingConditionInput
  ) {
    updateVoting(input: $input, condition: $condition) {
      id
      choice
      comment
      tcount
      createdAt
      updatedAt
    }
  }
`;
export const deleteVoting = /* GraphQL */ `
  mutation DeleteVoting(
    $input: DeleteVotingInput!
    $condition: ModelvotingConditionInput
  ) {
    deleteVoting(input: $input, condition: $condition) {
      id
      choice
      comment
      tcount
      createdAt
      updatedAt
    }
  }
`;
