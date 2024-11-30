import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Html, PerspectiveCamera, Environment } from '@react-three/drei';

import * as THREE from 'three';

import tunnel from 'tunnel-rat';
import Hotspot from './assets/hotspot';
import CHotspot from './assets/hotspot_Cap';
import Potspot from './assets/hotspot_pic';
import MooneyWorld from './assets/MooneyWorld';
import CreamTea from './assets/CreamTea';
import BlackHoodie from './assets/BlackHoodie';
import Atlanta from './assets/Atlanta';


const status = tunnel();

export default function App() {


  // Toggle the visibility of the Product component when hotspot is clicked
  const handleHotspotClick = () => {
   
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas
        shadows
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.AgxToneMapping,
          toneMappingExposure: 1, // Adjust exposure for desired brightness
        }}
      >
        <PerspectiveCamera makeDefault fov={55} position={[0, 0.5, 3]} />
        <ambientLight intensity={1} color="white" />
    
        <group position={[0, -3, -3]}>
          <Suspense >
            <Model url='./assets/pool.gltf' onHotspotClick={handleHotspotClick} />
          </Suspense>
          <Environment files="./envy.hdr"/>
        </group>



        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
          enableDamping={true}
          enablePan={true}
        />
      </Canvas>
    </div>
  );
}

function Model({ url, onHotspotClick, ...props }) {
  const { scene } = useGLTF(url);

  // Find the Shirt and Cap objects
  const shirtObject = scene.getObjectByName('Shirt');
  const capObject = scene.getObjectByName('Cap');
  const picObject = scene.getObjectByName('Plane027');
  const moonyworldObject = scene.getObjectByName('Cube082');
  const creamObject = scene.getObjectByName('Cube013');
  const blackHoodieObject = scene.getObjectByName('Cube016');
  const moony2HoodieObject = scene.getObjectByName('Cube081');
  const atlantaObject = scene.getObjectByName('Cube005');
  const blackHoodie3Object = scene.getObjectByName('Cube009');

  return (
    <>
      <primitive object={scene} {...props} />

      {/* Hotspot for Shirt */}
      {shirtObject && (
        <mesh
          position={new THREE.Vector3().setFromMatrixPosition(shirtObject.matrixWorld)}
          rotation={shirtObject.rotation}
          scale={shirtObject.scale}
        >
          <Html>
            <Hotspot onClick={onHotspotClick} />
          </Html>
        </mesh>
      )}

      {/* Hotspot for Cap */}
      {capObject && (
        <mesh
          position={new THREE.Vector3().setFromMatrixPosition(capObject.matrixWorld)}
          rotation={capObject.rotation}
          scale={capObject.scale}
        >
          <Html>
            <CHotspot onClick={onHotspotClick} />
          </Html>
        </mesh>
      )}

        {/* Hotspot for Cap */}
        {picObject && (
        <mesh
          position={new THREE.Vector3().setFromMatrixPosition(picObject.matrixWorld)}
          rotation={picObject.rotation}
          scale={picObject.scale}
        >
          <Html>
            <Potspot onClick={onHotspotClick} />
          </Html>
        </mesh>

)}
        {moonyworldObject && (
          <mesh
            position={new THREE.Vector3().setFromMatrixPosition(moonyworldObject.matrixWorld)}
            rotation={moonyworldObject.rotation}
            scale={moonyworldObject.scale}
          >
            <Html>
              <MooneyWorld onClick={onHotspotClick} />
            </Html>
          </mesh>
        )}

        {/* Hotspot for Cap */}
        {creamObject && (
          <mesh
            position={new THREE.Vector3().setFromMatrixPosition(creamObject.matrixWorld)}
            rotation={creamObject.rotation}
            scale={creamObject.scale}
          >
            <Html>
              <CreamTea onClick={onHotspotClick} />
            </Html>
          </mesh>
        )}

        {/* Hotspot for Cap */}
        {blackHoodieObject && (
          <mesh
            position={new THREE.Vector3().setFromMatrixPosition(blackHoodieObject.matrixWorld)}
            rotation={blackHoodieObject.rotation}
            scale={blackHoodieObject.scale}
          >
            <Html>
              <BlackHoodie onClick={onHotspotClick} />
            </Html>
          </mesh>
        )}

        {moony2HoodieObject && (
          <mesh
            position={new THREE.Vector3().setFromMatrixPosition(moony2HoodieObject.matrixWorld)}
            rotation={moony2HoodieObject.rotation}
            scale={moony2HoodieObject.scale}
          >
            <Html>
              <MooneyWorld onClick={onHotspotClick} />
            </Html>
          </mesh>
        )}

{atlantaObject && (
          <mesh
            position={new THREE.Vector3().setFromMatrixPosition(atlantaObject.matrixWorld)}
            rotation={atlantaObject.rotation}
            scale={atlantaObject.scale}
          >
            <Html>
              <MooneyWorld onClick={onHotspotClick} />
            </Html>
          </mesh>
        )}


{blackHoodie3Object && (
          <mesh
            position={new THREE.Vector3().setFromMatrixPosition(blackHoodie3Object.matrixWorld)}
            rotation={blackHoodie3Object.rotation}
            scale={blackHoodie3Object.scale}
          >
            <Html>
              <BlackHoodie onClick={onHotspotClick} />
            </Html>
          </mesh>
        )}


{atlantaObject && (
          <mesh
            position={new THREE.Vector3().setFromMatrixPosition(atlantaObject.matrixWorld)}
            rotation={atlantaObject.rotation}
            scale={atlantaObject.scale}
          >
            <Html>
              <Atlanta onClick={onHotspotClick} />
            </Html>
          </mesh>
        )}


     
    </>
  );
}