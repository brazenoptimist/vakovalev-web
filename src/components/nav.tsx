import React from 'react'

interface LogoProps {
	size: number
}

export const Logo: React.FC<LogoProps> = ({ size }: LogoProps) => {
	const hw = `${size}px`

	return (
		<div
			className='relative flex items-center justify-center'
			style={{ width: hw, height: hw }}
		></div>
	)
}
