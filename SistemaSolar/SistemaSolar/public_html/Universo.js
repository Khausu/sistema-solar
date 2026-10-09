var escena, renderer, camara, controls;

//Velocidad
//https://www.univision.com/explora/a-que-velocidad-se-mueven-los-planetas
//Distancia al sol
//https://deplanetas.com/distancia-de-los-planetas-al-sol/#:~:text=Las%20%C3%B3rbitas%20de%20los%20planetas%20son%20el%C3%ADpticas%20por,km.%20Venus%20108.200.000%20km.%20La%20Tierra%20146.600.000%20km.
//Tamaño
//https://es.calcuworld.com/cuantos/cuanto-miden-los-planetas-del-sistema-solar/

function random(min,max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
console.log(random(1,19));

function lineas(){
    // Suponiendo que ya tienes la escena y la cámara configuradas
    const createAxisLine = (color, from, to) => {
    const material = new THREE.LineBasicMaterial({ color });
    const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
    return new THREE.Line(geometry, material);
    };

    // Crear y agregar las líneas de los ejes
    escena.add(createAxisLine(0xff0000, new THREE.Vector3(0, 0, 0), new THREE.Vector3(9999, 0, 0))); // Eje X rojo
    escena.add(createAxisLine(0x00ff00, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 9999, 0))); // Eje Y verde
    escena.add(createAxisLine(0x0000ff, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 9999))); // Eje Z azul

}




//      RENDERIZADO
//
//configurar aspectos de renderizado
renderer = new THREE.WebGLRenderer({antialias:true});//inicializar la variable de renderizacion
var width = window.innerWidth;
var height = window.innerHeight;
renderer.setSize(width,height); //establece el area de rederizacion
//definir donde rederizar
document.body.appendChild(renderer.domElement);


//      ESCENA
//crear escena usando la clase THREE de threejs
escena = new THREE.Scene();
escena.background = new THREE.TextureLoader().load('tex_planetas/2k_stars_milky_way.jpg');





//Lineas de ayuda
const axesHelper = new THREE.AxesHelper( 50000);
escena.add ( axesHelper );



//      PLANETAS

//geometria del sol
var geoSol = new THREE.SphereGeometry(696,32,24);
var texSol = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/tex_sol.jpg')});
//texSol = new THREE.MeshBasicMaterial({color:0x20dbca,wireframe:true});
var Sol = new THREE.Mesh(geoSol, texSol);
Sol.position.set(0,0,0);
Sol.scale.set(0.05,0.05,0.05);
escena.add(Sol);

//geometria del Mercurio
var geoMerc = new THREE.SphereGeometry(2.439,32,24);
var texMerc = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_mercury.jpg')});
//texMerc = new THREE.MeshBasicMaterial({color:0x20dbca,wireframe:true});
var Mercurio = new THREE.Mesh(geoMerc, texMerc);
Mercurio.position.set(69.8,0,0);
escena.add(Mercurio);

//geometria del Venus
var geoVen = new THREE.SphereGeometry(6.052,32,24);
var texVen = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_venus_surface.jpg')});
//texMerc = new THREE.MeshBasicMaterial({color:0x20dbca,wireframe:true});
var Venus = new THREE.Mesh(geoVen, texVen);
Venus.position.set(108.2,0,0);
escena.add(Venus);

//geometria del tierra
var geo2 = new THREE.SphereGeometry(6.378,32,24);
var tex2 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_earth_daymap.jpg')});
var tierra = new THREE.Mesh(geo2, tex2);
//tierra.position.set(150,0,0);
escena.add(tierra);


// Geometría de la Luna
var geoLuna = new THREE.SphereGeometry(1.737, 32, 24);
var texLuna = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_moon.jpg')});
var luna = new THREE.Mesh(geoLuna, texLuna);
//luna.position.set(10, 0, 0);  // Posición inicial de la luna respecto a la Tierra




