import Logo from "@/components/layout/Logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between py-6">
      <Logo className="" />

      <ul className="flex items-center gap-6">
        <Link
          href="/"
          prefetch
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Home
        </Link>
        <Link href="/sobre" className={cn(buttonVariants({ variant: "link" }))}>
          Sobre
        </Link>
        <Link href="/vagas" className={cn(buttonVariants({ variant: "link" }))}>
          Vagas
        </Link>
        <Link
          href="/vagas/cadastro"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Cadastrar vagas
        </Link>
      </ul>
    </nav>
  );
}
