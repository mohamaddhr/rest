var services=document.getElementById('services');
var Original_Content = `<div>
<span class="flaticon-cheers display-4 text-black d-block mb-4"></span>
<h4 class="mb-4 text-primary">Drinks</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic maiores. Velit nisi, reprehenderit, nobis officia.</p>
</div>`
var Original_Chef = `
<div class="col-md-4">
            <blockquote class="testimonial">
              
              <div class="d-flex author">
                <img src="img/person_1.jpg" alt="" class="mr-4">
                <div class="author-info">
                  <h1>Mellisa Howard</h1>
                  <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt. </h4>
                </div>
              </div>  
            </blockquote>
          </div>
`

fetch('http://localhost:3000/Services')
  .then(response => response.json())
  .then(json => {json.services.forEach(element => {
    var content = Original_Content;
    content = content.replace('Drinks' , element.A)
    content = content.replace('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic maiores. Velit nisi, reprehenderit, nobis officia.' , element.B)
    content = content.replace('flaticon-cheers' , element.C)
    content = content.replace('flaticon-fruit' , element.C)
    content = content.replace('flaticon-coffee' , element.C)
    var service = document.createElement('div')
    service.innerHTML = content ;
    service.className = 'col-lg-4 col-md-6 icon-box';
    services.appendChild(service)
  });
})
fetch('http://localhost:3000/Chef')
  .then(response => response.json())
  .then(json => {json.Sheet1.forEach(element => {
    var contents = Original_Chef;
    contents = contents.replace('Mellisa Howard' , element.A)
    contents = contents.replace('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.' , element.B)
    contents = contents.replace("img/person_1.jpg" , element.C)
    var chef = document.createElement('div')
    chef.innerHTML = contents ;
    chef.className = "author-info";
    var Chef =document.getElementById('Chef');
    Chef.appendChild(chef)
  });
})