// Crear un grupo para la Tierra y la Luna
var sistemaTierraLuna = new THREE.Group();
sistemaTierraLuna.add(tierra);
sistemaTierraLuna.add(luna);
// Posicionar el sistema Tierra-Luna en la escena
sistemaTierraLuna.position.set(150, 0, 0);
escena.add(sistemaTierraLuna);




//geometria del Marte
var geo3 = new THREE.SphereGeometry(3.390,32,24);
var tex3 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_mars.jpg')});
//tex3 = new THREE.MeshBasicMaterial({color:0x20dbca,wireframe:true});
var Marte = new THREE.Mesh(geo3, tex3);
Marte.position.set(231.94,0,0);
escena.add(Marte);

//geometria del Jupiter
var geo4 = new THREE.SphereGeometry(71.6,32,24);
var tex4 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_jupiter.jpg')});
//tex4 = new THREE.MeshBasicMaterial({color:0x20dbca,wireframe:true});
var Jupiter = new THREE.Mesh(geo4, tex4);
Jupiter.position.set(782.33,0,0);
escena.add(Jupiter);


    //SATURNO
    //
//geometria del Saturno
var geoSatur = new THREE.SphereGeometry(5.8232,32,24);
var texSatur = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_saturn.jpg')});
var Saturno1 = new THREE.Mesh(geoSatur, texSatur);

//geometria del Saturno - Anillo
var geoSatur2 = new THREE.TorusGeometry(10,1,2,200);
var texSatur2 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_saturn_ring.jpg')});
var Saturno2 = new THREE.Mesh(geoSatur2, texSatur2);
Saturno2.rotation.x = 90;

//Unimos las parte de saturno en un group
var Saturno = new THREE.Group();
Saturno.add(Saturno1);
Saturno.add(Saturno2);

//Lo agregamos a la escena
escena.add(Saturno);


//geometria del Urano
var geoU = new THREE.SphereGeometry(25.05,32,24);
var texU = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_uranus.jpg')});
//tex4 = new THREE.MeshBasicMaterial({color:0x20dbca,wireframe:true});
var Urano = new THREE.Mesh(geoU, texU);
Urano.position.set(2870/5,0,0);
escena.add(Urano);

//geometria del Neptuno
var geoN = new THREE.SphereGeometry(20.25,32,24);
var texN = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_neptune.jpg')});
//tex4 = new THREE.MeshBasicMaterial({color:0x20dbca,wireframe:true});
var Neptuno = new THREE.Mesh(geoN, texN);
Neptuno.position.set(4504/9,0,0);
escena.add(Neptuno);



    //AGUJERO NEGRO

var geoA= new THREE.SphereGeometry(4000,32,24);
var texA = new THREE.MeshBasicMaterial({ color: 0x000000 });
var AN1 = new THREE.Mesh(geoA, texA);

//geometria del Saturno - Anillo
var geoB = new THREE.TorusGeometry(4000,2000,2,200);
var texB = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_saturn_ring_2.jpg')});
var AN2 = new THREE.Mesh(geoB, texB);
AN2.rotation.x = 90;

//Unimos las parte de saturno en un group
var AN = new THREE.Group();
AN.add(AN1);
AN.add(AN2);
AN.position.set(6000,100,-5000);

//Lo agregamos a la escena
escena.add(AN);




    //ASTEROIDES
    
var geoAst = new THREE.SphereGeometry(5,6,24);
var texAst = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('tex_planetas/2k_meteoro.jpg')});
var Asteroide = new THREE.Mesh(geoAst, texAst);
Asteroide.position.set(-100,0,-700);
escena.add(Asteroide);

var Asteroide2 = new THREE.Mesh(geoAst, texAst);
Asteroide2.position.set(-80,0,-700);
escena.add(Asteroide2);

var Asteroide3 = new THREE.Mesh(geoAst, texAst);
Asteroide3.position.set(-60,0,-700);
escena.add(Asteroide3);

var Asteroide4 = new THREE.Mesh(geoAst, texAst);
Asteroide4.position.set(-90,0,-700);
escena.add(Asteroide4);















