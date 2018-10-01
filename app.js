'use strict';

const STATE = {
    currentView: undefined
};

function STARTUP() {
    loadNavBar();
    loadMenu();
    setCurrentView();
    highlightCurrentView();
    burgerOnClick();
    menuLinkOnClick();
    loadError();

    if (STATE.currentView === 'photography') {
        loadGrid(galleryJSON);
        thumbnailOnClick();
        nextPhotoOnClick();
        prevPhotoOnClick();
        closePhotoOnClick();
        keyboardControls();
    }
};

function loadNavBar() {
    $('#navBar-js').html(`
        <nav class="nav-bar background-white" role="navigation">
            <div class="burger-box background-dkblue white">
                <div class="burger">
                    <div class="burger-layer"></div>
                    <div class="burger-layer"></div>
                    <div class="burger-layer"></div>
                </div>
            </div>
            <div class="nav-bar-links">
                <a href="/webdevelopment/" class="nav-link nl-webdev dkblue">
                    <div class="nav-tab">
                        <i class="material-icons">code</i>
                        Web Dev
                    </div>
                </a>
                <a href="/photography/" class="nav-link nl-photography dkblue">
                    <div class="nav-tab">
                        <i class="material-icons">camera</i>
                        Photos
                    </div>
                </a>
                <a href="/resources/" class="nav-link nl-resources dkblue">
                    <div class="nav-tab">
                        <i class="material-icons">school</i>
                        Learn
                    </div>
                </a>
                <a href="/about/" class="nav-link nl-about dkblue">
                    <div class="nav-tab">
                        <i class="material-icons">recent_actors</i>
                        About
                    </div>
                </a>
            </div>
        </nav>
    `);
    $('#navBar-js').fadeIn(400);
};


function loadMenu() {
    $('#menu-js').html(`
    <section class="menu background-dkblue white" role="navigation" aria-hidden="true" aria-live="assertive">
        <a href="/" class="white menu-link">
            <i class="material-icons">home</i>
            <h3>Home</h3>
        </a>
        <a href="/webdevelopment/" class="white menu-link">
            <i class="material-icons">code</i>
            <h3>Web Development</h3>
        </a>
            <a href="/webdevelopment/#APODexplorer" class="white menu-link sub-link">APOD Explorer</a>
            <a href="/webdevelopment/#Travellists" class="white menu-link sub-link">Travellists</a>
            <a href="/webdevelopment/#Jargonator" class="white menu-link sub-link">Jargonator</a>
            <a href="/webdevelopment/#Almagest" class="white menu-link sub-link">Almagest</a>
        <a href="/photography/" class="white menu-link">
            <i class="material-icons">camera</i>
            <h3>Photography</h3>
        </a>
        <a href="/resources/" class="white menu-link">
            <i class="material-icons">school</i>
            <h3>Resources</h3>
        </a>
            <a href="#" class="white menu-link sub-link inactive">Coding Resources</a>
            <a href="#" class="white menu-link sub-link inactive">Web Development 101</a>
            <a href="#" class="white menu-link sub-link inactive">Photography Resources</a>
            <a href="#" class="white menu-link sub-link inactive">Astrophotography 101</a>
        <a href="/about/" class="white menu-link">
            <i class="material-icons">recent_actors</i>
            <h3>About Me</h3>
        </a>
    
        <div role="region" class="social-media">
    
            <a href="mailto:alex.s.warnes@gmail.com?subject=Contact%20Email" class="white" aria-label="Email" rel="noopener noreferrer">
                <i class="far fa-envelope social-icon"></i>
            </a>
    
            <a href="https://github.com/AlexWarnes" target="_blank" class="white" aria-label="GitHub" rel="noopener noreferrer">
                <i class="fab fa-github social-icon"></i>
            </a>
    
            <a href="https://www.instagram.com/alexwarnesphotos/" target="_blank" class="white" aria-label="Instagram" rel="noopener noreferrer">
                <i class="fab fa-instagram social-icon"></i>
            </a>
    
            <a href="https://www.linkedin.com/in/alexwarnes/" target="_blank" class="white" aria-label="LinkedIn" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in social-icon"></i>
            </a>
    
            <a href="https://twitter.com/a_warnes" target="_blank" class="white" aria-label="Twitter" rel="noopener noreferrer">
                <i class="fab fa-twitter social-icon"></i>
            </a>
    
        </div>
    </section>
    `);
};

function setCurrentView() {
    let path = window.location.pathname;
	let view;
    path.includes('webdevelopment')
        ? view = 'webdev'
        : path.includes('photography')
        ? view = 'photography'
        : path.includes('resources')
        ? view = 'resources'
        : path.includes('about')
        ? view = 'about'
        : view = 'landing';
    
    STATE.currentView = view;
};

function highlightCurrentView() {
    switch(STATE.currentView) {
        case 'webdev':
            return $('.nl-webdev>.nav-tab').addClass('current-tab-webdev');
        case 'photography':
            return $('.nl-photography>.nav-tab').addClass('current-tab-photography')
        case 'resources':
            return $('.nl-resources>.nav-tab').addClass('current-tab-resources')
        case 'about':
            return $('.nl-about>.nav-tab').addClass('current-tab-about')
        default:
            return null;
    };
};

function toggleAriaHidden() {
    $('.menu').attr('aria-hidden') == 'false' 
        ? $('.menu').attr('aria-hidden', true) 
        : $('.menu').attr('aria-hidden', false);
};

function toggleMenu() {
    $('.burger, .menu').toggleClass('open');
    toggleAriaHidden();
}

