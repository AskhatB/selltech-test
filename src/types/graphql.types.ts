export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  EMAIL: any;
  Date: any;
  DateTime: any;
  JSON: any;
  Mixed: any;
  DateEnd: any;
  StringInteger: any;
};

export type Query = {
  __typename?: "Query";
  language?: Maybe<Languages>;
  accountLimit?: Maybe<AccountLimit>;
  accountReachedLimit?: Maybe<AccountReachedLimit>;
  account?: Maybe<Accounts>;
  accountStates: Array<AccountState>;
  clientList: Array<Client>;
  applicantIndividual?: Maybe<ApplicantIndividual>;
  owners: Array<ApplicantIndividual>;
  applicantCompany?: Maybe<ApplicantCompany>;
  applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  applicantCompanyLabels: Array<ApplicantCompanyLabel>;
  applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  applicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  applicantIndividualRiskLevel?: Maybe<ApplicantIndividualRiskLevel>;
  applicantKycLevel?: Maybe<ApplicantKycLevel>;
  applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  applicantIndividualLabels: Array<ApplicantIndividualLabel>;
  applicant_module?: Maybe<ApplicantModules>;
  applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
  applicantState?: Maybe<ApplicantState>;
  applicantStateReason?: Maybe<ApplicantStateReason>;
  applicantStatus?: Maybe<ApplicantStatus>;
  businessActivity?: Maybe<BusinessActivity>;
  commissionPriceList?: Maybe<CommissionPriceList>;
  commissionTemplate?: Maybe<CommissionTemplate>;
  commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
  commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
  commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
  company?: Maybe<Companies>;
  companySettings?: Maybe<CompanySettings>;
  country?: Maybe<Country>;
  currency?: Maybe<Currencies>;
  department?: Maybe<Departments>;
  departmentPosition?: Maybe<DepartmentPosition>;
  emailNotification?: Maybe<EmailNotification>;
  emailSmtp?: Maybe<EmailSmtp>;
  emailSmtps: Array<EmailSmtp>;
  emailTemplateLayout?: Maybe<EmailTemplateLayout>;
  emailTemplate?: Maybe<EmailTemplate>;
  feePeriods: Array<FeePeriod>;
  feeTypes: Array<FeeType>;
  feesModes: Array<FeesMode>;
  file?: Maybe<Files>;
  group_type?: Maybe<GroupType>;
  group_types: Array<GroupType>;
  memberAccessLimitation?: Maybe<MemberAccessLimitation>;
  member?: Maybe<Members>;
  operationTypes: Array<OperationType>;
  paymentProvider?: Maybe<PaymentProvider>;
  paymentStatuses: Array<PaymentStatus>;
  paymentSystem?: Maybe<PaymentSystem>;
  getPaymentTypes: Array<PaymentTypes>;
  getPaymentUrgencys: Array<PaymentUrgency>;
  senders?: Maybe<Array<Maybe<Sender>>>;
  payment?: Maybe<Payments>;
  permission?: Maybe<Permissions>;
  permissions_tree?: Maybe<Permissions>;
  permissions?: Maybe<Array<Maybe<PermissionCategory>>>;
  priceListFees: Array<PriceListFee>;
  requisite?: Maybe<Requisites>;
  role?: Maybe<Role>;
  ticketComment?: Maybe<TicketComments>;
  getTicketComments: Array<TicketComments>;
  ticket?: Maybe<Ticket>;
  twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
  languages?: Maybe<LanguagesPaginator>;
  accountLimits?: Maybe<AccountLimitPaginator>;
  accountReachedLimits?: Maybe<AccountReachedLimitPaginator>;
  accounts?: Maybe<AccountsPaginator>;
  applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
  applicantBankingAccess?: Maybe<ApplicantBankingAccessPaginator>;
  applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
  getMatchedUsers?: Maybe<ApplicantIndividualCompanyPaginator>;
  applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessTypePaginator>;
  applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
  applicantCompanyModules?: Maybe<ApplicantCompanyModulesPaginator>;
  applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
  applicantCompanyRiskLevels?: Maybe<ApplicantCompanyRiskLevelPaginator>;
  applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
  applicantIndividualModules?: Maybe<ApplicantIndividualModulesPaginator>;
  applicantIndividualRiskLevels?: Maybe<ApplicantIndividualRiskLevelPaginator>;
  applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
  applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
  applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
  applicant_modules?: Maybe<ApplicantModulesPaginator>;
  applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
  applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
  applicantStates?: Maybe<ApplicantStatePaginator>;
  applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
  applicantStatuses?: Maybe<ApplicantStatusPaginator>;
  businessActivities?: Maybe<BusinessActivityPaginator>;
  commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
  commissionTemplates?: Maybe<CommissionTemplatePaginator>;
  commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
  commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionTypePaginator>;
  commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
  commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
  commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
  companies?: Maybe<CompaniesPaginator>;
  countries?: Maybe<CountryPaginator>;
  currencies?: Maybe<CurrenciesPaginator>;
  departments?: Maybe<DepartmentsPaginator>;
  departmentPositions?: Maybe<DepartmentPositionPaginator>;
  emailNotifications?: Maybe<EmailNotificationPaginator>;
  emailTemplates?: Maybe<EmailTemplatePaginator>;
  files?: Maybe<FilesPaginator>;
  /** @deprecated Field no longer supported */
  groups?: Maybe<GroupRolePaginator>;
  groupList?: Maybe<GroupRolePaginator>;
  memberAccessLimitations?: Maybe<MemberAccessLimitationPaginator>;
  members?: Maybe<MembersPaginator>;
  paymentProviders?: Maybe<PaymentProviderPaginator>;
  paymentSystems?: Maybe<PaymentSystemPaginator>;
  payments?: Maybe<PaymentsPaginator>;
  requisites?: Maybe<RequisitesPaginator>;
  roles?: Maybe<RolePaginator>;
  tickets?: Maybe<TicketPaginator>;
  twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
  users?: Maybe<UsersPaginator>;
};

export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAccountLimitArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAccountReachedLimitArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAccountArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAccountStatesArgs = {
  orderBy?: InputMaybe<Array<QueryAccountStatesOrderByOrderByClause>>;
};

export type QueryClientListArgs = {
  group_type: Scalars["ID"];
};

export type QueryApplicantIndividualArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryOwnersArgs = {
  orderBy?: InputMaybe<Array<QueryOwnersOrderByOrderByClause>>;
};

export type QueryApplicantCompanyArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantCompanyLabelArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantCompanyLabelsArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
  where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
};

export type QueryApplicantCompanyNoteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantCompanyRiskLevelArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantIndividualCompanyPositionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantIndividualCompanyRelationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantIndividualRiskLevelArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantKycLevelArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantIndividualLabelArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantIndividualLabelsArgs = {
  applicant_id?: InputMaybe<Scalars["ID"]>;
  where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryApplicantIndividualLabelsOrderByOrderByClause>
  >;
};

