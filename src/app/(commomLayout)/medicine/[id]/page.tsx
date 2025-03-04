import MedicineDetgails from '@/components/modules/medicineDetails'
import CommonBanner from '@/components/modules/shared/CommonBanner/CommonBanner'
import MyContainer from '@/components/modules/shared/MyContainer/MyContainer'
import React from 'react'

const MedicineDetailsPage = () => {
  return (
    <div>
        <CommonBanner mainComponentTitle='Medicine' subComponentTitle='Details'/>
        <MyContainer>

      <MedicineDetgails/>
        </MyContainer>
    </div>
  )
}

export default MedicineDetailsPage
