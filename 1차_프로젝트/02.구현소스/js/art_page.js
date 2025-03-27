import { artData } from "./data.js";

// 파라미터값
const pm = Number(location.search.split("=")[1]);

// 선택 데이터
const selData = artData.find((v) => v.idx === pm);
console.log(pm, selData);

const range = [18, 23, 24, 17, 21, 20, 14,2];

$(".contents").html(
  `
        <div class="art-box">
          <h2>${selData.desc}<br />${selData.title}</h2>
        </div>
        <div class="art-wrap">
          <img src="${selData.image}" alt="art1" ${
    range.includes(pm)
      ? "style='height:600px;'"
      : pm === 13
      ? "style='max-width:50%;height:300px;'"
      : ""
  } />
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
                ${selData.imageDesc}
              </p>
            </div>
          </div>
        </div>
    `
);