export type QueryApplicant_ModuleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantIndividualNoteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantRiskLevelArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantStateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantStateReasonArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryApplicantStatusArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryBusinessActivityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCommissionPriceListArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCommissionTemplateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCommissionTemplateLimitArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCommissionTemplateLimitPeriodArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCommissionTemplateLimitTransferDirectionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCommissionTemplateLimitTypeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCompanySettingsArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCountryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryDepartmentPositionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEmailNotificationArgs = {
  company_id: Scalars["ID"];
  group_role_id: Scalars["ID"];
  group_type_id: Scalars["ID"];
  client_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEmailSmtpArgs = {
  id: Scalars["ID"];
};

export type QueryEmailSmtpsArgs = {
  company_id: Scalars["ID"];
  orderBy?: InputMaybe<Array<QueryEmailSmtpsOrderByOrderByClause>>;
};

export type QueryEmailTemplateLayoutArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEmailTemplateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFileArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryGroup_TypeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryGroup_TypesArgs = {
  mode?: InputMaybe<GroupTypeMode>;
};

export type QueryMemberAccessLimitationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryMemberArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryOperationTypesArgs = {
  where?: InputMaybe<QueryOperationTypesWhereWhereConditions>;
};

export type QueryPaymentProviderArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryPaymentSystemArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryPermissionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryPermissionsArgs = {
  where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};

export type QueryPriceListFeesArgs = {
  hasList?: InputMaybe<QueryPriceListFeesHasListWhereHasConditions>;
  price_list_id?: InputMaybe<Scalars["ID"]>;
  where?: InputMaybe<QueryPriceListFeesWhereWhereConditions>;
};

export type QueryRequisiteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRoleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTicketCommentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTicketArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTwoFactorAuthArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryLanguagesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryAccountLimitsArgs = {
  hasCurrency?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditions>;
  hasAccount?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditions>;
  hasCommissionTemplateLimitType?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>;
  hasCommissionTemplateLimitTransferDirection?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>;
  hasCommissionTemplateLimitPeriod?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>;
  hasCommissionTemplateLimitActionType?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>;
  where?: InputMaybe<QueryAccountLimitsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryAccountLimitsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryAccountReachedLimitsArgs = {
  hasAccount?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  where?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryAccountReachedLimitsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryAccountsArgs = {
  hasClientable?: InputMaybe<QueryAccountsHasClientableWhereHasConditions>;
  query?: InputMaybe<QueryAccountCondition>;
  created_at?: InputMaybe<DateRange>;
  orderBy?: InputMaybe<Array<QueryAccountsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantIndividualsArgs = {
  hasRiskLevel?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>;
  created_at?: InputMaybe<DateRange>;
  group?: InputMaybe<Sort>;
  company?: InputMaybe<Sort>;
  where?: InputMaybe<QueryApplicantIndividualsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantBankingAccessArgs = {
  where?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantBankingAccessOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantCompaniesArgs = {
  hasGroupRole?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  created_at?: InputMaybe<DateRange>;
  group?: InputMaybe<Sort>;
  company?: InputMaybe<Sort>;
  where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompaniesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetMatchedUsersArgs = {
  applicant_company_id: Scalars["ID"];
  orderBy?: InputMaybe<Array<QueryGetMatchedUsersOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantCompanyBusinessTypeArgs = {
  where?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryApplicantCompanyBusinessTypeOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantCompanyLabelsAvailableArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
  orderBy?: InputMaybe<
    Array<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantCompanyModulesArgs = {
  where?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyModulesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantCompanyNotesArgs = {
  orderBy?: InputMaybe<Array<QueryApplicantCompanyNotesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantCompanyRiskLevelsArgs = {
  orderBy?: InputMaybe<
    Array<QueryApplicantCompanyRiskLevelsOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars["ID"];
  where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantIndividualCompanyPositionsArgs = {
  where?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantIndividualCompanyRelationsArgs = {
  where?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantIndividualModulesArgs = {
  where?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryApplicantIndividualModulesOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantIndividualRiskLevelsArgs = {
  orderBy?: InputMaybe<
    Array<QueryApplicantIndividualRiskLevelsOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars["ID"];
  where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryApplicantRiskLevelHistoryOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantKycLevelsArgs = {
  where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantKycLevelsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantIndividualLabelsAvailableArgs = {
  applicant_id?: InputMaybe<Scalars["ID"]>;
  orderBy?: InputMaybe<
    Array<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicant_ModulesArgs = {
  where?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantModulesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantIndividualNotesArgs = {
  orderBy?: InputMaybe<
    Array<QueryApplicantIndividualNotesOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantRiskLevelsArgs = {
  where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantStatesArgs = {
  where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantStatesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantStateReasonsArgs = {
  where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantStateReasonsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryApplicantStatusesArgs = {
  where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantStatusesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryBusinessActivitiesArgs = {
  where?: InputMaybe<QueryBusinessActivitiesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryBusinessActivitiesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCommissionPriceListsArgs = {
  hasPaymentSystem?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>;
  hasCommissionTemplate?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>;
  hasOwner?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditions>;
  hasCompany?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditions>;
  hasAccount?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>;
  paymentProviderName?: InputMaybe<Sort>;
  where?: InputMaybe<QueryCommissionPriceListsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryCommissionPriceListsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCommissionTemplatesArgs = {
  hasPaymentProvider?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>;
  hasBusinessActivity?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>;
  hasOwner?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditions>;
  hasAccount?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditions>;
  hasCompany?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditions>;
  paymentProviderName?: InputMaybe<Sort>;
  where?: InputMaybe<QueryCommissionTemplatesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplatesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCommissionTemplateLimitsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCommissionTemplateLimitActionTypeArgs = {
  where?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryCommissionTemplateLimitActionTypeOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCommissionTemplateLimitPeriodsArgs = {
  where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
  where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCommissionTemplateLimitTypesArgs = {
  where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
  orderBy?: InputMaybe<
    Array<QueryCommissionTemplateLimitTypesOrderByOrderByClause>
  >;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCompaniesArgs = {
  created_at?: InputMaybe<DateRange>;
  country?: InputMaybe<Sort>;
  member_count?: InputMaybe<Sort>;
  where?: InputMaybe<QueryCompaniesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryCompaniesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryDepartmentsArgs = {
  hasCompany?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditions>;
  where?: InputMaybe<QueryDepartmentsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryDepartmentsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryDepartmentPositionsArgs = {
  hasDepartment?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditions>;
  where?: InputMaybe<QueryDepartmentPositionsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryDepartmentPositionsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryEmailNotificationsArgs = {
  hasApplicantIndividual?: InputMaybe<QueryEmailNotificationsHasApplicantIndividualWhereHasConditions>;
  hasApplicantCompany?: InputMaybe<QueryEmailNotificationsHasApplicantCompanyWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryEmailNotificationsHasGroupRoleWhereHasConditions>;
  hasMember?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditions>;
  hasGroupType?: InputMaybe<QueryEmailNotificationsHasGroupTypeWhereHasConditions>;
  hasTemplates?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditions>;
  created_at?: InputMaybe<DateRange>;
  where?: InputMaybe<QueryEmailNotificationsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryEmailNotificationsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryEmailTemplatesArgs = {
  hasCompany?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditions>;
  created_at?: InputMaybe<DateRange>;
  where?: InputMaybe<QueryEmailTemplatesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryEmailTemplatesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryFilesArgs = {
  where?: InputMaybe<QueryFilesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryFilesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryGroupsArgs = {
  hasPaymentProvider?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditions>;
  hasCommissionTemplate?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditions>;
  hasGroupType?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditions>;
  hasRole?: InputMaybe<QueryGroupsHasRoleWhereHasConditions>;
  where?: InputMaybe<QueryGroupsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryGroupsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryGroupListArgs = {
  query?: InputMaybe<QueryGroupCondition>;
  orderBy?: InputMaybe<Array<QueryGroupListOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryMemberAccessLimitationsArgs = {
  hasGroupRole?: InputMaybe<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions>;
  hasGroup?: InputMaybe<QueryMemberAccessLimitationsHasGroupWhereHasConditions>;
  hasProvider?: InputMaybe<QueryMemberAccessLimitationsHasProviderWhereHasConditions>;
  hasCommissionTemplate?: InputMaybe<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions>;
  where?: InputMaybe<QueryMemberAccessLimitationsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryMemberAccessLimitationsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryMembersArgs = {
  hasDepartment?: InputMaybe<QueryMembersHasDepartmentWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditions>;
  where?: InputMaybe<QueryMembersWhereWhereConditions>;
  companyName?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryMembersOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryPaymentProvidersArgs = {
  hasPaymentSystems?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>;
  where?: InputMaybe<QueryPaymentProvidersWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryPaymentProvidersOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryPaymentSystemsArgs = {
  hasCountries?: InputMaybe<QueryPaymentSystemsHasCountriesWhereHasConditions>;
  hasCurrencies?: InputMaybe<QueryPaymentSystemsHasCurrenciesWhereHasConditions>;
  hasProviders?: InputMaybe<QueryPaymentSystemsHasProvidersWhereHasConditions>;
  where?: InputMaybe<QueryPaymentSystemsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryPaymentSystemsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryPaymentsArgs = {
  hasCompanies?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditions>;
  hasAccounts?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditions>;
  hasOwner?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditions>;
  hasPaymentOperation?: InputMaybe<QueryPaymentsHasPaymentOperationWhereHasConditions>;
  hasPaymentUrgency?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditions>;
  hasPaymentStatus?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditions>;
  AccountNumber?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  where?: InputMaybe<QueryPaymentsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryRequisitesArgs = {
  where?: InputMaybe<QueryRequisitesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryRequisitesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryRolesArgs = {
  groups_sort?: InputMaybe<Sort>;
  hasGroupTypes?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditions>;
  hasGroups?: InputMaybe<QueryRolesHasGroupsWhereHasConditions>;
  where?: InputMaybe<QueryRolesWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryRolesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryTicketsArgs = {
  hasCompany?: InputMaybe<QueryTicketsHasCompanyWhereHasConditions>;
  hasDepartment?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditions>;
  hasPosition?: InputMaybe<QueryTicketsHasPositionWhereHasConditions>;
  hasMember?: InputMaybe<QueryTicketsHasMemberWhereHasConditions>;
  hasClient?: InputMaybe<QueryTicketsHasClientWhereHasConditions>;
  created_at?: InputMaybe<DateRange>;
  where?: InputMaybe<QueryTicketsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryTicketsOrderByRelationOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryTwoFactorsAuthArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<QueryUsersWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryUsersOrderByOrderByClause>>;
  first?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type Languages = {
  __typename?: "Languages";
  id: Scalars["ID"];
  name: Scalars["String"];
  iso: Scalars["String"];
};

export type AccountLimit = {
  __typename?: "AccountLimit";
  id: Scalars["ID"];
  account_id?: Maybe<Scalars["ID"]>;
  commission_template_limit_transfer_direction_id?: Maybe<Scalars["ID"]>;
  amount?: Maybe<Scalars["Float"]>;
  currency_id?: Maybe<Scalars["ID"]>;
  currency?: Maybe<Currencies>;
  commission_template_limit_period_id?: Maybe<Scalars["ID"]>;
  commission_template_limit_action_type_id?: Maybe<Scalars["ID"]>;
  period_count?: Maybe<Scalars["Int"]>;
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  account?: Maybe<Accounts>;
};

export type Currencies = {
  __typename?: "Currencies";
  id: Scalars["ID"];
  name: Scalars["String"];
  code: Scalars["String"];
  minor_unit?: Maybe<Scalars["Int"]>;
};

export type CommissionTemplateLimitType = {
  __typename?: "CommissionTemplateLimitType";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type CommissionTemplateLimitTransferDirection = {
  __typename?: "CommissionTemplateLimitTransferDirection";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type CommissionTemplateLimitPeriod = {
  __typename?: "CommissionTemplateLimitPeriod";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type CommissionTemplateLimitActionType = {
  __typename?: "CommissionTemplateLimitActionType";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type Accounts = {
  __typename?: "Accounts";
  id: Scalars["ID"];
  currency?: Maybe<Currencies>;
  owner?: Maybe<ApplicantIndividual>;
  account_number: Scalars["String"];
  account_type?: Maybe<AccountType>;
  payment_provider_id?: Maybe<PaymentProvider>;
  payment_system?: Maybe<PaymentSystem>;
  commission_template_id?: Maybe<CommissionTemplate>;
  group_role?: Maybe<GroupRole>;
  group?: Maybe<GroupType>;
  client?: Maybe<Client>;
  account_state?: Maybe<AccountState>;
  company?: Maybe<Companies>;
  member?: Maybe<Members>;
  account_name: Scalars["String"];
  is_primary?: Maybe<Scalars["Boolean"]>;
  current_balance: Scalars["Int"];
  reserved_balance: Scalars["Int"];
  available_balance: Scalars["Int"];
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  activated_at?: Maybe<Scalars["DateTime"]>;
};

export type ApplicantIndividual = {
  __typename?: "ApplicantIndividual";
  id: Scalars["ID"];
  first_name?: Maybe<Scalars["String"]>;
  last_name?: Maybe<Scalars["String"]>;
  middle_name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["EMAIL"]>;
  url?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  is_verification_phone?: Maybe<Scalars["Boolean"]>;
  country?: Maybe<Country>;
  language?: Maybe<Languages>;
  citizenship_country?: Maybe<Country>;
  state?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
  nationality?: Maybe<Scalars["String"]>;
  birth_country?: Maybe<Country>;
  birth_state?: Maybe<Scalars["String"]>;
  birth_city?: Maybe<Scalars["String"]>;
  birth_at?: Maybe<Scalars["Date"]>;
  sex?: Maybe<Sex>;
  created_at?: Maybe<Scalars["DateTime"]>;
  profile_additional_fields?: Maybe<Scalars["JSON"]>;
  personal_additional_fields?: Maybe<Scalars["JSON"]>;
  contacts_additional_fields?: Maybe<Scalars["JSON"]>;
  fullname?: Maybe<Scalars["String"]>;
  status?: Maybe<ApplicantStatus>;
  applicant_state?: Maybe<ApplicantState>;
  state_reason?: Maybe<ApplicantStateReason>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  manager?: Maybe<Members>;
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  created_for?: Maybe<Companies>;
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  group?: Maybe<GroupRole>;
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
};

export type Country = {
  __typename?: "Country";
  id: Scalars["ID"];
  name: Scalars["String"];
  iso: Scalars["String"];
};

export enum Sex {
  Male = "Male",
  Female = "Female",
}

export type ApplicantStatus = {
  __typename?: "ApplicantStatus";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type ApplicantState = {
  __typename?: "ApplicantState";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type ApplicantStateReason = {
  __typename?: "ApplicantStateReason";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type ApplicantRiskLevel = {
  __typename?: "ApplicantRiskLevel";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type Members = {
  __typename?: "Members";
  id: Scalars["ID"];
  first_name?: Maybe<Scalars["String"]>;
  last_name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["EMAIL"]>;
  sex?: Maybe<Sex>;
  is_active?: Maybe<Scalars["Boolean"]>;
  last_login_at?: Maybe<Scalars["DateTime"]>;
  company_id?: Maybe<Scalars["ID"]>;
  company: Companies;
  country?: Maybe<Country>;
  language?: Maybe<Languages>;
  group?: Maybe<GroupRole>;
  position?: Maybe<DepartmentPosition>;
  department?: Maybe<Departments>;
  two_factor_auth_setting_id?: Maybe<Scalars["ID"]>;
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
  additional_fields?: Maybe<Scalars["JSON"]>;
  additional_info_fields?: Maybe<Scalars["JSON"]>;
  fullname?: Maybe<Scalars["String"]>;
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  is_show_owner_applicants?: Maybe<Scalars["Boolean"]>;
  security_pin?: Maybe<Scalars["String"]>;
  backup_codes?: Maybe<Scalars["JSON"]>;
  is_sign_transaction?: Maybe<Scalars["Boolean"]>;
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
};

export type Companies = {
  __typename?: "Companies";
  id: Scalars["ID"];
  name: Scalars["String"];
  url?: Maybe<Scalars["String"]>;
  email: Scalars["EMAIL"];
  company_number?: Maybe<Scalars["String"]>;
  contact_name?: Maybe<Scalars["String"]>;
  country?: Maybe<Country>;
  zip?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  members?: Maybe<Array<Maybe<Members>>>;
  members_count?: Maybe<Scalars["Int"]>;
  departments?: Maybe<Array<Maybe<Departments>>>;
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
  company_settings?: Maybe<CompanySettings>;
  additional_fields?: Maybe<Scalars["JSON"]>;
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
};

export type Departments = {
  __typename?: "Departments";
  id: Scalars["ID"];
  name: Scalars["String"];
  company?: Maybe<Companies>;
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

export type DepartmentPosition = {
  __typename?: "DepartmentPosition";
  id: Scalars["ID"];
  name: Scalars["String"];
  is_active?: Maybe<Scalars["Boolean"]>;
  company?: Maybe<Companies>;
  department?: Maybe<Departments>;
};

export type CompanySettings = {
  __typename?: "CompanySettings";
  company_id?: Maybe<Scalars["ID"]>;
  email_url?: Maybe<Scalars["String"]>;
  email_jwt?: Maybe<Scalars["String"]>;
  email_from?: Maybe<Scalars["EMAIL"]>;
  logo_object_key?: Maybe<Scalars["String"]>;
  company?: Maybe<Companies>;
  show_own_logo?: Maybe<Scalars["Boolean"]>;
};

export type GroupRole = {
  __typename?: "GroupRole";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  group_type_id?: Maybe<Scalars["ID"]>;
  role_id?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  group_type?: Maybe<GroupType>;
  role?: Maybe<Role>;
  payment_provider?: Maybe<PaymentProvider>;
  commission_template?: Maybe<CommissionTemplate>;
  company?: Maybe<Companies>;
};

export type GroupType = {
  __typename?: "GroupType";
  id: Scalars["ID"];
  name: GroupsEntities;
};

export enum GroupsEntities {
  Member = "Member",
  Company = "Company",
  Individual = "Individual",
}

export type Role = {
  __typename?: "Role";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
  permissions_tree?: Maybe<Scalars["JSON"]>;
  group_type?: Maybe<GroupType>;
  company?: Maybe<Companies>;
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  groups_count?: Maybe<Scalars["Int"]>;
  is_all_companies?: Maybe<Scalars["Boolean"]>;
};

export type Permissions = {
  __typename?: "Permissions";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  display_name?: Maybe<Scalars["String"]>;
  guard_name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  all?: Maybe<Scalars["JSON"]>;
};

export type PermissionCategory = {
  __typename?: "PermissionCategory";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};

export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>
  >;
  OR?: InputMaybe<
    Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>
  >;
  HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
};

export enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = "TYPE",
}

export enum SqlOperator {
  Eq = "EQ",
  Neq = "NEQ",
  Gt = "GT",
  Gte = "GTE",
  Lt = "LT",
  Lte = "LTE",
  Like = "LIKE",
  NotLike = "NOT_LIKE",
  In = "IN",
  NotIn = "NOT_IN",
  Between = "BETWEEN",
  NotBetween = "NOT_BETWEEN",
  IsNull = "IS_NULL",
  IsNotNull = "IS_NOT_NULL",
}

export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
  };

export type PermissionList = {
  __typename?: "PermissionList";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<PermissionListType>;
  separator?: Maybe<PermissionSeparatorType>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
};

export enum PermissionListType {
  Member = "Member",
  Individual = "Individual",
}

export enum PermissionSeparatorType {
  Private = "Private",
  Business = "Business",
}

export type PaymentProvider = {
  __typename?: "PaymentProvider";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  logo_key?: Maybe<Scalars["String"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
  commission_price_list?: Maybe<CommissionPriceList>;
};

export type PaymentSystem = {
  __typename?: "PaymentSystem";
  id: Scalars["ID"];
  name: Scalars["String"];
  is_active?: Maybe<Scalars["Boolean"]>;
  countries?: Maybe<Array<Maybe<Country>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  providers?: Maybe<Array<Maybe<PaymentProvider>>>;
};

export type CommissionPriceList = {
  __typename?: "CommissionPriceList";
  id: Scalars["ID"];
  name: Scalars["String"];
  provider?: Maybe<PaymentProvider>;
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  company?: Maybe<Array<Maybe<ApplicantCompany>>>;
  account?: Maybe<Accounts>;
  payment_system?: Maybe<PaymentSystem>;
  commission_template?: Maybe<CommissionTemplate>;
  fees?: Maybe<Array<Maybe<PriceListFee>>>;
};

export type ApplicantCompany = {
  __typename?: "ApplicantCompany";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["EMAIL"]>;
  url?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  is_verification_phone?: Maybe<Scalars["Boolean"]>;
  country?: Maybe<Country>;
  language?: Maybe<Languages>;
  state?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  office_address?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
  reg_at?: Maybe<Scalars["Date"]>;
  expires_at?: Maybe<Scalars["Date"]>;
  tax?: Maybe<Scalars["String"]>;
  reg_number?: Maybe<Scalars["String"]>;
  license_number?: Maybe<Scalars["String"]>;
  company_type?: Maybe<Scalars["String"]>;
  company_info_additional_fields?: Maybe<Scalars["JSON"]>;
  contacts_additional_fields?: Maybe<Scalars["JSON"]>;
  profile_additional_fields?: Maybe<Scalars["JSON"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  business_type?: Maybe<ApplicantCompanyBusinessType>;
  status?: Maybe<ApplicantStatus>;
  applicant_state?: Maybe<ApplicantState>;
  state_reason?: Maybe<ApplicantStateReason>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  kyc_level?: Maybe<ApplicantRiskLevel>;
  manager?: Maybe<Members>;
  owner?: Maybe<ApplicantIndividual>;
  labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
  notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
  modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
  company_position?: Maybe<ApplicantIndividualCompany>;
  owner_relation?: Maybe<ApplicantIndividualCompany>;
  owner_position?: Maybe<ApplicantIndividualCompany>;
  company?: Maybe<Companies>;
  group?: Maybe<GroupRole>;
};

export type ApplicantCompanyBusinessType = {
  __typename?: "ApplicantCompanyBusinessType";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type ApplicantCompanyLabel = {
  __typename?: "ApplicantCompanyLabel";
  id: Scalars["ID"];
  name: Scalars["String"];
  hex_color_code: Scalars["String"];
  is_active?: Maybe<Scalars["Boolean"]>;
};

export type ApplicantCompanyNotes = {
  __typename?: "ApplicantCompanyNotes";
  id: Scalars["ID"];
  note: Scalars["String"];
  created_at?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<Members>;
  applicant?: Maybe<ApplicantCompany>;
};

export type ApplicantCompanyModules = {
  __typename?: "ApplicantCompanyModules";
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_module?: Maybe<ApplicantModules>;
  applicant_module_id?: Maybe<Scalars["ID"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
};

export type ApplicantModules = {
  __typename?: "ApplicantModules";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type ApplicantIndividualCompany = {
  __typename?: "ApplicantIndividualCompany";
  applicant_individual_id: Scalars["ID"];
  applicant_company_id: Scalars["ID"];
  applicant_individual_company_relation_id: Scalars["ID"];
  applicant_individual_company_position_id: Scalars["ID"];
  applicant_individual?: Maybe<ApplicantIndividual>;
  relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
  position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
};

export type ApplicantIndividualCompanyRelation = {
  __typename?: "ApplicantIndividualCompanyRelation";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type ApplicantIndividualCompanyPosition = {
  __typename?: "ApplicantIndividualCompanyPosition";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type CommissionTemplate = {
  __typename?: "CommissionTemplate";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  country_id?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  currency_id?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  payment_provider?: Maybe<PaymentProvider>;
  business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  account?: Maybe<Accounts>;
  company?: Maybe<Array<Maybe<ApplicantCompany>>>;
  countries?: Maybe<Array<Maybe<Country>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
};

export type BusinessActivity = {
  __typename?: "BusinessActivity";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type CommissionTemplateLimit = {
  __typename?: "CommissionTemplateLimit";
  id: Scalars["ID"];
  commission_template_limit_type_id?: Maybe<Scalars["ID"]>;
  commission_template_limit_transfer_direction_id?: Maybe<Scalars["ID"]>;
  amount?: Maybe<Scalars["Float"]>;
  currency_id?: Maybe<Scalars["ID"]>;
  currency?: Maybe<Currencies>;
  commission_template_limit_period_id?: Maybe<Scalars["ID"]>;
  commission_template_limit_action_type_id?: Maybe<Scalars["ID"]>;
  period_count?: Maybe<Scalars["Int"]>;
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  commission_template?: Maybe<CommissionTemplate>;
};

export type PriceListFee = {
  __typename?: "PriceListFee";
  id: Scalars["ID"];
  name: Scalars["String"];
  fee_type?: Maybe<FeeType>;
  operation_type?: Maybe<OperationType>;
  period?: Maybe<FeePeriod>;
  fees_item?: Maybe<Array<Maybe<PriceListFeesItem>>>;
  list?: Maybe<CommissionPriceList>;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type FeeType = {
  __typename?: "FeeType";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type OperationType = {
  __typename?: "OperationType";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FeePeriod = {
  __typename?: "FeePeriod";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type PriceListFeesItem = {
  __typename?: "PriceListFeesItem";
  id?: Maybe<Scalars["ID"]>;
  fee_item?: Maybe<Scalars["JSON"]>;
};

export type TwoFactorAuthSettings = {
  __typename?: "TwoFactorAuthSettings";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MemberAccessLimitation = {
  __typename?: "MemberAccessLimitation";
  id: Scalars["ID"];
  member?: Maybe<Members>;
  group?: Maybe<GroupType>;
  group_role?: Maybe<GroupRole>;
  provider?: Maybe<PaymentProvider>;
  commission_template?: Maybe<CommissionTemplate>;
};

export type ClientIpAddress = {
  __typename?: "ClientIpAddress";
  id: Scalars["ID"];
  ip_address?: Maybe<Scalars["String"]>;
  client_type?: Maybe<Scalars["String"]>;
  client_id?: Maybe<Scalars["ID"]>;
};

export type ApplicantIndividualLabel = {
  __typename?: "ApplicantIndividualLabel";
  id: Scalars["ID"];
  name: Scalars["String"];
  hex_color_code: Scalars["String"];
  is_active?: Maybe<Scalars["Boolean"]>;
};

export type ApplicantIndividualNotes = {
  __typename?: "ApplicantIndividualNotes";
  id: Scalars["ID"];
  note: Scalars["String"];
  created_at?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<Members>;
  applicant?: Maybe<ApplicantIndividual>;
};

export type ApplicantIndividualModules = {
  __typename?: "ApplicantIndividualModules";
  applicant_individual?: Maybe<ApplicantIndividual>;
  applicant_module?: Maybe<ApplicantModules>;
  applicant_module_id?: Maybe<Scalars["ID"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
};

export enum AccountType {
  Private = "Private",
  Business = "Business",
}

export type Client = ApplicantIndividual | ApplicantCompany;

export type AccountState = {
  __typename?: "AccountState";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type AccountReachedLimit = {
  __typename?: "AccountReachedLimit";
  id: Scalars["ID"];
  account_id: Scalars["ID"];
  account?: Maybe<Accounts>;
  group_type: Scalars["String"];
  client_name: Scalars["String"];
  client_type: Scalars["String"];
  transfer_direction: Scalars["String"];
  limit_type: Scalars["String"];
  limit_value: Scalars["Int"];
  limit_currency: Scalars["String"];
  period: Scalars["Int"];
  amount: Scalars["Float"];
};

export type QueryAccountStatesOrderByOrderByClause = {
  column: QueryAccountStatesOrderByColumn;
  order: SortOrder;
};

export enum QueryAccountStatesOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export enum SortOrder {
  Asc = "ASC",
  Desc = "DESC",
}

export type QueryOwnersOrderByOrderByClause = {
  column: QueryOwnersOrderByColumn;
  order: SortOrder;
};

export enum QueryOwnersOrderByColumn {
  Id = "ID",
  Email = "EMAIL",
  CreatedAt = "CREATED_AT",
  Fullname = "FULLNAME",
}

export type QueryApplicantCompanyLabelsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompanyLabelsWhereColumn {
  Name = "NAME",
}

export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};

export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
  column: QueryApplicantCompanyLabelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyLabelsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantCompanyRiskLevel = {
  __typename?: "ApplicantCompanyRiskLevel";
  id: Scalars["ID"];
  description: Scalars["String"];
  created_at?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<Members>;
  applicant?: Maybe<ApplicantCompany>;
};

export type ApplicantIndividualRiskLevel = {
  __typename?: "ApplicantIndividualRiskLevel";
  id: Scalars["ID"];
  description: Scalars["String"];
  created_at?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<Members>;
  applicant?: Maybe<ApplicantIndividual>;
};

export type ApplicantKycLevel = {
  __typename?: "ApplicantKycLevel";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type QueryApplicantIndividualLabelsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
};

export enum QueryApplicantIndividualLabelsWhereColumn {
  Name = "NAME",
  ApplicantId = "APPLICANT_ID",
}

export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};

export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
  column: QueryApplicantIndividualLabelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsOrderByColumn {
  ApplicantId = "APPLICANT_ID",
  Name = "NAME",
}

export type EmailNotification = {
  __typename?: "EmailNotification";
  id: Scalars["ID"];
  type?: Maybe<NotifyType>;
  recipient_type?: Maybe<RecipientType>;
  group_type?: Maybe<GroupType>;
  templates?: Maybe<Array<Maybe<EmailTemplate>>>;
  clientable?: Maybe<Clientable>;
  company?: Maybe<Companies>;
  group_role?: Maybe<GroupRole>;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export enum NotifyType {
  Administration = "Administration",
  Client = "Client",
}

export enum RecipientType {
  Person = "PERSON",
  Group = "GROUP",
}

export type EmailTemplate = {
  __typename?: "EmailTemplate";
  id: Scalars["ID"];
  name: Scalars["String"];
  subject: Scalars["String"];
  type: ClientType;
  service_type: ServiceType;
  content: Scalars["String"];
  header?: Maybe<Scalars["String"]>;
  footer?: Maybe<Scalars["String"]>;
  company?: Maybe<Companies>;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  use_layout?: Maybe<Scalars["Boolean"]>;
};

export enum ClientType {
  Administration = "Administration",
  Client = "Client",
}

export enum ServiceType {
  Banking = "Banking",
  Common = "Common",
  System = "System",
  AdminNotify = "AdminNotify",
}

export type Clientable = ApplicantIndividual | ApplicantCompany | Members;

export type EmailSmtp = {
  __typename?: "EmailSmtp";
  id: Scalars["ID"];
  security?: Maybe<Securities>;
  host_name: Scalars["String"];
  from_name?: Maybe<Scalars["String"]>;
  from_email?: Maybe<Scalars["String"]>;
  username: Scalars["String"];
  password: Scalars["String"];
  replay_to?: Maybe<Scalars["String"]>;
  port: Scalars["Int"];
  is_sending_mail?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  member?: Maybe<Members>;
  company?: Maybe<Companies>;
};

export enum Securities {
  Auto = "Auto",
  Ssl = "Ssl",
  Starttls = "Starttls",
}

export type QueryEmailSmtpsOrderByOrderByClause = {
  column: QueryEmailSmtpsOrderByColumn;
  order: SortOrder;
};

export enum QueryEmailSmtpsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type EmailTemplateLayout = {
  __typename?: "EmailTemplateLayout";
  id: Scalars["ID"];
  header: Scalars["String"];
  footer: Scalars["String"];
  company_id: Scalars["Int"];
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type FeesMode = {
  __typename?: "FeesMode";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Files = {
  __typename?: "Files";
  id: Scalars["ID"];
  file_name: Scalars["String"];
  mime_type: Scalars["String"];
  size: Scalars["Int"];
  entity_type: Scalars["String"];
  author_id: Scalars["Int"];
  storage_path: Scalars["String"];
  storage_name: Scalars["String"];
  link: Scalars["String"];
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export enum GroupTypeMode {
  Clients = "CLIENTS",
  All = "ALL",
}

export type QueryOperationTypesWhereWhereConditions = {
  column?: InputMaybe<QueryOperationTypesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryOperationTypesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryOperationTypesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryOperationTypesWhereWhereConditionsRelation>;
};

export enum QueryOperationTypesWhereColumn {
  FeeTypeId = "FEE_TYPE_ID",
}

export type QueryOperationTypesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryOperationTypesWhereWhereConditions>;
};

export type PaymentStatus = {
  __typename?: "PaymentStatus";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type PaymentTypes = {
  __typename?: "PaymentTypes";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type PaymentUrgency = {
  __typename?: "PaymentUrgency";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type Sender = {
  __typename?: "Sender";
  sender_name: Scalars["String"];
};

export type Payments = {
  __typename?: "Payments";
  id: Scalars["ID"];
  amount: Scalars["Float"];
  amount_real: Scalars["Float"];
  fee?: Maybe<Scalars["Float"]>;
  fee_type?: Maybe<FeeType>;
  currency?: Maybe<Currencies>;
  status?: Maybe<PaymentStatus>;
  sender_name?: Maybe<Scalars["String"]>;
  payment_details?: Maybe<Scalars["String"]>;
  sender_bank_account?: Maybe<Scalars["String"]>;
  sender_swift?: Maybe<Scalars["String"]>;
  sender_bank_name?: Maybe<Scalars["String"]>;
  sender_bank_country?: Maybe<Country>;
  sender_bank_address?: Maybe<Scalars["String"]>;
  sender_country_id?: Maybe<Country>;
  sender_address?: Maybe<Scalars["String"]>;
  payment_urgency?: Maybe<PaymentUrgency>;
  payment_operation_type?: Maybe<OperationType>;
  payment_provider?: Maybe<PaymentProvider>;
  account?: Maybe<Accounts>;
  company?: Maybe<Companies>;
  payment_number?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  member?: Maybe<Members>;
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  received_at?: Maybe<Scalars["DateTime"]>;
  error?: Maybe<Scalars["String"]>;
  sender_additional_fields?: Maybe<Scalars["JSON"]>;
};

export type QueryPermissionsWhereWhereConditions = {
  column?: InputMaybe<QueryPermissionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
};

export enum QueryPermissionsWhereColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryPermissionsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};

export type QueryPriceListFeesHasListWhereHasConditions = {
  column?: InputMaybe<QueryPriceListFeesHasListColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPriceListFeesHasListWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPriceListFeesHasListWhereHasConditions>>;
  HAS?: InputMaybe<QueryPriceListFeesHasListWhereHasConditionsRelation>;
};

export enum QueryPriceListFeesHasListColumn {
  Name = "NAME",
}

export type QueryPriceListFeesHasListWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPriceListFeesHasListWhereHasConditions>;
};

export type QueryPriceListFeesWhereWhereConditions = {
  column?: InputMaybe<QueryPriceListFeesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPriceListFeesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryPriceListFeesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPriceListFeesWhereWhereConditionsRelation>;
};

export enum QueryPriceListFeesWhereColumn {
  Name = "NAME",
  TypeId = "TYPE_ID",
  OperationTypeId = "OPERATION_TYPE_ID",
  PeriodId = "PERIOD_ID",
}

export type QueryPriceListFeesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPriceListFeesWhereWhereConditions>;
};

export type Requisites = {
  __typename?: "Requisites";
  id: Scalars["ID"];
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  account_id?: Maybe<Accounts>;
  recipient: Scalars["String"];
  registration_number: Scalars["Int"];
  address: Scalars["String"];
  country_id?: Maybe<Country>;
  bank_name: Scalars["String"];
  bank_address: Scalars["String"];
  bank_country_id?: Maybe<Country>;
  iban: Scalars["String"];
  account_no: Scalars["String"];
  swift: Scalars["String"];
  bank_correspondent?: Maybe<Scalars["JSON"]>;
};

export type TicketComments = {
  __typename?: "TicketComments";
  id: Scalars["ID"];
  message: Scalars["String"];
  file_object?: Maybe<Files>;
  ticket?: Maybe<Ticket>;
  client?: Maybe<ApplicantIndividual>;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Ticket = {
  __typename?: "Ticket";
  id: Scalars["ID"];
  title: Scalars["String"];
  message: Scalars["String"];
  status: Scalars["Int"];
  file_object?: Maybe<Files>;
  company?: Maybe<Companies>;
  position?: Maybe<DepartmentPosition>;
  department?: Maybe<Departments>;
  member?: Maybe<Members>;
  client?: Maybe<ApplicantIndividual>;
  comments?: Maybe<Array<Maybe<TicketComments>>>;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type LanguagesPaginator = {
  __typename?: "LanguagesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Languages>;
};

export type PaginatorInfo = {
  __typename?: "PaginatorInfo";
  count: Scalars["Int"];
  currentPage: Scalars["Int"];
  firstItem?: Maybe<Scalars["Int"]>;
  hasMorePages: Scalars["Boolean"];
  lastItem?: Maybe<Scalars["Int"]>;
  lastPage: Scalars["Int"];
  perPage: Scalars["Int"];
  total: Scalars["Int"];
};

export type QueryAccountLimitsHasCurrencyWhereHasConditions = {
  column?: InputMaybe<QueryAccountLimitsHasCurrencyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryAccountLimitsHasCurrencyWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryAccountLimitsHasCurrencyWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditionsRelation>;
};

export enum QueryAccountLimitsHasCurrencyColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryAccountLimitsHasCurrencyWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditions>;
};

export type QueryAccountLimitsHasAccountWhereHasConditions = {
  column?: InputMaybe<QueryAccountLimitsHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryAccountLimitsHasAccountWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryAccountLimitsHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditionsRelation>;
};

export enum QueryAccountLimitsHasAccountColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryAccountLimitsHasAccountWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditions>;
};

export type QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions =
  {
    column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars["Mixed"]>;
    AND?: InputMaybe<
      Array<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>
    >;
    OR?: InputMaybe<
      Array<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>
    >;
    HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditionsRelation>;
  };

export enum QueryAccountLimitsHasCommissionTemplateLimitTypeColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>;
  };

export type QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions =
  {
    column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars["Mixed"]>;
    AND?: InputMaybe<
      Array<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>
    >;
    OR?: InputMaybe<
      Array<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>
    >;
    HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditionsRelation>;
  };

export enum QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>;
  };

export type QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions =
  {
    column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars["Mixed"]>;
    AND?: InputMaybe<
      Array<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>
    >;
    OR?: InputMaybe<
      Array<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>
    >;
    HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditionsRelation>;
  };

export enum QueryAccountLimitsHasCommissionTemplateLimitPeriodColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>;
  };

export type QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions =
  {
    column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars["Mixed"]>;
    AND?: InputMaybe<
      Array<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>
    >;
    OR?: InputMaybe<
      Array<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>
    >;
    HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditionsRelation>;
  };

export enum QueryAccountLimitsHasCommissionTemplateLimitActionTypeColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>;
  };

export type QueryAccountLimitsWhereWhereConditions = {
  column?: InputMaybe<QueryAccountLimitsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryAccountLimitsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryAccountLimitsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsWhereWhereConditionsRelation>;
};

export enum QueryAccountLimitsWhereColumn {
  PeriodCount = "PERIOD_COUNT",
  AccountId = "ACCOUNT_ID",
  Amount = "AMOUNT",
}

export type QueryAccountLimitsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryAccountLimitsWhereWhereConditions>;
};

export type QueryAccountLimitsOrderByOrderByClause = {
  column: QueryAccountLimitsOrderByColumn;
  order: SortOrder;
};

export enum QueryAccountLimitsOrderByColumn {
  Id = "ID",
}

export type AccountLimitPaginator = {
  __typename?: "AccountLimitPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<AccountLimit>;
};

export type QueryAccountReachedLimitsHasAccountWhereHasConditions = {
  column?: InputMaybe<QueryAccountReachedLimitsHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>
  >;
  OR?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation>;
};

export enum QueryAccountReachedLimitsHasAccountColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
};

export type QueryAccountReachedLimitsWhereWhereConditions = {
  column?: InputMaybe<QueryAccountReachedLimitsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditionsRelation>;
};

export enum QueryAccountReachedLimitsWhereColumn {
  AccountId = "ACCOUNT_ID",
  GroupType = "GROUP_TYPE",
  ClientName = "CLIENT_NAME",
  ClientType = "CLIENT_TYPE",
  TransferDirection = "TRANSFER_DIRECTION",
  LimitType = "LIMIT_TYPE",
  LimitValue = "LIMIT_VALUE",
  LimitCurrency = "LIMIT_CURRENCY",
  Period = "PERIOD",
  Amount = "AMOUNT",
}

export type QueryAccountReachedLimitsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
};

export type QueryAccountReachedLimitsOrderByOrderByClause = {
  column: QueryAccountReachedLimitsOrderByColumn;
  order: SortOrder;
};

export enum QueryAccountReachedLimitsOrderByColumn {
  Id = "ID",
}

export type AccountReachedLimitPaginator = {
  __typename?: "AccountReachedLimitPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<AccountReachedLimit>;
};

export type QueryAccountsHasClientableWhereHasConditions = {
  column?: InputMaybe<QueryAccountsHasClientableColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryAccountsHasClientableWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryAccountsHasClientableWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountsHasClientableWhereHasConditionsRelation>;
};

export enum QueryAccountsHasClientableColumn {
  Id = "ID",
}

export type QueryAccountsHasClientableWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryAccountsHasClientableWhereHasConditions>;
};

export type QueryAccountCondition = {
  client_id?: InputMaybe<Scalars["ID"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
  payment_provider_id?: InputMaybe<Scalars["ID"]>;
  owner_id?: InputMaybe<Scalars["ID"]>;
  account_number?: InputMaybe<Scalars["String"]>;
  currency_id?: InputMaybe<Scalars["ID"]>;
  group_role_id?: InputMaybe<Scalars["ID"]>;
  group_type_id?: InputMaybe<Scalars["ID"]>;
  member_id?: InputMaybe<Scalars["ID"]>;
  is_primary?: InputMaybe<Scalars["Boolean"]>;
  commission_template_id?: InputMaybe<Scalars["ID"]>;
  account_type?: InputMaybe<Scalars["String"]>;
  account_state_id?: InputMaybe<Scalars["ID"]>;
  account_name?: InputMaybe<Scalars["String"]>;
};

export type DateRange = {
  from: Scalars["Date"];
  to: Scalars["DateEnd"];
};

export type QueryAccountsOrderByOrderByClause = {
  column: QueryAccountsOrderByColumn;
  order: SortOrder;
};

export enum QueryAccountsOrderByColumn {
  Id = "ID",
  ClientId = "CLIENT_ID",
}

export type AccountsPaginator = {
  __typename?: "AccountsPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Accounts>;
};

export type QueryApplicantIndividualsHasRiskLevelWhereHasConditions = {
  column?: InputMaybe<QueryApplicantIndividualsHasRiskLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditionsRelation>;
};

export enum QueryApplicantIndividualsHasRiskLevelColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantIndividualsHasRiskLevelWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>;
};

export type QueryApplicantIndividualsHasStateReasonWhereHasConditions = {
  column?: InputMaybe<QueryApplicantIndividualsHasStateReasonColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantIndividualsHasStateReasonWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryApplicantIndividualsHasStateReasonWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditionsRelation>;
};

export enum QueryApplicantIndividualsHasStateReasonColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantIndividualsHasStateReasonWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditions>;
  };

export type QueryApplicantIndividualsHasStatusWhereHasConditions = {
  column?: InputMaybe<QueryApplicantIndividualsHasStatusColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasStatusWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasStatusWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditionsRelation>;
};

export enum QueryApplicantIndividualsHasStatusColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantIndividualsHasStatusWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditions>;
};

export type QueryApplicantIndividualsHasGroupRoleWhereHasConditions = {
  column?: InputMaybe<QueryApplicantIndividualsHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditionsRelation>;
};

export enum QueryApplicantIndividualsHasGroupRoleColumn {
  GroupTypeId = "GROUP_TYPE_ID",
  RoleId = "ROLE_ID",
  Id = "ID",
}

export type QueryApplicantIndividualsHasGroupRoleWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>;
};

export enum Sort {
  Asc = "ASC",
  Desc = "DESC",
}

export type QueryApplicantIndividualsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantIndividualsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantIndividualsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualsWhereWhereConditionsRelation>;
};

export enum QueryApplicantIndividualsWhereColumn {
  Id = "ID",
  FirstName = "FIRST_NAME",
  LastName = "LAST_NAME",
  Email = "EMAIL",
  CreatedAt = "CREATED_AT",
  Fullname = "FULLNAME",
  GroupId = "GROUP_ID",
  CompanyId = "COMPANY_ID",
}

export type QueryApplicantIndividualsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantIndividualsWhereWhereConditions>;
};

export type QueryApplicantIndividualsOrderByOrderByClause = {
  column: QueryApplicantIndividualsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualsOrderByColumn {
  Id = "ID",
  FirstName = "FIRST_NAME",
  LastName = "LAST_NAME",
  Email = "EMAIL",
  CreatedAt = "CREATED_AT",
  Fullname = "FULLNAME",
  CompanyId = "COMPANY_ID",
}

export type ApplicantIndividualPaginator = {
  __typename?: "ApplicantIndividualPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividual>;
};

export type QueryApplicantBankingAccessWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantBankingAccessWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantBankingAccessWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantBankingAccessWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditionsRelation>;
};

export enum QueryApplicantBankingAccessWhereColumn {
  ApplicantIndividualId = "APPLICANT_INDIVIDUAL_ID",
  ApplicantCompanyId = "APPLICANT_COMPANY_ID",
  MemberId = "MEMBER_ID",
}

export type QueryApplicantBankingAccessWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditions>;
};

export type QueryApplicantBankingAccessOrderByOrderByClause = {
  column: QueryApplicantBankingAccessOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantBankingAccessOrderByColumn {
  Id = "ID",
  ApplicantIndividualId = "APPLICANT_INDIVIDUAL_ID",
  ApplicantCompanyId = "APPLICANT_COMPANY_ID",
  MemberId = "MEMBER_ID",
}

export type ApplicantBankingAccessPaginator = {
  __typename?: "ApplicantBankingAccessPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantBankingAccess>;
};

export type ApplicantBankingAccess = {
  __typename?: "ApplicantBankingAccess";
  id: Scalars["ID"];
  applicant_individual?: Maybe<ApplicantIndividual>;
  applicant_company?: Maybe<ApplicantCompany>;
  member?: Maybe<Members>;
  can_create_payment: Scalars["Boolean"];
  can_sign_payment: Scalars["Boolean"];
  contact_administrator: Scalars["Boolean"];
  daily_limit: Scalars["Float"];
  monthly_limit: Scalars["Float"];
  operation_limit: Scalars["Float"];
  day_used_limit?: Maybe<Scalars["Float"]>;
  month_used_limit?: Maybe<Scalars["Float"]>;
};

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditions = {
  column?: InputMaybe<QueryApplicantCompaniesHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>
  >;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasGroupRoleColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
};

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
  column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>
  >;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasRiskLevelColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
};

export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
  column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasStateReasonColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
};

export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
  column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasStatusColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
};

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
  column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasBusinessTypeColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
};

export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
  column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasOwnerColumn {
  Fullname = "FULLNAME",
  Id = "ID",
}

export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
};

export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
  column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasKycLevelColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
};

export type QueryApplicantCompaniesWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompaniesWhereColumn {
  Id = "ID",
  AccountManagerMemberId = "ACCOUNT_MANAGER_MEMBER_ID",
  ApplicantStateId = "APPLICANT_STATE_ID",
  ApplicantStateReasonId = "APPLICANT_STATE_REASON_ID",
  Name = "NAME",
  Url = "URL",
  Email = "EMAIL",
  CreatedAt = "CREATED_AT",
  GroupId = "GROUP_ID",
  CompanyId = "COMPANY_ID",
}

export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};

export type QueryApplicantCompaniesOrderByOrderByClause = {
  column: QueryApplicantCompaniesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompaniesOrderByColumn {
  Id = "ID",
  Name = "NAME",
  Email = "EMAIL",
  CreatedAt = "CREATED_AT",
  Url = "URL",
  OwnerId = "OWNER_ID",
  CompanyId = "COMPANY_ID",
}

export type ApplicantCompanyPaginator = {
  __typename?: "ApplicantCompanyPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantCompany>;
};

export type QueryGetMatchedUsersOrderByOrderByClause = {
  column: QueryGetMatchedUsersOrderByColumn;
  order: SortOrder;
};

export enum QueryGetMatchedUsersOrderByColumn {
  Id = "ID",
}

export type ApplicantIndividualCompanyPaginator = {
  __typename?: "ApplicantIndividualCompanyPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualCompany>;
};

export type QueryApplicantCompanyBusinessTypeWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>
  >;
  OR?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompanyBusinessTypeWhereColumn {
  Name = "NAME",
}

export type QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
};

export type QueryApplicantCompanyBusinessTypeOrderByOrderByClause = {
  column: QueryApplicantCompanyBusinessTypeOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyBusinessTypeOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantCompanyBusinessTypePaginator = {
  __typename?: "ApplicantCompanyBusinessTypePaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantCompanyBusinessType>;
};

export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
  column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantCompanyLabelPaginator = {
  __typename?: "ApplicantCompanyLabelPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantCompanyLabel>;
};

export type QueryApplicantCompanyModulesWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantCompanyModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantCompanyModulesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompanyModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompanyModulesWhereColumn {
  ApplicantCompanyId = "APPLICANT_COMPANY_ID",
}

export type QueryApplicantCompanyModulesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditions>;
};

export type QueryApplicantCompanyModulesOrderByOrderByClause = {
  column: QueryApplicantCompanyModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyModulesOrderByColumn {
  ApplicantCompanyId = "APPLICANT_COMPANY_ID",
}

export type ApplicantCompanyModulesPaginator = {
  __typename?: "ApplicantCompanyModulesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantCompanyModules>;
};

export type QueryApplicantCompanyNotesOrderByOrderByClause = {
  column: QueryApplicantCompanyNotesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyNotesOrderByColumn {
  Id = "ID",
  CreatedAt = "CREATED_AT",
}

export type ApplicantCompanyNotesPaginator = {
  __typename?: "ApplicantCompanyNotesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantCompanyNotes>;
};

export type QueryApplicantCompanyRiskLevelsOrderByOrderByClause = {
  column: QueryApplicantCompanyRiskLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyRiskLevelsOrderByColumn {
  Id = "ID",
  CreatedAt = "CREATED_AT",
}

export type ApplicantCompanyRiskLevelPaginator = {
  __typename?: "ApplicantCompanyRiskLevelPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantCompanyRiskLevel>;
};

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>
  >;
  OR?: InputMaybe<
    Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>
  >;
  HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
  RiskLevelId = "RISK_LEVEL_ID",
}

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  };

export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
  column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
  Id = "ID",
}

export type ApplicantCompanyRiskLevelHistoryPaginator = {
  __typename?: "ApplicantCompanyRiskLevelHistoryPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantCompanyRiskLevelHistory>;
};

export type ApplicantCompanyRiskLevelHistory = {
  __typename?: "ApplicantCompanyRiskLevelHistory";
  id: Scalars["ID"];
  comment: Scalars["String"];
  created_at?: Maybe<Scalars["DateTime"]>;
  applicant_company?: Maybe<ApplicantCompany>;
  manager?: Maybe<Members>;
  risk_level?: Maybe<ApplicantRiskLevel>;
};

export type QueryApplicantIndividualCompanyPositionsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>
  >;
  OR?: InputMaybe<
    Array<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>
  >;
  HAS?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditionsRelation>;
};

export enum QueryApplicantIndividualCompanyPositionsWhereColumn {
  Name = "NAME",
}

export type QueryApplicantIndividualCompanyPositionsWhereWhereConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>;
  };

export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: "ApplicantIndividualCompanyPositionPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualCompanyPosition>;
};

export type QueryApplicantIndividualCompanyRelationsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>
  >;
  OR?: InputMaybe<
    Array<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>
  >;
  HAS?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditionsRelation>;
};

export enum QueryApplicantIndividualCompanyRelationsWhereColumn {
  Name = "NAME",
}

export type QueryApplicantIndividualCompanyRelationsWhereWhereConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>;
  };

export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: "ApplicantIndividualCompanyRelationPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualCompanyRelation>;
};

export type QueryApplicantIndividualModulesWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantIndividualModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantIndividualModulesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditionsRelation>;
};

export enum QueryApplicantIndividualModulesWhereColumn {
  ApplicantIndividualId = "APPLICANT_INDIVIDUAL_ID",
}

export type QueryApplicantIndividualModulesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditions>;
};

export type QueryApplicantIndividualModulesOrderByOrderByClause = {
  column: QueryApplicantIndividualModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualModulesOrderByColumn {
  ApplicantIndividualId = "APPLICANT_INDIVIDUAL_ID",
}

export type ApplicantIndividualModulesPaginator = {
  __typename?: "ApplicantIndividualModulesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualModules>;
};

export type QueryApplicantIndividualRiskLevelsOrderByOrderByClause = {
  column: QueryApplicantIndividualRiskLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualRiskLevelsOrderByColumn {
  Id = "ID",
  CreatedAt = "CREATED_AT",
}

export type ApplicantIndividualRiskLevelPaginator = {
  __typename?: "ApplicantIndividualRiskLevelPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualRiskLevel>;
};

export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
};

export enum QueryApplicantRiskLevelHistoryWhereColumn {
  RiskLevelId = "RISK_LEVEL_ID",
}

export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};

export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
  column: QueryApplicantRiskLevelHistoryOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantRiskLevelHistoryOrderByColumn {
  Id = "ID",
}

export type ApplicantRiskLevelHistoryPaginator = {
  __typename?: "ApplicantRiskLevelHistoryPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantRiskLevelHistory>;
};

export type ApplicantRiskLevelHistory = {
  __typename?: "ApplicantRiskLevelHistory";
  id: Scalars["ID"];
  comment: Scalars["String"];
  created_at?: Maybe<Scalars["DateTime"]>;
  applicant?: Maybe<ApplicantIndividual>;
  manager?: Maybe<Members>;
  risk_level?: Maybe<ApplicantRiskLevel>;
};

export type QueryApplicantKycLevelsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
};

export enum QueryApplicantKycLevelsWhereColumn {
  Name = "NAME",
}

export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};

export type QueryApplicantKycLevelsOrderByOrderByClause = {
  column: QueryApplicantKycLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantKycLevelsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantKycLevelPaginator = {
  __typename?: "ApplicantKycLevelPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantKycLevel>;
};

export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
  column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantIndividualLabelPaginator = {
  __typename?: "ApplicantIndividualLabelPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualLabel>;
};

export type QueryApplicantModulesWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantModulesWhereWhereConditionsRelation>;
};

export enum QueryApplicantModulesWhereColumn {
  Name = "NAME",
}

export type QueryApplicantModulesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
};

export type QueryApplicantModulesOrderByOrderByClause = {
  column: QueryApplicantModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantModulesOrderByColumn {
  Id = "ID",
}

export type ApplicantModulesPaginator = {
  __typename?: "ApplicantModulesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantModules>;
};

export type QueryApplicantIndividualNotesOrderByOrderByClause = {
  column: QueryApplicantIndividualNotesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualNotesOrderByColumn {
  Id = "ID",
  CreatedAt = "CREATED_AT",
}

export type ApplicantIndividualNotesPaginator = {
  __typename?: "ApplicantIndividualNotesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualNotes>;
};

export type QueryApplicantRiskLevelsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
};

export enum QueryApplicantRiskLevelsWhereColumn {
  Name = "NAME",
}

export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};

export type QueryApplicantRiskLevelsOrderByOrderByClause = {
  column: QueryApplicantRiskLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantRiskLevelsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantRiskLevelPaginator = {
  __typename?: "ApplicantRiskLevelPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantRiskLevel>;
};

export type QueryApplicantStatesWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantStatesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
};

export enum QueryApplicantStatesWhereColumn {
  Name = "NAME",
}

export type QueryApplicantStatesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};

export type QueryApplicantStatesOrderByOrderByClause = {
  column: QueryApplicantStatesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStatesOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantStatePaginator = {
  __typename?: "ApplicantStatePaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantState>;
};

export type QueryApplicantStateReasonsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
};

export enum QueryApplicantStateReasonsWhereColumn {
  Name = "NAME",
}

export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};

export type QueryApplicantStateReasonsOrderByOrderByClause = {
  column: QueryApplicantStateReasonsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStateReasonsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantStateReasonPaginator = {
  __typename?: "ApplicantStateReasonPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantStateReason>;
};

export type QueryApplicantStatusesWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
};

export enum QueryApplicantStatusesWhereColumn {
  Name = "NAME",
}

export type QueryApplicantStatusesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};

export type QueryApplicantStatusesOrderByOrderByClause = {
  column: QueryApplicantStatusesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStatusesOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type ApplicantStatusPaginator = {
  __typename?: "ApplicantStatusPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantStatus>;
};

export type QueryBusinessActivitiesWhereWhereConditions = {
  column?: InputMaybe<QueryBusinessActivitiesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryBusinessActivitiesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryBusinessActivitiesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryBusinessActivitiesWhereWhereConditionsRelation>;
};

export enum QueryBusinessActivitiesWhereColumn {
  Name = "NAME",
}

export type QueryBusinessActivitiesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryBusinessActivitiesWhereWhereConditions>;
};

export type QueryBusinessActivitiesOrderByOrderByClause = {
  column: QueryBusinessActivitiesOrderByColumn;
  order: SortOrder;
};

export enum QueryBusinessActivitiesOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type BusinessActivityPaginator = {
  __typename?: "BusinessActivityPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<BusinessActivity>;
};

export type QueryCommissionPriceListsHasPaymentSystemWhereHasConditions = {
  column?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditionsRelation>;
};

export enum QueryCommissionPriceListsHasPaymentSystemColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryCommissionPriceListsHasPaymentSystemWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>;
  };

export type QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions = {
  column?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditionsRelation>;
};

export enum QueryCommissionPriceListsHasCommissionTemplateColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryCommissionPriceListsHasCommissionTemplateWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>;
  };

export type QueryCommissionPriceListsHasOwnerWhereHasConditions = {
  column?: InputMaybe<QueryCommissionPriceListsHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasOwnerWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditionsRelation>;
};

export enum QueryCommissionPriceListsHasOwnerColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryCommissionPriceListsHasOwnerWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditions>;
};

export type QueryCommissionPriceListsHasCompanyWhereHasConditions = {
  column?: InputMaybe<QueryCommissionPriceListsHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionPriceListsHasCompanyWhereHasConditions>
  >;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditionsRelation>;
};

export enum QueryCommissionPriceListsHasCompanyColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryCommissionPriceListsHasCompanyWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditions>;
};

export type QueryCommissionPriceListsHasAccountWhereHasConditions = {
  column?: InputMaybe<QueryCommissionPriceListsHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionPriceListsHasAccountWhereHasConditions>
  >;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditionsRelation>;
};

export enum QueryCommissionPriceListsHasAccountColumn {
  AccountNumber = "ACCOUNT_NUMBER",
}

export type QueryCommissionPriceListsHasAccountWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditions>;
};

export type QueryCommissionPriceListsHasPaymentProviderWhereHasConditions = {
  column?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditionsRelation>;
};

export enum QueryCommissionPriceListsHasPaymentProviderColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryCommissionPriceListsHasPaymentProviderWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>;
  };

export type QueryCommissionPriceListsWhereWhereConditions = {
  column?: InputMaybe<QueryCommissionPriceListsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryCommissionPriceListsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsWhereWhereConditionsRelation>;
};

export enum QueryCommissionPriceListsWhereColumn {
  Name = "NAME",
  PaymentSystemId = "PAYMENT_SYSTEM_ID",
  CommissionTemplateId = "COMMISSION_TEMPLATE_ID",
  ProviderId = "PROVIDER_ID",
}

export type QueryCommissionPriceListsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionPriceListsWhereWhereConditions>;
};

export type QueryCommissionPriceListsOrderByOrderByClause = {
  column: QueryCommissionPriceListsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionPriceListsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type CommissionPriceListPaginator = {
  __typename?: "CommissionPriceListPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<CommissionPriceList>;
};

export type QueryCommissionTemplatesHasPaymentProviderWhereHasConditions = {
  column?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditionsRelation>;
};

export enum QueryCommissionTemplatesHasPaymentProviderColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryCommissionTemplatesHasPaymentProviderWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>;
  };

export type QueryCommissionTemplatesHasBusinessActivityWhereHasConditions = {
  column?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditionsRelation>;
};

export enum QueryCommissionTemplatesHasBusinessActivityColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryCommissionTemplatesHasBusinessActivityWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>;
  };

export type QueryCommissionTemplatesHasOwnerWhereHasConditions = {
  column?: InputMaybe<QueryCommissionTemplatesHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasOwnerWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditionsRelation>;
};

export enum QueryCommissionTemplatesHasOwnerColumn {
  Fullname = "FULLNAME",
}

export type QueryCommissionTemplatesHasOwnerWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditions>;
};

export type QueryCommissionTemplatesHasAccountWhereHasConditions = {
  column?: InputMaybe<QueryCommissionTemplatesHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasAccountWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditionsRelation>;
};

export enum QueryCommissionTemplatesHasAccountColumn {
  AccountName = "ACCOUNT_NAME",
}

export type QueryCommissionTemplatesHasAccountWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditions>;
};

export type QueryCommissionTemplatesHasCompanyWhereHasConditions = {
  column?: InputMaybe<QueryCommissionTemplatesHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasCompanyWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditionsRelation>;
};

export enum QueryCommissionTemplatesHasCompanyColumn {
  Name = "NAME",
}

export type QueryCommissionTemplatesHasCompanyWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditions>;
};

export type QueryCommissionTemplatesWhereWhereConditions = {
  column?: InputMaybe<QueryCommissionTemplatesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryCommissionTemplatesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesWhereWhereConditionsRelation>;
};

export enum QueryCommissionTemplatesWhereColumn {
  Id = "ID",
  Name = "NAME",
  IsActive = "IS_ACTIVE",
}

export type QueryCommissionTemplatesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionTemplatesWhereWhereConditions>;
};

export type QueryCommissionTemplatesOrderByOrderByClause = {
  column: QueryCommissionTemplatesOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplatesOrderByColumn {
  Id = "ID",
  Name = "NAME",
  IsActive = "IS_ACTIVE",
  Description = "DESCRIPTION",
}

export type CommissionTemplatePaginator = {
  __typename?: "CommissionTemplatePaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<CommissionTemplate>;
};

export type CommissionTemplateLimitPaginator = {
  __typename?: "CommissionTemplateLimitPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<CommissionTemplateLimit>;
};

export type QueryCommissionTemplateLimitActionTypeWhereWhereConditions = {
  column?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>
  >;
  OR?: InputMaybe<
    Array<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>
  >;
  HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditionsRelation>;
};

export enum QueryCommissionTemplateLimitActionTypeWhereColumn {
  Name = "NAME",
}

export type QueryCommissionTemplateLimitActionTypeWhereWhereConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>;
  };

export type QueryCommissionTemplateLimitActionTypeOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitActionTypeOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitActionTypeOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type CommissionTemplateLimitActionTypePaginator = {
  __typename?: "CommissionTemplateLimitActionTypePaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<CommissionTemplateLimitActionType>;
};

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
  column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>
  >;
  OR?: InputMaybe<
    Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>
  >;
  HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
};

export enum QueryCommissionTemplateLimitPeriodsWhereColumn {
  Name = "NAME",
}

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type CommissionTemplateLimitPeriodPaginator = {
  __typename?: "CommissionTemplateLimitPeriodPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<CommissionTemplateLimitPeriod>;
};

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions =
  {
    column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars["Mixed"]>;
    AND?: InputMaybe<
      Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>
    >;
    OR?: InputMaybe<
      Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>
    >;
    HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
  };

export enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
  Name = "NAME",
}

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  };

export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause =
  {
    column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
    order: SortOrder;
  };

export enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type CommissionTemplateLimitTransferDirectionPaginator = {
  __typename?: "CommissionTemplateLimitTransferDirectionPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<CommissionTemplateLimitTransferDirection>;
};

export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
  column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>
  >;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
};

export enum QueryCommissionTemplateLimitTypesWhereColumn {
  Name = "NAME",
}

export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitTypesOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitTypesOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type CommissionTemplateLimitTypePaginator = {
  __typename?: "CommissionTemplateLimitTypePaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<CommissionTemplateLimitType>;
};

export type QueryCompaniesWhereWhereConditions = {
  column?: InputMaybe<QueryCompaniesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryCompaniesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryCompaniesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCompaniesWhereWhereConditionsRelation>;
};

export enum QueryCompaniesWhereColumn {
  Name = "NAME",
  Email = "EMAIL",
  Url = "URL",
  CreatedAt = "CREATED_AT",
}

export type QueryCompaniesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryCompaniesWhereWhereConditions>;
};

export type QueryCompaniesOrderByOrderByClause = {
  column: QueryCompaniesOrderByColumn;
  order: SortOrder;
};

export enum QueryCompaniesOrderByColumn {
  Id = "ID",
  CreatedAt = "CREATED_AT",
  Name = "NAME",
  Email = "EMAIL",
  Url = "URL",
}

export type CompaniesPaginator = {
  __typename?: "CompaniesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Companies>;
};

export type CountryPaginator = {
  __typename?: "CountryPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Country>;
};

export type CurrenciesPaginator = {
  __typename?: "CurrenciesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Currencies>;
};

export type QueryDepartmentsHasCompanyWhereHasConditions = {
  column?: InputMaybe<QueryDepartmentsHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryDepartmentsHasCompanyWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryDepartmentsHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditionsRelation>;
};

export enum QueryDepartmentsHasCompanyColumn {
  Id = "ID",
}

export type QueryDepartmentsHasCompanyWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditions>;
};

export type QueryDepartmentsWhereWhereConditions = {
  column?: InputMaybe<QueryDepartmentsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryDepartmentsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryDepartmentsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryDepartmentsWhereWhereConditionsRelation>;
};

export enum QueryDepartmentsWhereColumn {
  Name = "NAME",
}

export type QueryDepartmentsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryDepartmentsWhereWhereConditions>;
};

export type QueryDepartmentsOrderByOrderByClause = {
  column: QueryDepartmentsOrderByColumn;
  order: SortOrder;
};

export enum QueryDepartmentsOrderByColumn {
  Id = "ID",
  Name = "NAME",
}

export type DepartmentsPaginator = {
  __typename?: "DepartmentsPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Departments>;
};

export type QueryDepartmentPositionsHasDepartmentWhereHasConditions = {
  column?: InputMaybe<QueryDepartmentPositionsHasDepartmentColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryDepartmentPositionsHasDepartmentWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryDepartmentPositionsHasDepartmentWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditionsRelation>;
};

export enum QueryDepartmentPositionsHasDepartmentColumn {
  Id = "ID",
}

export type QueryDepartmentPositionsHasDepartmentWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditions>;
};

export type QueryDepartmentPositionsWhereWhereConditions = {
  column?: InputMaybe<QueryDepartmentPositionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryDepartmentPositionsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryDepartmentPositionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryDepartmentPositionsWhereWhereConditionsRelation>;
};

export enum QueryDepartmentPositionsWhereColumn {
  Name = "NAME",
  IsActive = "IS_ACTIVE",
}

export type QueryDepartmentPositionsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryDepartmentPositionsWhereWhereConditions>;
};

export type QueryDepartmentPositionsOrderByOrderByClause = {
  column: QueryDepartmentPositionsOrderByColumn;
  order: SortOrder;
};

export enum QueryDepartmentPositionsOrderByColumn {
  Id = "ID",
  Name = "NAME",
  IsActive = "IS_ACTIVE",
}

export type DepartmentPositionPaginator = {
  __typename?: "DepartmentPositionPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<DepartmentPosition>;
};

export type QueryEmailNotificationsHasApplicantIndividualWhereHasConditions = {
  column?: InputMaybe<QueryEmailNotificationsHasApplicantIndividualColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryEmailNotificationsHasApplicantIndividualWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryEmailNotificationsHasApplicantIndividualWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryEmailNotificationsHasApplicantIndividualWhereHasConditionsRelation>;
};

export enum QueryEmailNotificationsHasApplicantIndividualColumn {
  Id = "ID",
  Fullname = "FULLNAME",
}

export type QueryEmailNotificationsHasApplicantIndividualWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryEmailNotificationsHasApplicantIndividualWhereHasConditions>;
  };

export type QueryEmailNotificationsHasApplicantCompanyWhereHasConditions = {
  column?: InputMaybe<QueryEmailNotificationsHasApplicantCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryEmailNotificationsHasApplicantCompanyWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryEmailNotificationsHasApplicantCompanyWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryEmailNotificationsHasApplicantCompanyWhereHasConditionsRelation>;
};

export enum QueryEmailNotificationsHasApplicantCompanyColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryEmailNotificationsHasApplicantCompanyWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryEmailNotificationsHasApplicantCompanyWhereHasConditions>;
  };

export type QueryEmailNotificationsHasGroupRoleWhereHasConditions = {
  column?: InputMaybe<QueryEmailNotificationsHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryEmailNotificationsHasGroupRoleWhereHasConditions>
  >;
  OR?: InputMaybe<Array<QueryEmailNotificationsHasGroupRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsHasGroupRoleWhereHasConditionsRelation>;
};

export enum QueryEmailNotificationsHasGroupRoleColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryEmailNotificationsHasGroupRoleWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryEmailNotificationsHasGroupRoleWhereHasConditions>;
};

export type QueryEmailNotificationsHasMemberWhereHasConditions = {
  column?: InputMaybe<QueryEmailNotificationsHasMemberColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryEmailNotificationsHasMemberWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryEmailNotificationsHasMemberWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditionsRelation>;
};

export enum QueryEmailNotificationsHasMemberColumn {
  Id = "ID",
  Fullname = "FULLNAME",
}

export type QueryEmailNotificationsHasMemberWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditions>;
};

export type QueryEmailNotificationsHasGroupTypeWhereHasConditions = {
  column?: InputMaybe<QueryEmailNotificationsHasGroupTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryEmailNotificationsHasGroupTypeWhereHasConditions>
  >;
  OR?: InputMaybe<Array<QueryEmailNotificationsHasGroupTypeWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsHasGroupTypeWhereHasConditionsRelation>;
};

export enum QueryEmailNotificationsHasGroupTypeColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryEmailNotificationsHasGroupTypeWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryEmailNotificationsHasGroupTypeWhereHasConditions>;
};

export type QueryEmailNotificationsHasTemplatesWhereHasConditions = {
  column?: InputMaybe<QueryEmailNotificationsHasTemplatesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryEmailNotificationsHasTemplatesWhereHasConditions>
  >;
  OR?: InputMaybe<Array<QueryEmailNotificationsHasTemplatesWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditionsRelation>;
};

export enum QueryEmailNotificationsHasTemplatesColumn {
  Subject = "SUBJECT",
}

export type QueryEmailNotificationsHasTemplatesWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditions>;
};

export type QueryEmailNotificationsWhereWhereConditions = {
  column?: InputMaybe<QueryEmailNotificationsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryEmailNotificationsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryEmailNotificationsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsWhereWhereConditionsRelation>;
};

export enum QueryEmailNotificationsWhereColumn {
  Type = "TYPE",
  CompanyId = "COMPANY_ID",
  RecipientType = "RECIPIENT_TYPE",
  GroupType = "GROUP_TYPE",
}

export type QueryEmailNotificationsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryEmailNotificationsWhereWhereConditions>;
};

export type QueryEmailNotificationsOrderByOrderByClause = {
  column: QueryEmailNotificationsOrderByColumn;
  order: SortOrder;
};

export enum QueryEmailNotificationsOrderByColumn {
  Id = "ID",
}

export type EmailNotificationPaginator = {
  __typename?: "EmailNotificationPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<EmailNotification>;
};

export type QueryEmailTemplatesHasCompanyWhereHasConditions = {
  column?: InputMaybe<QueryEmailTemplatesHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryEmailTemplatesHasCompanyWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryEmailTemplatesHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditionsRelation>;
};

export enum QueryEmailTemplatesHasCompanyColumn {
  Name = "NAME",
}

export type QueryEmailTemplatesHasCompanyWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditions>;
};

export type QueryEmailTemplatesWhereWhereConditions = {
  column?: InputMaybe<QueryEmailTemplatesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryEmailTemplatesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryEmailTemplatesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryEmailTemplatesWhereWhereConditionsRelation>;
};

export enum QueryEmailTemplatesWhereColumn {
  Name = "NAME",
  CompanyId = "COMPANY_ID",
  Type = "TYPE",
  ServiceType = "SERVICE_TYPE",
}

export type QueryEmailTemplatesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryEmailTemplatesWhereWhereConditions>;
};

export type QueryEmailTemplatesOrderByOrderByClause = {
  column: QueryEmailTemplatesOrderByColumn;
  order: SortOrder;
};

export enum QueryEmailTemplatesOrderByColumn {
  Id = "ID",
}

export type EmailTemplatePaginator = {
  __typename?: "EmailTemplatePaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<EmailTemplate>;
};

export type QueryFilesWhereWhereConditions = {
  column?: InputMaybe<QueryFilesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryFilesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryFilesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryFilesWhereWhereConditionsRelation>;
};

export enum QueryFilesWhereColumn {
  AuthorId = "AUTHOR_ID",
  EntityType = "ENTITY_TYPE",
}

export type QueryFilesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryFilesWhereWhereConditions>;
};

export type QueryFilesOrderByOrderByClause = {
  column: QueryFilesOrderByColumn;
  order: SortOrder;
};

export enum QueryFilesOrderByColumn {
  Id = "ID",
  AuthorId = "AUTHOR_ID",
}

export type FilesPaginator = {
  __typename?: "FilesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Files>;
};

export type QueryGroupsHasPaymentProviderWhereHasConditions = {
  column?: InputMaybe<QueryGroupsHasPaymentProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryGroupsHasPaymentProviderWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryGroupsHasPaymentProviderWhereHasConditions>>;
  HAS?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditionsRelation>;
};

export enum QueryGroupsHasPaymentProviderColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryGroupsHasPaymentProviderWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditions>;
};

export type QueryGroupsHasCommissionTemplateWhereHasConditions = {
  column?: InputMaybe<QueryGroupsHasCommissionTemplateColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryGroupsHasCommissionTemplateWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryGroupsHasCommissionTemplateWhereHasConditions>>;
  HAS?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditionsRelation>;
};

export enum QueryGroupsHasCommissionTemplateColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryGroupsHasCommissionTemplateWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditions>;
};

export type QueryGroupsHasGroupTypeWhereHasConditions = {
  column?: InputMaybe<QueryGroupsHasGroupTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryGroupsHasGroupTypeWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryGroupsHasGroupTypeWhereHasConditions>>;
  HAS?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditionsRelation>;
};

export enum QueryGroupsHasGroupTypeColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryGroupsHasGroupTypeWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditions>;
};

