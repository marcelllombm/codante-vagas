import { BsMailbox, BsInstagram } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-5xl justify-between">
        <div className="max-w-sm">
          <Logo bg="dark" />
          <p className="mt-2 text-sm font-extralight">
            O Codantevagas conecta candidatos a empregos ideais, oferecendo
            funcionaldades intuitivas para busca e gerenciamento de vagas.
            funcionalidades intuitivas par busca e{" "}
          </p>
        </div>
        <div className="flex gap-3">
          <BsInstagram
            size={30}
            className="cursor-pointer transition-colors hover:text-blue-400"
          />
          <FaGithubAlt
            size={30}
            className="cursor-pointer transition-colors hover:text-blue-400"
          />
          <BsMailbox
            size={30}
            className="cursor-pointer transition-colors hover:text-blue-400"
          />
        </div>
      </div>
    </footer>
  );
}
