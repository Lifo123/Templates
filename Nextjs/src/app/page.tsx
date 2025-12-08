import ChangeTheme from "@Modules/other/ChangeTheme";
import Count from "@Modules/other/Count";
import Link from "next/link";

export default function PageHome() {
  return (
    <main className="w-full f-col gap-4 f-center">
      <h1 className="fw-500 text-3xl mt-8">Template page for NextJS</h1>
      <div className="f-row gap-3 text-gray-11 f-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempora perspiciatis quidem numquam atque quibusdam!
        <ChangeTheme />
      </div>
      <div className="f-row gap-2 f-center">
        <Count />
      </div>
      <Link href="/auth">
        Auth
      </Link>
    </main>
  );
}
