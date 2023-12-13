export const getRandomIndex = () => {
    const myImages = [
        '/images/loginImages/bg1.jpg',
        '/images/loginImages/bg2.jpg',
        '/images/loginImages/bg3.jpg',
        '/images/loginImages/bg4.jpg',
        '/images/loginImages/bg5.jpg',
        '/images/loginImages/bg6.jpg',
    ];
    const randomIndex = Math.floor(Math.random() * myImages.length)
    const randomImage = myImages[randomIndex];
    return randomImage
}