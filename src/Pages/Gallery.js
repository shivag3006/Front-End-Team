import React from "react";

function Gallery() {
  return (
    <div className="gallery mt-5 shadow">
      <h1> Gallery </h1>
      <div className="container home-list-pop shadow">
        <div className="=row2 home-list-pop shadow">
          <div className="p-card w-100">
            <div className="card-body home-list-pop shadow">
              <div data-filter="*" >
                <div class="cbp-filter-item-active cbp-filter-item" >
                  All <input id="allfilter" type="hidden" value="All"/> 
                </div>
              </div >

            </div >
          </div>
        </div>
      </div>



      {/* <div id="js-filters-lightbox-gallery2" class="cbp-l-filters-button cbp-l-filters-left">
        <div data-filter="*" onclick="checkallfilter()" class="cbp-filter-item-active cbp-filter-item">All 
       <input type="hidden" id="allfilter" value="All"/>
        </div>
          <div data-filter=".4" onclick="checkfilter()" class="cbp-filter-item">Home Page Featured</div>
          <input type="hidden" id="filter" value="Home Page Featured"/>
            <div data-filter=".3" onclick="checkfilter()" class="cbp-filter-item">CSR Partnerships</div>
            <input type="hidden" id="filter" value="CSR Partnerships"/>
              <div data-filter=".2" onclick="checkfilter()" class="cbp-filter-item">Youth Empowerment</div>
              <input type="hidden" id="filter" value="Youth Empowerment"/>
                <div data-filter=".1" onclick="checkfilter()" class="cbp-filter-item">Children Upliftment</div>
                <input type="hidden" id="filter" value="Children Upliftment"/>
      </div> */}

      <div className="popup-side-bar2 ">
        <a
          href="RequestCallback"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b> Request Callback </b>
        </a>
      </div>

      <div className="popup-side-bar ">
        <a
          href="ContactUs"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b> Enquiry Now </b>
        </a>
      </div>



    </div>
  );
}

export default Gallery;
