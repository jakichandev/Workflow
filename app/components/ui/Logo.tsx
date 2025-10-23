import Image from "next/image";

const Logo = () => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-8">
      <Image width={140} height={50} src="/svg/workflow.svg" alt="Logo" />
    </div>
  );
};
export default Logo;
