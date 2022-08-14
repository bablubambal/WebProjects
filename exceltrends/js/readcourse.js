var script_url = "https://script.google.com/macros/s/AKfycbwJqOTA7aPyaMRMedLF6jSIORToLZto0u9WIZf5ccnfXkif8m1cm46WTfv8yeYFVni1Mw/exec";
function read_value() {

// $("#re").css("visibility","hidden");

//    document.getElementById("loader").style.visibility = "visible";
var url = script_url+"?action=read";

$.getJSON(url, function (json) {

// Set the variables from the results array




  // CREATE DYNAMIC TABLE.
  let courseTemplate = `
  
  `
  var table = document.createElement("table");

  

  var header = table.createTHead();
  var row = header.insertRow(0);     
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = "<b>ID</b>";
  cell2.innerHTML = "<b> Course Name</b>";
  cell3.innerHTML = "<b> Course Desc </b>";
  cell4.innerHTML = "<b> Course Price </b>";
  cell5.innerHTML = "<b> Image </b>";
  
  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < json.records.length; i++) {

      tr = table.insertRow(-1);
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].ID;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].NAME;
          tabCell = tr.insertCell(-1)
          tabCell.innerHTML = json.records[i].DESC;
          tabCell = tr.insertCell(-1)
          tabCell.innerHTML = json.records[i].PRICE;
          tabCell = tr.insertCell(-1)
          tabCell.innerHTML = `<img src=${json.records[i].IMG} width='250px' />`;

      let data = `<div class="col-lg-4 course_box">
              <div class="card">
                  <img class="card-img-top" src="${json.records[i].IMG}" alt="Course Image"  width="100%" height="300px">
                  <div class="card-body text-center">
                      <div class="card-title"><a href="courses.html">${json.records[i].NAME}</a></div>
                      <!-- <div class="card-text">${json.records[i].DESC}...</div> -->
                  </div>
                  <div class="price_box d-flex flex-row align-items-center">
                      <div class="course_author_image">
                          <img src="images/teacher_1.jpg" alt="https://unsplash.com/@mehdizadeh" style="width: 50px;height: 50px;">
                      </div>
                      <div class="course_author_name">Excel Trends<span>Author</span></div>
                      <div class="course_price d-flex flex-column align-items-center justify-content-center"><span>${json.records[i].PRICE}</span></div>
                  </div>
              </div>
          </div>`

          courseTemplate = courseTemplate+data

      }


  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = courseTemplate;
  // divContainer.appendChild(table);
  // document.getElementById("loader").style.visibility = "hidden";
  // $("#re").css("visibility","visible");
});
}

read_value()