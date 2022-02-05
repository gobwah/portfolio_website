const prod = process.env.NODE_ENV === 'production';
export default {
  'process.env.BACKEND_URL': prod ? '/portfolio' : '',
};
