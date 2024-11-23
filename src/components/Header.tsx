import Container from "@/components/Container";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="mb-4 sticky top-0 z-10 border-2 border-orange-500">
      <Container>
        <div className="flex items-center justify-between gap-4 border-b-2 border-slate-400 py-2">
          <div className="flex items-center gap-4 ml-4">
            <p className="font-bold">
              <Link href="/dashboard">Invoicipedia</Link>
            </p>
            <span className="text-slate-300"></span>
            <SignedIn>
              <span className="ml-2">
                {/* <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" /> */}
              </span>
            </SignedIn>
          </div>
          <div className="flex items-center gap-4 mr-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModeToggle />
          </div>
          
        </div>
      </Container>
    </header>
  );
};

export default Header;
