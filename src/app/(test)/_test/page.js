'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

const WoodenBoxStacking = () => {
  const containerRef = useRef(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [dragOffset, setDragOffset] = useState(new THREE.Vector3());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [boxCount, setBoxCount] = useState(0);

  // Raycaster for mouse interaction
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const plane = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));

  // 나무 텍스처 생성
  const createWoodTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // 나무 베이스 색상
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#D2B48C');
    gradient.addColorStop(0.3, '#DEB887');
    gradient.addColorStop(0.7, '#CD853F');
    gradient.addColorStop(1, '#A0522D');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    // 나무 결 패턴
    for (let i = 0; i < 20; i++) {
      ctx.strokeStyle = `rgba(139, 69, 19, ${0.1 + Math.random() * 0.3})`;
      ctx.lineWidth = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.moveTo(0, Math.random() * 256);
      ctx.bezierCurveTo(
        64 + Math.random() * 32, Math.random() * 256,
        128 + Math.random() * 64, Math.random() * 256,
        256, Math.random() * 256
      );
      ctx.stroke();
    }

    // 나무 고리 패턴
    for (let i = 0; i < 3; i++) {
      const x = Math.random() * 256;
      const y = Math.random() * 256;
      const radius = Math.random() * 20 + 10;
      
      ctx.strokeStyle = 'rgba(101, 67, 33, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    return texture;
  };

  // 나무 상자 생성 함수
  const createWoodenBox = (position = new THREE.Vector3(0, 0, 0)) => {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const woodTexture = createWoodTexture();
    
    const boxMaterial = new THREE.MeshLambertMaterial({ 
      map: woodTexture,
      transparent: false
    });

    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.copy(position);
    box.castShadow = true;
    box.receiveShadow = true;
    
    // 상자에 고유 ID 부여
    box.userData = {
      id: Date.now() + Math.random(),
      type: 'box',
      isSelected: false
    };

    return box;
  };

  // 마우스 좌표를 3D 좌표로 변환
  const getIntersectionPoint = (clientX, clientY) => {
    if (!camera || !renderer) return null;

    const rect = containerRef.current.getBoundingClientRect();
    mouse.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.current.setFromCamera(mouse.current, camera);
    
    const intersectionPoint = new THREE.Vector3();
    raycaster.current.ray.intersectPlane(plane.current, intersectionPoint);
    
    return intersectionPoint;
  };

  // 클릭으로 상자 생성 또는 선택
  const handleMouseDown = useCallback((event) => {
    console.log('Mouse down event triggered'); // 디버깅용
    if (!scene || !camera || !renderer) return;

    event.preventDefault();
    
    const rect = containerRef.current.getBoundingClientRect();
    mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.current.setFromCamera(mouse.current, camera);
    const intersects = raycaster.current.intersectObjects(scene.children, true);

    // 기존 상자 선택 해제
    boxes.forEach(box => {
      if (box.material) {
        box.material.emissive.setHex(0x000000);
        box.userData.isSelected = false;
      }
    });

    // 상자 클릭 확인
    const boxIntersect = intersects.find(intersect => 
      intersect.object.userData && intersect.object.userData.type === 'box'
    );

    if (boxIntersect) {
      // 기존 상자 선택
      const box = boxIntersect.object;
      setSelectedBox(box);
      setIsDragging(true);
      
      // 선택된 상자 하이라이트
      box.material.emissive.setHex(0x444444);
      box.userData.isSelected = true;

      // 드래그 오프셋 계산
      const intersectionPoint = getIntersectionPoint(event.clientX, event.clientY);
      if (intersectionPoint) {
        setDragOffset(box.position.clone().sub(intersectionPoint));
      }
    } else {
      // 빈 공간 클릭 시 새 상자 생성
      const intersectionPoint = getIntersectionPoint(event.clientX, event.clientY);
      if (intersectionPoint) {
        console.log('Creating new box at:', intersectionPoint); // 디버깅용
        // Y 좌표 조정 (바닥에서 0.5만큼 위)
        intersectionPoint.y = 0.5;
        
        const newBox = createWoodenBox(intersectionPoint);
        scene.add(newBox);
        
        setBoxes(prev => {
          const updated = [...prev, newBox];
          console.log('Updated boxes:', updated.length); // 디버깅용
          return updated;
        });
        setBoxCount(prev => prev + 1);
      }
    }

    setMousePosition({ x: event.clientX, y: event.clientY });
  }, [scene, camera, renderer, boxes]);

  // 드래그 처리
  const handleMouseMove = useCallback((event) => {
    if (!isDragging || !selectedBox || !camera) return;

    event.preventDefault();
    
    const intersectionPoint = getIntersectionPoint(event.clientX, event.clientY);
    if (intersectionPoint) {
      const newPosition = intersectionPoint.add(dragOffset);
      newPosition.y = Math.max(0.5, newPosition.y); // 바닥 아래로 가지 않도록
      selectedBox.position.copy(newPosition);
    }

    setMousePosition({ x: event.clientX, y: event.clientY });
  }, [isDragging, selectedBox, camera, dragOffset]);

  // 드래그 종료
  const handleMouseUp = useCallback(() => {
    if (selectedBox && isDragging) {
      // 스냅 투 그리드 (선택적)
      const position = selectedBox.position;
      position.x = Math.round(position.x);
      position.z = Math.round(position.z);
      
      // 다른 상자들과의 충돌 검사 및 자동 쌓기
      const boxHeight = 1;
      let finalY = 0.5;
      
      boxes.forEach(otherBox => {
        if (otherBox !== selectedBox) {
          const distance = new THREE.Vector2(
            position.x - otherBox.position.x,
            position.z - otherBox.position.z
          ).length();
          
          if (distance < 0.9) { // 거의 같은 위치
            finalY = Math.max(finalY, otherBox.position.y + boxHeight);
          }
        }
      });
      
      position.y = finalY;
      
      // 선택 해제
      selectedBox.material.emissive.setHex(0x000000);
      selectedBox.userData.isSelected = false;
    }

    setIsDragging(false);
    setSelectedBox(null);
    setDragOffset(new THREE.Vector3());
  }, [selectedBox, isDragging, boxes]);

  // 상자 삭제
  const deleteSelectedBox = () => {
    if (selectedBox && scene) {
      scene.remove(selectedBox);
      setBoxes(prev => prev.filter(box => box !== selectedBox));
      setBoxCount(prev => prev - 1);
      setSelectedBox(null);
    }
  };

  // 모든 상자 삭제
  const clearAllBoxes = () => {
    if (scene) {
      boxes.forEach(box => scene.remove(box));
      setBoxes([]);
      setBoxCount(0);
      setSelectedBox(null);
    }
  };

  // 3D 씬 초기화
  const initScene = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // 씬 생성
    const newScene = new THREE.Scene();
    newScene.background = new THREE.Color(0x87CEEB);

    // 카메라 설정
    const newCamera = new THREE.PerspectiveCamera(
      75, 
      container.offsetWidth / container.offsetHeight, 
      0.1, 
      1000
    );
    newCamera.position.set(8, 8, 8);
    newCamera.lookAt(0, 0, 0);

    // 렌더러 설정
    const newRenderer = new THREE.WebGLRenderer({ antialias: true });
    newRenderer.setSize(container.offsetWidth, container.offsetHeight);
    newRenderer.shadowMap.enabled = true;
    newRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(newRenderer.domElement);

    // 조명 설정
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    newScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    newScene.add(directionalLight);

    // 바닥 생성 (체스판 패턴)
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundCanvas = document.createElement('canvas');
    groundCanvas.width = 512;
    groundCanvas.height = 512;
    const groundCtx = groundCanvas.getContext('2d');

    // 체스판 패턴 생성
    const squareSize = 64;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        groundCtx.fillStyle = (i + j) % 2 === 0 ? '#f0f0f0' : '#d0d0d0';
        groundCtx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
      }
    }

    const groundTexture = new THREE.CanvasTexture(groundCanvas);
    const groundMaterial = new THREE.MeshLambertMaterial({ map: groundTexture });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    newScene.add(ground);

    // 그리드 헬퍼 추가
    const gridHelper = new THREE.GridHelper(20, 20, 0x888888, 0x888888);
    gridHelper.position.y = 0.01; // 바닥보다 살짝 위에
    newScene.add(gridHelper);

    setScene(newScene);
    setCamera(newCamera);
    setRenderer(newRenderer);

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);
      
      // 카메라 회전 (자동 회전 옵션)
      // newCamera.position.x = Math.cos(Date.now() * 0.0005) * 12;
      // newCamera.position.z = Math.sin(Date.now() * 0.0005) * 12;
      // newCamera.lookAt(0, 2, 0);
      
      newRenderer.render(newScene, newCamera);
    };
    animate();

    // 마우스 이벤트 리스너
    const canvas = newRenderer.domElement;
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      
      if (container.contains(newRenderer.domElement)) {
        container.removeChild(newRenderer.domElement);
      }
      newRenderer.dispose();
    };
  }, []);

  // 키보드 이벤트 (삭제)
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Delete' || event.key === 'Backspace') {
        deleteSelectedBox();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedBox]);

  useEffect(() => {
    const cleanup = initScene();
    return cleanup;
  }, [initScene]);

  useEffect(() => {
    const handleResize = () => {
      if (camera && renderer && containerRef.current) {
        const container = containerRef.current;
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [camera, renderer]);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-400 to-green-400 flex flex-col">
      {/* 헤더 */}
      <div className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">📦 3D 나무 상자 쌓기</h1>
            <p className="text-gray-600 mt-1">클릭으로 상자 생성, 드래그로 이동하세요!</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <span className="text-blue-800 font-semibold">상자 개수: {boxCount}</span>
            </div>
            
            <button
              onClick={clearAllBoxes}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
              disabled={boxCount === 0}
            >
              모두 삭제
            </button>
          </div>
        </div>
      </div>

      {/* 3D 뷰포트 */}
      <div className="flex-1 p-4">
        <div className="max-w-6xl mx-auto h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div 
            ref={containerRef}
            className="w-full h-full cursor-pointer"
            style={{ minHeight: '600px' }}
          />
        </div>
      </div>

      {/* 컨트롤 패널 */}
      <div className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span><strong>좌클릭:</strong> 빈 공간에 상자 생성</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span><strong>드래그:</strong> 상자 선택 후 이동</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span><strong>Delete/Backspace:</strong> 선택된 상자 삭제</span>
            </div>
          </div>
          
          {isDragging && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
              <p className="text-yellow-800 font-medium">
                🎯 드래그 중... 원하는 위치에서 마우스를 놓으세요!
              </p>
            </div>
          )}
          
          {selectedBox && !isDragging && (
            <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
              <p className="text-blue-800 font-medium">
                📦 상자가 선택되었습니다. Delete 키로 삭제하거나 드래그로 이동하세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WoodenBoxStacking;