//Camara
camara= new THREE.PerspectiveCamera(30,width / height,1,9999999);
camara.position.set(2000,600,1800);


    //CONTROLES

controls = new THREE.OrbitControls(camara,renderer.domElement);








//EFECTOS DE PLANETAS
//HALO DEL SOL

// Cargar la textura del halo
const haloTexture = new THREE.TextureLoader().load('halo_w.png');
// Crear el material del sprite usando la textura del halo
const haloMaterial = new THREE.SpriteMaterial({
    map: haloTexture,
    color: 0xffff00,
    transparent: true,
    opacity: 0.75
});
// Crear el sprite del halo
const haloSprite = new THREE.Sprite(haloMaterial);
haloSprite.scale.set(200, 200, 200);  // Ajusta el tamaño del halo
haloSprite.position.copy(Sol.position);  // Coloca el halo en la misma posición que la luz
escena.add(haloSprite);

//HALO de la Tierra
//Creamos el halo para los demas
const halo_mat2 = haloMaterial.clone();
halo_mat2.color.set(0xffffff);  // Cambiar a rojo
const halo2 = new THREE.Sprite(halo_mat2);
halo2.scale.set(40, 40, 40);
halo2.position.set(500,0,500);
escena.add(halo2);

//Mercurio
const halo_mat3 = haloMaterial.clone();
halo_mat3.color.set(0xdff3f4);  // Cambiar a rojo
const haloMer = new THREE.Sprite(halo_mat3);
haloMer.scale.set(30, 30, 30);
haloMer.position.set(600,0,500);
escena.add(haloMer);

//Venus
const halo_mat4 = haloMaterial.clone();
halo_mat4.color.set(0xffc65c);  // Cambiar a rojo
const haloVen = new THREE.Sprite(halo_mat4);
haloVen.scale.set(40, 40, 40);
haloVen.position.set(650,0,500);
escena.add(haloVen);

//Marte
const halo_mat5 = haloMaterial.clone();
halo_mat5.color.set(0xfdb589);  // Cambiar a rojo
const haloMart = new THREE.Sprite(halo_mat5);
haloMart.scale.set(30, 30, 30);
haloMart.position.set(700,0,500);
escena.add(haloMart);

//Jupiter
const halo_mat6 = haloMaterial.clone();
halo_mat6.color.set(0xf2d179);  // Cambiar a rojo
const haloJup = new THREE.Sprite(halo_mat6);
haloJup.scale.set(300, 300, 300);
haloJup.position.set(720,0,500);
escena.add(haloJup);

//Saturno
const halo_mat7 = haloMaterial.clone();
halo_mat7.color.set(0xfcde9d);  // Cambiar a rojo
const haloSat = new THREE.Sprite(halo_mat7);
haloSat.scale.set(40, 40, 40);
haloSat.position.set(720,0,500);
escena.add(haloSat);

//Urano
const halo_mat8 = haloMaterial.clone();
halo_mat8.color.set(0x239FDA);  // Cambiar a rojo
const haloUra = new THREE.Sprite(halo_mat8);
haloUra.scale.set(150, 150, 150);
haloUra.position.set(720,0,500);
escena.add(haloUra);

//Neptuno
const halo_mat9 = haloMaterial.clone();
halo_mat9.color.set(0x6df1e5);  // Cambiar a rojo
const haloNep = new THREE.Sprite(halo_mat9);
haloNep.scale.set(120, 120, 120);
haloNep.position.set(720,0,500);
escena.add(haloNep);

//An
const halo_mat10 = haloMaterial.clone();
halo_mat10.color.set(0xffffff);  // Cambiar a rojo
const haloAN = new THREE.Sprite(halo_mat10);
haloAN.scale.set(15000, 15000,15000);
haloAN.position.set(720,0,500);
escena.add(haloAN);





