$(document).ready(function(){


    
$(".podcast").click(function soundClick(){

    var lat = $(this).attr("lat").split(",");
    var lng = $(this).attr("lng").split(",");
    var titulo = $(this).attr("titulo");
    var datetime = $(this).attr("datetime");
    var mixcloud = $(this).attr("mixcloud");
    var autores = $(this).attr("autores");
    var descripcion = $(this).attr("descripcion");
    var sound = $(this).attr("sound");

    $('#titulo').text(titulo);
    $('#datetime').text(datetime);
    $('#mixcloud').attr('src', mixcloud);
    $('#autores').text(autores);
    $('#descripcion').text(descripcion);
    $('#descripcion').attr('sound', sound);

    $('#mixcloud').css('border-color', 'black');

    const myNode = document.getElementById("canvas");
    myNode.innerHTML = '';

    const arcsData = new Array();

for(var i=0;i<lat.length;i++){
  const datos =  ({
    startLat: 40.416775,
    startLng: -3.703790,
    endLat: lat[i],
    endLng: lng[i],
    color: 'red'
    }); 
  arcsData.push(datos);
}

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

  });


  
});