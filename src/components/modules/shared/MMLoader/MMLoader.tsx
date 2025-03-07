
import loaderImg from '@/assets/images/loading-medicine.gif'
import Image from 'next/image';
const MMLoader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <Image src={loaderImg} width={600} height={600} alt='medi mart' className='md:w-28 h-28'/>
    </div>
  );
}

export default MMLoader
