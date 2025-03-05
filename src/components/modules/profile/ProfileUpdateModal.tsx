'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { MyModal } from '../shared/MyModal/MyModal';

const ProfileUpdateModal = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <MyModal isOpen={isOpen} modalTitle='Update User Profile' onClose={()=> setIsOpen(false)}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda hic doloribus iste dolore deleniti sapiente tempore! Illo ratione, harum distinctio aperiam quasi eum repellat nisi id ad soluta commodi!</p>
    </MyModal>
       <div className="text-center mt-1">
                <Button onClick={()=> setIsOpen(true)} size="sm">Edit Profile</Button>
        </div>
    </>
  )
}

export default ProfileUpdateModal
