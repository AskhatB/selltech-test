import {
  ApplicantIndividualCompanyRelation,
  ApplicantIndividualCompanyPosition,
} from "./graphql.types";

export interface ApplicantIndividualCompanyRelationResponse {
  applicantIndividualCompanyRelations: {
    data: ApplicantIndividualCompanyRelation[];
  };
}

export interface ApplicantIndividualCompanyPositionsResponse {
  applicantIndividualCompanyPositions: {
    data: ApplicantIndividualCompanyPosition[];
  };
}
