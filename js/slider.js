var curentImage = new Array();
var leftRight = new Array();
var timerID = 0;
var timer = "enabled";

function makeSelectedBorder()
	{
	jQuery(jQuery(".thumbnail-image")[curentImage[0]]).css({ "border":"6px solid rgb(175, 174, 174)" });
	for(i = 0;i < jQuery(".original-image").length;i++)
		{
		if(i == curentImage[0])
			{
			i++;
			}
		if(jQuery(jQuery(".thumbnail-image")[i]))
			{
			jQuery(jQuery(".thumbnail-image")[i]).css({ "border":"6px solid rgba(0, 0, 0, 0.3)" });
			if(jQuery("#slider-thumbnails-overlay"))
				{
				jQuery(jQuery(".thumbnail-image")[i]).css({ "opacity":"1" });
				}
			}
		}
	if(jQuery("#slider-thumbnails-overlay"))
		{
		jQuery("#overlay-thumbnail-"+curentImage[0]+"").css({ "opacity":"0.5" });
		}
	}
function startTime()
	{
	timer = "enabled";
	timerID = window.setInterval(callAfterTime, 5000);
	}

/* ------------------------------------------- */
/* -         For slideShow of imgaes         - */
/* ------------------------------------------- */

function previousImage()
	{
	if(curentImage[0] == 0)
		{
		curentImage[0] = jQuery(".original-image").length-1; 
		}
	else
		{
		curentImage[0]--; 
		}
	curentImage[1] = curentImage[0] - 1;
	if(curentImage[1] == -1)
		{
		curentImage[1] = jQuery(".original-image").length-1; 
		}
	jQuery(".slider-slide-move-left").animate({ right : "942px" },function()
		{
		jQuery(".slider-slide-move-left").css({ "right" : "0px"});
		jQuery(".slider-made-to-slide-1").remove();
		jQuery(".slider-made-to-slide").addClass("slider-made-to-slide-1");
		jQuery(".slider-made-to-slide-1").removeClass("slider-made-to-slide-3");
		jQuery(".slider-made-to-slide-1").removeClass("slider-made-to-slide-2");
		var imagePath = jQuery(jQuery('.original-image img')[curentImage[1]]).attr('src');
		jQuery(".slider-slide-move-left").append("<div class='slider-made-to-slide slider-made-to-slide-3'><img src='"+ imagePath +"' /></div>");
		makeSelectedBorder();
		});
	}

function nextImage(imageID)
	{
	if(curentImage[0] == (jQuery(".original-image").length-2) || curentImage[0] == (jQuery(".original-image").length-1))
		{
		curentImage[0] = 1; 
		}
	else
		{
		curentImage[0]++; 
		}
	if(imageID != -1)
		{
		curentImage[0] = imageID;
		jQuery(".slider-made-to-slide-2 img").attr({'src':'slider-full-pics/'+ curentImage[0] + '.jpg'});
		console.log(curentImage);
		}
	curentImage[1] = curentImage[0] + 1;
	jQuery(".slider-slide-move-left").animate({ right : "942px" },function()
		{
		jQuery(".slider-slide-move-left").css({ "right" : "0px" });
		jQuery(".slider-made-to-slide-1").remove();
		jQuery(".slider-made-to-slide").addClass("slider-made-to-slide-1");
		jQuery(".slider-made-to-slide-1").removeClass("slider-made-to-slide-2");
		jQuery(".slider-made-to-slide-1").removeClass("slider-made-to-slide-3");
		var imagePath = jQuery(jQuery('.original-image img')[curentImage[1]]).attr('src');
		jQuery(".slider-slide-move-left").append("<div class='slider-made-to-slide slider-made-to-slide-2'><img src='"+ imagePath +"' /></div>");
		makeSelectedBorder();
		});
	}
	
/* ------------------------------------------- */
/* -      For slideShow of imgaes Ends       - */
/* ------------------------------------------- */
	
function callAfterTime()
	{
	next = curentImage + 1;
	if(next > jQuery(".original-image").length)
		{
		next = 1;
		}
	}
	
