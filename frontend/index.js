let search_input = document.getElementById('search_input');
let search = document.getElementsByClassName('search')[0];
let play = document.getElementById('play');
var urlParams = new URLSearchParams(window.location.search);
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8085/api/v1/movies",
        method: "get"

    }).done(function(result){
        var listMovie = result.data
        var html = ""
        var search_html = ""
        for (i = 0; i < listMovie.length; i++) {
            
            html += 
            `<a href = "#" class = "card" data-id="${listMovie[i].imdbId}">
            <img class = "poster" src = "${listMovie[i].poster}">
            <div class="rest_card">
                <img src = "${listMovie[i].backdrops[1]}">
                <div class = "cont">
                    <h4>${listMovie[i].title}</h4>
                    <div class="sub">
                        <p>${listMovie[i].genres[0]}, ${listMovie[i].releaseDate}</p>
                        <h3><span>IMDB</span> <i class="bi bi-star-fill"></i> 9.6</h3>
                    </div>

                </div>

            </div>
        </a>`
                      
        }

        for (i = 0; i < listMovie.length; i++) {
            let card = document.createElement('a');
            card.classList.add('card-search');
            card.setAttribute('data-id',listMovie[i].imdbId);
            card.innerHTML = `
                               <img src = "${listMovie[i].poster}">
                               <div class = "cont">
                                   <h3>${listMovie[i].title}</h3>
                                   <p>${listMovie[i].genres[0]} <span>IMDB</span> <i class="bi bi-star-fill"></i> ${listMovie[i].imdbPoint}</p>
                               </div>
                           `
                            search.appendChild(card);
        }
        
        $(document).on('click', '.card-search', function(e) {
            e.preventDefault();  
            var movieId = $(this).data('id');  
            window.location.href = `index.html?id=${movieId}`; 
        });

        $('#container-movie').append(html);
        //$('.search').append(search_html);
        if (!urlParams.get('id')) {
            //console.log(urlParams.get('id'));
            var firstMovieId =  listMovie[0].imdbId;
            document.getElementById('title').innerText = listMovie[0].title;
            document.getElementById('description').innerText = listMovie[0].description;
            document.getElementById('date').innerText = listMovie[0].releaseDate;
            document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> ${listMovie[0].imdbPoint}`;
            play.addEventListener('click', () => {

                window.location.href = `movie-stream.html?id=${firstMovieId}`;
            });
            var trailerLink = listMovie[0].trailerLink;
            var videoId = trailerLink.split('v=')[1];
                    var ampersandPosition = videoId.indexOf('&');
                    if (ampersandPosition !== -1) {
                        videoId = videoId.substring(0, ampersandPosition);
                    }
            
                    // Set the iframe src to the YouTube embed link
                    var embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&controls=0&autohide=1&vq=hd1440&playinline=1&enablejsapi=1&playlist=${videoId}`;
                    document.getElementById('run-video').src = embedLink;
        } else {
            $(document).ready(function() {
                var urlParams = new URLSearchParams(window.location.search);
                var movieId = urlParams.get('id');
                let play = document.getElementById('play');
                $.ajax({
                    url: `http://localhost:8085/api/v1/movies/${movieId}`,
                    method: "GET",
                }).done(function(result) {
                    
                    var movie = result.data;
                    var trailerLink = movie[0].trailerLink;
                    var videoId = trailerLink.split('v=')[1];
                    var ampersandPosition = videoId.indexOf('&');
                    if (ampersandPosition !== -1) {
                        videoId = videoId.substring(0, ampersandPosition);
                    }
            
                    // Set the iframe src to the YouTube embed link
                    var embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&controls=0&autohide=1&vq=hd1440&playinline=1&enablejsapi=1&playlist=${videoId}`;
                    document.getElementById('run-video').src = embedLink;
                    document.getElementById('title').innerText = movie[0].title;
                    document.getElementById('description').innerText = movie[0].description;
                    document.getElementById('date').innerText = movie[0].releaseDate;
                    document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> ${movie[0].imdbPoint}`;
                    
            
                });
                play.addEventListener('click', () => {
                    window.location.href = `movie-stream.html?id=${movieId}`;
                    });
            });


        }
        




        search_input.addEventListener('keyup', () => {
            let filter = search_input.value.toUpperCase();
            let a = search.getElementsByTagName('a');

            for (let index = 0; index < a.length; index++) {
                let b = a[index].getElementsByClassName('cont')[0];
                // console.log(a.textContent)
                let TextValue = b.textContent || b.innerText;
                if (TextValue.toUpperCase().indexOf(filter) > -1) {
                    a[index].style.display = "flex";
                    search.style.visibility = "visible";
                    search.style.opacity = 1;
                } else {
                    a[index].style.display = "none";
                }
                if (search_input.value == 0) {
                    search.style.visibility = "hidden";
                    search.style.opacity = 0;
                }
            }
        })


    })

})

