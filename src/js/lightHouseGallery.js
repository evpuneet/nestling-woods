$(document).ready(function() {
    // add all to same gallery
    $("#sample-flat-img a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $("#sample-flat-img a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    
    // start fancybox:
    $("#sample-flat-img a").fancybox();
  });

  $(document).ready(function() {
    // add all to same gallery
    $("#project-gallery-img a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $("#project-gallery-img a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $("#project-gallery-img a").fancybox();
  });

  $(document).ready(function() {
    // add all to same gallery
    $("#construction-updates-img a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $("#construction-updates-img a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    
    // start fancybox:
    $("#construction-updates-img a").fancybox();
  });


  $(document).ready(function() {
    // add all to same gallery
    $("#sample-flat-mob a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $("#sample-flat-mob a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    
    // start fancybox:
    $("#sample-flat-mob a").fancybox();
  });

  $(document).ready(function() {
    // add all to same gallery
    $("#project-gallery-mob a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $("#project-gallery-mob a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $("#project-gallery-mob a").fancybox();
  });

  $(document).ready(function() {
    // add all to same gallery
    $("#construction-updates-mob a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $("#construction-updates-mob a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    
    // start fancybox:
    $("#construction-updates-mob a").fancybox();
  });