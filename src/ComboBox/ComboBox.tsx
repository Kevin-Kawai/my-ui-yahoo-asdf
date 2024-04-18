import * as React from "react";

import ReactSelect, {
  Props as SelectProps,
  ClearIndicatorProps,
} from "react-select";
import { SizeProps, customStyles } from "./styles";
import IconFailed from "../Icon/IconFailed";
import { css } from "@emotion/css";

export type OptionType = Record<string, unknown>;
export type Props = SelectProps<OptionType, false> &
  SizeProps & { hasError?: boolean; errorMessage?: string };

const defaultProps: SelectProps<OptionType, false> = {
  noOptionsMessage: () => "一致する選択肢がありません",
  loadingMessage: () => "検索中...",
  placeholder: "項目を選択",
  menuPortalTarget: document.body,
};

const ClearIndicator = (props: ClearIndicatorProps<OptionType, false>) => {
  const {
    children = <IconFailed className="w-1 h-1" />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;

  return (
    <div
      {...restInnerProps}
      ref={ref}
      className={css(getStyles("clearIndicator", props))}
    >
      <div>{children}</div>
    </div>
  );
};

// react-selectのコンポーネントにboron-web独自のスタイルを当てるためのラッパーコンポーネント
export const ComboBox = (props: Props) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <>
      <ReactSelect
        {...mergedProps}
        styles={{ ...customStyles, ...props.styles }}
        components={{ ClearIndicator }}
      />
      {props.hasError && (
        <div className="mt-1 text-red-400 text-sm">
          {props.errorMessage || "項目を選択してください"}
        </div>
      )}
    </>
  );
};
