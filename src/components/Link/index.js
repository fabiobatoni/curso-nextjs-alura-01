import NextLink from 'next/link';

export default function Link({children, href ,...props}) {
  return (
      <NextLink href={href} passHref>
         <h2>{children}</h2>
      </NextLink>
  );
}
