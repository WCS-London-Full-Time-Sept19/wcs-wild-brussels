const renderPage = () => {
  //get url paramemters
  function getUrlParameters(key) {
    //return var
    var parameters = {};
    //get url component decoded and url part after questions mark
    var urlComps = decodeURIComponent(
      window.location.href.slice(window.location.href.indexOf('?') + 1)
    );
    //key pairs split on ampersand
    var keyPairs = urlComps.split('&');
    //for each key pair split them and place in parameters
    keyPairs.forEach(function(val, key) {
      var keyPairParts = val.split('=', 2); //max two splits
      parameters[keyPairParts[0]] = keyPairParts[1]; //now assoc array
    });

    console.log(parameters);
    //return required url attribute
    return parameters[key];
  }

  // get the current page number
  let currentPage = getUrlParameters('page');

  // set number of posts to display
  const numPerPage = 3;

  // slice out posts the relevant posts to show
  let begin = (currentPage - 1) * numPerPage;
  let end = begin + numPerPage;
  const postList = blogPosts.slice(begin, end);

  // render posts
  const renderPosts = postList => {
    let blogPostsContainer = document.getElementById('blog-posts');
    // check if the array is not empty
    if (postList.length > 0) {
      // build the post list
      postList.map(post => {
        // create a new document fragment
        let blogFragment = document.createDocumentFragment();
        // create child nodes
        let article = document.createElement('article');
        article.classList.add('border', 'mt-5');

        let header = document.createElement('header');
        header.classList.add('bg-light', 'p-5');

        article.appendChild(header);

        let blogTitle = document.createElement('h2');
        let blogTitleText = document.createTextNode(post.title);
        blogTitle.appendChild(blogTitleText);

        header.appendChild(blogTitle);

        let headerRow = document.createElement('div');
        headerRow.classList.add(
          'd-flex',
          'flex-column',
          'flex-md-row',
          'justify-content-between'
        );

        header.appendChild(headerRow);

        let blogAuthor = document.createElement('h3');
        blogAuthor.classList.add('text-secondary');
        let blogAuthorText = document.createTextNode(post.author);
        blogAuthor.appendChild(blogAuthorText);

        let blogDate = document.createElement('h3');
        blogDate.classList.add('text-secondary');
        let blogDateText = document.createTextNode(post.date);
        blogDate.appendChild(blogDateText);

        let blogPostContainer = document.createElement('div');

        let blogImage = document.createElement('img');
        blogImage.classList.add('img-fluid');
        blogImage.src = post.imageUrl;
        blogImage.alt = post.imageAlt;

        let blogContent = document.createElement('p');
        blogContent.classList.add('p-5');
        let blogContentText = document.createTextNode(post.text);
        blogContent.appendChild(blogContentText);

        blogPostContainer.appendChild(blogImage);
        blogPostContainer.appendChild(blogContent);

        article.appendChild(blogPostContainer);

        headerRow.appendChild(blogAuthor);
        headerRow.appendChild(blogDate);

        blogFragment.appendChild(article);

        blogPostsContainer.appendChild(blogFragment);
      });
    } else {
      let messageContainer = document.createElement('div');
      messageContainer.classList.add('mt-5');

      let message = document.createElement('h2');
      let messageText = document.createTextNode(
        'Sorry, no posts here. Try another page.'
      );
      message.appendChild(messageText);

      messageContainer.appendChild(message);

      blogPostsContainer.appendChild(messageContainer);
    }
  };

  renderPosts(postList);

  // >>>>>>> ADD PAGINATION SCRIPTS <<<<<<<
};

window.onload = renderPage;

//get url paramemters
function getUrlParameters(key) {
  //return var
  var parameters = {};
  //get url component decoded and url part after questions mark
  var urlComps = decodeURIComponent(
    window.location.href.slice(window.location.href.indexOf('?') + 1)
  );
  //key pairs split on ampersand
  var keyPairs = urlComps.split('&');
  //for each key pair split them and place in parameters
  keyPairs.forEach(function(val, key) {
    var keyPairParts = val.split('=', 2); //max two splits
    parameters[keyPairParts[0]] = keyPairParts[1]; //now assoc array
  });
  //return required url attribute
  return parameters[key];
}
