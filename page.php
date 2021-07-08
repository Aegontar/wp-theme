<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php wp_head(); ?> 
</head>
<body>
<h1>This is a page</h1>
<h1><?php echo $pagename ?></h1>
<p> <?php 
$current_page = get_queried_object();
$content      = apply_filters( 'the_content', $current_page->post_content );
echo $content; ?>

</P>
<h1> <?php echo get_the_ID() ?> </h1>

<div class="my-menu"> <?php
wp_nav_menu( array( 
    'theme_location' => 'my-custom-menu', 
    'container_class' => 'custom-menu-class',
) ); 
?>
    
</body>
</html>
