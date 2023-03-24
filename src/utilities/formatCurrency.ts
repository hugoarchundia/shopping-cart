const CURRENCY_FORMAT = new Intl.NumberFormat(undefined,
  {
    style: 'currency', currency: 'USD'
  }
)

export const formatCurrency = (value: number) => {
  return CURRENCY_FORMAT.format(value)
}