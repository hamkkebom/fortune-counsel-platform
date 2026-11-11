/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['lh3.googleusercontent.com', 'localhost'],
        remotePatterns: [
            new URL('https://kr.object.ncloudstorage.com/**'),
        ],
    },
};

export default nextConfig;
