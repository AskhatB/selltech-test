import { FC, ReactElement, useState, SyntheticEvent } from "react";
import useAutocomplete from "@mui/material/useAutocomplete";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { FilterOptionsState } from "@mui/material";
import { StyledInput, StyledOptions, StyledSingleOption } from "./styles";

interface CustomSelectOptions {
  inputValue?: string;
  name: string;
}

interface CustomSelectProps {
  options: CustomSelectOptions[];
  placeholder?: string;
  onSelect?: (newValue: CustomSelectOptions | string | null) => void;
  isError?: boolean;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  placeholder,
  onSelect,
  isError,
}): ReactElement => {
  const [value, setValue] = useState<CustomSelectOptions | null>(null);
  const [newOptions, setNewOptions] = useState<CustomSelectOptions[]>(options);
  const filter = createFilterOptions<CustomSelectOptions>();

  const filterOptions = (
    items: CustomSelectOptions[],
    params: FilterOptionsState<CustomSelectOptions>
  ): CustomSelectOptions[] => {
    const filtered = filter(items, params);
    const { inputValue } = params;

    if (inputValue !== "") {
      filtered.push({
        inputValue,
        name: `Add new option "${inputValue}"`,
      });
    }

    return filtered;
  };

  const addNewOption = (newOption: CustomSelectOptions | null): void => {
    if (!newOption?.inputValue) return;

    setNewOptions([
      ...newOptions,
      {
        name: newOption.inputValue,
      },
    ]);
  };

  const onChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: CustomSelectOptions | null
  ): void => {
    if (onSelect) onSelect(newValue);
    if (newValue?.inputValue) {
      setValue({
        name: newValue.inputValue,
      });
      addNewOption(newValue);
    } else {
      setValue(newValue);
    }
  };

  const {
    groupedOptions,
    getInputProps,
    getOptionProps,
    getRootProps,
    getListboxProps,
  } = useAutocomplete({
    value,
    options: newOptions,
    clearOnBlur: true,
    selectOnFocus: true,
    getOptionLabel: (option) => option.name,
    filterOptions,
    onChange,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <StyledInput
          {...getInputProps()}
          placeholder={placeholder}
          isError={isError}
        />
      </div>
      {groupedOptions.length ? (
        <StyledOptions {...getListboxProps()}>
          {(groupedOptions as typeof options).map((option, index) => (
            <StyledSingleOption {...getOptionProps({ option, index })}>
              <span>{option.name}</span>
            </StyledSingleOption>
          ))}
        </StyledOptions>
      ) : null}
    </div>
  );
};

CustomSelect.defaultProps = {
  placeholder: "",
  onSelect: () => {},
  isError: false,
};

export default CustomSelect;
