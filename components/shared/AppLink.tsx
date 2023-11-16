import Link from "next/link";

const AppLink = ({ children, className, href }: any) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={className}>{children}</a>
    </Link>
  );
};
export default AppLink;