export type QueryGroupsHasRoleWhereHasConditions = {
  column?: InputMaybe<QueryGroupsHasRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryGroupsHasRoleWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryGroupsHasRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryGroupsHasRoleWhereHasConditionsRelation>;
};

export enum QueryGroupsHasRoleColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryGroupsHasRoleWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryGroupsHasRoleWhereHasConditions>;
};

export type QueryGroupsWhereWhereConditions = {
  column?: InputMaybe<QueryGroupsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryGroupsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryGroupsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryGroupsWhereWhereConditionsRelation>;
};

export enum QueryGroupsWhereColumn {
  Id = "ID",
  GroupTypeId = "GROUP_TYPE_ID",
  Name = "NAME",
  RoleId = "ROLE_ID",
  PaymentProviderId = "PAYMENT_PROVIDER_ID",
  CommissionTemplateId = "COMMISSION_TEMPLATE_ID",
  IsActive = "IS_ACTIVE",
  CompanyId = "COMPANY_ID",
}

export type QueryGroupsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryGroupsWhereWhereConditions>;
};

export type QueryGroupsOrderByOrderByClause = {
  column: QueryGroupsOrderByColumn;
  order: SortOrder;
};

export enum QueryGroupsOrderByColumn {
  Id = "ID",
  IsActive = "IS_ACTIVE",
  Description = "DESCRIPTION",
}

