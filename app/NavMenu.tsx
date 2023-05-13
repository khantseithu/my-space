import Link from "next/link";
import styles from "./NavMenu.module.css";
import Image from "next/image";
import { SignInButton, SignOutButton } from "@/components/buttons";
import AuthCheck from "@/components/AuthCheck";

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image alt="Next space logo" src="/logo.svg" width={216} height={30} />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
