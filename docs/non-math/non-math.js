$("#gallery-unfiled")
.justifiedGallery({
    rowHeight: 150,
    margins: 3
})
.on("jg.complete", () => {
    lightGallery(
        document.getElementById("gallery-unfiled"),
        {
            plugins: [lgZoom, lgThumbnail, lgVideo],
        }
    );
});

$("#gallery-alwar")
.justifiedGallery({
    rowHeight: 150,
    margins: 3
})
.on("jg.complete", () => {
lightGallery(
    document.getElementById("gallery-alwar"),
    {
        plugins: [lgZoom, lgThumbnail, lgVideo],
    }
);
});

$("#gallery-stephens")
.justifiedGallery({
    rowHeight: 150,
    margins: 3
})
.on("jg.complete", () => {
lightGallery(
    document.getElementById("gallery-stephens"),
    {
        plugins: [lgZoom, lgThumbnail, lgVideo],
    }
);
});

$("#gallery-creations")
.justifiedGallery({
    rowHeight: 150,
    margins: 3
})
.on("jg.complete", () => {
lightGallery(
    document.getElementById("gallery-creations"),
    {
        plugins: [lgZoom, lgThumbnail, lgVideo],
    }
);
});

$("#gallery-piano")
.justifiedGallery({
  rowHeight: 250,
  margins: 3
})
.on("jg.complete", () => {
  lightGallery(
    document.getElementById("gallery-piano"),
    {
      plugins: [lgZoom, lgThumbnail, lgVideo],
    }
  );
});

$("#gallery-iitgn")
.justifiedGallery({
  rowHeight: 150,
  margins: 3
})
.on("jg.complete", () => {
  lightGallery(
    document.getElementById("gallery-iitgn"),
    {
      plugins: [lgZoom, lgThumbnail, lgVideo],
    }
  );
});