<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <?php wp_head(); ?> 
  </head>
  <body>
  <!-- this is the top level nav bar -->

  <h1 class="hello">Hello world!</h1>
  
  <div id='nav-bar' >
  <?php
wp_nav_menu( array( 
    'theme_location' => 'my-custom-menu', 
    'container_class' => 'custom-menu-class',
) ); 
?> 
 
<div class="kids-mega">
 <?php
wp_nav_menu( array( 
    'theme_location' => 'kids-nav-menu', 
    'container_class' => 'kids-mega-menu-class',
) ); 
?> 
</div>

<div class="womens-mega">
 <?php
wp_nav_menu( array( 
    'theme_location' => 'womens-nav-menu', 
    'container_class' => 'womens-mega-menu-class',
) ); 
?> 
</div>

<div class="mens-mega">
 <?php
wp_nav_menu( array( 
    'theme_location' => 'mens-nav-menu', 
    'container_class' => 'mens-mega-menu-class',
) ); 
?> 
</div>

<div class="new-mega">
 <?php
wp_nav_menu( array( 
    'theme_location' => 'new-nav-menu', 
    'container_class' => 'new-mega-menu-class',
) ); 
?> 
</div>

</div>
<?php
   wp_footer(); 
?>
  </body>
</html>