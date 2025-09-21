document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.getElementById("load-iframe-map").innerHTML = `
            <iframe class="contact__iframe"
                frameborder="0" scrolling="0" marginheight="0" marginwidth="0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13330242.660757443!2d-17.56953192974292!3d35.34438331820613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2zRXNwYcOxYQ!5e0!3m2!1ses!2ses!4v1758467234237!5m2!1ses!2ses"
            ></iframe>
        `;
    }, 500);

    
});
