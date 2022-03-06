// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Client-ID {{ad385aaa6414098}}");

// var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: {
    "Authorization": "Client-ID ad385aaa6414098"
  },
  redirect: 'follow'
};

fetch("https://api.imgur.com/3/gallery/random", requestOptions)
  .then(response => response.json())
  .then((result) => {
    // console.log(result)
    displayData(result.data);
  }).catch(error => console.log('error', error));


const displayData = (data) => {
  console.log(data);

  
  data.map((item) => {
  
    //create cart container 
    let cartContainer = document.createElement("div");
    cartContainer.setAttribute("class","cartContainer");

    //create image container
    let cartImgContainer = document.createElement("div");
    cartImgContainer.setAttribute("class","cartImgContainer");

    //create image tag
    let img = document.createElement("img");

    if(item.mp4){

    }else{
       
        img.setAttribute("src","https://images.pexels.com/photos/9359330/pexels-photo-9359330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
        img.setAttribute("alt","post_image");
    }
   

    //create cart detail container
    let cartDetail = document.createElement("div");
    cartDetail.setAttribute("class","cartDetail");


    //create div for title
    let title = document.createElement("title");
    title.setAttribute("class","title");

    //create p tag for title element
    let titleHeading = document.createElement("p");
    titleHeading.innerHTML = item.title;

    //create div for reaction
    let reaction = document.createElement("div");
    reaction.setAttribute("class","reaction");

    //create div for likes and dislikes
    let likeDislike = document.createElement("div");
    likeDislike.setAttribute("class","likeDislike");

    likeDislike.innerHTML = `<!-- Like SVG -->
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg>
    
                  <p>${item.favorite_count}</p>
    
                <!-- Dislike SVG -->
                <svg width="16" height="16" viewBox="0 0 16 16" class="Vote Vote-down" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Downvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M8.803 13.476a1.2 1.2 0 01-1.606 0 53.03 53.03 0 01-2.364-2.243 29.613 29.613 0 01-2.422-2.722c-.339-.435-.025-1.028.526-1.028h2.397V3.336c0-.524.306-.982.823-1.064A11.874 11.874 0 018 2.15c.829 0 1.427.056 1.843.122.517.082.824.54.824 1.064v4.147h2.396c.552 0 .865.593.527 1.028-.52.669-1.32 1.62-2.423 2.722a53.038 53.038 0 01-2.364 2.243z"></path></svg>`


    //create div for comment
    let comment = document.createElement("div");
    comment.setAttribute("class","comment");

    comment.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg>


    <P>${item.comment_count}</P>`



    //create div for views
    let views = document.createElement("div");
    views.setAttribute("class","views");

    views.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg>

                <P>${item.views}</P>`


    //append in title
    title.append(titleHeading);

    //append in reaction
    reaction.append(likeDislike,comment,views);

    //append in cart details
    cartDetail.append(title,reaction);


    //append in cart image container
    cartImgContainer.append(img)

    // append in cartContainer
    cartContainer.append(cartImgContainer,cartDetail);


    //append in section
    document.querySelector(".postsContainer").append(cartContainer);

  })

  
}