export type GroupRolePaginator = {
  __typename?: "GroupRolePaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<GroupRole>;
};

export type QueryGroupCondition = {
  id?: InputMaybe<Scalars["ID"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
  payment_provider_id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  role_id?: InputMaybe<Scalars["ID"]>;
  group_type_id?: InputMaybe<Scalars["ID"]>;
  commission_template_id?: InputMaybe<Scalars["ID"]>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryGroupListOrderByOrderByClause = {
  column: QueryGroupListOrderByColumn;
  order: SortOrder;
};

export enum QueryGroupListOrderByColumn {
  Id = "ID",
  IsActive = "IS_ACTIVE",
  Name = "NAME",
}

export type QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions = {
  column?: InputMaybe<QueryMemberAccessLimitationsHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditionsRelation>;
};

export enum QueryMemberAccessLimitationsHasGroupRoleColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryMemberAccessLimitationsHasGroupRoleWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions>;
  };

export type QueryMemberAccessLimitationsHasGroupWhereHasConditions = {
  column?: InputMaybe<QueryMemberAccessLimitationsHasGroupColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryMemberAccessLimitationsHasGroupWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryMemberAccessLimitationsHasGroupWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryMemberAccessLimitationsHasGroupWhereHasConditionsRelation>;
};

export enum QueryMemberAccessLimitationsHasGroupColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryMemberAccessLimitationsHasGroupWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryMemberAccessLimitationsHasGroupWhereHasConditions>;
};

