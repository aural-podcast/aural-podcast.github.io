// Gen random data
const N = 100;

const arcsData = [...Array(N).keys()].map(() => ({
startLat: 40.416775,
startLng: -3.703790,
endLat: ( 0.5) * 90,
endLng: (Math.random() - 0.5) * 360,
color: 'red'
}));

console.log(arcsData);

const Globe = new ThreeGlobe()
.globeImageUrl('earth-white.jpg')
.arcsData(arcsData)
.arcColor('color')
.arcAltitudeAutoScale([0.8])
.arcsTransitionDuration([2000]);

var globeMaterial = Globe.globeMaterial();
globeMaterial.shininess = 0;


// Setup renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
//renderer.setClearColor("#000000");
//renderer.setSize(window.innerWidth,window.innerHeight);

//document.body.appendChild(renderer.domElement);

//renderer = new THREE.CanvasRenderer();
   var container = document.getElementById('canvas');
   var w = container.offsetWidth;
   var h = container.offsetHeight;
   renderer.setSize(w, h);
   container.appendChild(renderer.domElement);


// Setup scene
const scene = new THREE.Scene();
scene.add(Globe);
scene.add(new THREE.AmbientLight(0xffffff));

// Setup camera
var camera = new THREE.PerspectiveCamera(75,w/h,0.1,1000);
camera.position.z = 400;

window.addEventListener('resize', () => {
renderer.setSize(w,h);
camera.aspect = w/h;

camera.updateProjectionMatrix();
})

// Add camera controls
const tbControls = new THREE.TrackballControls(camera, renderer.domElement);
tbControls.minDistance = 101;
tbControls.rotateSpeed = 5;
tbControls.zoomSpeed = 0.8;

// Kick-off renderer
(function animate() { // IIFE
// Frame cycle
tbControls.update();
Globe.rotation.y += 0.001;
renderer.render(scene, camera);
requestAnimationFrame(animate);
})();