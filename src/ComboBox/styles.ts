import { StylesConfig } from "react-select";
import { Props as SelectProps } from "./ComboBox";
import { getBoronUICustomPropertyValue } from "../styles/getCustomPropertyValue";

export type Size = "xs" | "sm" | "md";
export type FontSize = "sm" | "md";
export type SizeProps = {
  size?: Size;
  fontSize?: FontSize;
};

export type DropdownIndicatorProps = {
  hiddenDropdownIndicator?: boolean;
};

export type AlignItems = "top" | "center";
export type IndicatorAlignItemsProps = {
  indicatorAlignItems?: AlignItems;
};

export type OptionType = Record<string, unknown>;
// boron-web独自のスタイル
const placeholderStyles: StylesConfig<OptionType>["placeholder"] = (
  styles
) => ({
  ...styles,
  color: getBoronUICustomPropertyValue("colors-black"),
  opacity: 0.5,
});

const singleValueStyles: StylesConfig<OptionType>["singleValue"] = (
  styles
) => ({
  ...styles,
  color: getBoronUICustomPropertyValue("colors-black"),
  maxWidth: "calc(94% - 8px)",
});

const optionStyles: StylesConfig<OptionType>["option"] = (styles, state) => ({
  ...styles,
  color: state.isSelected
    ? "#fff"
    : getBoronUICustomPropertyValue("colors-black"),
  background: state.isSelected
    ? getBoronUICustomPropertyValue("colors-blue-400")
    : styles.background,
});

const controlStyles: StylesConfig<OptionType>["control"] = (styles, state) => {
  const borderColor = (state.selectProps as SelectProps).hasError
    ? getBoronUICustomPropertyValue("colors-red-400")
    : state.isFocused
    ? getBoronUICustomPropertyValue("colors-blue-400")
    : "#dde0e8";
  const size: Size | undefined = (state.selectProps as SizeProps).size;
  const fontSize: FontSize | undefined = (state.selectProps as SizeProps)
    .fontSize;

  const backgroundColor = (state.selectProps as SelectProps).hasError
    ? getBoronUICustomPropertyValue("colors-darkred-100")
    : state.isDisabled
    ? getBoronUICustomPropertyValue("colors-gray-100")
    : styles.backgroundColor;

  return {
    display: "flex",
    height: sizeTable[size ?? "xs"],
    minHeight: sizeTable[size ?? "xs"],
    backgroundColor,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor,
    boxShadow: "none",
    boxSizing: "border-box",
    color: getBoronUICustomPropertyValue("colors-black"),
    borderRadius: "5px",
    fontSize: fontSizeTable[fontSize ?? "sm"],
    "&:hover": {
      borderColor,
      boxShadow: "none",
    },
    cursor: state.isDisabled ? "not-allowed" : "pointer",
  };
};

const valueContainerStyles: StylesConfig<OptionType>["valueContainer"] = (
  styles,
  state
) => ({
  ...styles,
  opacity: state.selectProps.isDisabled ? "50%" : styles.opacity,
  pointerEvents: "auto",
});

const indicatorSeparatorStyles: StylesConfig<OptionType>["indicatorSeparator"] =
  (styles) => ({
    ...styles,
    display: "none",
  });

const dropdownIndicatorStyles: StylesConfig<OptionType>["dropdownIndicator"] = (
  styles,
  state
) => {
  const indicatorColor = state.isDisabled
    ? getBoronUICustomPropertyValue("colors-gray-600")
    : state.isFocused
    ? getBoronUICustomPropertyValue("colors-blue-400")
    : getBoronUICustomPropertyValue("colors-gray-800");

  return {
    ...styles,
    color: indicatorColor,
    display: (state.selectProps as DropdownIndicatorProps)
      .hiddenDropdownIndicator
      ? "none"
      : "",
    "&:hover": {
      color: getBoronUICustomPropertyValue("colors-blue-400"),
    },
  };
};

const clearIndicatorStyles: StylesConfig<OptionType>["clearIndicator"] = (
  styles,
  state
) => {
  const displayColor = state.isFocused
    ? getBoronUICustomPropertyValue("colors-gray-800")
    : getBoronUICustomPropertyValue("colors-gray-600");

  return {
    ...styles,
    cursor: "pointer",
    color: displayColor,
    "&:hover": {
      color: getBoronUICustomPropertyValue("colors-gray-800"),
    },
  };
};

const groupHeadingStyles: StylesConfig<OptionType>["groupHeading"] = (
  styles,
  state
) => {
  const fontSize: FontSize | undefined = (state.selectProps as SizeProps)
    .fontSize;

  return {
    ...styles,
    fontSize: fontSizeTable[fontSize ?? "sm"],
  };
};

const indicatorsContainerStyles: StylesConfig<OptionType>["indicatorsContainer"] =
  (styles, state) => ({
    ...styles,
    alignItems:
      (state.selectProps as IndicatorAlignItemsProps).indicatorAlignItems ??
      "center",
  });

const multiValueRemoveStyles: StylesConfig<OptionType>["multiValueRemove"] = (
  styles
) => ({
  ...styles,
  cursor: "pointer",
});

const sizeTable = {
  xs: "3rem",
  sm: "4rem",
  md: "4.6rem",
};

const fontSizeTable = {
  sm: "1.3rem",
  md: "1.4rem",
};

export const customStyles: StylesConfig<OptionType> = {
  control: controlStyles,
  groupHeading: groupHeadingStyles,
  placeholder: placeholderStyles,
  singleValue: singleValueStyles,
  option: optionStyles,
  valueContainer: valueContainerStyles,
  indicatorSeparator: indicatorSeparatorStyles,
  dropdownIndicator: dropdownIndicatorStyles,
  clearIndicator: clearIndicatorStyles,
  indicatorsContainer: indicatorsContainerStyles,
  multiValueRemove: multiValueRemoveStyles,
};