jQuery(document).ready(function()
	{
	var leftVar = "'left'";
	var createHtml = '<div id="thumbnail-parent"><div id="thumbnail-left-arrow" onClick="thumbnailArrows('+leftVar+');"></div>';
	createHtml += '<div id="move-on-arrows-click">';
	var divWidth = 137;
	for(x = 1;x <= jQuery(".original-image").length;x++)
		{
		if(x == 1)
			{
			createHtml += '<div class="thumbnail-image" id="thumbnail-image-'+x+'" style="margin-left: 0px;" onClick="nextImage('+ x +');"><img src="slider-thumbnails/'+x+'.jpg" /></div>';
			continue;
			}
		createHtml += '<div class="thumbnail-image" id="thumbnail-image-'+x+'" onClick="nextImage('+ x +');"><img src="slider-thumbnails/'+ x +'.jpg" /></div>';
		divWidth = divWidth + 137;
		}
	leftVar = "'right'";
	createHtml += '</div><div id="thumbnail-right-arrow" onClick="thumbnailArrows('+leftVar+');"></div></div>';
	jQuery("#show-thumbnail-images").html(createHtml);
	if(jQuery(".original-image").length > 7)
		{
		jQuery("#move-on-arrows-click").css({ "width": divWidth });
		}
	jQuery(".slider-wraper-album-view").click(function()
		{
		var html = '<div class="thumbnails-overlay" id="slider-thumbnails-overlay">';
		html += '<div class="overlay-header">';
		html += '<div class="overlay-header-close" id="overlay-header-close-button" onClick="closeOverlay();"></div></div>';
		html += '<div class="overlay-content" id="overlay-header-content-id"><div class="overlay-content-wraped">';
		showThumbnailsOnOverlay(html, curentImage);
		});
	jQuery(".slider-wraper-full-screen").click(function()
		{
		var newHTML = '<div class="slider-full-screen-image">';
		newHTML += '<div class="slider-full-screen-header"><div class="slider-full-screen-header-close" onClick="disablFullScreenOverlay();"></div></div>';
		newHTML += '<div class="full-image-arrow-left-make-center"><div class="full-image-left-nav-arrow" id="right-nav" onclick="previoisFullWidthImage();" title="Previous Image"></div></div>';
		newHTML += '<div class="slider-full-screen-full-width-img"><img src="slider-full-pics/'+(curentImage[0]+1)+'.jpg" /></div>';
		newHTML += '<div class="full-image-arrow-right-make-center"><div class="full-image-arrow-make-center"><div class="full-image-right-nav-arrow" id="right-nav" onclick="nextFullWidthImage();" title="Next Image"></div></div>';
		newHTML += '</div>';
		jQuery("body").append(newHTML);
		});
	curentImage[0] = 0; 
	curentImage[1] = 1;
	jQuery(".slider-slide-move-left-wraper").append("<div class='slider-slide-move-left'><div class='slider-made-to-slide slider-made-to-slide-1'><img src = '" + jQuery(jQuery('.original-image img')[0]).attr('src') + "' /></div><div  class='slider-made-to-slide slider-made-to-slide-2'><img src = '" + jQuery(jQuery('.original-image img')[1]).attr('src') + "' /></div></div>");
	jQuery("#thumbnail-left-arrow").css({ "display":"none" });
	makeSelectedBorder();
	});

var moverLeft = 0;
var rightArrowClicks = 7;
var leftArrowClicks = 7;

function thumbnailArrows(thumbnailAction)
	{
	if(thumbnailAction == "right")
		{
		moverLeft = moverLeft + 136;
		rightArrowClicks++;
		leftArrowClicks--;
		}
	else
		{
		moverLeft = moverLeft - 136;
		leftArrowClicks++;
		rightArrowClicks--;
		}
	var get = moverLeft;
	get += "px";
	$('#move-on-arrows-click').animate({ right : get });
	if(leftArrowClicks == 7)
		{
		jQuery("#thumbnail-left-arrow").css({ "display":"none" });
		}
	else
		{
		jQuery("#thumbnail-left-arrow").css({ "display":"block" });
		}
	if(rightArrowClicks == (jQuery(".original-image").length))
		{
		jQuery("#thumbnail-right-arrow").css({ "display":"none" });
		}
	else
		{
		jQuery("#thumbnail-right-arrow").css({ "display":"block" });
		}
	}
function showThatImage(getImageID)
	{
	closeOverlay();
	nextImage(getImageID);
	}
