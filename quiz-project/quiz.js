const correctAnswers=['t','f','f','t','t'];
const form=document.querySelector('.form-container');
const result=document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index])
        score+=20;
    })
    result.classList.remove('d-none');

    let i=0;
    const print=setInterval(() => {
        result.querySelector('span').textContent=`${i}%`;
        if(i==score){
            clearInterval(print);
        }
        else{
            i++;
        }
    }, 25);
})
