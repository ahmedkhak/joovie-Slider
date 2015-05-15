<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="js/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="js/slider.js"></script>
</head>
<body>
<div class="site-wraper">
	<div class="site-wraper-content">
		<div class="slider-wraper">
			<div class="slider-wraper-content">
				<div class="slider-original-image ">
					<div class="left-nav-arrow slider-arrows" id="left-nav" onClick="previousImage();" title="Previous Image"></div>
					<div class="slider-center-operation">	
						<div class="slider-wraper-album-view" title="Click to view all pics"></div>
						<div class="slider-wraper-play-pauser">
							<div id="slider-wraper-play" onClick="enablePause();" title="Pause SlideShow"></div>
						</div>
						<div class="slider-wraper-full-screen" title="Click to Full size Image"></div>
					</div>
					<div class="original-image-wraper">
						<div class="original-image">
							<img src="slider-full-pics/1.jpg" />
							<div class="slider-caption">Image 1</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/2.jpg" />
							<div class="slider-caption">Image 2</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/3.jpg" />
							<div class="slider-caption">Image 3</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/4.jpg" />
							<div class="slider-caption">Image 4</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/5.jpg" />
							<div class="slider-caption">Image 5</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/6.jpg" />
							<div class="slider-caption">Image 6</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/7.jpg" />
							<div class="slider-caption">Image 7</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/8.jpg" />
							<div class="slider-caption">Image 8</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/9.jpg" />
							<div class="slider-caption">Image 9</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/10.jpg" />
							<div class="slider-caption">Image 10</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/11.jpg" />
							<div class="slider-caption">Image 11</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/12.jpg" />
							<div class="slider-caption">Image 12</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/13.jpg" />
							<div class="slider-caption">Image 13</div>
						</div>
						<div class="original-image">
							<img src="slider-full-pics/14.jpg" />
							<div class="slider-caption">Image 14</div>
						</div>
					</div>
					<div class="slider-slide-move-left-wraper"></div>
					<div class="right-nav-arrow slider-arrows" id="right-nav" onClick="nextImage(-1);" title="Next Image"></div>
				</div>
				<div class="thumbnail-images-wraper" id="show-thumbnail-images"></div>
			</div>
		</div>
	</div>
</div>
</body>
</html>