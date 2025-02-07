function cambiarPagina(pagina) {
    window.location.href = pagina;
}

function redirectToSpotify(artistId) {
    // Intentar abrir la app de Spotify (si está instalada)
    window.location = "spotify://artist/" + artistId;

    // Si la app no está instalada, abrir la página web en una nueva pestaña
    setTimeout(function() {
        window.open("https://open.spotify.com/artist/" + artistId, "_blank");
    }, 25);
}

function redirectToSpotify2(albumId) {
    // Intentar abrir la app de Spotify (si está instalada)
    window.location = "spotify://album/" + albumId;

    // Si la app no está instalada, abrir la página web en una nueva pestaña
    setTimeout(function() {
        window.open("https://open.spotify.com/album/" + albumId, "_blank");
    }, 25);
}