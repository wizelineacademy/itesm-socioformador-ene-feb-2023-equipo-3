import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-300 bg-white/75 shadow-sm backdrop-blur-sm">
      <div className="max-width-7xl container mx-auto flex w-full items-center justify-between">
        <p>queda pendiente ver que vamos a poner en esta navbar</p>
      </div>
    </div>
  );
};

export default Navbar;
