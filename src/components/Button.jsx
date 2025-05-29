import clsx from "clsx";

function Button({ href, text, styles }) {
  return (
    <a href={href} className={clsx('flex hover:cursor-pointer justify-center items-center font-grotesk  font-semibold text-md rounded leading-[24px] text-base px-6', styles)}>
      {text}
    </a>
  );
}
export default Button;
