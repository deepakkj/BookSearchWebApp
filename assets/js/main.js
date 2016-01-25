/*TAB NAVIGATION TO DROPDOWN STARTS*/
/*TAB NAVIGATION TO DROPDOWN ENDS*/
/*
$('.nav-tabs-dropdown').each(function(i, elm) {
    
    $(elm).text($(elm).next('ul').find('li.active a').text());
    
});
  
$('.nav-tabs-dropdown').on('click', function(e) {

    e.preventDefault();
    
    $(e.target).toggleClass('open').next('ul').slideToggle();
    
});

$('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function(e) {

    e.preventDefault();
    
    $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
      
});
*/

// nav-tabs-wrapper
// <li><a href="#vtab2" data-toggle="tab"><span class="item-name">Tab2</span><span class="item-price">Rs10000000</span></a></li>



//fetching data from json and assigning it to respective div's and replicating them

		var totalBooks = 0;
		var bookList = null;
		var bookAllDetails = null;

$.getJSON('https://capillary.0x10.info/api/books?type=json&query=list_books', function (data) {
	$.each(data, function (key, value) {
		var books = key;
		var allbooksData = value;
		var tabid = 1;
		//looping through each book
		$.each(allbooksData, function (i, v) {
			totalBooks++;
			//looping through each books MAIN DETAILS
			var bookId = v.id;
			var bookName = v.name;
			var bookImageURL = v.image;
			var bookAuthor = v.author;
			var bookPrice = v.price;
			var bookRating = v.rating;
			var bookDetailsPublisher = v.details.Publisher;
			var bookDetailsISBN = v.details.ISBN;
			var bookDetailsBinding = v.details.Binding;
			var bookDescription = v.description;
			
			//Creating the the BookName and BookPrice by storing it in  bookList variable.
			bookList = "<li><a data-toggle='pill' href='#book"+tabid+"'><i class='fa fa-book'></i><span class='bookName'>" + bookName + "</span><span class='bookPrice'>" + bookPrice + "</span></a></li>" ;
			//Storing the remainingt book details in bookDetails in order to display the content against the respective book names.
			bookAllDetails = "<div id='book"+tabid+"' class='tab-pane fade in'><div class='row'><div class='col-xs-12 col-sm-6 book-image-container'><img src='"+bookImageURL+"' class='img-responsive book-image'></div><div class='col-xs-12 col-sm-6 book-details-container'><div class='panel panel-default'><div class='panel-heading'><h6 class='panel-title text-center'>Details</h6></div><div class='panel-body'><p>Publisher:&nbsp;<span>"+bookDetailsPublisher+"</span></p><p>ISBN:&nbsp;<span>"+bookDetailsISBN+"</span></p><p>Binding:&nbsp<span>"+bookDetailsBinding+"</span></p><p>Ratings:&nbsp;<span>"+bookRating+"</span></p></div></div></div><div class='col-xs-12 books-description'><h6>Description</h6><p class='desc'>"+bookDescription+"</p></div><div class='col-xs-12 text-center clearfix'><a type='button' class='btn btn-default btn-lg btn-share'><span aria-hidden='true'><i class='fa fa-share-alt'></i></span> Share</a><a type='button' class='btn btn-default btn-lg btn-bookmark'><span aria-hidden='true'><i class='fa fa-bookmark'></i></span> Bookmark</a></div></div></div>";
			
			
			//Appending it to repsective places in the DOM
			$(bookList).appendTo(".books-list");
			$(bookAllDetails).appendTo(".books-details");
			
			
			tabid++;
		});
		
	});
		//Displaying Total Books in the navbar
	$("#totalbooks").text(totalBooks);
	
	//Adding 'active' class inorder to enable the 1st item in the respective books-list and book-details.
	$(".books-list li").first().addClass("active");
	$(".books-details > div").first().addClass("active");
});


//add class active to pills
$(document).ready(function(){

});
//alert(bookList);
//$(bookList).appendTo("body");