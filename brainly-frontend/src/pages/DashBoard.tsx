import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/card'
import { CreateContentModal } from '../components/CreateComponentModel'
import { PlusIcon } from '../icons/plus-icon'
import { ShareIcon } from '../icons/share-icon'
import { SideBar } from '../components/sidebar'


export function Dashboard(){
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <SideBar />

      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />
        <div className='flex justify-end gap-4'>
          <Button onClick={() => {
            setModalOpen(true);
          }} variant='primary' text="Add Content" startIcon={<PlusIcon />}></Button>
          <Button variant='secondary' text="Share Brain" startIcon={<ShareIcon />}></Button>
        </div>

        <div className='flex'>
          <Card type="twitter" link="https://x.com/mufaddal_vohra/status/1902698466222178483" title='My first tweet' />
          <Card type="youtube" link="https://www.youtube.com/watch?v=20vUNgRdB4o" title='My video' />
        </div>
      </div>


    </div>

  )
}