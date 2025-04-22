import { toFixedRefactor, toLocaleStringRefactor } from "./string.ultil";

export const money = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
export const FormatMoneyNumber = (input: number | string, valueFormat?: number) => {
    return toLocaleStringRefactor(toFixedRefactor(Number(input), valueFormat ?? 2));
};