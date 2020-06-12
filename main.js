$(document).ready(() => {
    $('.btn').click((e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    console.log(searchText);
    axios.get('http://ufo-api.herokuapp.com/api/sightings/search?city=' + searchText)
        .then((response) => {
            console.log(response);

            let data = response.data.sightings
            let output = '';
            $.each(data, (index, data) => {
                output += `\
                
                <div class="col-md-4 d-flex align-items-stretch mb-4">
                <div class="card text-white bg-dark" style="width: 18rem;">
  <div class="card-body ">
    <h5 class="card-header">${data.shape}</h5>
    <p class="card-text">${data.summary}</p>
    <a href="${data.url}" target="_blank" class="card-link">Read the whole story!</a>
  </div>
</div>
</div>

                `;
            });

            $('#sightings').html(output);

        })
        .catch((err) => {
            console.log(err);
        })
}