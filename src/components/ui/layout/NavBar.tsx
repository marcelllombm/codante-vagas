import Logo from "@/components/ui/layout/Logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../button";

export default function Nav() {
  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between py-6">
      <Logo className="" />

      <ul className="flex items-center gap-6">
        <a href="/" className={cn(buttonVariants({ variant: "link" }))}>
          Home
        </a>
        <a href="/sobre" className={cn(buttonVariants({ variant: "link" }))}>
          Sobre
        </a>
        <a href="/vagas" className={cn(buttonVariants({ variant: "link" }))}>
          Vagas
        </a>
        <a
          href="/vagas/cadastro"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Cadastrar vagas
        </a>
      </ul>
    </nav>
  );
}
