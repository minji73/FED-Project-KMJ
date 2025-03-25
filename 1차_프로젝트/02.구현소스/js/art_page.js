import { artData } from "./data.js";

$('.contents').html(
     `
        <div class="art-box">
          <h2>Gispen 2205 Chair<br />ABAN</h2>
        </div>
        <div class="art-wrap">
          <img src="${artData.image}" alt="art1" />
          <div class="discrip">
            <h2>Artwork Description</h2>
            <br /><br />
            <div class="info">
              <p><span class="image">Image size:</span> 59.4 x 42cm</p>
              <p><span class="fram">Frame size:</span> 60 x 42.5cm (A2)</p>
              <p>
                <span class="method">Production Method:</span> Pigment print on
                paper
              </p>
              <p>
                <span class="material">Material:</span> Red aluminium frame,
                acrylic
              </p>
              <br />
              <p>
                What stories do the chairs in Avang's paintings hold? The "Chair
                Collection" art poster series is a collaboration between Print
                Bakery and the artist Avang. Avang's "Chair Collection" series
                captures the essence of "chairs," which convey comfort in
                everyday life, through the artist's perspective. The series,
                limited to only 100 copies, holds collectible value and is an
                excellent way to change the atmosphere of a room with a subtle
                shift. "The chair, as a medium to enjoy one's imagination in
                ultimate comfort. I hope the warmth of objects, like the chair,
                will bring to mind each person’s own warm moments." Avang, from
                the artist’s note -
              </p>
            </div>
          </div>
        </div>
    `
);