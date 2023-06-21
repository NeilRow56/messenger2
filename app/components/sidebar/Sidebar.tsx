import getCurrentUser from '@/app/actions/getCurrentUser'
import DesktopSidebar from './DesktopSidebar'
import MobileFooter from './MobileFooter'

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()
  return (
    <div className='h-full'>
      <DesktopSidebar
        currentUser={currentUser!} //The exclamation mark after currentUser enables it to be null
      />
      <MobileFooter />
      <main className='h-full lg:pl-20'>{children}</main>
    </div>
  )
}

export default Sidebar
