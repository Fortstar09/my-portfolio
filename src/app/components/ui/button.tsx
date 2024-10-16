import Link from "next/link";

type ButtonProps = {
  href: string;
  title: string;
  color: string;
};

const Button = ({ href, title, color }: ButtonProps) => {
  return (
    <div>
      <Link
        href={href}
        // className="mt-12 text-secondary resume  rounded-md"
        className={`inline-flex justify-center whitespace-nowrap rounded-lg md:py-3 py-2 px-4 md:px-7.5 text-subText md:text-body font-medium text-white bg-${color} hover:bg-${color} hover:text-white shadow focus:outline-none focus:ring focus:ring-${color}/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-${color}/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]`}
      >
        {title}
      </Link>
    </div>
  );
};

export default Button;
