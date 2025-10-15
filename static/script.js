function generateQR() {
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;
    const qrImage = document.getElementById('qrImage');

    if(!text) {
        alert("Lütfen metin veya URL girin!");
        return;
    }

    // Form verilerini backend'e gönder
    const formData = new FormData();
    formData.append('text', text);
    formData.append('color', color);

    fetch('/generate', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(!response.ok) throw new Error("QR kod oluşturulamadı");
        return response.blob();
    })
    .then(blob => {
        qrImage.src = URL.createObjectURL(blob);
        qrImage.style.display = 'block';
    })
    .catch(err => alert(err));
}
