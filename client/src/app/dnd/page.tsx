"use client"
import DNDComponentDB from '@/components/DND.DB/DND';
import DNDComponent from '@/components/DND/DND'
import VideoTest from '@/components/video/components/video.test';
import VideoUploader from '@/components/video/components/Video.Uploader';

const DndPage = () => {

    
   
  return (
    <div className="p-6 w-400 ">
        <DNDComponent/>
        <DNDComponentDB/>

        <h1>Video Upload</h1>
        <VideoTest/>
        <VideoUploader/>
    </div>
  )
}

export default DndPage