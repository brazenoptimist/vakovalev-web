import { Canvas, extend } from '@react-three/fiber'
import React, { useState } from 'react'
import { ACESFilmicToneMapping, RepeatWrapping, SRGBColorSpace } from 'three'
import { Header } from './header'
import ImageLoader from './imageloader'
import { Loader } from './loader'
import { Scene } from './scene'

extend({ ACESFilmicToneMapping, RepeatWrapping, SRGBColorSpace })

interface LayoutProps {
	children?: React.ReactNode
	wallpaperMode: boolean | undefined
}

const Layout: React.FC<LayoutProps> = ({ children, wallpaperMode }) => {
	const [imagePercentage, setImagePercentage] = useState(0)
	const [normalMapPercentage, setNormalMapPercentage] = useState(0)
	const [opacityMaskPercentage, setOpacityMaskPercentage] = useState(0)

	const image = ImageLoader('/background_luffy.webp', setImagePercentage)

	const normalMap = ImageLoader(
		'/waterripplenormal.png',
		setNormalMapPercentage
	)

	const opacityMask = ImageLoader('/mask.png', setOpacityMaskPercentage)

	image.colorSpace = SRGBColorSpace

	normalMap.wrapS = RepeatWrapping
	normalMap.wrapT = RepeatWrapping

	return (
		<div
			style={{
				inset: 0,
				position: 'fixed',
				overflow: 'hidden',
				touchAction: 'none',
			}}
		>
			<Loader
				opacityMaskPercentage={opacityMaskPercentage}
				normalMapPercentage={normalMapPercentage}
				imagePercentage={imagePercentage}
			>
				<Canvas
					gl={{
						outputColorSpace: SRGBColorSpace,
						toneMapping: ACESFilmicToneMapping,
						antialias: true,
						pixelRatio: Math.min(window.devicePixelRatio, 2),
					}}
					style={{
						overflow: 'hidden',
						filter: 'brightness(0.5)', // Adjust the brightness here
					}}
				>
					<Scene
						image={image}
						opacityMask={opacityMask}
						normalMap={normalMap}
					/>
				</Canvas>
				<Header wallpaperMode={wallpaperMode} />
				<main className='absolute inset-0 pt-24 pb-6 px-6 font-inter font-normal md:pt-32 md:pb-12 md:px-12 select-none'>
					<div className='flex flex-col w-full h-full mx-3'>{children}</div>
				</main>
			</Loader>
		</div>
	)
}

export default Layout
