import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Notfound() {
  return (
    <main className="mx-auto max-w-4xl py-10 text-center">
      <h1 className="font-display text-5xl font-bold text-gray-500">
        Nada encontrado aqui
      </h1>
      <img
        className="mx-auto mt-10 w-xs"
        src="/astrounalt.png"
        alt="Image de um barco afundando"
      />
      <p className="text-3xl font-light text-gray-500">
        Não foi possivel encontrar a página solicitada.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "default" }), "mt-6")}
      >
        Voltar ao Home
      </Link>
    </main>
  );
}
