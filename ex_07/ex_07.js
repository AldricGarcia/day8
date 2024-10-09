new Vue(
{
    el: '#app',
    data:
    {
        imageX: 0,
        imageY: 0,
    },
    methods:
    {
        teleportImage()
        {
            this.imageX = Math.random() * (window.innerWidth - 200);
            this.imageY = Math.random() * (window.innerHeight - 200);
        }
    },
    mounted()
    {
        this.imageX = window.innerWidth / 2 - 100;
        this.imageY = window.innerHeight / 2 - 100;
    }
}); 