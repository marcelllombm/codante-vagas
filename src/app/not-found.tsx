import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import astronalt from "@/assests/images/astrounalt.png";

export default function Notfound() {
  return (
    <main className="mx-auto max-w-4xl py-10 text-center">
      <h1 className="font-display text-5xl font-bold text-gray-500">
        Nada encontrado aqui
      </h1>
      <Image
        className="mx-auto mt-10 w-xs"
        src={astronalt}
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
