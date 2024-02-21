import { useTranslation } from 'react-i18next';

interface PriceProps {
  priceInUcents: number;
  taxInUcents: number;
  decimals: number;
}
const Price = ({ priceInUcents, taxInUcents, decimals = 2 }: PriceProps) => {
  const { t } = useTranslation('pricing');
  // TODO: handle languages (both display and user subsidiary)
  const unit = '€';
  const ucentToEur = 100_000_000;
  const price = priceInUcents / ucentToEur;
  const priceWithTax = (priceInUcents + taxInUcents) / ucentToEur;
  const formatPrice = (value: number) => {
    if (value === 0) {
      return '0.00';
    }
    // Using toFixed to get 3 decimals and convert to string
    const formattedPrice = value.toFixed(decimals);
    return formattedPrice;
  };
  return (
    <>
      <span className="font-bold">
        {t('pricing_ht', { price: formatPrice(price), unit })}
      </span>
      <span className="text-xs mx-2">
        ({t('pricing_ttc', { price: formatPrice(priceWithTax), unit })})
      </span>
    </>
  );
};

export default Price;
