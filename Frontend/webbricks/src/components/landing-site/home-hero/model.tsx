'use client';
import { RefObject, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export type transform = {
	position: [number, number, number];
	rotation: [number, number, number];
	scale: [number, number, number];
};

interface Props {
	gltfPath: string;
	transform: transform;
}

//pulled straight from React Three Fiber docs
//need to convert this all to gltf at some point, just getting it working for now
export default function Model(Props: Props) {
	const groupRef: RefObject<any> = useRef(null);
	const { scene } = useGLTF(Props.gltfPath);
	return (
		<group ref={groupRef} dispose={null}>
			{/* all my gltfs only have a single mesh in the scene, so safe to just load everything */}
			<primitive
				receiveShadow
				object={scene}
				position={Props.transform.position}
				rotation={Props.transform.rotation}
				scale={Props.transform.scale}
			/>
		</group>
	);
}
