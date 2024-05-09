
import Image from 'next/image';
import LogoSrc from '@public/images/logo-light.png';

export const Header = () => {
	return (
		<section className='flex justify-between'>
			<Image src={LogoSrc} alt='logo'/>
			<div>cHECK</div>
		</section>
	)
}