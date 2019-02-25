import VueSlider from '../vue-slider'

export interface Styles {
  [key: string]: any
}

export type Direction = 'ltr' | 'rtl' | 'ttb' | 'btt'
export type Position = 'top' | 'right' | 'bottom' | 'left'

export type Value = number | string

// Mark
export interface MarkOption {
  label: Value
  style?: Styles
  activeStyle?: Styles
  labelStyle?: Styles
  labelActiveStyle?: Styles
}
export interface Mark extends MarkOption {
  active?: boolean
  pos?: number
  value: number
}
export interface Marks {
  [key: string]: string | MarkOption
}
export type MarksFunction = (value: Value) => boolean | MarkOption
export type MarksProp = boolean | Marks | Value[] | MarksFunction

// Tooltip
export interface TooltipStyle {
  tooltipStyle?: Styles
  tooltipFocusStyle?: Styles
  tooltipDisabledStyle?: Styles
}
export type TooltipProp = 'none' | 'always' | 'focus'
export type TooltipFormatterFunc = (val: Value) => string
export type TooltipFormatter = string | TooltipFormatterFunc

// Dot
export interface DotStyle {
  style?: Styles
  focusStyle?: Styles
  disabledStyle?: Styles
}
export interface DotOption extends DotStyle, TooltipStyle {
  disabled: boolean
  tooltip?: TooltipProp
}
export interface Dot extends DotOption {
  pos: number
  value: Value
  focus: boolean
}

// Process
export type ProcessOption = Array<[number, number, Styles?]>
export type ProcessFunc = (dotsPos: number[]) => ProcessOption
export type ProcessProp = boolean | ProcessFunc

export default VueSlider