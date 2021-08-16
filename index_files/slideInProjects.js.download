
window.addEventListener("scroll", slideInProjectCheck);


const slideInProjectsImgs = document.querySelectorAll('.slideInProjects-projects-project-image > img');


for(img of slideInProjectsImgs){
    img.addEventListener('click', openModal)
}

const slideInProjectsModals = document.querySelectorAll('.slideInProjects-projects-project-image-modal');
for(modal of slideInProjectsModals){
    modal.addEventListener('click', closeModal);
}

const slideInProjects = document.querySelectorAll('.slideInProjects-projects-project');

function slideInProjectCheck(){
    const wHeight = window.innerHeight

    for(project of slideInProjects){
        const pTop = project.offsetTop;
        if (document.body.scrollTop > (pTop - wHeight) || document.documentElement.scrollTop > (pTop - wHeight)){
            project.classList.add('slideInProjects-slidingIn');

        }else{
            project.classList.remove('slideInProjects-slidingIn');
        }
    }

}



function openModal(){
    this.parentElement.classList.add('projectModal-open');
    document.body.classList.add('projectModal-open-noScroll');
    // console.log('added class');
}
function closeModal(){
    this.parentElement.classList.remove('projectModal-open');
    document.body.classList.remove('projectModal-open-noScroll');
    // console.log('removed class');
}


