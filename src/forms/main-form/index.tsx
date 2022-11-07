import { FC, ReactElement, useState } from "react";
import { Form } from "antd";
import { useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import CustomSelect from "../../components/custom-select";
import TextInput from "../../components/text-input";
import TextArea from "../../components/text-area";
import Button from "../../components/button";
import {
  GET_APPLICANT_INDIVIDUAL_COMPANY_RELATIONS,
  GET_APPLICANT_INDIVIDUAL_COMPANY_POSITIONS,
} from "../../queries/applicant-individual-company.queries";
import {
  ApplicantIndividualCompanyPositionsResponse,
  ApplicantIndividualCompanyRelationResponse,
} from "../../types/main-form.types";
import { StyledFormWrapper } from "./styles";

const fieldStyle = { marginBottom: 12 };

const MainForm: FC = (): ReactElement => {
  const [errors, setErrors] = useState<{ [key: string]: string[] | null }>({
    relations: null,
    positions: null,
    name: null,
    about: null,
  });

  const { data: relations, loading: relationsLoading } =
    useQuery<ApplicantIndividualCompanyRelationResponse>(
      GET_APPLICANT_INDIVIDUAL_COMPANY_RELATIONS
    );
  const { data: positions, loading: positionsLoading } =
    useQuery<ApplicantIndividualCompanyPositionsResponse>(
      GET_APPLICANT_INDIVIDUAL_COMPANY_POSITIONS
    );

  const [form] = Form.useForm();

  const resetErrors = () => {
    setErrors({
      relations: null,
      positions: null,
      name: null,
      about: null,
    });
  };

  const onFinish = (values: any) => {
    resetErrors();
    console.log("FORM VALUES:", values);
  };

  const onFinishFailed = () => {
    setErrors({
      relations: form.getFieldError("relations"),
      positions: form.getFieldError("positions"),
      name: form.getFieldError("name"),
      about: form.getFieldError("about"),
    });
  };

  if (relationsLoading || positionsLoading)
    return (
      <StyledFormWrapper>
        <CircularProgress />
      </StyledFormWrapper>
    );

  return (
    <StyledFormWrapper>
      <h1>Main form</h1>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          name="relations"
          trigger="onSelect"
          style={fieldStyle}
          rules={[{ required: true, message: "Please choose relation!" }]}
        >
          <div>
            <CustomSelect
              options={
                relations?.applicantIndividualCompanyRelations.data || []
              }
              placeholder="Search relation"
              isError={!!errors.relations?.length}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="positions"
          trigger="onSelect"
          style={fieldStyle}
          rules={[{ required: true, message: "Please choose position!" }]}
        >
          <div>
            <CustomSelect
              options={
                positions?.applicantIndividualCompanyPositions.data || []
              }
              placeholder="Search position"
              isError={!!errors.positions?.length}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="name"
          style={fieldStyle}
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <div>
            <TextInput
              placeholder="Type your name"
              isError={!!errors.name?.length}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="about"
          style={fieldStyle}
          rules={[{ required: true, message: "Please input about field!" }]}
        >
          <div>
            <TextArea
              placeholder="Write a few words about yourself"
              isError={!!errors.name?.length}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="submit" fluid>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledFormWrapper>
  );
};

export default MainForm;
