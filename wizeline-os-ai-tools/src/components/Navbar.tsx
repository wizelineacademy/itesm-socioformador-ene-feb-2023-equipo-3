import { getServerSession } from 'next-auth';

const Navbar = async () => {
    const session = await getServerSession();
    
  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
      <div className='container max-width-7xl mx-auto w-full flex justify-between items-center'>
        <p>queda pendiente ver que vamos a poner en esta navbar</p>
      </div>
    </div>
  )
}

export default Navbar