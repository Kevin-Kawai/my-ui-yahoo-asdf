import * as React from "react";
import { clsx } from "clsx";
import "./Button.scss";
import { ButtonSpinner } from "./ButtonSpinner";

export type BuiButtonVariantTypes = "filled" | "outline";
export type BuiButtonSizeTypes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type BuiButtonGapSizeTypes = "sm" | "md" | "lg";
export type BuiButtonIconLayoutSizeTypes = "md";

export type OwnProps = {
  /** Buttonのテーマ */
  variant?: BuiButtonVariantTypes;
  /** ホバーした時のボタンのテーマ、デフォルトは指定されたvariantによる */
  hoverVariant?: BuiButtonVariantTypes | "transparent";
  /** Buttonのサイズ、主にpaddingとheight */
  size?: BuiButtonSizeTypes;
  /** Button内のgap。Buttonは基本的にinline-flex。主にアイコンを配置した時などのため */
  gapSize?: BuiButtonGapSizeTypes;
  /** 左側にアイコンを置いたときにpaddingが同じだと間伸びして見えるため、padding-leftとpadding-rightの調整をする */
  withLeftIconLayoutSize?: BuiButtonIconLayoutSizeTypes;
  /** 右側にアイコンを置いたときにpaddingが同じだと間伸びして見えるため、padding-leftとpadding-rightの調整をする */
  withRightIconLayoutSize?: BuiButtonIconLayoutSizeTypes;
  isBlock?: boolean;
  isRound?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
};
type Props = OwnProps &
  React.ComponentProps<"button"> & {
    children: React.ReactNode;
  };

export const Button = ({
  children,
  className,
  variant,
  hoverVariant,
  size,
  isRound,
  isBlock,
  isFullWidth,
  withLeftIconLayoutSize,
  withRightIconLayoutSize,
  gapSize,
  isLoading,
  ...restProps
}: Props) => {
  const meregedClasses = clsx(
    "buiButtonBase",
    {
      buiButtonVariantOutline: variant === "outline",
      buiButtonVariantFilled: variant === "filled" || !variant,
      buiButtonHoverVariantOutline: hoverVariant === "outline",
      buiButtonHoverVariantFilled: hoverVariant === "filled",
      buiButtonHoverVariantTransparent: hoverVariant === "transparent",
      buiButtonSizeXs: size === "xs",
      buiButtonSizeSm: size === "sm",
      buiButtonSizeMd: size === "md",
      buiButtonSizeLg: size === "lg",
      buiButtonSizeXl: size === "xl",
      buiButtonSize2Xl: size === "2xl",
      buiButtonBlock: isBlock,
      buiButtonRound: isRound,
      buiButtonFullWidth: isFullWidth,
      buiButtonGapSizeMd: gapSize === "md",
      buiButtonLeftIconLayoutMd: withLeftIconLayoutSize === "md",
      buiButtonRightIconLayoutMd: withRightIconLayoutSize === "md",
    },
    className
  );
  return (
    <button className={meregedClasses} {...restProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
};
