import { artData } from "./data.js";
$(() => {
    // art gallery 컨텐츠 생성
    $('.art-gallery').html(
        artData.map(v => `
            <a href="${v.attr}" class="item art${v.idx}">
                <img src="./img/art${v.idx}.png" alt="${v.title} 포스터 이미지">
                <div class="desc">
                <p class="art-title">${v.title}</p>
                <span class="sub">${v.desc}</span>
                </div>
            </a>
        `)
    );
});