import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/card'
import { CreateContentModal } from '../components/CreateComponentModel'
import { PlusIcon } from '../icons/plus-icon'
import { ShareIcon } from '../icons/share-icon'
import { SideBar } from '../components/sidebar'
import { useContent } from '../hooks/UseContent'
import { BACKEND_URL } from '../config'
import axios from 'axios'


export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();



  useEffect(() => {
    refresh();
  }, [modalOpen])

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
          <Button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/share`, {
              share: true
            },{
              headers:{
                "Authorization":localStorage.getItem("token")
              }
            });
            const shareURL=`http://localhost:5173/share/${response.data.hash}`;
            alert(shareURL);

          }} variant='secondary' text="Share Brain" startIcon={<ShareIcon />}></Button>
        </div>

        <div className='flex gap-4 flex-wrap'>

          {contents.map(({ type, link, title }) => <Card type={type} link={link} title={title} />)}

          {/* <Card type="twitter" link="https://x.com/mufaddal_vohra/status/1902698466222178483" title='My first tweet' />
          <Card type="youtube" link="https://www.youtube.com/watch?v=20vUNgRdB4o" title='My video' /> */}


        </div>
      </div>


    </div>

  )
}