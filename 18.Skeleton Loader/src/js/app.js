const allSkeletons = document.querySelectorAll('.skeleton');



// For Real Purposes we have to do like this 
// window.addEventListener('load', () => {
//     allSkeletons.forEach(skeleton => {
//         skeleton.classList.remove('skeleton');
//     })
// })


// for demo purpose
setTimeout(function () {
    allSkeletons.forEach(skeleton => {
        skeleton.classList.remove('skeleton');
    })
}, 2000)