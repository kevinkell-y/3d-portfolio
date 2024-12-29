// Toggle the menu on mobile devices
function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}

// Update footer year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// ThreeJS initialization
// ChatGPT helped here, breaking down each function's parts & pieces in handling 3D files.
// Threejs docs here: https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
function initInteractiveThreeJS(containerId) {
    const container = document.getElementById(containerId);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    // Light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Add Default Cube
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    );
    scene.add(cube);

    // Add OrbitControls for interactivity
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth rotation
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.maxDistance = 5;
    controls.minDistance = 1;

    // Animation Loop to rotate the cube and enable interactivity
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Update controls and render the scene
        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
}

// Initialize Three.js for all project containers dynamically
const projectIds = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6', 'project7', 'project8', 'project9'];
projectIds.forEach(id => initInteractiveThreeJS(id));
