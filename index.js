/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn=   document.getElementById('convert-btn')
const length=       document.getElementById('length')
const volume=       document.getElementById('volume')
const mass=         document.getElementById('mass')
const styleLink = document.getElementById('style');


convertBtn.addEventListener('click', function(){
  const input=Number(document.getElementById('input').value)
  const metres=   (input/3.281).toFixed(3)
  const feet=     (input*3.281).toFixed(3)
  const liter=    (input/0.264).toFixed(3)
  const gallon=   (input*0.264).toFixed(3)
  const kilogram= (input/2.204).toFixed(3)
  const pound=    (input*2.204).toFixed(3)
    
  if (input && input != 1){  

    length.textContent= `${input} meters = ${feet} feet | ${input} feet = ${metres} meters`
    volume.textContent= `${input} liters = ${gallon} gallons | ${input} gallons = ${liter} liters`
    mass.textContent= `${input} kilos = ${pound} pounds | ${input} pounds = ${kilogram} kilos`
    document.getElementById('input').value=''
    document.getElementById('input').placeholder=input
  } else {
    length.textContent= `1 meter = 3.281 feet | 1 foot = 0.375 meter`
    volume.textContent= `1 liter = 0.264 gallon | ${1} gallon = 3.788 liters`
    mass.textContent= `1 kilo = 2.204 pounds | ${1} pound = 0.454 kilos`
    document.getElementById('input').value=''
    document.getElementById('input').placeholder="00"
  } 
})

document.getElementById('dark-mode').addEventListener('click', function(){
 
  if (styleLink.getAttribute('href')=='indexDark.css'){
  styleLink.setAttribute('href', 'index.css'); 
  localStorage.clear()
  localStorage.setItem('mode', 'light')

} else{
  styleLink.setAttribute('href', 'indexDark.css'); 
  localStorage.clear()
  localStorage.setItem('mode', 'dark')

}
})

if (localStorage.getItem('mode')=='dark'){
  styleLink.setAttribute('href', 'indexDark.css'); 
}else{
  styleLink.setAttribute('href', 'index.css'); 
}
 
    
