function calculateCircleArea(r) {
    const radius = r || 1; // || 참일때 앞에만봐
    return Math.PI * r * r;
}

const area =calculateCircleArea(4);
console.log(area);

const calculateCircleArea = (r=1) => Math.PI * r * r;