export type QueryMemberAccessLimitationsHasProviderWhereHasConditions = {
  column?: InputMaybe<QueryMemberAccessLimitationsHasProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryMemberAccessLimitationsHasProviderWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryMemberAccessLimitationsHasProviderWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryMemberAccessLimitationsHasProviderWhereHasConditionsRelation>;
};

export enum QueryMemberAccessLimitationsHasProviderColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryMemberAccessLimitationsHasProviderWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryMemberAccessLimitationsHasProviderWhereHasConditions>;
  };

export type QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions =
  {
    column?: InputMaybe<QueryMemberAccessLimitationsHasCommissionTemplateColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars["Mixed"]>;
    AND?: InputMaybe<
      Array<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions>
    >;
    OR?: InputMaybe<
      Array<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions>
    >;
    HAS?: InputMaybe<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditionsRelation>;
  };

export enum QueryMemberAccessLimitationsHasCommissionTemplateColumn {
  Id = "ID",
  Name = "NAME",
}

export type QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditionsRelation =
  {
    relation: Scalars["String"];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars["Int"]>;
    condition?: InputMaybe<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions>;
  };

export type QueryMemberAccessLimitationsWhereWhereConditions = {
  column?: InputMaybe<QueryMemberAccessLimitationsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryMemberAccessLimitationsWhereWhereConditionsRelation>;
};

export enum QueryMemberAccessLimitationsWhereColumn {
  Id = "ID",
  MemberId = "MEMBER_ID",
  GroupRoleId = "GROUP_ROLE_ID",
  ProviderId = "PROVIDER_ID",
}

export type QueryMemberAccessLimitationsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryMemberAccessLimitationsWhereWhereConditions>;
};

export type QueryMemberAccessLimitationsOrderByOrderByClause = {
  column: QueryMemberAccessLimitationsOrderByColumn;
  order: SortOrder;
};

export enum QueryMemberAccessLimitationsOrderByColumn {
  Id = "ID",
}

export type MemberAccessLimitationPaginator = {
  __typename?: "MemberAccessLimitationPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<MemberAccessLimitation>;
};

export type QueryMembersHasDepartmentWhereHasConditions = {
  column?: InputMaybe<QueryMembersHasDepartmentColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryMembersHasDepartmentWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryMembersHasDepartmentWhereHasConditions>>;
  HAS?: InputMaybe<QueryMembersHasDepartmentWhereHasConditionsRelation>;
};

export enum QueryMembersHasDepartmentColumn {
  DepartmentId = "DEPARTMENT_ID",
}

export type QueryMembersHasDepartmentWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryMembersHasDepartmentWhereHasConditions>;
};

export type QueryMembersHasGroupRoleWhereHasConditions = {
  column?: InputMaybe<QueryMembersHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryMembersHasGroupRoleWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryMembersHasGroupRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditionsRelation>;
};

export enum QueryMembersHasGroupRoleColumn {
  GroupTypeId = "GROUP_TYPE_ID",
  RoleId = "ROLE_ID",
  Id = "ID",
}

export type QueryMembersHasGroupRoleWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditions>;
};

export type QueryMembersWhereWhereConditions = {
  column?: InputMaybe<MembersColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryMembersWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryMembersWhereWhereConditions>>;
  HAS?: InputMaybe<QueryMembersWhereWhereConditionsRelation>;
};

