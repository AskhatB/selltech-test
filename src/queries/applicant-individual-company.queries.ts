import { gql } from "@apollo/client";

export const GET_APPLICANT_INDIVIDUAL_COMPANY_RELATIONS = gql`
  query ApplicantIndividualCompanyRelations {
    applicantIndividualCompanyRelations {
      data {
        id
        name
      }
    }
  }
`;

export const GET_APPLICANT_INDIVIDUAL_COMPANY_POSITIONS = gql`
  query ApplicantIndividualCompanyPositions {
    applicantIndividualCompanyPositions {
      data {
        id
        name
      }
    }
  }
`;
