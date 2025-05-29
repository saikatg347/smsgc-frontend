import Button from "./Button";
import { HamburgIcon, CrossIcon, CornerArrowIcon, GlobeIcon } from "../Svg";

function Navbar() {
  return (
    <nav className="w-full py-7 px-8 max-h-[80px] bg-white fixed top-0 left-0 z-50 flex items-center">
      <div className="w-full flex justify-between items-center">
        <span className="font-grotesk font-semibold text-4xl">
          <a href="/">SMSGC</a>
        </span>

        <div className="lg:hidden flex items-center gap-5">
          <Button text="Sign In" />
          <HamburgIcon />
        </div>

        <div className="hidden pl-6 flex-1 lg:flex items-center justify-between">
          <ul className="flex items-center gap-7 font-grotesk">
            <li>
              <a>Trading</a>
            </li>
            <li>
              <a>Markets</a>
            </li>
            <li>
              <a>Platforms</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a>Company</a>
            </li>
            <li className="flex items-center gap-1">
              Partners <CornerArrowIcon />
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Button
              href="#"
              text="Register"
              styles="bg-[#FFDE02] min-h-12 min-w-[100px]"
            />
            <Button
              href="#"
              text="Sign in"
              styles="bg-[#090B0C10] min-h-12 min-w-[100px]"
            />
            <div className="flex items-center gap-1">
              <GlobeIcon />
              <span className="font-grotesk">EN</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
