const navList = document.getElementById('nav');
navList.style.listStyleType = 'circle';
navList.style.textAlign = 'left';
navList.style.display = 'inline-block';


const navigation = document.getElementById('navigation');
navigation.style.position = 'absolute';
navigation.style.left = '50%';
navigation.style.top = '50%';
navigation.style.transform = 'translate(-50%, -50%)';
navigation.style.zIndex = '10';

const originalImage = document.querySelector('img');
const imageClone = originalImage.cloneNode(true);



originalImage.style.position = 'absolute';
originalImage.style.right = '0px';
originalImage.style.top = '0px';



imageClone.style.position = 'absolute';
imageClone.style.left = '0px ';
imageClone.style.bottom = '0px';


document.body.appendChild(imageClone);