$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8085/api/v1/movies/genre/Action",
        method: "get"

    }).done(function(result){
        var listMovie = result.data
        var html = ""
        for (i = 0; i < listMovie.length; i++) {
            var jsonMovie = JSON.stringify(listMovie[i]);
            html += 
            `<a href = "#" class = "card" data-id="${listMovie[i].imdbId}">
                    <img class = "poster" src = "${listMovie[i].poster}">
                    <div class="rest_card">
                        <img src = "${listMovie[i].backdrops[1]}">
                        <div class = "cont">
                            <h4>${listMovie[i].title}</h4>
                            <div class="sub">
                                <p>${listMovie[i].genres[0]}, ${listMovie[i].releaseDate}</p>
                                <h3><span>IMDB</span> <i class="bi bi-star-fill"></i> 9.6</h3>
                            </div>

                        </div>

                    </div>
                </a>`
            
        }

        $('#action-movie').append(html)
        $(document).on('click', '.card', function(e) {
            e.preventDefault();  
            var movieId = $(this).data('id');  
            window.location.href = `index.html?id=${movieId}`; 
        });

    })

})

$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8085/api/v1/movies/genre/Drama",
        method: "get"

    }).done(function(result){
        var listMovie = result.data
        var html = ""
        for (i = 0; i < listMovie.length; i++) {
            var jsonMovie = JSON.stringify(listMovie[i]);
            html += 
            `<a href = "#" class = "card" data-id="${listMovie[i].imdbId}">
                    <img class = "poster" src = "${listMovie[i].poster}">
                    <div class="rest_card">
                        <img src = "${listMovie[i].backdrops[1]}">
                        <div class = "cont">
                            <h4>${listMovie[i].title}</h4>
                            <div class="sub">
                                <p>${listMovie[i].genres[0]}, ${listMovie[i].releaseDate}</p>
                                <h3><span>IMDB</span> <i class="bi bi-star-fill"></i> 9.6</h3>
                            </div>

                        </div>

                    </div>
                </a>`
            
        }

        $('#darama-movie').append(html)
        $(document).on('click', '.card', function(e) {
            e.preventDefault();  
            var movieId = $(this).data('id');  
            window.location.href = `index.html?id=${movieId}`; 
        });

    })

})

$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8085/api/v1/movies/genre/Sci-Fi",
        method: "get"

    }).done(function(result){
        var listMovie = result.data
        var html = ""
        for (i = 0; i < listMovie.length; i++) {
            var jsonMovie = JSON.stringify(listMovie[i]);
            html += 
            `<a href = "#" class = "card" data-id="${listMovie[i].imdbId}">
                    <img class = "poster" src = "${listMovie[i].poster}">
                    <div class="rest_card">
                        <img src = "${listMovie[i].backdrops[1]}">
                        <div class = "cont">
                            <h4>${listMovie[i].title}</h4>
                            <div class="sub">
                                <p>${listMovie[i].genres[0]}, ${listMovie[i].releaseDate}</p>
                                <h3><span>IMDB</span> <i class="bi bi-star-fill"></i> 9.6</h3>
                            </div>

                        </div>

                    </div>
                </a>`
            
        }

        $('#Sci-Fi-movie').append(html)
        $(document).on('click', '.card', function(e) {
            e.preventDefault();  
            var movieId = $(this).data('id');  
            window.location.href = `index.html?id=${movieId}`; 
        });

    })

})



