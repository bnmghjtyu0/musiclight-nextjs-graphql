import Link from 'next/link';

const AppLink = ({ children, className, href, as }: any) => {
  return (
    <Link href={href} as={as} legacyBehavior>
      <a className={className}>{children}</a>
    </Link>
  );
};
export default AppLink;
