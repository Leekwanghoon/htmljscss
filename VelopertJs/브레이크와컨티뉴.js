// 2를지나쳐, 2가 안나와
for(let i=0; i<10; i++) {
    if(i===2) continue 
    console.log(i);
}
// 2에서 멈춰 2까지는 나와
for(let i=0; i<10; i++) {
    if(i===2) break 
    console.log(i);
}
