import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React, { Children } from 'react'
import AppSidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import WelcomeBanner from './_components/WelcomeBanner'

const WorkspaceProvider = ({children}) => {
  return (
    <SidebarProvider>
    <AppSidebar></AppSidebar>
    <div className='w-full'>
    <AppHeader></AppHeader>
    <div className='p-10'>{children}</div>
    
    
    </div>
    </SidebarProvider>
  )
}

export default WorkspaceProvider