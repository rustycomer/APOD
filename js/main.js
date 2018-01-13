const url = "https://api.nasa.gov/planetary/apod?api_key=iwNoUqaVVyLTd9fe3xZ8hmQL4RdY0ZrwHQJt29YM&count=2";


$.ajax({
    url: url,
    success: function(result){
        if("copyright" in result) {
            $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
            $("#copyright").text("Image Credits: " + "Public Domain");
        }


        if(result.media_type == "video"){
            $("#apod_vid_id").css("display", "none");

        }
        $("#image1").attr("src", result[0].url);
        $("#modal1img").attr("src", result[0].hdurl);
        $("#image2").attr("src", result[1].url);
        $("#modal2img").attr("src", result[1].hdurl);
        $("#image1description").text(result[0].explanation);
        $("#image1title").text(result[0].title);
        $("#modal1Label").text(result[0].title);
        $("#image1date").text(result[0].date);

        $("#image2description").text(result[1].explanation);
        $("#image2title").text(result[1].title);
        $("#modal2Label").text(result[1].title);
        $("#image2date").text(result[1].date);
    }
});