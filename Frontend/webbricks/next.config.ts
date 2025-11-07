import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
};

const withTm = require('next-transpile-modules')(['three']);
module.exports = withTm();

export default nextConfig;