function showThumbnailsOnOverlay(getHtml, selected)
	{
	var width = 865;
	var get = 10;
	var newDiv = 0;
	getHtml += '<div class="overlay-thumbnail-line">';
	for(i = 0;i <= jQuery(".original-image").length-1;i++)
		{
		if(i ==  get)
			{
			get = get + 10;
			width = width + 865;
			}
		if(newDiv == 10)
			{
			getHtml += '</div>';
			getHtml += '<div class="overlay-thumbnail-line">';
			newDiv = 0;
			}
		if(newDiv != 10)
			{
			getHtml += '<div class="overlay-thumbnail" id="overlay-thumbnail-'+ (i+1) +'">';
			getHtml += '<div class="overlay-thumbnail-image" id="overlay-thumbnail-image-'+(i+1)+'">';
			getHtml += '<img src="slider-thumbnails/'+(i+1)+'.jpg" />';
			getHtml += '</div>';
			getHtml += '<div class="overlay-thumbnail-caption" id="overlay-thumbnail-caption-'+(i+1)+'">Image '+(i+1)+'';
			getHtml += '</div>';
			getHtml += '<div class="overlay-thumbnail-show-image" onClick="showThatImage('+(i+1)+')">Show That Image</div>';
			getHtml += '</div>';
			newDiv++;
			}
		}
	getHtml += '</div></div></div>';
	if(jQuery(".original-image").length > 10)
		{
		getHtml += '<div class="over-thumbnail-left-right-arrow"><div id="overlay-thumbnail-right" onClick="OverlayThumbnailArrows('+"'right'"+');"></div><div id="overlay-thumbnail-left" style="display:none" onClick="OverlayThumbnailArrows('+"'left'"+');" ></div></div>';
		}
	getHtml += '</div>';
	jQuery(".slider-wraper").append(getHtml);
	jQuery(".overlay-content-wraped").css({ "width": width+"px" });
	}
	
var rightOverlayArrowClicks = 10;
var leftOverlayArrowClicks = 10;
var overMoverLeft = 0;

function OverlayThumbnailArrows(overlaythumbnailAction)
	{
	if(overlaythumbnailAction == "right")
		{
		overMoverLeft = overMoverLeft + 864;
		rightOverlayArrowClicks = rightOverlayArrowClicks + 10;
		leftOverlayArrowClicks = leftOverlayArrowClicks - 10;
		}
	else
		{
		overMoverLeft = overMoverLeft - 864;
		leftOverlayArrowClicks = leftOverlayArrowClicks + 10;
		rightOverlayArrowClicks = rightOverlayArrowClicks - 10;
		}
	var get = overMoverLeft;
	get += "px";
	$('.overlay-content-wraped').animate({ right : get });
	if(leftOverlayArrowClicks == 10)
		{
		jQuery("#overlay-thumbnail-left").css({ "display":"none" });
		}
	else
		{
		jQuery("#overlay-thumbnail-left").css({ "display":"block" });
		}
	if(rightOverlayArrowClicks > (jQuery(".original-image").length))
		{
		jQuery("#overlay-thumbnail-right").css({ "display":"none" });
		}
	else
		{
		jQuery("#overlay-thumbnail-right").css({ "display":"block" });
		}
	}
function previoisFullWidthImage()
	{
	curentImage = curentImage - 1;
	if(curentImage == 0)
		{
		curentImage = jQuery(".original-image").length-1;
		}
	jQuery(".slider-full-screen-full-width-img").html('<img src="slider-full-pics/'+curentImage+'.jpg" />');
	}
function nextFullWidthImage()
	{
	curentImage[0]++;
	if(curentImage[0] == (jQuery(".original-image").length-1))
		{
		curentImage[0] = 1;
		}
	jQuery(".slider-full-screen-full-width-img").html('<img src="slider-full-pics/'+curentImage[0]+'.jpg" />');
	}
function closeOverlay()	
	{
	jQuery("#slider-thumbnails-overlay").remove();
	}
function attachNextPreviousOverlayButton()
	{
	
	}
function disablFullScreenOverlay()
	{
	jQuery(".slider-full-screen-image").remove();
	}
function disablPause()
	{
	jQuery(".slider-wraper-play-pauser").html('<div id="slider-wraper-play" onClick="enablePause();" title="Pause SlideShow"></div>');
	startTime();
	}
function enablePause()
	{
	window.clearInterval(timerID);
	timer = "stop";
	jQuery(".slider-wraper-play-pauser").html('<div id="slider-wraper-pauser" onClick="disablPause();" title="Start SlideShow"></div>');
	}