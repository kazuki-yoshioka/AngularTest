/**
 * 入力値のフォーマット
 */
export const InputFormat = {
  NORMAL: 0,
  NUMBER_ONLY: 1,
  NUMBER_SYMBOL: 2,
  AMOUNT: 3,
} as const;

export type InputFormatType = typeof InputFormat[keyof typeof InputFormat];
export const AllInputFormat = Object.values(InputFormat);