function burgerOnClick() {
    $('.burger-box').on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
};

function menuLinkOnClick() {
    $('.menu-link').on('click', (e) => {
        toggleMenu();
    })
}

function loadError() {
    $('#error-js').html(`
    <div class="error">
        <i class="material-icons display-icon error-icon">error_outline</i>
        <p>Sorry for the hiccup! I'm updating major branches of the site and haven't made it here yet.</p>
        <p>Feel free to connect with me on any other platform, as I'm always interested in new projects or feedback. Thanks for visiting!</p>
        <div role="region" class="introTile social-media">

                <a href="mailto:alex.s.warnes@gmail.com?subject=Contact%20Email" class="white" aria-label="Email" rel="noopener noreferrer">
                    <i class="far fa-envelope social-icon"></i>
                </a>
    
                <a href="https://github.com/AlexWarnes" target="_blank" class="white" aria-label="GitHub" rel="noopener noreferrer">
                    <i class="fab fa-github social-icon"></i>
                </a>
    
                <a href="https://www.instagram.com/alexwarnesphotos/" target="_blank" class="white" aria-label="Instagram" rel="noopener noreferrer">
                    <i class="fab fa-instagram social-icon"></i>
                </a>
    
                <a href="https://www.linkedin.com/in/alexwarnes/" target="_blank" class="white" aria-label="LinkedIn" rel="noopener noreferrer">
                    <i class="fab fa-linkedin-in social-icon"></i>
                </a>
    
                <a href="https://twitter.com/a_warnes" target="_blank" class="white" aria-label="Twitter" rel="noopener noreferrer">
                    <i class="fab fa-twitter social-icon"></i>
                </a>
    
            </div>
    </div>
    `);
    $('#error-js').slideToggle();
};

//========== PHOTOGRAPHY PAGE & GALLERY CONTROLS ==========
// ========================================================

function renderThumbnail(photo, index) {
    return `
        <div class="photo-tile">
            <img src="${photo.thumbURL}" alt="${photo.alt}" id="photo-${index}" class="photo-thumb">
        </div>`;
}

function openGallery() {
    $('.gallery-js').fadeIn().css('display', 'flex');
}

function closeGallery() {
    $('.gallery-js').fadeOut();
    $('.photo').attr('src', '');
    $('.photo').attr('alt', '');
}

function displayFullRes(data){
    $('.photo').attr('src', data.fullResURL);
    $('.photo').attr('alt', data.alt);
    $('.photo').on('load', () => {
        $('.photo').fadeIn(400);
    });
}

function getThisPhotoData(currentPhoto) {
    let currentIndex = galleryJSON.findIndex(item => item.thumbURL === currentPhoto);
    return galleryJSON[currentIndex];
}

function getNextPhotoData(currentPhoto) {
    let currentIndex = galleryJSON.findIndex(item => item.fullResURL === currentPhoto);
    let nextIndex
    if (currentIndex === galleryJSON.length - 1) {
        nextIndex = 0;
    } else {
        nextIndex = currentIndex + 1;
    } 
    console.log(`%cCURRENT INDEX: ${currentIndex}`, "color: green; font-weight: bold;");
    console.log(`%cNEXT INDEX: ${nextIndex}`, "font-weight: bold;");
    return galleryJSON[nextIndex];
}

function getPrevPhotoData(currentPhoto) {
    let currentIndex = galleryJSON.findIndex(item => item.fullResURL === currentPhoto);
    let prevIndex
    if (currentIndex === 0) {
        prevIndex = galleryJSON.length - 1;
    } else {
        prevIndex = currentIndex - 1;
    } 
    console.log(`%cCURRENT INDEX: ${currentIndex}`, "color: green; font-weight: bold;");
    console.log(`%cPREV INDEX: ${prevIndex}`, "font-weight: bold;");
    return galleryJSON[prevIndex];
}

function showNextPhoto() {
    let nextPhoto = getNextPhotoData($('.photo').attr('src'));
    displayFullRes(nextPhoto);
}

function showPrevPhoto() {
    let prevPhoto = getPrevPhotoData($('.photo').attr('src'));
    displayFullRes(prevPhoto);
}

function loadGrid(data) {
    data.map((photo, index) => {
        let thumb = renderThumbnail(photo, index);
        $('.photo-grid').append(thumb);
        $(`#photo-${index}`).on('load', () => {
            $(`#photo-${index}`).fadeIn(600);
        });
    });
}

function thumbnailOnClick() {
    $('.photo-thumb').on('click', (e) => {
        let selectedPhoto = getThisPhotoData($(e.currentTarget).attr('src'));
        openGallery();
        displayFullRes(selectedPhoto);
    })
}

function nextPhotoOnClick() {
    $('.next-photo-js').on('click', (e) => {
        showNextPhoto();
    });
}

function prevPhotoOnClick() {
    $('.prev-photo-js').on('click', (e) => {
        showPrevPhoto();
    });
}

function closePhotoOnClick() { 
    $('.close-frame-js').on('click', (e) => {
        closeGallery();
    });
}

function keyboardControls(){
    $('body').one('keyup', (e) => {
        let keyName = e.key;
        //in each case, reset the listener after a key is pressed
        switch(keyName){
            case 'ArrowRight':
                keyboardControls();
                return showNextPhoto();
            case 'ArrowLeft':
                keyboardControls();
                return showPrevPhoto();
            case 'Escape':
                keyboardControls();
                return closeGallery();
            default:
                //In case any other key is pressed, reset the listener
                return keyboardControls();
        }
    });    
} 

$(STARTUP);