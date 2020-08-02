document.addEventListener('DOMContentLoaded', () => {
    controlNavbarVisibility();

    const floatingBtn = document.querySelector('.btn-arrow');
    controlFloatingBtnVisibility(floatingBtn);
    scrollToTop(floatingBtn);

    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {});

    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy, { scrollOffset: 0 });

    const modal = document.querySelector('.modal');
    const modalInstance = M.Modal.init(modal, { endingTop: '0%', inDuration: 50, outDuration: 50 });

    const modalTriggers = document.querySelectorAll('.gallery-item');
    modalTriggers.forEach((modalTrigger) => {
        modalTrigger.addEventListener('click', () => {
            openGalleryModal(modalTrigger, modalInstance);
        });
    });
});

const controlNavbarVisibility = () => {
    const navbar = document.querySelector('.navbar-custom');

    let previousPosition = window.pageYOffset;

    window.addEventListener('scroll', () => {
        let currentPosition = window.pageYOffset;

        navbar.style.top = (previousPosition < currentPosition && currentPosition > 208) ? '-104px' : '0';

        previousPosition = currentPosition;
    });
};

const controlFloatingBtnVisibility = (floatingBtn) => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 208) {
            floatingBtn.classList.remove('hidden');
        } else {
            floatingBtn.classList.add('hidden');
        }
    });
};

const scrollToTop = (floatingBtn) => {
    floatingBtn.addEventListener('click', () => {
        if (window.chrome) {
            scrollIntoViewInChrome();
        } else {
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
    });
};

const openGalleryModal = async (modalTrigger, modalInstance) => {
    
    const classValue = modalTrigger.childNodes[0].classList.value;
    const projectId = classValue.substr(classValue.length - 1);


    modalInstance.open();

    const response = await axios.get(`/projects/${projectId}`);
    const project = response.data;

    const modal = document.querySelector('.modal');

    if (project) {
        const modalContent = await createModalContent(project);
        const modalFooter = createModalFooter(modalInstance, modal);

        modal.innerHTML = null;
        modal.appendChild(modalContent);
        modal.appendChild(modalFooter);

        const onOpenEnd = () => document.body.style.overflow = 'hidden';
        const onCloseEnd = () => document.body.style.overflow = 'hidden';
        const images = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(images, { onOpenEnd, onCloseEnd });
    } else {
        const modalContent = createErrorContent();
        const modalFooter = createModalFooter(modalInstance, modal);
        modal.innerHTML = null;
        modal.appendChild(modalContent);
        modal.appendChild(modalFooter);
    }
};

const createModalContent = async (project) => {

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const imageGallery = document.createElement('div');
    imageGallery.classList.add('img-gallery');
    await Promise.all(project.urls.map(async (url) => createImage(url, imageGallery)));

    const textContent = createTextContent(project);

    modalContent.appendChild(imageGallery);
    modalContent.appendChild(textContent);

    return modalContent;
};

const createImage = async (url, imageGallery) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');

    const image = document.createElement('img');
    image.classList.add('materialboxed');
    image.src = url;
    await imageIsLoaded(image);

    imageContainer.appendChild(image);
    imageGallery.appendChild(imageContainer);
    return Promise.resolve(url);
};

const imageIsLoaded = (image) => {
    return new Promise((resolve, reject) => image.addEventListener('load', () => resolve()));
};

const createTextContent = (project) => {
    const content = ['Категория', 'Фаза', 'Местоположение'];

    const textContent = document.createElement('div');
    textContent.classList.add('text-content');

    const h4 = document.createElement('h4');
    h4.classList.add('grey', 'lighten-2', 'grey-text', 'text-darken-2');
    h4.innerText = project.text;

    const contentList = document.createElement('ul');

    [project.category, project.state, project.location].forEach((el, i) => {
        const contentListElement = document.createElement('li');
        contentList.classList.add('grey-text', 'text-darken-4');

        const elementHeading = document.createElement('span');
        elementHeading.classList.add('grey-text');
        elementHeading.innerText = `${content[i]}: `;

        contentListElement.appendChild(elementHeading);
        contentListElement.insertAdjacentText('beforeend', el);

        contentList.appendChild(contentListElement);
    });

    textContent.appendChild(h4);
    textContent.appendChild(contentList);

    return textContent;
};

const createErrorContent = () => {
    const modalContent = document.createElement('div');
    modalContent.classList.add('error-content');
    
    const errorTitle = document.createElement('h4');
    errorTitle.classList.add('error-title', 'grey-text', 'darken-4');
    errorTitle.innerHTML = 'Нещо се обърка';

    const errorText = document.createElement('p');
    errorText.classList.add('error-text');
    errorText.innerHTML = 'Моля, презаредете страницата и опитайте отново!';

    modalContent.appendChild(errorTitle);
    modalContent.appendChild(errorText);

    return modalContent;
};

const createModalFooter = (modalInstance, modal) => {
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('btn', 'waves-effect', 'waves-light', 'red', 'custom-cancel-btn');
    cancelBtn.innerText = 'Изход от галерията';
    cancelBtn.addEventListener('click', () => closeModal(modalInstance, modal));

    btnContainer.appendChild(cancelBtn);
    modalFooter.appendChild(btnContainer);

    return modalFooter;
};

const closeModal = (modalInstance, modal) => {
    modalInstance.close();

    const preloaderWrapper = document.createElement('div');
    preloaderWrapper.classList.add('preloader-wrapper', 'small', 'active');

    const spinnerLayer = document.createElement('div');
    spinnerLayer.classList.add('spinner-layer');

    const leftCircleClipper = document.createElement('div');
    leftCircleClipper.classList.add('circle-clipper', 'left');

    const gapPatch = document.createElement('div');
    gapPatch.classList.add('gap-patch');

    const rightCircleClipper = document.createElement('div');
    rightCircleClipper.classList.add('circle-clipper', 'right');

    const circle = document.createElement('div');
    circle.classList.add('circle');

    leftCircleClipper.appendChild(circle);
    gapPatch.appendChild(circle);
    rightCircleClipper.appendChild(circle);
    spinnerLayer.appendChild(leftCircleClipper);
    spinnerLayer.appendChild(gapPatch);
    spinnerLayer.appendChild(rightCircleClipper);
    preloaderWrapper.appendChild(spinnerLayer);

    modal.innerHTML = null;
    modal.appendChild(preloaderWrapper);
};
  
const scrollIntoViewInChrome = () => {
    smoothScroll();
};

const smoothScroll = () => {
    let difference = window.scrollY / 8;

    setTimeout(function() {
        window.scroll(0, window.scrollY - difference);
        if (window.scrollY === 0) return;
        smoothScroll();
    }, 10);
}