var i = 0;
var DZa1 = random(1,50)/10;// diferecial del eje z
var k = 0.0005;
function animar(){
    //TRASLACION ALREDEDOR DEL SOL
        //Mercurio se traslada al rededor del sol, en xz, no en y
        //entre 1 millon para q salga 69.8
    Mercurio.position.set(-Math.cos(i*0.004789)*69.8,0,Math.sin(i*0.004789)*69.8);
    Venus.position.set(-Math.cos(i*0.003503)*108,0,Math.sin(i*0.003503)*108);
    sistemaTierraLuna.position.set(-Math.cos(i*0.002978)*150,0,Math.sin(i*0.002978)*150);
    Marte.position.set(-Math.cos(i*0.002413)*231.94,0,Math.sin(i*0.002413)*231.94);
    Jupiter.position.set(-Math.cos(i*0.001306)*782.33,0,Math.sin(i*0.001306)*782.33);
    Saturno.position.set(-Math.cos(i*0.00962)*1418/3,0,Math.sin(i*0.00962)*1418/3);
    luna.position.set(tierra.position.x + 10 * Math.cos(i * 0.01),tierra.position.y,tierra.position.z + 10 * Math.sin(i * 0.01));
    Urano.position.set(-Math.cos(i*0.00681)*2870/5,0,Math.sin(i*0.00681)*2870/5);
    Neptuno.position.set(-Math.cos(i*0.00543)*4504/9,0,Math.sin(i*0.00543)*4504/9);
    
    
    //Halos
    halo2.position.copy(sistemaTierraLuna.position);
    haloMer.position.copy(Mercurio.position);
    haloVen.position.copy(Venus.position);
    haloMart.position.copy(Marte.position);
    haloJup.position.copy(Jupiter.position);
    haloSat.position.copy(Saturno.position);
    haloUra.position.copy(Urano.position);
    haloNep.position.copy(Neptuno.position);
    haloAN.position.copy(AN.position);
    //Cometa
    
    
    //movimiento de los asteroide
    var DZa2= random(1,20)/10;
    Asteroide.position.z+=DZa1;
    Asteroide2.position.z+=DZa2;
    Asteroide2.position.x -= 0.8;
    Asteroide3.position.z+=DZa2;
    Asteroide3.position.x -= 0.6;
    Asteroide4.position.z+=DZa2;
    Asteroide4.position.x -= 1.8;

    Asteroide.rotation.x+=random(1,10)/500;//Angulos de rotacion
    Asteroide.rotation.y+=random(1,10)/500;
    Asteroide.rotation.z+=random(1,10)/500;
    
    
    
    //ROTACION
    Mercurio.rotation.x += 0.01;Mercurio.rotation.y += 0.01;Mercurio.rotation.z += 0.01;
    //tierra.rotation.z += 0.04;tierra.rotation.y += 0.04;
    tierra.rotation.y += 0.04;
    Venus.rotation.x += 0.01;Venus.rotation.y += 0.01;Venus.rotation.z += 0.01;
    Marte.rotation.x += 0.07;Marte.rotation.y += 0.07;Marte.rotation.z += 0.07;
    Jupiter.rotation.x += 0.01;Jupiter.rotation.y += 0.01;Jupiter.rotation.z += 0.01;
    Saturno.rotation.x += 0.01;Saturno.rotation.y += 0.01;Saturno.rotation.z += 0.01;
    Urano.rotation.x += 0.01;Urano.rotation.y += 0.01;Urano.rotation.z += 0.01;
    Neptuno.rotation.x += 0.01;Neptuno.rotation.y += 0.01;Neptuno.rotation.z += 0.01;
    
    
    //Sol.rotation.y +=0.216;d
    Sol.rotation.x +=0.0005;
    Sol.rotation.y +=0.0005;
    Sol.rotation.z +=0.0005;
    
    
    
    //Parte Recursiva
    requestAnimationFrame ( animar );  
    
    //Render
    renderer.render (escena, camara);
    
    //Variable i
    i++;
}
requestAnimationFrame ( animar );  

