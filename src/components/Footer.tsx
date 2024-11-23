import Container from "@/components/Container";

const Footer = () => {
  return (
    <footer className="mt-auto sticky bottom-0 z-10 border-2 border-yellow-300">
      <Container className="flex justify-between gap-4 mt-4 pb-4 border-t-2 border-slate-400 ">
        <p className="text-sm">
          Invoicipedia &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Created by Heath Babb curtesy of tutorial by Colby Fayock with
          Next.js, Xata, and Clerk
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