export enum MembersColumn {
  Id = "ID",
  Fullname = "FULLNAME",
  CompanyId = "COMPANY_ID",
  Email = "EMAIL",
  PositionId = "POSITION_ID",
  IsActive = "IS_ACTIVE",
  LastLoginAt = "LAST_LOGIN_AT",
  IsShowOwnerApplicants = "IS_SHOW_OWNER_APPLICANTS",
}

export type QueryMembersWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryMembersWhereWhereConditions>;
};

export type QueryMembersOrderByOrderByClause = {
  column: QueryMembersOrderByColumn;
  order: SortOrder;
};

export enum QueryMembersOrderByColumn {
  Id = "ID",
  Email = "EMAIL",
  LastLoginAt = "LAST_LOGIN_AT",
  IsActive = "IS_ACTIVE",
}

export type MembersPaginator = {
  __typename?: "MembersPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Members>;
};

export type QueryPaymentProvidersHasPaymentSystemsWhereHasConditions = {
  column?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<
    Array<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>
  >;
  OR?: InputMaybe<
    Array<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>
  >;
  HAS?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditionsRelation>;
};

export enum QueryPaymentProvidersHasPaymentSystemsColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryPaymentProvidersHasPaymentSystemsWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>;
};

export type QueryPaymentProvidersWhereWhereConditions = {
  column?: InputMaybe<QueryPaymentProvidersWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentProvidersWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryPaymentProvidersWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPaymentProvidersWhereWhereConditionsRelation>;
};

export enum QueryPaymentProvidersWhereColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryPaymentProvidersWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentProvidersWhereWhereConditions>;
};

export type QueryPaymentProvidersOrderByOrderByClause = {
  column: QueryPaymentProvidersOrderByColumn;
  order: SortOrder;
};

export enum QueryPaymentProvidersOrderByColumn {
  Id = "ID",
  Name = "NAME",
  IsActive = "IS_ACTIVE",
}

export type PaymentProviderPaginator = {
  __typename?: "PaymentProviderPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<PaymentProvider>;
};

export type QueryPaymentSystemsHasCountriesWhereHasConditions = {
  column?: InputMaybe<QueryPaymentSystemsHasCountriesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentSystemsHasCountriesWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentSystemsHasCountriesWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentSystemsHasCountriesWhereHasConditionsRelation>;
};

export enum QueryPaymentSystemsHasCountriesColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryPaymentSystemsHasCountriesWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentSystemsHasCountriesWhereHasConditions>;
};

export type QueryPaymentSystemsHasCurrenciesWhereHasConditions = {
  column?: InputMaybe<QueryPaymentSystemsHasCurrenciesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentSystemsHasCurrenciesWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentSystemsHasCurrenciesWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentSystemsHasCurrenciesWhereHasConditionsRelation>;
};

export enum QueryPaymentSystemsHasCurrenciesColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryPaymentSystemsHasCurrenciesWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentSystemsHasCurrenciesWhereHasConditions>;
};

export type QueryPaymentSystemsHasProvidersWhereHasConditions = {
  column?: InputMaybe<QueryPaymentSystemsHasProvidersColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentSystemsHasProvidersWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentSystemsHasProvidersWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentSystemsHasProvidersWhereHasConditionsRelation>;
};

export enum QueryPaymentSystemsHasProvidersColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryPaymentSystemsHasProvidersWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentSystemsHasProvidersWhereHasConditions>;
};

export type QueryPaymentSystemsWhereWhereConditions = {
  column?: InputMaybe<QueryPaymentSystemsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentSystemsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryPaymentSystemsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPaymentSystemsWhereWhereConditionsRelation>;
};

export enum QueryPaymentSystemsWhereColumn {
  Name = "NAME",
}

export type QueryPaymentSystemsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentSystemsWhereWhereConditions>;
};

export type QueryPaymentSystemsOrderByOrderByClause = {
  column: QueryPaymentSystemsOrderByColumn;
  order: SortOrder;
};

export enum QueryPaymentSystemsOrderByColumn {
  Id = "ID",
  Name = "NAME",
  IsActive = "IS_ACTIVE",
}

export type PaymentSystemPaginator = {
  __typename?: "PaymentSystemPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<PaymentSystem>;
};

export type QueryPaymentsHasCompaniesWhereHasConditions = {
  column?: InputMaybe<QueryPaymentsHasCompaniesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentsHasCompaniesWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsHasCompaniesWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditionsRelation>;
};

export enum QueryPaymentsHasCompaniesColumn {
  Name = "NAME",
}

export type QueryPaymentsHasCompaniesWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditions>;
};

export type QueryPaymentsHasPaymentProviderWhereHasConditions = {
  column?: InputMaybe<QueryPaymentsHasPaymentProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentProviderWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentProviderWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditionsRelation>;
};

export enum QueryPaymentsHasPaymentProviderColumn {
  Name = "NAME",
}

export type QueryPaymentsHasPaymentProviderWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditions>;
};

export type QueryPaymentsHasAccountsWhereHasConditions = {
  column?: InputMaybe<QueryPaymentsHasAccountsColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentsHasAccountsWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsHasAccountsWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditionsRelation>;
};

export enum QueryPaymentsHasAccountsColumn {
  AccountId = "ACCOUNT_ID",
}

export type QueryPaymentsHasAccountsWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditions>;
};

export type QueryPaymentsHasOwnerWhereHasConditions = {
  column?: InputMaybe<QueryPaymentsHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentsHasOwnerWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditionsRelation>;
};

export enum QueryPaymentsHasOwnerColumn {
  Fullname = "FULLNAME",
}

export type QueryPaymentsHasOwnerWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditions>;
};

export type QueryPaymentsHasPaymentOperationWhereHasConditions = {
  column?: InputMaybe<QueryPaymentsHasPaymentOperationColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentOperationWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentOperationWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasPaymentOperationWhereHasConditionsRelation>;
};

export enum QueryPaymentsHasPaymentOperationColumn {
  Name = "NAME",
}

export type QueryPaymentsHasPaymentOperationWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentsHasPaymentOperationWhereHasConditions>;
};

export type QueryPaymentsHasPaymentUrgencyWhereHasConditions = {
  column?: InputMaybe<QueryPaymentsHasPaymentUrgencyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentUrgencyWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentUrgencyWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditionsRelation>;
};

export enum QueryPaymentsHasPaymentUrgencyColumn {
  Name = "NAME",
}

export type QueryPaymentsHasPaymentUrgencyWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditions>;
};

export type QueryPaymentsHasPaymentStatusWhereHasConditions = {
  column?: InputMaybe<QueryPaymentsHasPaymentStatusColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentStatusWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentStatusWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditionsRelation>;
};

export enum QueryPaymentsHasPaymentStatusColumn {
  Name = "NAME",
}

export type QueryPaymentsHasPaymentStatusWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditions>;
};

export type QueryPaymentsWhereWhereConditions = {
  column?: InputMaybe<QueryPaymentsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryPaymentsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPaymentsWhereWhereConditionsRelation>;
};

export enum QueryPaymentsWhereColumn {
  SenderBankAccount = "SENDER_BANK_ACCOUNT",
  TypeId = "TYPE_ID",
  UrgencyId = "URGENCY_ID",
  Status = "STATUS",
  PaymentProviderId = "PAYMENT_PROVIDER_ID",
  CompanyId = "COMPANY_ID",
  AccountId = "ACCOUNT_ID",
  PaymentNumber = "PAYMENT_NUMBER",
  SenderName = "SENDER_NAME",
}

export type QueryPaymentsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryPaymentsWhereWhereConditions>;
};

export type QueryPaymentsOrderByOrderByClause = {
  column: QueryPaymentsOrderByColumn;
  order: SortOrder;
};

export enum QueryPaymentsOrderByColumn {
  Id = "ID",
  CreatedAt = "CREATED_AT",
  Amount = "AMOUNT",
  Fee = "FEE",
  PaymentNumber = "PAYMENT_NUMBER",
}

export type PaymentsPaginator = {
  __typename?: "PaymentsPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Payments>;
};

export type QueryRequisitesWhereWhereConditions = {
  column?: InputMaybe<QueryRequisitesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryRequisitesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryRequisitesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryRequisitesWhereWhereConditionsRelation>;
};

export enum QueryRequisitesWhereColumn {
  AccountId = "ACCOUNT_ID",
  BankName = "BANK_NAME",
  AccountNo = "ACCOUNT_NO",
}

export type QueryRequisitesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryRequisitesWhereWhereConditions>;
};

export type QueryRequisitesOrderByOrderByClause = {
  column: QueryRequisitesOrderByColumn;
  order: SortOrder;
};

export enum QueryRequisitesOrderByColumn {
  Id = "ID",
}

export type RequisitesPaginator = {
  __typename?: "RequisitesPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Requisites>;
};

export type QueryRolesHasGroupTypesWhereHasConditions = {
  column?: InputMaybe<QueryRolesHasGroupTypesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryRolesHasGroupTypesWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryRolesHasGroupTypesWhereHasConditions>>;
  HAS?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditionsRelation>;
};

export enum QueryRolesHasGroupTypesColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryRolesHasGroupTypesWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditions>;
};

export type QueryRolesHasGroupsWhereHasConditions = {
  column?: InputMaybe<QueryRolesHasGroupsColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryRolesHasGroupsWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryRolesHasGroupsWhereHasConditions>>;
  HAS?: InputMaybe<QueryRolesHasGroupsWhereHasConditionsRelation>;
};

export enum QueryRolesHasGroupsColumn {
  Name = "NAME",
  Id = "ID",
}

export type QueryRolesHasGroupsWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryRolesHasGroupsWhereHasConditions>;
};

export type QueryRolesWhereWhereConditions = {
  column?: InputMaybe<QueryRolesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryRolesWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryRolesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryRolesWhereWhereConditionsRelation>;
};

export enum QueryRolesWhereColumn {
  Name = "NAME",
  GroupTypeId = "GROUP_TYPE_ID",
  CompanyId = "COMPANY_ID",
}

export type QueryRolesWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryRolesWhereWhereConditions>;
};

export type QueryRolesOrderByOrderByClause = {
  column: QueryRolesOrderByColumn;
  order: SortOrder;
};

export enum QueryRolesOrderByColumn {
  Id = "ID",
  Name = "NAME",
  Description = "DESCRIPTION",
}

export type RolePaginator = {
  __typename?: "RolePaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Role>;
};

export type QueryTicketsHasCompanyWhereHasConditions = {
  column?: InputMaybe<QueryTicketsHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryTicketsHasCompanyWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryTicketsHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasCompanyWhereHasConditionsRelation>;
};

export enum QueryTicketsHasCompanyColumn {
  Name = "NAME",
}

export type QueryTicketsHasCompanyWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryTicketsHasCompanyWhereHasConditions>;
};

export type QueryTicketsHasDepartmentWhereHasConditions = {
  column?: InputMaybe<QueryTicketsHasDepartmentColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryTicketsHasDepartmentWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryTicketsHasDepartmentWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditionsRelation>;
};

export enum QueryTicketsHasDepartmentColumn {
  Name = "NAME",
}

export type QueryTicketsHasDepartmentWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditions>;
};

export type QueryTicketsHasPositionWhereHasConditions = {
  column?: InputMaybe<QueryTicketsHasPositionColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryTicketsHasPositionWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryTicketsHasPositionWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasPositionWhereHasConditionsRelation>;
};

export enum QueryTicketsHasPositionColumn {
  Name = "NAME",
}

export type QueryTicketsHasPositionWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryTicketsHasPositionWhereHasConditions>;
};

export type QueryTicketsHasMemberWhereHasConditions = {
  column?: InputMaybe<QueryTicketsHasMemberColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryTicketsHasMemberWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryTicketsHasMemberWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasMemberWhereHasConditionsRelation>;
};

export enum QueryTicketsHasMemberColumn {
  Fullname = "FULLNAME",
}

export type QueryTicketsHasMemberWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryTicketsHasMemberWhereHasConditions>;
};

export type QueryTicketsHasClientWhereHasConditions = {
  column?: InputMaybe<QueryTicketsHasClientColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryTicketsHasClientWhereHasConditions>>;
  OR?: InputMaybe<Array<QueryTicketsHasClientWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasClientWhereHasConditionsRelation>;
};

export enum QueryTicketsHasClientColumn {
  Fullname = "FULLNAME",
}

export type QueryTicketsHasClientWhereHasConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryTicketsHasClientWhereHasConditions>;
};

export type QueryTicketsWhereWhereConditions = {
  column?: InputMaybe<QueryTicketsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryTicketsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryTicketsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryTicketsWhereWhereConditionsRelation>;
};

export enum QueryTicketsWhereColumn {
  Title = "TITLE",
  Status = "STATUS",
}

export type QueryTicketsWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryTicketsWhereWhereConditions>;
};

export type QueryTicketsOrderByRelationOrderByClause = {
  column?: InputMaybe<QueryTicketsOrderByColumn>;
  order: SortOrder;
  company?: InputMaybe<QueryTicketsOrderByCompany>;
  department?: InputMaybe<QueryTicketsOrderByDepartment>;
};

export enum QueryTicketsOrderByColumn {
  Id = "ID",
}

export type QueryTicketsOrderByCompany = {
  aggregate: OrderByRelationAggregateFunction;
};

export enum OrderByRelationAggregateFunction {
  Count = "COUNT",
}

export type QueryTicketsOrderByDepartment = {
  aggregate: OrderByRelationAggregateFunction;
};

export type TicketPaginator = {
  __typename?: "TicketPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Ticket>;
};

export type TwoFactorAuthSettingsPaginator = {
  __typename?: "TwoFactorAuthSettingsPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<TwoFactorAuthSettings>;
};

export type QueryUsersWhereWhereConditions = {
  column?: InputMaybe<UsersColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<QueryUsersWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryUsersWhereWhereConditions>>;
  HAS?: InputMaybe<QueryUsersWhereWhereConditionsRelation>;
};

export enum UsersColumn {
  Id = "ID",
  Fullname = "FULLNAME",
  CompanyId = "COMPANY_ID",
  Email = "EMAIL",
  GroupId = "GROUP_ID",
  GroupTypeId = "GROUP_TYPE_ID",
  RoleId = "ROLE_ID",
}

export type QueryUsersWhereWhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<QueryUsersWhereWhereConditions>;
};

export type QueryUsersOrderByOrderByClause = {
  column: QueryUsersOrderByColumn;
  order: SortOrder;
};

export enum QueryUsersOrderByColumn {
  Id = "ID",
  Email = "EMAIL",
  Fullname = "FULLNAME",
}

export type UsersPaginator = {
  __typename?: "UsersPaginator";
  paginatorInfo: PaginatorInfo;
  data: Array<Users>;
};

export type Users = {
  __typename?: "Users";
  id?: Maybe<Scalars["ID"]>;
  first_name?: Maybe<Scalars["String"]>;
  last_name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["EMAIL"]>;
  company?: Maybe<Companies>;
  group?: Maybe<GroupRole>;
  fullname?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createAccountLimit?: Maybe<AccountLimit>;
  updateAccountLimit?: Maybe<AccountLimit>;
  deleteAccountLimit?: Maybe<AccountLimit>;
  createAccount?: Maybe<Accounts>;
  updateAccount?: Maybe<Accounts>;
  deleteAccount?: Maybe<Accounts>;
  generateIban?: Maybe<Accounts>;
  createApplicantIndividual?: Maybe<ApplicantIndividual>;
  updateApplicantIndividual?: Maybe<ApplicantIndividual>;
  setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
  deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
  createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  createApplicantCompany?: Maybe<ApplicantCompany>;
  updateApplicantCompany?: Maybe<ApplicantCompany>;
  deleteApplicantCompany?: Maybe<ApplicantCompany>;
  createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  createApplicantCompanyModule?: Maybe<ApplicantCompany>;
  updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
  deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
  createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  createApplicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  deleteApplicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  createApplicantIndividualRiskLevel?: Maybe<ApplicantIndividualRiskLevel>;
  deleteApplicantIndividualRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  createApplicantModule?: Maybe<ApplicantModules>;
  createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  createApplicantStateReason?: Maybe<ApplicantStateReason>;
  updateApplicantStateReason?: Maybe<ApplicantStateReason>;
  deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
  createBusinessActivity?: Maybe<BusinessActivity>;
  updateBusinessActivity?: Maybe<BusinessActivity>;
  createCommissionPriceList?: Maybe<CommissionPriceList>;
  updateCommissionPriceList?: Maybe<CommissionPriceList>;
  deleteCommissionPriceList?: Maybe<CommissionPriceList>;
  createCommissionTemplate?: Maybe<CommissionTemplate>;
  updateCommissionTemplate?: Maybe<CommissionTemplate>;
  deleteCommissionTemplate?: Maybe<CommissionTemplate>;
  createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  createCompany?: Maybe<Companies>;
  updateCompany?: Maybe<Companies>;
  deleteCompany?: Maybe<Companies>;
  createCompanySettings?: Maybe<CompanySettings>;
  updateCompanySettings?: Maybe<CompanySettings>;
  createDepartment?: Maybe<Departments>;
  updateDepartment?: Maybe<Departments>;
  createDepartmentPosition?: Maybe<DepartmentPosition>;
  deleteDepartment?: Maybe<Departments>;
  deleteDepartmentPosition?: Maybe<DepartmentPosition>;
  createEmailNotification?: Maybe<EmailNotification>;
  updateEmailNotification?: Maybe<EmailNotification>;
  deleteEmailNotification?: Maybe<EmailNotification>;
  createEmailSmtp?: Maybe<EmailSmtp>;
  updateEmailSmtp?: Maybe<EmailSmtp>;
  deleteEmailSmtp: Array<EmailSmtp>;
  sendEmail?: Maybe<StatusType>;
  createEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  updateEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  deleteEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  createEmailTemplate?: Maybe<EmailTemplate>;
  updateEmailTemplate?: Maybe<EmailTemplate>;
  deleteEmailTemplate?: Maybe<EmailTemplate>;
  sendEmailWithTemplate?: Maybe<StatusType>;
  deleteFile?: Maybe<Files>;
  createGroupSettings?: Maybe<GroupRole>;
  updateGroupSettings?: Maybe<GroupRole>;
  deleteGroup?: Maybe<GroupRole>;
  setMemberGroup?: Maybe<GroupRole>;
  createMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  updateMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  deleteMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  createMember?: Maybe<Members>;
  inviteMember?: Maybe<Members>;
  updateMember?: Maybe<Members>;
  setMemberPassword?: Maybe<Members>;
  setMemberSecurityPin?: Maybe<Members>;
  deleteMember?: Maybe<Members>;
  createPaymentProvider?: Maybe<PaymentProvider>;
  updatePaymentProvider?: Maybe<PaymentProvider>;
  deletePaymentProvider?: Maybe<PaymentProvider>;
  createPaymentSystem?: Maybe<PaymentSystem>;
  updatePaymentSystem?: Maybe<PaymentSystem>;
  deletePaymentSystem?: Maybe<PaymentSystem>;
  createPayment?: Maybe<Payments>;
  updatePayment?: Maybe<Payments>;
  deletePayment?: Maybe<Payments>;
  createPriceListFees?: Maybe<PriceListFee>;
  updatePriceListFees?: Maybe<PriceListFee>;
  deletePriceListFees?: Maybe<PriceListFee>;
  createRequisites?: Maybe<Requisites>;
  updateRequisites?: Maybe<Requisites>;
  deleteRequisites?: Maybe<Requisites>;
  createRole?: Maybe<Role>;
  updateRole?: Maybe<Role>;
  deleteRole?: Maybe<Role>;
  createTicketComment?: Maybe<TicketComments>;
  createTicket?: Maybe<Ticket>;
  updateTicket?: Maybe<Ticket>;
};

