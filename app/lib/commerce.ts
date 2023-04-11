import Commerce from '@chec/commerce.js';

const { NEXT_PUBLIC_CHEC_PUBLIC_API_KEY } = process.env;

const commerce = new Commerce(NEXT_PUBLIC_CHEC_PUBLIC_API_KEY as string);

export default commerce;