export type MutationCreateAccountLimitArgs = {
  account_id: Scalars["ID"];
  commission_template_limit_type_id: Scalars["ID"];
  commission_template_limit_transfer_direction_id: Scalars["ID"];
  amount: Scalars["Float"];
  currency_id?: InputMaybe<Scalars["ID"]>;
  commission_template_limit_period_id: Scalars["ID"];
  commission_template_limit_action_type_id: Scalars["ID"];
  period_count?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateAccountLimitArgs = {
  id: Scalars["ID"];
  commission_template_limit_type_id?: InputMaybe<Scalars["ID"]>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars["ID"]>;
  amount?: InputMaybe<Scalars["Float"]>;
  currency_id?: InputMaybe<Scalars["ID"]>;
  commission_template_limit_period_id?: InputMaybe<Scalars["ID"]>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars["ID"]>;
  period_count?: InputMaybe<Scalars["Int"]>;
};

export type MutationDeleteAccountLimitArgs = {
  id: Scalars["ID"];
};

export type MutationCreateAccountArgs = {
  input: InputAccount;
};

export type MutationUpdateAccountArgs = {
  id: Scalars["ID"];
  input: InputAccount;
};

export type MutationDeleteAccountArgs = {
  id: Scalars["ID"];
};

export type MutationGenerateIbanArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantIndividualArgs = {
  first_name: Scalars["String"];
  last_name: Scalars["String"];
  middle_name?: InputMaybe<Scalars["String"]>;
  email: Scalars["EMAIL"];
  url?: InputMaybe<Scalars["String"]>;
  phone: Scalars["String"];
  country_id: Scalars["ID"];
  language_id?: InputMaybe<Scalars["ID"]>;
  citizenship_country_id?: InputMaybe<Scalars["ID"]>;
  state?: InputMaybe<Scalars["String"]>;
  city: Scalars["String"];
  address: Scalars["String"];
  zip?: InputMaybe<Scalars["String"]>;
  nationality?: InputMaybe<Scalars["String"]>;
  birth_country_id: Scalars["ID"];
  birth_state?: InputMaybe<Scalars["String"]>;
  birth_city?: InputMaybe<Scalars["String"]>;
  birth_at: Scalars["Date"];
  sex: Sex;
  personal_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  contacts_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  applicant_status_id?: InputMaybe<Scalars["ID"]>;
  applicant_state_id: Scalars["ID"];
  applicant_state_reason_id?: InputMaybe<Scalars["ID"]>;
  applicant_risk_level_id?: InputMaybe<Scalars["ID"]>;
  account_manager_member_id: Scalars["ID"];
  company_id: Scalars["ID"];
  labels?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  group_id?: InputMaybe<Scalars["ID"]>;
  two_factor_auth_id?: InputMaybe<Scalars["ID"]>;
  password?: InputMaybe<Scalars["String"]>;
  password_confirmation?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateApplicantIndividualArgs = {
  id: Scalars["ID"];
  first_name?: InputMaybe<Scalars["String"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  middle_name?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["EMAIL"]>;
  url?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  is_verification_phone?: InputMaybe<Scalars["Boolean"]>;
  country_id?: InputMaybe<Scalars["ID"]>;
  language_id?: InputMaybe<Scalars["ID"]>;
  citizenship_country_id?: InputMaybe<Scalars["ID"]>;
  state?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  address?: InputMaybe<Scalars["String"]>;
  zip?: InputMaybe<Scalars["String"]>;
  nationality?: InputMaybe<Scalars["String"]>;
  birth_country_id?: InputMaybe<Scalars["ID"]>;
  birth_state?: InputMaybe<Scalars["String"]>;
  birth_city?: InputMaybe<Scalars["String"]>;
  birth_at?: InputMaybe<Scalars["Date"]>;
  sex?: InputMaybe<Sex>;
  profile_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  personal_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  contacts_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  applicant_status_id?: InputMaybe<Scalars["ID"]>;
  applicant_state_id?: InputMaybe<Scalars["ID"]>;
  applicant_state_reason_id?: InputMaybe<Scalars["ID"]>;
  applicant_risk_level_id?: InputMaybe<Scalars["ID"]>;
  account_manager_member_id?: InputMaybe<Scalars["ID"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
  labels?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  group_id?: InputMaybe<Scalars["ID"]>;
  two_factor_auth_id?: InputMaybe<Scalars["ID"]>;
  password?: InputMaybe<Scalars["String"]>;
  password_confirmation?: InputMaybe<Scalars["String"]>;
};

export type MutationSetApplicantIndividualPasswordArgs = {
  id: Scalars["ID"];
  password: Scalars["String"];
  password_confirmation: Scalars["String"];
};

export type MutationDeleteApplicantIndividualArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantBankingAccessArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_company_id: Scalars["ID"];
  member_id: Scalars["ID"];
  can_create_payment: Scalars["Boolean"];
  can_sign_payment: Scalars["Boolean"];
  contact_administrator: Scalars["Boolean"];
  daily_limit: Scalars["Float"];
  monthly_limit: Scalars["Float"];
  operation_limit: Scalars["Float"];
  used_limit?: InputMaybe<Scalars["Float"]>;
};

export type MutationUpdateApplicantBankingAccessArgs = {
  id: Scalars["ID"];
  applicant_individual_id: Scalars["ID"];
  applicant_company_id: Scalars["ID"];
  member_id: Scalars["ID"];
  can_create_payment: Scalars["Boolean"];
  can_sign_payment: Scalars["Boolean"];
  contact_administrator: Scalars["Boolean"];
  daily_limit: Scalars["Float"];
  monthly_limit: Scalars["Float"];
  operation_limit: Scalars["Float"];
  used_limit?: InputMaybe<Scalars["Float"]>;
};

export type MutationDeleteApplicantBankingAccessArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantCompanyArgs = {
  name: Scalars["String"];
  email: Scalars["EMAIL"];
  url: Scalars["String"];
  phone: Scalars["String"];
  country_id: Scalars["ID"];
  language_id?: InputMaybe<Scalars["ID"]>;
  state?: InputMaybe<Scalars["String"]>;
  city: Scalars["String"];
  address: Scalars["String"];
  address2?: InputMaybe<Scalars["String"]>;
  office_address?: InputMaybe<Scalars["String"]>;
  zip?: InputMaybe<Scalars["String"]>;
  reg_at?: InputMaybe<Scalars["Date"]>;
  expires_at: Scalars["Date"];
  tax?: InputMaybe<Scalars["String"]>;
  reg_number?: InputMaybe<Scalars["String"]>;
  license_number?: InputMaybe<Scalars["String"]>;
  company_type?: InputMaybe<Scalars["String"]>;
  company_info_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  contacts_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  applicant_company_business_type_id?: InputMaybe<Scalars["ID"]>;
  applicant_status_id?: InputMaybe<Scalars["ID"]>;
  applicant_state_id: Scalars["ID"];
  applicant_state_reason_id?: InputMaybe<Scalars["ID"]>;
  applicant_risk_level_id?: InputMaybe<Scalars["ID"]>;
  applicant_kyc_level_id?: InputMaybe<Scalars["ID"]>;
  account_manager_member_id: Scalars["ID"];
  company_id: Scalars["ID"];
  owner_id?: InputMaybe<Scalars["ID"]>;
  owner_relation_id: Scalars["ID"];
  owner_position_id: Scalars["ID"];
  labels?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  group_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateApplicantCompanyArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["EMAIL"]>;
  url?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  is_verification_phone?: InputMaybe<Scalars["Boolean"]>;
  country_id?: InputMaybe<Scalars["ID"]>;
  language_id?: InputMaybe<Scalars["ID"]>;
  state?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  address?: InputMaybe<Scalars["String"]>;
  address2?: InputMaybe<Scalars["String"]>;
  office_address?: InputMaybe<Scalars["String"]>;
  zip?: InputMaybe<Scalars["String"]>;
  reg_at?: InputMaybe<Scalars["Date"]>;
  expires_at?: InputMaybe<Scalars["Date"]>;
  tax?: InputMaybe<Scalars["String"]>;
  reg_number?: InputMaybe<Scalars["String"]>;
  license_number?: InputMaybe<Scalars["String"]>;
  company_type?: InputMaybe<Scalars["String"]>;
  company_info_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  contacts_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  profile_additional_fields?: InputMaybe<
    Array<InputMaybe<AdditionalFieldInput>>
  >;
  applicant_company_business_type_id?: InputMaybe<Scalars["ID"]>;
  applicant_status_id?: InputMaybe<Scalars["ID"]>;
  applicant_state_id?: InputMaybe<Scalars["ID"]>;
  applicant_state_reason_id?: InputMaybe<Scalars["ID"]>;
  applicant_risk_level_id?: InputMaybe<Scalars["ID"]>;
  applicant_kyc_level_id?: InputMaybe<Scalars["ID"]>;
  account_manager_member_id?: InputMaybe<Scalars["ID"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
  owner_id?: InputMaybe<Scalars["ID"]>;
  owner_relation_id?: InputMaybe<Scalars["ID"]>;
  owner_position_id?: InputMaybe<Scalars["ID"]>;
  labels?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  group_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationDeleteApplicantCompanyArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantIndividualCompanyArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_company_id: Scalars["ID"];
  applicant_individual_company_relation_id: Scalars["ID"];
  applicant_individual_company_position_id: Scalars["ID"];
};

export type MutationUpdateApplicantIndividualCompanyArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_company_id: Scalars["ID"];
  applicant_individual_company_relation_id?: InputMaybe<Scalars["ID"]>;
  applicant_individual_company_position_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationDeleteApplicantIndividualCompanyArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_company_id: Scalars["ID"];
};

export type MutationCreateApplicantCompanyBusinessTypeArgs = {
  name: Scalars["String"];
};

export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationCreateApplicantCompanyLabelArgs = {
  name: Scalars["String"];
  hex_color_code: Scalars["String"];
};

export type MutationUpdateApplicantCompanyLabelArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
  hex_color_code?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteApplicantCompanyLabelArgs = {
  id: Scalars["ID"];
  deleteAnyway?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationAttachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars["ID"];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationDetachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars["ID"];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationCreateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars["ID"];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationUpdateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars["ID"];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationDeleteApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars["ID"];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationCreateApplicantCompanyNoteArgs = {
  note: Scalars["String"];
  applicant_company_id: Scalars["ID"];
  member_id: Scalars["ID"];
};

export type MutationDeleteApplicantCompanyNoteArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantCompanyRiskLevelArgs = {
  description: Scalars["String"];
  applicant_company_id: Scalars["ID"];
  member_id: Scalars["ID"];
};

export type MutationDeleteApplicantCompanyRiskLevelArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
  comment: Scalars["String"];
  applicant_company_id: Scalars["ID"];
  risk_level_id: Scalars["ID"];
};

export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantIndividualCompanyPositionArgs = {
  name: Scalars["String"];
};

export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationCreateApplicantIndividualCompanyRelationArgs = {
  name: Scalars["String"];
};

export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationCreateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationUpdateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationDeleteApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationCreateApplicantIndividualRiskLevelArgs = {
  description: Scalars["String"];
  applicant_individual_id: Scalars["ID"];
  member_id: Scalars["ID"];
};

export type MutationDeleteApplicantIndividualRiskLevelArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantRiskLevelHistoryArgs = {
  comment: Scalars["String"];
  applicant_id: Scalars["ID"];
  risk_level_id: Scalars["ID"];
};

export type MutationDeleteApplicantRiskLevelHistoryArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantIndividualLabelArgs = {
  name: Scalars["String"];
  hex_color_code: Scalars["String"];
};

export type MutationUpdateApplicantIndividualLabelArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
  hex_color_code?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteApplicantIndividualLabelArgs = {
  id: Scalars["ID"];
  deleteAnyway?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationAttachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationDetachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars["ID"];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationCreateApplicantModuleArgs = {
  name: Scalars["String"];
};

export type MutationCreateApplicantIndividualNoteArgs = {
  note: Scalars["String"];
  applicant_individual_id: Scalars["ID"];
  member_id: Scalars["ID"];
};

export type MutationDeleteApplicantIndividualNoteArgs = {
  id: Scalars["ID"];
};

export type MutationCreateApplicantStateReasonArgs = {
  name: Scalars["String"];
};

export type MutationUpdateApplicantStateReasonArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationDeleteApplicantStateReasonArgs = {
  id: Scalars["ID"];
};

export type MutationCreateBusinessActivityArgs = {
  name: Scalars["String"];
};

export type MutationUpdateBusinessActivityArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationCreateCommissionPriceListArgs = {
  name: Scalars["String"];
  provider_id: Scalars["ID"];
  payment_system_id: Scalars["ID"];
  commission_template_id: Scalars["ID"];
};

export type MutationUpdateCommissionPriceListArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
  provider_id: Scalars["ID"];
  payment_system_id: Scalars["ID"];
  commission_template_id: Scalars["ID"];
};

export type MutationDeleteCommissionPriceListArgs = {
  id: Scalars["ID"];
};

export type MutationCreateCommissionTemplateArgs = {
  name: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  payment_provider_id: Scalars["ID"];
};

export type MutationUpdateCommissionTemplateArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
  payment_provider_id?: InputMaybe<Scalars["ID"]>;
  business_activity?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  country_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  currency_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  commission_template_limit_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationDeleteCommissionTemplateArgs = {
  id: Scalars["ID"];
};

export type MutationCreateCommissionTemplateLimitArgs = {
  commission_template_limit_type_id: Scalars["ID"];
  commission_template_limit_transfer_direction_id: Scalars["ID"];
  amount: Scalars["Float"];
  currency_id?: InputMaybe<Scalars["ID"]>;
  commission_template_limit_period_id: Scalars["ID"];
  commission_template_limit_action_type_id: Scalars["ID"];
  period_count?: InputMaybe<Scalars["ID"]>;
  commission_template_id: Scalars["ID"];
};

export type MutationUpdateCommissionTemplateLimitArgs = {
  id: Scalars["ID"];
  commission_template_limit_type_id?: InputMaybe<Scalars["ID"]>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars["ID"]>;
  amount?: InputMaybe<Scalars["Float"]>;
  currency_id?: InputMaybe<Scalars["ID"]>;
  commission_template_limit_period_id?: InputMaybe<Scalars["ID"]>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars["ID"]>;
  period_count?: InputMaybe<Scalars["Int"]>;
  commission_template_id: Scalars["ID"];
};

export type MutationDeleteCommissionTemplateLimitArgs = {
  id: Scalars["ID"];
};

export type MutationCreateCompanyArgs = {
  name: Scalars["String"];
  email: Scalars["EMAIL"];
  url?: InputMaybe<Scalars["String"]>;
  zip?: InputMaybe<Scalars["String"]>;
  address?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  company_number?: InputMaybe<Scalars["String"]>;
  contact_name?: InputMaybe<Scalars["String"]>;
  country_id: Scalars["ID"];
};

export type MutationUpdateCompanyArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["EMAIL"]>;
  url?: InputMaybe<Scalars["String"]>;
  zip?: InputMaybe<Scalars["String"]>;
  address?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  company_number?: InputMaybe<Scalars["String"]>;
  country_id?: InputMaybe<Scalars["ID"]>;
  contact_name?: InputMaybe<Scalars["String"]>;
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
};

export type MutationDeleteCompanyArgs = {
  id: Scalars["ID"];
};

export type MutationCreateCompanySettingsArgs = {
  email_url?: InputMaybe<Scalars["String"]>;
  email_jwt?: InputMaybe<Scalars["String"]>;
  email_from?: InputMaybe<Scalars["EMAIL"]>;
  show_own_logo?: InputMaybe<Scalars["Boolean"]>;
  company_id: Scalars["Int"];
};

export type MutationUpdateCompanySettingsArgs = {
  company_id: Scalars["ID"];
  email_url?: InputMaybe<Scalars["String"]>;
  email_jwt?: InputMaybe<Scalars["String"]>;
  email_from?: InputMaybe<Scalars["EMAIL"]>;
  show_own_logo?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateDepartmentArgs = {
  name: Scalars["String"];
  company_id: Scalars["ID"];
  department_positions_name?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationUpdateDepartmentArgs = {
  id: Scalars["ID"];
  active_department_positions_id?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationCreateDepartmentPositionArgs = {
  name: Scalars["String"];
  department_id?: InputMaybe<Scalars["ID"]>;
  company_id: Scalars["ID"];
};

export type MutationDeleteDepartmentArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteDepartmentPositionArgs = {
  id: Scalars["ID"];
};

export type MutationCreateEmailNotificationArgs = {
  group_type_id: Scalars["ID"];
  group_role_id: Scalars["ID"];
  company_id: Scalars["ID"];
  client_id?: InputMaybe<Scalars["Int"]>;
  templates: Array<InputMaybe<Scalars["Int"]>>;
};

export type MutationUpdateEmailNotificationArgs = {
  id: Scalars["ID"];
  group_type_id: Scalars["ID"];
  group_role_id: Scalars["ID"];
  company_id?: InputMaybe<Scalars["ID"]>;
  client_id?: InputMaybe<Scalars["Int"]>;
  templates?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationDeleteEmailNotificationArgs = {
  id: Scalars["ID"];
};

export type MutationCreateEmailSmtpArgs = {
  name: Scalars["String"];
  security?: InputMaybe<Securities>;
  host_name: Scalars["String"];
  from_name?: InputMaybe<Scalars["String"]>;
  from_email?: InputMaybe<Scalars["String"]>;
  username: Scalars["String"];
  password: Scalars["String"];
  replay_to?: InputMaybe<Scalars["String"]>;
  port: Scalars["Int"];
  company_id: Scalars["ID"];
  is_sending_mail?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationUpdateEmailSmtpArgs = {
  id: Scalars["ID"];
  security?: InputMaybe<Securities>;
  host_name?: InputMaybe<Scalars["String"]>;
  from_name?: InputMaybe<Scalars["String"]>;
  from_email?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  replay_to?: InputMaybe<Scalars["String"]>;
  port?: InputMaybe<Scalars["Int"]>;
  is_sending_mail?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationDeleteEmailSmtpArgs = {
  id: Scalars["ID"];
};

export type MutationSendEmailArgs = {
  security?: InputMaybe<Securities>;
  host_name: Scalars["String"];
  from_name?: InputMaybe<Scalars["String"]>;
  from_email?: InputMaybe<Scalars["String"]>;
  username: Scalars["String"];
  password: Scalars["String"];
  replay_to?: InputMaybe<Scalars["String"]>;
  port: Scalars["Int"];
  email: Scalars["String"];
};

export type MutationCreateEmailTemplateLayoutArgs = {
  header: Scalars["String"];
  footer: Scalars["String"];
  company_id: Scalars["Int"];
};

export type MutationUpdateEmailTemplateLayoutArgs = {
  id: Scalars["ID"];
  header?: InputMaybe<Scalars["String"]>;
  footer?: InputMaybe<Scalars["String"]>;
  company_id: Scalars["Int"];
};

export type MutationDeleteEmailTemplateLayoutArgs = {
  id: Scalars["ID"];
};

export type MutationCreateEmailTemplateArgs = {
  name: Scalars["String"];
  subject: Scalars["String"];
  use_layout: Scalars["Boolean"];
  type: ClientType;
  service_type: ServiceType;
  content: Scalars["String"];
  header?: InputMaybe<Scalars["String"]>;
  footer?: InputMaybe<Scalars["String"]>;
  company_id: Scalars["ID"];
};

export type MutationUpdateEmailTemplateArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  subject?: InputMaybe<Scalars["String"]>;
  use_layout?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<ClientType>;
  service_type?: InputMaybe<ServiceType>;
  content?: InputMaybe<Scalars["String"]>;
  header?: InputMaybe<Scalars["String"]>;
  footer?: InputMaybe<Scalars["String"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationDeleteEmailTemplateArgs = {
  id: Scalars["ID"];
};

export type MutationSendEmailWithTemplateArgs = {
  email: Scalars["String"];
  company_id: Scalars["ID"];
  subject: Scalars["String"];
  content?: InputMaybe<Scalars["String"]>;
  header?: InputMaybe<Scalars["String"]>;
  footer?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteFileArgs = {
  id: Scalars["ID"];
};

export type MutationCreateGroupSettingsArgs = {
  name: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  role_id?: InputMaybe<Scalars["ID"]>;
  group_type_id: Scalars["ID"];
  payment_provider_id?: InputMaybe<Scalars["ID"]>;
  commission_template_id?: InputMaybe<Scalars["ID"]>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateGroupSettingsArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  role_id?: InputMaybe<Scalars["ID"]>;
  group_type_id: Scalars["ID"];
  payment_provider_id?: InputMaybe<Scalars["ID"]>;
  commission_template_id?: InputMaybe<Scalars["ID"]>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationDeleteGroupArgs = {
  id: Scalars["ID"];
};

export type MutationSetMemberGroupArgs = {
  group_type_id: Scalars["ID"];
  payment_provider_id: Scalars["ID"];
  commission_template_id: Scalars["ID"];
  role_id: Scalars["ID"];
};

export type MutationCreateMemberAccessLimitationArgs = {
  member_id: Scalars["ID"];
  group_role_id: Scalars["ID"];
  commission_template_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateMemberAccessLimitationArgs = {
  member_id: Scalars["ID"];
  group_role_id: Scalars["ID"];
  commission_template_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationDeleteMemberAccessLimitationArgs = {
  id: Scalars["ID"];
};

export type MutationCreateMemberArgs = {
  first_name: Scalars["String"];
  last_name: Scalars["String"];
  email: Scalars["EMAIL"];
  sex?: InputMaybe<Sex>;
  company_id: Scalars["ID"];
  country_id?: InputMaybe<Scalars["ID"]>;
  language_id?: InputMaybe<Scalars["ID"]>;
  group_id: Scalars["ID"];
  is_active?: InputMaybe<Scalars["Boolean"]>;
  two_factor_auth_setting_id: Scalars["ID"];
  password?: InputMaybe<Scalars["String"]>;
  is_show_owner_applicants?: InputMaybe<Scalars["Boolean"]>;
  is_sign_transaction?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationInviteMemberArgs = {
  first_name: Scalars["String"];
  last_name: Scalars["String"];
  email: Scalars["EMAIL"];
  company_id: Scalars["ID"];
  group_id: Scalars["ID"];
  two_factor_auth_setting_id: Scalars["ID"];
};

export type MutationUpdateMemberArgs = {
  id: Scalars["ID"];
  first_name?: InputMaybe<Scalars["String"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["EMAIL"]>;
  sex?: InputMaybe<Sex>;
  company_id?: InputMaybe<Scalars["ID"]>;
  country_id?: InputMaybe<Scalars["ID"]>;
  language_id?: InputMaybe<Scalars["ID"]>;
  group_id?: InputMaybe<Scalars["ID"]>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
  department_position?: InputMaybe<Scalars["ID"]>;
  two_factor_auth_setting_id?: InputMaybe<Scalars["ID"]>;
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_info_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  is_show_owner_applicants?: InputMaybe<Scalars["Boolean"]>;
  is_sign_transaction?: InputMaybe<Scalars["Boolean"]>;
  ip_address?: InputMaybe<Scalars["String"]>;
};

export type MutationSetMemberPasswordArgs = {
  id: Scalars["ID"];
  password: Scalars["String"];
  password_confirmation: Scalars["String"];
};

export type MutationSetMemberSecurityPinArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteMemberArgs = {
  id: Scalars["ID"];
};

export type MutationCreatePaymentProviderArgs = {
  name: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  logo_key?: InputMaybe<Scalars["String"]>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationUpdatePaymentProviderArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  logo_key?: InputMaybe<Scalars["String"]>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationDeletePaymentProviderArgs = {
  id: Scalars["ID"];
};

export type MutationCreatePaymentSystemArgs = {
  name: Scalars["String"];
  is_active?: InputMaybe<Scalars["Boolean"]>;
  countries?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  providers?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationUpdatePaymentSystemArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  is_active?: InputMaybe<Scalars["Boolean"]>;
  countries?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  providers?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationDeletePaymentSystemArgs = {
  id: Scalars["ID"];
};

export type MutationCreatePaymentArgs = {
  amount: Scalars["Float"];
  amount_real?: InputMaybe<Scalars["Float"]>;
  fee?: InputMaybe<Scalars["Float"]>;
  fee_type_id: Scalars["ID"];
  currency_id: Scalars["ID"];
  status_id: Scalars["ID"];
  sender_name: Scalars["String"];
  payment_details: Scalars["String"];
  sender_bank_account: Scalars["String"];
  sender_swift: Scalars["String"];
  sender_bank_name: Scalars["String"];
  sender_bank_country: Scalars["ID"];
  sender_bank_address: Scalars["String"];
  sender_country_id?: InputMaybe<Scalars["ID"]>;
  sender_address?: InputMaybe<Scalars["String"]>;
  urgency_id: Scalars["ID"];
  operation_type_id: Scalars["ID"];
  payment_provider_id: Scalars["ID"];
  account_id: Scalars["ID"];
  company_id: Scalars["ID"];
  owner_id: Scalars["ID"];
  payment_number: Scalars["String"];
  error?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  received_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MutationUpdatePaymentArgs = {
  id: Scalars["ID"];
  amount?: InputMaybe<Scalars["Float"]>;
  fee?: InputMaybe<Scalars["Float"]>;
  currency?: InputMaybe<Scalars["ID"]>;
  status?: InputMaybe<Scalars["Int"]>;
  sender_name?: InputMaybe<Scalars["String"]>;
  payment_details?: InputMaybe<Scalars["String"]>;
  sender_bank_account?: InputMaybe<Scalars["String"]>;
  sender_swift?: InputMaybe<Scalars["String"]>;
  sender_bank_name?: InputMaybe<Scalars["String"]>;
  sender_bank_country?: InputMaybe<Scalars["ID"]>;
  sender_bank_address?: InputMaybe<Scalars["String"]>;
  sender_country?: InputMaybe<Scalars["ID"]>;
  sender_address?: InputMaybe<Scalars["String"]>;
  urgency_id: Scalars["ID"];
  operation_type_id: Scalars["ID"];
  payment_provider_id?: InputMaybe<Scalars["ID"]>;
  account_id?: InputMaybe<Scalars["ID"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
  payment_number?: InputMaybe<Scalars["String"]>;
};

export type MutationDeletePaymentArgs = {
  id: Scalars["ID"];
};

export type MutationCreatePriceListFeesArgs = {
  name?: InputMaybe<Scalars["String"]>;
  type_id?: InputMaybe<Scalars["Int"]>;
  operation_type_id?: InputMaybe<Scalars["Int"]>;
  period_id?: InputMaybe<Scalars["Int"]>;
  price_list_id: Scalars["Int"];
  fee?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Fee>>>>>;
};

export type MutationUpdatePriceListFeesArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  type_id?: InputMaybe<Scalars["Int"]>;
  operation_type_id?: InputMaybe<Scalars["Int"]>;
  period_id?: InputMaybe<Scalars["Int"]>;
  fee?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Fee>>>>>;
};

export type MutationDeletePriceListFeesArgs = {
  id: Scalars["ID"];
};

export type MutationCreateRequisitesArgs = {
  account_id: Scalars["ID"];
  recipient: Scalars["String"];
  registration_number: Scalars["Int"];
  address: Scalars["String"];
  country_id: Scalars["ID"];
  bank_name: Scalars["String"];
  bank_address: Scalars["String"];
  bank_country_id: Scalars["ID"];
  iban: Scalars["String"];
  account_no: Scalars["String"];
  swift: Scalars["String"];
  bank_correspondent?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MutationUpdateRequisitesArgs = {
  id: Scalars["ID"];
  account_id?: InputMaybe<Scalars["ID"]>;
  recipient?: InputMaybe<Scalars["String"]>;
  registration_number?: InputMaybe<Scalars["Int"]>;
  address?: InputMaybe<Scalars["String"]>;
  country_id?: InputMaybe<Scalars["ID"]>;
  bank_name?: InputMaybe<Scalars["String"]>;
  bank_address?: InputMaybe<Scalars["String"]>;
  bank_country_id?: InputMaybe<Scalars["ID"]>;
  iban?: InputMaybe<Scalars["String"]>;
  account_no?: InputMaybe<Scalars["String"]>;
  swift?: InputMaybe<Scalars["String"]>;
  bank_correspondent?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MutationDeleteRequisitesArgs = {
  id: Scalars["ID"];
};

export type MutationCreateRoleArgs = {
  name: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  group_type_id?: InputMaybe<Scalars["ID"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationUpdateRoleArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  group_type_id?: InputMaybe<Scalars["ID"]>;
  company_id?: InputMaybe<Scalars["ID"]>;
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationDeleteRoleArgs = {
  id: Scalars["ID"];
};

export type MutationCreateTicketCommentArgs = {
  message: Scalars["String"];
  ticket_id: Scalars["ID"];
  client_id: Scalars["ID"];
};

export type MutationCreateTicketArgs = {
  title: Scalars["String"];
  message: Scalars["String"];
  status?: InputMaybe<Scalars["Int"]>;
  company_id: Scalars["ID"];
  client_id: Scalars["ID"];
};

export type MutationUpdateTicketArgs = {
  id: Scalars["ID"];
  status: Scalars["Int"];
};

export type InputAccount = {
  company_id: Scalars["ID"];
  currency_id: Scalars["ID"];
  client_id: Scalars["ID"];
  owner_id: Scalars["ID"];
  account_number?: InputMaybe<Scalars["String"]>;
  account_type?: InputMaybe<AccountType>;
  payment_provider_id: Scalars["ID"];
  commission_template_id: Scalars["ID"];
  account_state_id: Scalars["ID"];
  account_name: Scalars["String"];
  is_primary?: InputMaybe<Scalars["Boolean"]>;
  group_role_id: Scalars["ID"];
  group_type_id: Scalars["ID"];
  payment_system_id: Scalars["ID"];
};

export type AdditionalFieldInput = {
  field_name?: InputMaybe<Scalars["String"]>;
  field_value?: InputMaybe<Scalars["StringInteger"]>;
  field_type?: InputMaybe<FieldTypes>;
};

export enum FieldTypes {
  Text = "Text",
  TextArea = "TextArea",
  CountryList = "CountryList",
}

export type StatusType = {
  __typename?: "StatusType";
  status: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
};

export type Fee = {
  fee_from?: InputMaybe<Scalars["StringInteger"]>;
  fee_to?: InputMaybe<Scalars["StringInteger"]>;
  mode?: InputMaybe<FeeMode>;
  fee?: InputMaybe<Scalars["StringInteger"]>;
  currency?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export enum FeeMode {
  Fix = "Fix",
  Range = "Range",
  Percent = "Percent",
}

export enum QueryAccountWhereColumn {
  AccountNumber = "ACCOUNT_NUMBER",
  AccountType = "ACCOUNT_TYPE",
  AccountStateId = "ACCOUNT_STATE_ID",
  ClientId = "CLIENT_ID",
  OwnerId = "OWNER_ID",
  AccountName = "ACCOUNT_NAME",
  CurrencyId = "CURRENCY_ID",
  PaymentProviderId = "PAYMENT_PROVIDER_ID",
  CompanyId = "COMPANY_ID",
  GroupRoleId = "GROUP_ROLE_ID",
  GroupTypeId = "GROUP_TYPE_ID",
  MemberId = "MEMBER_ID",
  IsPrimary = "IS_PRIMARY",
  CommissionTemplateId = "COMMISSION_TEMPLATE_ID",
}

export type Groups = {
  __typename?: "Groups";
  id: Scalars["ID"];
  name: GroupsEntities;
  /** @deprecated Field no longer supported */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
};

export type PermissionCategoryRole = {
  __typename?: "PermissionCategoryRole";
  permission_category_id?: Maybe<Scalars["ID"]>;
  role_id?: Maybe<Scalars["ID"]>;
  is_all_companies?: Maybe<Scalars["Boolean"]>;
};

export type SimplePaginatorInfo = {
  __typename?: "SimplePaginatorInfo";
  count: Scalars["Int"];
  currentPage: Scalars["Int"];
  firstItem?: Maybe<Scalars["Int"]>;
  lastItem?: Maybe<Scalars["Int"]>;
  perPage: Scalars["Int"];
  hasMorePages: Scalars["Boolean"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
  total: Scalars["Int"];
  count: Scalars["Int"];
  currentPage: Scalars["Int"];
  lastPage: Scalars["Int"];
};

export type WhereConditions = {
  column?: InputMaybe<Scalars["String"]>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars["Mixed"]>;
  AND?: InputMaybe<Array<WhereConditions>>;
  OR?: InputMaybe<Array<WhereConditions>>;
  HAS?: InputMaybe<WhereConditionsRelation>;
};

export type WhereConditionsRelation = {
  relation: Scalars["String"];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars["Int"]>;
  condition?: InputMaybe<WhereConditions>;
};

export enum OrderByRelationWithColumnAggregateFunction {
  Avg = "AVG",
  Min = "MIN",
  Max = "MAX",
  Sum = "SUM",
  Count = "COUNT",
}

export type OrderByClause = {
  column: Scalars["String"];
  order: SortOrder;
};
